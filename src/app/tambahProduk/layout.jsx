"use client"
import { useRouter } from "next/navigation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function Layout({
    children
  }) {
    const check =  typeof window !== "undefined" ? window.localStorage.getItem('auth') : false
     const login = true;
    
     
    return (
      <>
      {check=="22gg12js"?children:push({pathname:"/"})}
      </>
    )
  }