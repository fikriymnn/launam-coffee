"use client"
import { useRouter } from "next/navigation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { redirect } from 'next/navigation'

export default function Layout({
    children
  }) {
   
    const check =  typeof window !== "undefined" ? window.localStorage.getItem('auth') : false
    const { push } = useRouter();
     const login = true;
    
     
    return (
      <>
      {check=="22gg12js"?children:redirect("/")}
      </>
    )
  }