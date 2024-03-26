"use client";
import { Suspense } from "react";
import ResetPasswordLoader from "@auth/reset-password-loader";
import ResetPasswordForm from "./reset-password-form";
export default function Page() {
    return (
        <>
            <Suspense fallback={<ResetPasswordLoader />}>
                <ResetPasswordForm />
            </Suspense>
        </>
    );
}
