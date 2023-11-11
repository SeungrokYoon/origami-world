"use client";

import signin from "@/firebase/auth/sign-in";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = async (event: FormEvent) => {
    event.preventDefault();

    const { result, error } = await signin(email, password);

    if (error) {
      console.log(error);
      return;
    }

    console.log(result);
    router.push("/workspace");
  };

  return (
    <div>
      Signin page
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
