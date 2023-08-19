"use client"
import { useState } from "react";
import NavbarAdmin from "../../components/NavbarAdmin";
import Footer from "@/components/Footer";


import { collection, addDoc, getDocs, where, query, deleteDoc, updateDoc, doc, Firestore, } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from '../../../lib/firebase/page'


import { useRouter } from 'next/navigation';
import { useEffect, useContext } from "react";
import ProtectedRoute from "../../components/auth";


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';


import React from 'react'
import dynamic from "next/dynamic";




export default function TambahProduk() {


  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [detail, setDetail] = useState('');
  const [loadingg, setLoading] = useState(false)


  const [imageFile, setImageFile] = useState<File>();
  const [downloadURL, setDownloadURL] = useState('')

  const Loading = () => {
    return (
      <p>Loading</p>
    )
  }
  const handleSelectedFile = (filee: any) => {
    const files = filee.files
    if (files && files[0].size < 10000000) {
      setImageFile(files[0])
      try {
        console.log(files)
        if (files) {
          setLoading(true)
          const name = files[0].name
          const storageRef = ref(storage, `assets/${name}`)
          const uploadTask = uploadBytesResumable(storageRef, files[0])

          uploadTask.on(
            'state_changed',
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              console.log(progress)
            },
            (error) => {
              alert(error.message)
            },
            () => {

              getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                //url is download url of file
                console.log(url)
                setDownloadURL(url)
                setLoading(false)
              })
            },
          )



        } else {
          alert("error")
        }




      } catch (error) {
        console.error("An error occured", error);
      }

      console.log(files[0])
    } else {
      alert('File size to large')
    }
  }

  // const onSubmit = () => {

  //   // const name = imageFile.name
  //   // const storageRef = ref(storage, `image/${name}`)
  //   // const uploadTask = uploadBytesResumable(storageRef, imageFile)

  //   // uploadTask.on(
  //   //   'state_changed',
  //   //   (snapshot) => {
  //   //     const progress =
  //   //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //   //     console.log(progress)
  //   //   },
  //   //   (error) => {
  //   //     alert(error.message)
  //   //   },
  //   //   () => {
  //   //     console.log("success"),
  //   //       getDownloadURL(uploadTask.snapshot.ref).then((url) => {
  //   //         //url is download url of file
  //   //         setDownloadURL(url)
  //   //       })
  //   //   },
  //   // )
  //   addDoc(collection(db, "produk"), {
  //     namaProd: nama,
  //     harga: harga,
  //     detail: detail,
  //     assets: downloadURL

  //   })

  // }

  const [value, setValue] = useState('');
  const addData = async (e: any) => {

    e.preventDefault()
    const docRef = await addDoc(collection(db, "produk"), {
      namaProd: nama,
      harga: harga,
      detail: value,
      assets: downloadURL
    })

    alert("success")


  };
  return (
    <>

      <NavbarAdmin />
      <div className="bg-[#3C2A21] md:w-[500px] sm:w-[500px] w-[370px] mx-auto rounded-xl">
        <h1 className="text-center md:text-3xl sm:text-xl text-lg text-white pt-10 font-bold">Tambah Menu</h1>
        <div className="p-10 md:p-20 sm:p-20">
          <form onSubmit={(e) => addData(e)} encType="multipart/form-data">
            <div>
              <label htmlFor="username" className="md:text-base sm:text-sm text-xs">Nama Menu : </label>
              <br />
              <input
                required
                placeholder="masukan nama produk..."
                id="username"
                name="username"
                type="text"
                className="text-black my-5"
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="harga" className="md:text-base sm:text-sm text-xs">Harga :</label>
              <br />
              <input
                required
                placeholder="masukan harga produk..."
                id="harga"
                name="harga"
                type="text"
                className="text-black my-5"
                onChange={(e) => setHarga(e.target.value)}
              />
            </div>
            <label htmlFor="w3review" className="md:text-base sm:text-sm text-xs">Detail :</label>
            <br />
            <br />
            <ReactQuill theme="snow" value={value} onChange={setValue} />

            <br />
            <label htmlFor="file" className="md:text-base sm:text-sm text-xs">File 3D :</label>
            <br />
            <br />
            <p className="text-xs text-yellow-200 mb-2">*Tunggu input file 3D selesai sebelum submit</p>

            {loadingg && <Loading />}
            <input id="file" name="file" type="file" required onChange={(files) => handleSelectedFile(files.target)} />
            <div className="flex items-center mt-3">
              <button type="submit" className="bg-neutral-400 px-4 py-2 rounded-lg mx-auto mt-6 hover:bg-neutral-600 md:text-base sm:text-sm text-xs"  >
                Tambah Menu
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-24"></div>
      <Footer />

    </>
  )
}