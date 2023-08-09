"use client"
import { useRouter } from "next/navigation";


export default function Layout({
    children
  }) {
    const { push } = useRouter();
     const login = true;
    return (
      <>
      {login?children:push("/")}
      </>
    )
  }