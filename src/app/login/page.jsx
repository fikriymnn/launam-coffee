"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../lib/firebase/page"
import { useAuth } from "@/components/authService";
import Footer from "@/components/Footer";



export default function Admin() {
  const { push } = useRouter();

  const { logIn } = useAuth();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    // await logIn(email, password);
    // router.push("/produkAdmin");
    // await logIn(email, password);
    //   router.push("/produkAdmin");
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log(userCredential.user);
      localStorage.setItem('auth', "22gg12js");
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
      
      <br/>
      <div className="bg-[#3C2A21] w-[500px] mx-auto rounded-xl mt-20 mb-20">
      <h1 className="text-3xl font-bold text-center pt-10 mb-5 text-white">
        Login
      </h1>
        <div className="pb-20 pl-20 pr-20">
          <form onSubmit={onSubmit} className="">
            <div>
              <p >Email :</p>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Masukan Email"
                className="text-black my-5 w-80"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <p>Password :</p>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Masukan Password"
                className="text-black my-5  w-80"
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
      <Footer/>
    </>
  );
}
