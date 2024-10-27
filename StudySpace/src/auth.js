import {auth} from "./firebase";
import {GoogleAuthProvider} from "firebase/auth";













export const SignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInwithPopup(auth, provider);
    return result
};