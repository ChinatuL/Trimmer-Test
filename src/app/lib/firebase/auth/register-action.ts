import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase-config";
export async function registerUser(
    email: string,
    password: string,
    fullName: string
) {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        // update display Name
        await updateProfile(user, {
            displayName: fullName,
        });
        console.log("User Registered: ", user);
        return { success: true, user };
    } catch (error) {
        console.error("Error during registration:", error);
        return { success: false, error: error.message };
    }
}
