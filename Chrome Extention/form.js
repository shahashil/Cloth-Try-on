// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import { auth, firestore, firebase } from "./firebase";
// import { auth, firestore, firebase } from "./firebase";
// import { auth, firestore, firebase } from "./firebase";

// const { documentId } = require("@firebase/firestore");

// import firebase from 'firebase/compat/app';

let curr_status = false;

function check(){

chrome.cookies.get({"url": "https://www.amazon.in", "name": "SignedIn"}, 

function(cookie) {
	if (JSON.stringify(cookie) == "null"){	
		
		
		
		curr_status = false;
		document.getElementById('status').innerHTML = 'Disabled';
			var x = document.getElementById("signIn");
			var y = document.getElementById("email");
			var z = document.getElementById("password");
			var s = document.getElementById("signOut");
			s.style.display = "none";
			x.style.display = "block";
			y.style.display = "block";
			z.style.display = "block";
		} 
else{




	function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}	
	setCookie('Walter','White',1);
		
		

  
	curr_status = true;
	document.getElementById('status').innerHTML = 'Enabled';
	var x = document.getElementById("signIn");
	var y = document.getElementById("email");
	var z = document.getElementById("password");
	var s = document.getElementById("signOut");
    s.style.display = "block";
	x.style.display = "none";
    y.style.display = "none";
	z.style.display = "none";
	
}
})}
check();













var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
// const firestore = firebase.firestore();

//signup function
function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  //
  promise.catch((e) => alert(e.message));
  console.log("Sigup done");
  // alert("SignUp Successfully");
}

//signIN function			//Now Enable 
function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  auth.signInWithEmailAndPassword(email.value, password.value);
  // document.getElementById("idauth").innerHTML =

  // promise.catch((e) => alert(e.message));
  
  // v = auth.currentUser.uid;
  console.log(auth.currentUser.uid);
  chrome.cookies.set({"url": "https://www.amazon.in", "name": "SignedIn", "value":auth.currentUser.uid,"expirationDate": (new Date().getTime()/1000) + 300*300},   // 3600*24*10 10 Days
  function (cookie) {});
  check();

/*  var x = document.getElementById("url");
  var y = document.getElementById("submiturl");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
  };
*/
 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  
  // window.location.href = "index2.html";
}
document.addEventListener("DOMContentLoaded", function () {
  var urlbtn = document.getElementById("submiturl");

  // var link = document.getElementById('link');
  // onClick's logic below:
  //urlbtn.addEventListener("click", handleamz);
  urlbtn.addEventListener("click",
  
  
  async function() {
    const location = window.location.hostname;
    const settings = {
        method: 'POST'
    };
    try {
		
		
        const fetchResponse = await fetch('http://127.0.0.1:5000/demo', settings);
        const data = await fetchResponse.text();
		 window.alert(data)
		 
		 var newURL = "http://www.youtube.com/watch?v=oHg5SJYRHA0";		 
		//chrome.tabs.create({ url: newURL });
		
    } catch (e) {
        window.alert();
    }    

}

  
  
  );
});
function handleamz() {
  var link = document.getElementById("url").value;
  console.log(link);
  document.getElementById("urlsubmitted").innerHTML = link;
  document.getElementById("getuserid").innerHTML = auth.currentUser.uid;
}

//signOut

function signOut() {
  auth.signOut();
  console.log("SignOut Successfully from System");
  var x = document.getElementById("url");
  var y = document.getElementById("submiturl");
	chrome.cookies.set({"url": "https://www.amazon.in", "name": "SignedIn", "value":"Enabled","expirationDate": (new Date().getTime()/1000)-2},   // 3600*24*10 10 Days
	  function (cookie) {});
  check();
  
location.reload()
}

document.addEventListener("DOMContentLoaded", function () {
  var Si = document.getElementById("signIn");

  // var link = document.getElementById('link');
  // onClick's logic below:
  Si.addEventListener("click", signIn);
});
// function onchangetxt(){
//   const c  = document.getElementById.value;
//   c
// }
document.addEventListener("DOMContentLoaded", function () {
  var So = document.getElementById("signOut");
  
  // var link = document.getElementById('link');
  // onClick's logic below:
  So.addEventListener("click", signOut);
});

document.addEventListener("DOMContentLoaded", function () {
  var Sp = document.getElementById("signUp");

  // var link = document.getElementById('link');
  // onClick's logic below:
  Sp.addEventListener("click", signUp);
});


////////////////////////////////////////////////////////////////////////////////////////

