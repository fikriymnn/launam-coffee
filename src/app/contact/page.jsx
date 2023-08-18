import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { IframeHTMLAttributes } from "react";
import React from "react";
import Iframe from "react-iframe";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <Navbar />
      <blockquote class="md:text-[40px] sm:text-[30px] text-[20px] font-bold text-center text-[#FFC26F]">
        <p>Kontak</p>
        <hr className="h-1 w-2/5 md:mb-16 sm:mb-12 mb-10 md:mt-6 sm:mt-4 mt-2 bg-white m-auto item-center border-white" />
      </blockquote>
      <div class="md:text-[20px] sm:text-sm text-xs text-center text-[#FFC26F] font-bold flex mt-10 mb-16">
        <div className="w-5/6 m-auto">
          <p className="text-center m-auto">
            Jika ingin order kunjungi alamat yang tertera dibawah ini atau hubungi via sosial media kami.
          </p>
        </div>
      </div>
      <div className="md:grid sm:grid md:grid-cols-2 sm:grid-cols-1 grid grid-cols-1 gap-2 ">
        <div className="md:px-6 sm:px-6 px-0 sm:mx-auto  mx-auto">
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7921.514686891432!2d107.5722568!3d-6.9195864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e594afa5075b%3A0x8f922e9dae80264d!2sBarista%20Panggilan%20Bandung%20-%20LAUNAM%20COFFEE!5e0!3m2!1sid!2sid!4v1690445919955!5m2!1sid!2sid"
            width="400"
            height="400"
          />
        </div>
        <div className="sm:mx-auto sm:pt-9 md:pt-0 pt-5 ">
          <form className=" px-9">
            <a href="https://instagram.com/launam_coffee/">
              <div class="mb-6 px-6 mx-auto ">
                <label
                  for="Nama"
                  class="block mb-2  md:text-xl sm:text-lg text-base font-bold text-[#FFC26F] dark:text-white mx-auto "
                >
                  Instagram
                </label>
                <div className="flex ">
                  <Image src={'/assets/instagram.png'} width={45} height={45} alt="l" />
                  <p className="ml-5 font-bold md:text-lg sm:text-base text-sm text-[#FFC26F] my-auto">@launamcofee</p>
                </div>
              </div>
            </a>
            <a href="mailto:launamcoffee00@gmail.com">
              <div class="mb-6 px-6 mx-auto">
                <label
                  for="email"
                  class="block mb-2 md:text-xl sm:text-lg text-base font-bold text-[#FFC26F] dark:text-white"
                >
                  Email
                </label>
                <div className="flex">
                  <Image src={'/assets/email.png'} width={45} height={45} alt="l" />
                  <p className="ml-5 font-bold md:text-lg sm:text-base text-sm text-[#FFC26F] my-auto">launamcofee@gmail.com</p>
                </div>
              </div>
            </a>
            <a href="https://wa.me/628117709933?text=Halo Admin, Bagaimana cara order kopi di launam coffee?">
              <div class="mb-6 px-6 mx-auto">
                <label
                  for="NoTelp"
                  class="block mb-2  md:text-xl sm:text-lg text-base font-bold text-[#FFC26F] dark:text-white"
                >
                  WhatsApp
                </label>
                <div className="flex">
                  <Image src={'/assets/wa.png'} width={45} height={45} alt="l" />
                  <p className="ml-5 font-bold md:text-lg sm:text-base text-sm text-[#FFC26F] my-auto">Hubungi kami di WhatsApp</p>
                </div>
              </div>
            </a>


          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;