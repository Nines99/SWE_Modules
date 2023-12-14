// import { useState } from "react";
// import { useUserContext } from "../context/UserContext";
// // import { useMyThemeContext } from "../context/MyThemeContext";

// function LoginForm() {
//   // input state values always need to be strings - empty initially
//   const [userEmail, setUserEmail] = useState("");
//   const [userPassword, setUserPassword] = useState("");
//   const [userName, setUserName] = useState("");

//   // new state value for showing submission messages to user
//   const [submitResult, setSubmitResult] = useState('');

//   // tracks number of login attempts and boolean if login successful
//   const [loginAttempts, setLoginAttempts] = useState(0);
//   const { currentUser, handleUpdateUser } = useUserContext();

//   // const {theme} = useMyThemeContext();

//   const loginOK = currentUser.email; // if there is an email associated with the current user, we know the login worked

//   const handleSubmit = (e) => {
//     e.preventDefault(); // prevent page reloading on form submit

//     // add some password validation
//     if (userPassword.length < 5) {
//       setSubmitResult("Password must be at least 5 characters long");
//       setLoginAttempts(loginAttempts + 1)
//     } else if (userEmail.length < 8) {
//         setSubmitResult("Email address must be at least 8 characters long");      
//         setLoginAttempts(loginAttempts + 1)
//     } else if (userPassword === userEmail) {
//       setSubmitResult("Password must not match email address");
//       setLoginAttempts(loginAttempts + 1)
//     } else {
//       setSubmitResult("Successful login.");
//       handleUpdateUser({name: userName, email: userEmail, password: userPassword}); // set current user object based on successful login form details
//     }
//   };  

//   // conditional return - displays different markup from the component if the condition is true
//   if (loginAttempts >= 5) return <p>Go away hackers, attempts exceeded</p>;
//   if (loginOK) return (
//     <><p>{submitResult}</p><button onClick={() => handleUpdateUser({})}>Log Out</button></> // reset the current user back to an empty object
//   );

//   return (
//     <div className="LoginForm componentBox" style={{background: theme.background, color: theme.foreground}}>
//       <form onSubmit={handleSubmit}>
//       <div className="formRow">
//             <label>
//             Name:
//             <input
//                 type="text"
//                 value={userName}
//                 name="userName"
//                 onChange={(e) => setUserName(e.target.value)}
//             />
//             </label>
//         </div>        
//         <div className="formRow">
//             <label>
//             Email Address:
//             {/* Controlled form element needs both value and onChange.
//         onChange handler uses event param e to access target value.
//         Whenever user types, new value is stored in state. */}
//             <input
//                 type="email"
//                 value={userEmail}
//                 name="userEmail"
//                 onChange={(e) => { console.log(e.target.value); setUserEmail(e.target.value); }}
//             />
//             </label>
//         </div>
//         <div className="formRow">
//             <label>
//             Password:
//             <input
//                 type="password"
//                 value={userPassword}
//                 name="password"
//                 onChange={(e) => setUserPassword(e.target.value)}
//             />
//             </label>
//         </div>

//         <button>Log In</button>
//         <p>{submitResult}</p>        
//       </form> 
//     </div>
//   );
// }

// // try removing the onChange prop and typing in a field
// export default LoginForm;
