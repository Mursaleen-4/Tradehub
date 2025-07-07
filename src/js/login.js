// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2mgisUbL-7nOdGaeLDOgGYkTbFaMeouM",
    authDomain: "tradehub-5e948.firebaseapp.com",
    projectId: "tradehub-5e948",
    storageBucket: "tradehub-5e948.firebasestorage.app",
    messagingSenderId: "883022127370",
    appId: "1:883022127370:web:93c0106f261b8c4d7b1af3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  
  
  // Login Function
  function Login() {
    const email = document.getElementById("Loginemail").value;
    const password = document.getElementById("Loginpassword").value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'Welcome back!',
          confirmButtonColor: '#3085d6'
        }).then(() => {
          window.location.href = "./home.html";
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid email or password. Please try again.',
          confirmButtonColor: '#d33'
        });
      });
  }
  
  // Sign-Up Function
  function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        Swal.fire({
          icon: 'success',
          title: 'Account Created',
          text: 'Your account has been created successfully!',
          confirmButtonColor: '#3085d6'
        }).then(() => {
          window.location.href = "./index.html";
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Sign-Up Failed',
          text: error.message,
          confirmButtonColor: '#d33'
        });
      });
  }
  
  // Ensure the user is logged in on the Todo page
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("User is authenticated");
    } else {
      if (window.location.pathname.includes("home.html")) {
        window.location.href = "./index.html";
      }
    }
  });
  