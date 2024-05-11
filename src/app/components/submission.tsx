import { CircleCheckBig } from "lucide-react";
import { useEffect, useState } from "react";

export default function Submission() {
  const [state, setState] = useState({ succeeded: false });
  const [emailError, setEmailError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "b2ea624c-df5f-4345-a28c-a28c61754f49");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      setState({ succeeded: true });
    }
  }

  function validateEmail(email: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function handleEmailChange(event: { target: { value: any } }) {
    const email = event.target.value;
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  }

  useEffect(() => {
    const form = document.getElementById("form") as HTMLFormElement;
    if (form) {
      form.reset();
    }
  }, []);

  if (state.succeeded) {
    return (
      <div className="flex justify-center items-center ">
        <h1 className="text-4xl font-bold text-green-400 ">
          Thank you for your message ✅
        </h1>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="block mb-2 text-yellow-400">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email address"
          className={`w-full px-4 py-2 border rounded-md mb-4 text-black ${
            emailError ? "border-red-500" : ""
          }`}
          onChange={handleEmailChange}
          required
        />
        {emailError && <p className="text-red-500">{emailError}</p>}

        <label htmlFor="phone" className="block mb-2 text-yellow-400">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          className="w-full px-4 py-2 border rounded-md mb-4 text-black"
        />

        <label htmlFor="message" className="block mb-2 text-yellow-400">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message..."
          rows={6}
          className="w-full px-4 py-2 border rounded-md mb-4 text-black"
        />

        <button
          type="submit"
          className="bg-yellow-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-yellow-500"
        >
          Submit
        </button>
      </form>
    </>
  );
}
