import UserInfoTitle from "./user-info-title";
import FormRow from "@auth/form-row";
export default function UserPassword({ user }: { user: any }) {
    const password = user?.password;
    return (
        <div className='grid gap-4 bg-analyticsBg px-8 py-8 border-t-2 border-t-purple border-r-2 border-r-purple rounded-xl shadow-md w-full'>
            <UserInfoTitle title='Password'>
                <span className='text-purple text-sm underline'>
                    Change Password
                </span>
            </UserInfoTitle>
            <div className='grid md:grid-cols-2 w-full'>
                <form className='w-full'>
                    <FormRow
                        labelText='password'
                        type='password'
                        name='user-password'
                        placeholder=''
                        value={password}
                        disabled={true}
                    />
                </form>
            </div>
        </div>
    );
}
