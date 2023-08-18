import Image from "next/image";
import React from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '../../lib/firebase/page'
import { useRouter } from "next/navigation";
import { Navbar } from "flowbite-react";


export default function NavbarAdmin() {
  const { push } = useRouter();
  const logout = async () => {
    signOut(auth)
    localStorage.removeItem("auth")
    localStorage.clear()
    push("/")




  };


  return (
    <Navbar
      fluid
      rounded
      className="border-gray-200 bg-transparent"
    >
      <Navbar.Brand

        href="/"
      >
        <Image src="/assets/logo1.png" width={50} height={50} className="mr-3" alt="Logo" />

      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>

        <Navbar.Link href="/produkAdmin" className='font-bold block py-2 pl-3 pr-4 text-[#FFC26F] rounded bg-transparent md:border-0 md:hover:text-white md:p-0  dark:hover:text-white'>
          Menu
        </Navbar.Link>
        <Navbar.Link href="/promoAdmin" className='font-bold block py-2 pl-3 pr-4 text-[#FFC26F] rounded bg-transparent md:border-0 md:hover:text-white md:p-0  dark:hover:text-white'>
          Promo
        </Navbar.Link>
        <Navbar.Link href="https://analytics.google.com/analytics/web/#/p402519410/realtime/overview?params=_u..nav%3Dmaui&collectionId=app" className='font-bold block py-2 pl-3 pr-4 text-[#FFC26F] rounded bg-transparent md:border-0 md:hover:text-white md:p-0  dark:hover:text-white'>
          View Analitycs
        </Navbar.Link>
        <Navbar.Link href="#" onClick={logout} className='font-bold block py-2 pl-3 pr-4 text-[#FFC26F] rounded bg-transparent md:border-0 md:hover:text-white md:p-0  dark:hover:text-white'>
          Logout
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    // <nav className=" border-gray-200 bg-transparent">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //     <a className="flex items-center">
    //       <Image
    //         src="/assets/logo1.png"
    //         width={50}
    //         height={50}
    //         className="mr-3"
    //         alt="Logo"
    //       />
    //     </a>

    //     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    //       <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
    //         <li>
    //           <a
    //             href="/produkAdmin"
    //             className="font-bold block py-2 pl-3 pr-4 text-gray-900 rounded bg-transparent md:border-0 md:hover:text-white md:p-0 dark:hover:text-white"
    //           >
    //             Produk
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/promoAdmin"

    //             className="font-bold block py-2 pl-3 pr-4 text-gray-900 rounded bg-transparent md:border-0 md:hover:text-white md:p-0  dark:hover:text-white"
    //           >
    //             Promo
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //            onClick={logout}

    //             className=" cursor-pointer font-bold block py-2 pl-3 pr-4 text-gray-900 rounded bg-transparent md:border-0 md:hover:text-white md:p-0  dark:hover:text-white"
    //           >
    //             Logout
    //           </a>
    //         </li>


    //       </ul>

    //     </div>
    //   </div>
    // </nav>
  );
}
