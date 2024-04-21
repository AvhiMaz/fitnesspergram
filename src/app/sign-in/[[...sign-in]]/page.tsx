import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center mt-20 lg:mt-0">
      <SignIn path="/sign-in" />
    </div>
  );
}
