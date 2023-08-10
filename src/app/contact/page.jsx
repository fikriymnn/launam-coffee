import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { IframeHTMLAttributes } from "react";
import React from "react";
import Iframe from "react-iframe";

const Contact = () => {
  return (
    <>
      <Navbar />
      <blockquote class="md:text-[40px] sm:text-[30px] text-[20px] font-bold text-center text-[#FFC26F]">
        <p>Kontak</p>
        <hr className="h-1 w-2/5 md:mb-16 sm:mb-12 mb-10 md:mt-6 sm:mt-4 mt-2 bg-white m-auto item-center border-white" />
      </blockquote>
      <div className="md:grid sm:grid md:grid-cols-2 sm:grid-cols-1 grid grid-cols-1 gap-2 ">
        <div className="px-6 sm:mx-auto  mx-auto">
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7921.514686891432!2d107.5722568!3d-6.9195864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e594afa5075b%3A0x8f922e9dae80264d!2sBarista%20Panggilan%20Bandung%20-%20LAUNAM%20COFFEE!5e0!3m2!1sid!2sid!4v1690445919955!5m2!1sid!2sid"
            width="450"
            height="400"
          />
        </div>
        <div className="sm:mx-auto sm:pt-9 md:pt-0 pt-0 ">
          <form>
            <div class="mb-6 px-6 mx-auto">
              <label
                for="Nama"
                class="block mb-2 text-sm font-medium text-[#FFC26F] dark:text-white mx-auto "
              >
                Nama
              </label>
              <input
                type="text"
                id="Nama"
                class="bg-gray-50 border border-gray-300  text-black text-sm rounded-lg  block md:w-[500px]  p-2.5 sm:w-[500px] w-[350px] "
                placeholder="Masukan Nama..."
                required
              />
            </div>
            <div class="mb-6 px-6 mx-auto">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-[#FFC26F] dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-[500px] w-[350px] "
                required
                placeholder="Masukan Email..."
              />
            </div>
            <div class="mb-6 px-6 mx-auto">
              <label
                for="NoTelp"
                class="block mb-2 text-sm font-medium text-[#FFC26F] dark:text-white"
              >
                No Telp
              </label>
              <input
                type="text"
                id="NoTelp"
                class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-[500px] w-[350px] "
                required
                placeholder="Masukan No Telp..."
              />
            </div>
            <div class="mb-6 px-6 mx-auto">
              <label
                for="Pesan"
                class="block mb-2 text-sm font-medium text-[#FFC26F] dark:text-white"
              >
                Pesan
              </label>
              <input
                type="text"
                id="Pesan"
                class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-[500px] w-[350px] "
                required
                placeholder="Masukan Pesan..."
              />
            </div>
            

            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-[500px] w-[350px]mx-auto p-6"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
