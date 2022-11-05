import requests
import operations as op
from flask import Flask,request
import ast
import ibm_boto3
from ibm_botocore.client import Config, ClientError
from ibmcloudant.cloudant_v1 import CloudantV1,Document
import os
import time
from flask_cors import CORS
import warnings

import train_resnet
warnings.filterwarnings('ignore')

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Hi"


@app.route('/tryon',methods=['POST'])
def tryon():
    try:
        data = request.json
        string = ast.literal_eval(str(data))
        uid = string['uid']
        url = string['url']
        img_name = op.get_name(url)
        op.download_link_img(url,'virtual-try-on-photo.png')    
        op.upload_bucket_obj('virtual-try-on','virtual-try-on-photo.png',img_name)
        op.post_document_virtual_tryon(img_name, uid,'virtual-try-on')
		img = get_tryon(uid,url)
        op.delete_link_img('virtual-try-on-photo.png')
        return img
    except:
        return "Error: "


if __name__ == '__main__':
   app.run()
