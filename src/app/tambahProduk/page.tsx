"use client"
import { useState } from "react";
import NavbarAdmin from "../../components/NavbarAdmin";
import Footer from "@/components/Footer";


import { collection, addDoc, getDocs, where, query, deleteDoc, updateDoc, doc, Firestore, } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from '../../../lib/firebase/page'




export default function TambahProduk() {
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [detail, setDetail] = useState('');
  const [lii, setlii] = useState('');
  const [image, setImage] = useState(null);

  const [obj, setObj] = useState(null);

  const [imageFile, setImageFile] = useState<File>();
  const [downloadURL, setDownloadURL] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [progressUpload, setProgressUpload] = useState(0)

  const handleSelectedFile = (files: any) => {
    if (files && files[0].size < 10000000) {
      setImageFile(files[0])

      console.log(files[0])
    } else {
      alert('File size to large')
    }
  }

  const onSubmit = () => {
    if (imageFile) {
      const name = imageFile.name
      const storageRef = ref(storage, `image/${name}`)
      const uploadTask = uploadBytesResumable(storageRef, imageFile)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100

          alert(setProgressUpload(progress))   // to show progress upload

          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          alert(error.message)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            //url is download url of file
            setDownloadURL(url)
          })
        },
      )
      addDoc(collection(db, "produk"), {
        namaProd: nama,
        harga: harga,
        detail: detail,
        assets: downloadURL

      })
    } else {
      alert('File not found')
    }
  }



  // const onSubmit = async () => {
  //   try {


  //     const storageRef = ref(storage, "image10");
  //     const uploadTask = uploadBytesResumable(storageRef, image,)

  //     uploadTask.on('state_changed',

  //       // (snapshot) => {
  //       //   // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  //       //   const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       //   alert('Upload is ' + progress + '% done');
  //       //   switch (snapshot.state) {
  //       //     case 'paused':
  //       //       alert('Upload is paused')
  //       //       break;
  //       //     case 'running':
  //       //       alert('Upload is running');
  //       //       break;
  //       //   }
  //       // },
  //       // (error) => {

  //       //   switch (error.code) {
  //       //     case 'storage/unauthorized':
  //       //       alert(error.message)

  //       //       break;
  //       //     case 'storage/canceled':
  //       //       alert(error.message)

  //       //       break;



  //       //     case 'storage/unknown':
  //       //       alert(error.message)

  //       //       break;
  //       //   }
  //       // },

  //       () => {

  //         getDownloadURL(uploadTask.snapshot.ref).then((url) => {

  //           setlii(url);
  //           alert("success")
  //           console.log('File available at', url);



  //         });

  //       }
  //     );





  //     // console.log("Success")



  //   } catch (error) {
  //     console.log(error);
  //     alert(error)
  //   }
  //   console.log(`${nama} ${harga} ${detail}`)

  // }
  return (
    <>
      <NavbarAdmin />
      <div className="bg-[#3C2A21] w-[500px] mx-auto rounded-xl">
        <h1 className="text-center text-3xl text-white pt-10 font-bold">Tambah Produk</h1>
        <div className="p-20">
          <form encType="multipart/form-data">
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
            <input id="file" name="file" type="file" required onChange={(files) => handleSelectedFile(files.target.files)} />
            <div className="flex items-center mt-3">
              <button className="bg-neutral-400 px-4 py-2 rounded-lg mx-auto mt-6 hover:bg-neutral-600" onClick={onSubmit} >
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