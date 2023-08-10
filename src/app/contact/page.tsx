"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { IframeHTMLAttributes } from "react";
import React from "react";
import Iframe from "react-iframe";
import { Resend } from 'resend';
import { WaitlistEmail } from "../../components/template_email";




const Contact = () => {

  const resend = new Resend('re_123456789');
  const sendEmail = async () => {



    resend.sendEmail({
      text: "mkmklmlk",
      from: "bu@resend.dev",
      to: "acepwahyu001@gmail.com",
      subject: "Waitlist",
      react: WaitlistEmail({ name: "Bu" }),
    });


    alert("success")






  };






  return (
    <>
      <Navbar />
      <blockquote className="md:text-[40px] sm:text-[30px] text-[20px] font-bold text-center text-[#FFC26F]">
        <p>Kontak</p>
        <hr className="h-1 w-2/5 md:mb-16 sm:mb-12 mb-10 md:mt-6 sm:mt-4 mt-2 bg-white m-auto item-center border-white" />
      </blockquote>
      <div className="md:grid sm:grid md:grid-cols-2 sm:grid-cols-1 grid grid-cols-1 gap-2 ">
        <div className="px-6 sm:mx-auto  mx-auto">
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7921.514686891432!2d107.5722568!3d-6.9195864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e594afa5075b%3A0x8f922e9dae80264d!2sBarista%20Panggilan%20Bandung%20-%20LAUNAM%20COFFEE!5e0!3m2!1sid!2sid!4v1690445919955!5m2!1sid!2sid"
            width="400"
            height="400" url={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7921.514686891432!2d107.5722568!3d-6.9195864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e594afa5075b%3A0x8f922e9dae80264d!2sBarista%20Panggilan%20Bandung%20-%20LAUNAM%20COFFEE!5e0!3m2!1sid!2sid!4v1690445919955!5m2!1sid!2sid"} />
        </div>
        <div className="sm:mx-auto sm:pt-9 md:pt-0 pt-0 ">
          <form onSubmit={sendEmail} className="mx-auto px-9">
            <div className="mb-6 px-6 mx-auto">
              <label
                htmlFor="Nama"
                className="block mb-2 text-sm font-medium text-[#FFC26F] dark:text-white mx-auto "
              >
                Nama
              </label>
              <input
                type="text"
                id="Nama"
                className="bg-gray-50 border border-gray-300  text-black text-sm rounded-lg  block md:w-[500px]  p-2.5 sm:w-[500px] w-[350px] "
                placeholder="Masukan Nama..."
                required
              />
            </div>
            <div className="mb-6 px-6 mx-auto">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-[#FFC26F] dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-[500px] w-[350px] "
                required
                placeholder="Masukan Email..."
              />
            </div>
            <div className="mb-6 px-6 mx-auto">
              <label
                htmlFor="NoTelp"
                className="block mb-2 text-sm font-medium text-[#FFC26F] dark:text-white"
              >
                No Telp
              </label>
              <input
                type="text"
                id="NoTelp"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-[500px] w-[350px] "
                required
                placeholder="Masukan No Telp..."
              />
            </div>
            <div className="mb-6 px-6 mx-auto">
              <label
                htmlFor="Pesan"
                className="block mb-2 text-sm font-medium text-[#FFC26F] dark:text-white"
              >
                Pesan
              </label>
              <input
                type="text"
                id="Pesan"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-[500px] w-[350px] "
                required
                placeholder="Masukan Pesan..."
              />
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:w-full md:px-10 sm:px-5 px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-[500px] w-[350px] mx-auto mt-9 "
              >
                Submit
              </button>
            </div>


          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
