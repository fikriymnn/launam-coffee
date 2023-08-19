"use client"
import { useEffect, useState } from "react";
import NavbarAdmin from "../../components/NavbarAdmin";
import Footer from "@/components/Footer";


import { collection, addDoc, getDocs, where, query, deleteDoc, updateDoc, doc, Firestore, } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from '../../../lib/firebase/page'
import { useSearchParams } from 'next/navigation'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import React from 'react'
import dynamic from "next/dynamic";







export default function EditProduk() {
  const searchParams = useSearchParams()
  const [value, setValue] = useState('');
  const namaa = searchParams.get('nama')
  const hargaa = searchParams.get('harga')
  const detaill = searchParams.get('detail')
  const id = searchParams.get('id')

  const [nama, setNama] = useState(namaa);
  const [harga, setHarga] = useState(hargaa);
  const [detail, setDetail] = useState(detaill);


  const [imageFile, setImageFile] = useState<File>();
  const [downloadURL, setDownloadURL] = useState('')

  const [loading, setLoading] = useState(false)
  const handleSelectedFile = (file: any) => {
    const files = file.files
    if (files && files[0].size < 10000000) {
      setImageFile(files[0])

      console.log(files[0])
      try {
        if (files[0]) {
          setLoading(true)
          const name = files[0].name
          const storageRef = ref(storage, `image/${name}`)
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
    } else {
      alert('File size to large')
    }
  }

  const update = async (e: any) => {
    e.preventDefault()

    try {
      if (id) {
        const todoRef = doc(db, "produk", id);
        if (!imageFile) {
          await updateDoc(todoRef, {
            namaProd: nama,
            harga: harga,
            detail: detail,

          });
        } else {
          await updateDoc(todoRef, {
            namaProd: nama,
            harga: harga,
            detail: detail,
            assets: downloadURL
          });
        }
        alert("Success")

        // Update the "completed" field of the todo document to the value of the "checked" property of the event target.

      } else {
        alert("error")
      }
      // Get a reference to the todo document with the given ID in the "todos" collection in Firestore.


      // After updating the todo, fetch all todos for the current user and update the state with the new data.

    } catch (error) {
      console.error("An error occured", error);
    }
  };



  return (
    <>
      <NavbarAdmin />
      <div className="bg-[#3C2A21] md:w-[500px] sm:w-[500px] w-[370px] mx-auto rounded-xl">
        <h1 className="text-center md:text-3xl sm:text-xl text-lg text-white pt-10 font-bold">Edit Menu</h1>
        <div className="p-10 md:p-20 sm:p-20">
          <form onSubmit={(e) => update(e)} encType="multipart/form-data">
            <div>
              <label htmlFor="username" className="md:text-base sm:text-sm text-xs">Nama Menu : </label>
              <br />
              <input
                value={nama || ""}
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
                value={harga || ""}
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
            <ReactQuill theme="snow" value={detail || ""} onChange={setDetail} />
            <br />
            <label htmlFor="file" className="md:text-base sm:text-sm text-xs">File 3D :</label>
            <br />
            <br />
            <p className="text-xs text-yellow-200 mb-2">*Input file 3D terbaru untuk memperbarui</p>
            {loading && <p>Loading</p>}
            <input id="file" name="file" type="file" onChange={(files) => handleSelectedFile(files.target)} />
            <div className="flex items-center mt-3">
              <button className="bg-neutral-400 px-4 py-2 rounded-lg mx-auto mt-6 hover:bg-neutral-600 md:text-base sm:text-sm text-xs"  >
                Perbarui Menu
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