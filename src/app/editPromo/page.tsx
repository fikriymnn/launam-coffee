"use client"
import { useState } from "react";
import NavbarAdmin from "../../components/NavbarAdmin";
import Footer from "@/components/Footer";


import { collection, addDoc, getDocs, where, query, deleteDoc, updateDoc, doc, Firestore, } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from '../../../lib/firebase/page'
import { useSearchParams } from 'next/navigation'
const ReactQuill = dynamic(() => import('react-quill'),{ssr:false});
import 'react-quill/dist/quill.snow.css';
import React from 'react'
import dynamic from "next/dynamic";



export default function EditPromo() {
  const searchParams = useSearchParams()

  const [text, setText] = useState(searchParams.get("text"));
  const [detail, setDetail] = useState(searchParams.get("detail"));
  const [id, setId] = useState(searchParams.get("id"));
  const [loading,setLoading]=useState(false)
  const [value, setValue] = useState('');

  const [imageFile, setImageFile] = useState<File>();
  const [downloadURL, setDownloadURL] = useState('')

 const Loading = ()=>{
  return(
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
  const update = async (e:any) => {
    e.preventDefault()

    try {
      if (id) {
        const todoRef = doc(db, "promo", id);
        if(!imageFile ){
          await updateDoc(todoRef, {
            text: text,
            detail: detail,
           
           
          });
        }else{
          await updateDoc(todoRef, {
            text: text,
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
    <html lang="en">
      <body>
      
      <NavbarAdmin />
      <div className="bg-[#3C2A21] md:w-[500px] sm:w-[500px] w-[370px] mx-auto rounded-xl">
        <h1 className="text-center md:text-3xl sm:text-xl text-lg text-white pt-10 font-bold">Edit Promo</h1>
        <div className="p-10 md:p-20 sm:p-20">
          <form  onSubmit={(e)=>update(e)} encType="multipart/form-data">
            <div>
              <label htmlFor="username" className="md:text-base sm:text-sm text-xs">Edit Promo : </label>
              <br />
              <input
                value={text || ""}
                required
                placeholder="masukan nama promo..."
                id="username"
                name="username"
                type="text"
                className="text-black my-5"
                onChange={(e) => setText(e.target.value)}
              />
            </div>
           
            <label htmlFor="w3review" className="md:text-base sm:text-sm text-xs">Detail :</label>
            <br />
            <br/>
            
            <ReactQuill theme="snow" value={detail || ""} onChange={setDetail}  />
            <br />
            <label htmlFor="file" className="md:text-base sm:text-sm text-xs">Image :</label>
            <br />
            <br />
            <p className="text-xs text-yellow-200 mb-2">*Input file terbaru untuk memperbarui</p>
            {loading&&<Loading/>}
            <input id="file" name="file" type="file"  onChange={(files) => handleSelectedFile(files.target)} />
            <div className="flex items-center mt-3">
              <button type="submit"  className="bg-neutral-400 px-4 py-2 rounded-lg mx-auto mt-6 hover:bg-neutral-600 md:text-base sm:text-sm text-xs" >
                Edit Promo
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-24"></div>
      <Footer />
    
      </body>
    </html>
    
  )
}