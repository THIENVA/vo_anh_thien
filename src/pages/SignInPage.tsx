import { SignIn } from "@clerk/clerk-react";
import Block from "../Block";

function SignInPage() {
  return (
    <div className="min-h-screen bg-[#fff] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <Block>
          <h1 className="text-2xl font-bold text-[#e7870a] mb-6 text-center">
            Đăng nhập
          </h1>
          <div className="flex justify-center">
            <SignIn routing="path" path="/signin" afterSignInUrl="/dashboard" />
          </div>
        </Block>
      </div>
    </div>
  );
}

export default SignInPage;
