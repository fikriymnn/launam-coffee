"use client"
import { useState } from "react";
import NavbarAdmin from "../../components/NavbarAdmin";
import Footer from "@/components/Footer";


import { collection, addDoc, getDocs, where, query, deleteDoc, updateDoc, doc, Firestore, } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from '../../../lib/firebase/page'


import { useRouter } from 'next/navigation';
import { useEffect, useContext } from "react";





import React from 'react'




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


  const addData = async (e: any) => {

    e.preventDefault()
    const docRef = await addDoc(collection(db, "produk"), {
      namaProd: nama,
      harga: harga,
      detail: detail,
      assets: downloadURL
    })

    alert("success")


  };
  return (
    <>
      <NavbarAdmin />
      <div className="bg-[#3C2A21] w-[500px] mx-auto rounded-xl">
        <h1 className="text-center text-3xl text-white pt-10 font-bold">Tambah Produk</h1>
        <div className="p-20">
          <form onSubmit={(e) => addData(e)} encType="multipart/form-data">
            <div>
              <label htmlFor="username">Nama Produk : </label>
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
              <label htmlFor="harga">Harga :</label>
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
            <label htmlFor="w3review">Detail :</label>
            <br />
            <textarea required placeholder="masukan detail..." className="text-black my-5 w-64" id="w3review" name="w3review" onChange={(e) => { setDetail(e.target.value) }}></textarea>
            <br />
            <label htmlFor="file">File 3D :</label>
            <br />
            <br />
            <p className="text-xs text-yellow-200 mb-2">*Tunggu input file 3D selesai sebelum submit</p>
            {loadingg && <Loading />}
            <input id="file" name="file" type="file" required onChange={(files) => handleSelectedFile(files.target)} />
            <div className="flex items-center mt-3">
              <button type="submit" className="bg-neutral-400 px-4 py-2 rounded-lg mx-auto mt-6 hover:bg-neutral-600"  >
                Tambah Produk
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}