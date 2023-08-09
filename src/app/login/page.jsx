"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../lib/firebase/page"



export default function Admin() {
  const { push } = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log(userCredential.user);
      push("/produkAdmin")
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      console.log(errorCode)
    });
    e.preventDefault();
    console.log("onSubmit");
    console.log(email);
    console.log(password);

    // push("/menu");

  };
  return (
    <>
      <h1 className="text-6xl font-bold text-center mt-24 mb-24 text-[#3C2A21]">
        Login
      </h1>
      <div className="bg-[#3C2A21] w-[500px] mx-auto rounded-xl">
        <div className="p-20">
          <form onSubmit={onSubmit}>
            <div>
              <label for="email">email :</label>
              <input
                id="email"
                name="email"
                type="text"
                className="text-black my-5"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label for="password">Password :</label>
              <input
                id="password"
                name="password"
                type="password"
                className="text-black my-5"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center mt-3">
              <button className="bg-neutral-400 px-4 py-1 rounded-lg m-auto hover:bg-neutral-600">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
