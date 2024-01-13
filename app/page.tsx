import { firebaseApp } from "../lib/firebase/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Logo from "../components/Logo";
import DndList from "../components/DndList";
import "@mantine/core/styles.css";

export default function Home() {
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
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Logo />
			<DndList />
		</main>
	);
}
