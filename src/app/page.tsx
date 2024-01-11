import Logo from "./components/Logo";
import { firebaseApp } from "../lib/firebase/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import DndList from "./components/DndList";
import "@mantine/core/styles.css";
import type { AppProps } from "next/app";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
	/** Put your mantine theme override here */
});

export default function Home({ Component, pageProps }: AppProps) {
	const signInWithGoogle = async () => {
		const auth = getAuth(firebaseApp);
		const provider = new GoogleAuthProvider();

		try {
			await signInWithPopup(auth, provider);
		} catch (error) {
			console.error("Error signing in with Google:", error);
		}
	};

	return (
		<MantineProvider theme={theme}>
			<Component {...pageProps} />
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<Logo />
				{/* <DndList /> */}
			</main>
		</MantineProvider>
	);
	// ...
}

// export default function Home() {
//   const signInWithGoogle = async () => {

//     // Google Signin
//     const provider = new firebaseApp.auth.GoogleAuthProvider();
//     try {
//       await firebaseApp.auth().signInWithPopup(provider);
//     } catch (error) {
//       console.error('Error signing in with Google:', error);
//     }
//   }

// }
