import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
export async function registerUser(email: string, password: string) {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        console.log("User Registered: ", user);
        return { success: true, user };
    } catch (error) {
        console.error("Error during registration:", error);
        return { success: false, error: error.message };
    }
}
