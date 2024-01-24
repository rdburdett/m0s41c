// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// export async function signInWithGoogle() {
//   const auth = getAuth();
//   const provider = new GoogleAuthProvider();

//   try {
//     const userCreds = await signInWithPopup(auth, provider);
//     const idToken = await userCreds.user.getIdToken();

//     const response = await fetch("/api/auth/sign-in", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ idToken }),
//     });

//     if (!response.ok) {
//       throw new Error('Response is not OK');
//     }

//     return response.json();
//   } catch (error) {
//     console.error("Error signing in with Google: ", error);
//   }
// }

// export async function signOut() {
//   const auth = getAuth();
//   const provider = new GoogleAuthProvider();

//   try {
//     await auth.signOut();

//     const response = await fetch("/api/auth/sign-out", {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const resBody = (await response.json()) as unknown as APIResponse<string>;
//     if (response.ok && resBody.success) {
//       return true;
//     } else return false;
//   } catch (error) {
//     console.error("Error signing out with Google", error);
//     return false;
//   }
// }

// // createUserWithEmailAndPassword(auth, email, password)
// // 	.then((userCredential) => {
// // 		// Signed up
// // 		const user = userCredential.user;
// // 		// ...
// // 	})
// // 	.catch((error) => {
// // 		const errorCode = error.code;
// // 		const errorMessage = error.message;
// // 		// ..
// // 	});

// // signInWithEmailAndPassword(auth, email, password)
// // 	.then((userCredential) => {
// // 		// Signed in
// // 		const user = userCredential.user;
// // 		// ...
// // 	})
// // 	.catch((error) => {
// // 		const errorCode = error.code;
// // 		const errorMessage = error.message;
// // 	});

// // onAuthStateChanged(auth, (user) => {
// // 	if (user) {
// // 		// User is signed in, see docs for a list of available properties
// // 		// https://firebase.google.com/docs/reference/js/auth.user
// // 		const uid = user.uid;
// // 		// ...
// // 	} else {
// // 		// User is signed out
// // 		// ...
// // 	}
// // });