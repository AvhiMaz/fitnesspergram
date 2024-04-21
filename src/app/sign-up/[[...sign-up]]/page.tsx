import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center mt-32 mb-20 lg:mt-0 lg:mb-0">
      <SignUp path="/sign-up" />
    </div>
  );
}
