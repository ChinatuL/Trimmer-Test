import { initializeApp, getApps, cert } from "firebase-admin/app";

const firebaseAdminConfig = {
    credential: cert({
        projectId: "trimmer-test2",
        clientEmail:
            "firebase-adminsdk-21ge4@trimmer-test2.iam.gserviceaccount.com",
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
    }),
    storageBucket: "trimmer-test2.appspot.com",
    databaseURL: "https://trimmer-test2-default-rtdb.firebaseio.com",
};

export function customInitApp() {
    if (getApps().length <= 0) {
        initializeApp(firebaseAdminConfig);
    }
}
