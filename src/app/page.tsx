import Logo from './components/Logo'
import app from '../../firebase/firebase'

export default function Home() {
  const signInWithGoogle = async () => {

    // Google Signin
    const provider = new app.auth.GoogleAuthProvider();
    try {
      await app.auth().signInWithPopup(provider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Logo />
    </main>
  )
}
