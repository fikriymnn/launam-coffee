"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Admin() {
  const { push } = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit");
    console.log(username);
    console.log(password);

    push("/menu");
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
              <label for="username">Username :</label>
              <input
                id="username"
                name="username"
                type="text"
                className="text-black my-5"
                onChange={(e) => setUsername(e.target.value)}
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
