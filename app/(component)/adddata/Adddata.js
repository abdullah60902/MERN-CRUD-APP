"use client";
import React from "react";
import Image from "next/image";
import { useState,useEffect, useContext } from "react";
import img1 from '../../imagesnew/tslmy.png';
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/navigation'; 
import StudentContext from "../../context/StudentContext";
export default function Adddata() {
  const [name, setName] = useState('');
  const [urlcode, setUrlcode] = useState(null);
  const [fathername, setFathername] = useState('');
  const [roll, setRoll] = useState(null);
  const [classn, setClassn] = useState('');
  const [img, setImg] = useState(img1);
  const [err, setErr] = useState('');
  const [haserr, setHaserr] = useState(false);
  const [showloader, setShowloader] = useState(false);
  const router = useRouter();
  const {username} = useContext(StudentContext)
  const [alertuser,setAlertuser] = useState(false)
  const { isAuthenticated } = useContext(StudentContext);
  useEffect(() => {

  }, [isAuthenticated]);
useEffect(()=>{
    setAlertuser(true)
  },[username])

  




  const submithandler = () => {
    setShowloader(true);
    if (name === "" || fathername === '' || roll === null || classn === "") {
      setHaserr(true);
      setErr('Please fill all the fields');
      setShowloader(false);
    } else if (img === img1) {
      setHaserr(true);
      setErr('Please select a valid image');
      setShowloader(false);
    } else {
      

      
      
      

      const formdata = new FormData();
      formdata.append('photo', urlcode);

      axios.post("https://mern-api-edj1.vercel.app/img", formdata, {
        headers:{
          Authorization:'Bearer '+localStorage.getItem("token")
        }
      })
        .then(res => {
          console.log(res);
          setImg(img1);
          axios.post("https://mern-api-edj1.vercel.app/student", {
            username: name,
            father: fathername,
            Roll: roll,
            classname: classn
          }, {
            headers:{
              Authorization:'Bearer '+localStorage.getItem("token")
            }
          }).then(res => {
            console.log(res);
            setShowloader(false);
            router.push('/Showstudent'); // Navigate to ShowStudent page on successful submission
          }).catch(err => {
            console.log(err);
            setShowloader(false);
            setHaserr(true);
            setErr(err.message);
          });
        }).catch(err => {
          console.log(err);
          setHaserr(true);
          setShowloader(false);
          setErr(err.message);
        });
    }
  };

const imgpath = (e) => {
    var file = e.target.files[0];
    setUrlcode(file);
    setImg(URL.createObjectURL(file));
  };

  const logOut = ()=>{
    localStorage.removeItem("token");
    router.push('/Login')
  }
  const stop = ()=>{
    setAlertuser(false)
  }
return (
    <>
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex justify-center items-center relative py-[0px]">
        {showloader &&
          <div>
            <div className="absolute top-[190px] left-1/2 [transform-style:preserve-3d]">
              <div className="transform rotate-x-[-35deg] rotate-y-[-45deg] translate-z-[1.5625em]">
                <div className="relative m-[-1.5625em] w-[3.125em] h-[3.125em] [transform-origin:50%_50%_-1.5625em] [box-shadow:0_0_0.125em_currentColor] [background:currentColor] animate-cube-scale animation-delay-[-1.2s] mt-[6.25em] text-[#fe1e52]">
                  <div className="[transform-origin:0_100%] [box-shadow:inherit] [background:currentColor] absolute bottom-full w-inherit h-inherit [transform:rotateX(90deg)] text-[#ff6488]"></div>
                  <div className="[transform-origin:0_100%] [box-shadow:inherit] [background:currentColor] absolute left-full w-inherit h-inherit [transform:rotateY(90deg)] text-[#ff416d]"></div>
                </div>
                <div className="relative m-[-1.5625em] w-[3.125em] h-[3.125em] [transform-origin:50%_50%_-1.5625em] [box-shadow:0_0_0.125em_currentColor] [background:currentColor] animate-cube-scale animation-delay-[-1s] mt-[3.125em] text-[#fe4252]">
                  <div className="[transform-origin:0_100%] [box-shadow:inherit] [background:currentColor] absolute bottom-full w-inherit h-inherit [transform:rotateX(90deg)] text-[#ff8892]"></div>
                  <div className="[transform-origin:0_100%] [box-shadow:inherit] [background:currentColor] absolute left-full w-inherit h-inherit [transform:rotateY(90deg)] text-[#ff6572]"></div>
                </div>
                <div className="relative m-[-1.5625em] w-[3.125em] h-[3.125em] [transform-origin:50%_50%_-1.5625em] [box-shadow:0_0_0.125em_currentColor] [background:currentColor] animate-cube-scale animation-delay-[-0.8s] text-[#fe6553]">
                  <div className="[transform-origin:0_100%] [box-shadow:inherit] [background:currentColor] absolute bottom-full w-inherit h-inherit [transform:rotateX(90deg)] text-[#ffa499]"></div>
                  <div className="[transform-origin:0_100%] [box-shadow:inherit] [background:currentColor] absolute left-full w-inherit h-inherit [transform:rotateY(90deg)] text-[#ff8476]"></div>
                </div>
                <div className="relative m-[-1.5625em] w-[3.125em] h-[3.125em] [transform-origin:50%_50%_-1.5625em] [box-shadow:0_0_0.125em_currentColor] [background:currentColor] animate-cube-scale animation-delay-[-0.6s] mt-[-3.125em] text-[#fe8953]">
                  <div className="[transform-origin:0_100%] [box-shadow:inherit] [background:currentColor] absolute bottom-full w-inherit h-inherit [transform:rotateX(90deg)] text-[#ffb999]"></div>
                  <div className="[transform-origin:0_100%] [box-shadow:inherit] [background:currentColor] absolute left-full w-inherit h-inherit [transform:rotateY(90deg)] text-[#ffa176]"></div>
                </div>
                <div className="relative m-[-1.5625em] w-[3.125em] h-[3.125em] [transform-origin:50%_50%_-1.5625em] [box-shadow:0_0_0.125em_currentColor] [background:currentColor] animate-cube-scale animation-delay-[-0.4s] mt-[-6.25em] text-[#feac54]">
                  <div className="[transform-origin:0_100%] [box-shadow:inherit] [background:currentColor] absolute bottom-full w-inherit h-inherit [transform:rotateX(90deg)] text-[#ffce9a]"></div>
                  <div className="[transform-origin:0_100%] [box-shadow:inherit] [background:currentColor] absolute left-full w-inherit h-inherit [transform:rotateY(90deg)] text-[#ffbd77]"></div>
                </div>
                <div className="relative m-[-1.5625em] w-[3.125em] h-[3.125em] [transform-origin:50%_50%_-1.5625em] [box-shadow:0_0_0.125em_currentColor] [background:currentColor] animate-cube-scale animation-delay-[-0.2s] mt-[-9.375em] text-[#fed054]">
                  <div className="[transform-origin:0_100%] [box-shadow:inherit] [background:currentColor] absolute bottom-full w-inherit h-inherit [transform:rotateX(90deg)] text-[#ffe49a]"></div>
                  <div className="[transform-origin:0_100%] [box-shadow:inherit] [background:currentColor] absolute left-full w-inherit h-inherit [transform:rotateY(90deg)] text-[#ffda77]"></div>
                </div>
              </div>
            </div>
          </div>}
          {!showloader && !haserr &&
  <div>

    <div className="flex flex-wrap justify-between items-center p-4">
      <Image src={img} alt="" width={100} height={50} className="w-12 sm:w-24" />
      <Link href='/Showstudent'><button className="w-36 h-10 text-white bg-blue-500 rounded-md m-2">Student-list</button></Link>
      <Link href='/'><button className="w-36 h-10 text-white bg-blue-500 rounded-md m-2">Home</button></Link>
      <button className="w-36 h-10 text-white bg-blue-600 rounded-md m-2" onClick={logOut}>Logout</button>
    </div>
    <h1 className="text-2xl sm:text-4xl text-white flex justify-center pt-8">Enter Student Data</h1>
    <div className="px-4 sm:px-24 lg:px-48 xl:px-64">
      <input type="text" className="my-4 mx-2 w-full sm:w-80 h-14 rounded-lg outline-none pl-4 bg-gray-100" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
      <input type="text" className="my-4 mx-2 w-full sm:w-80 h-14 rounded-lg outline-none pl-4 bg-gray-100" placeholder="Father_Name" onChange={(e) => { setFathername(e.target.value) }} />
      <input type="number" className="my-4 mx-2 w-full sm:w-80 h-14 rounded-lg outline-none pl-4 bg-gray-100" placeholder="Roll_No" onChange={(e) => { setRoll(e.target.value) }} />
      <input type="text" className="my-4 mx-2 w-full sm:w-80 h-14 rounded-lg outline-none pl-4 bg-gray-100" placeholder="Class_Name" onChange={(e) => { setClassn(e.target.value) }} />
      <h1 className="text-xl sm:text-2xl text-white ml-4 sm:ml-8">Select Image</h1>
      <form className="ml-4 sm:ml-8 py-4">
        <input type="file" className="py-4" onChange={(e) => imgpath(e)} />
      </form>
    </div>
    <button onClick={submithandler} className="bg-green-500 w-36 h-10 mx-auto mt-4 rounded-md block">Submit</button>
    { alertuser &&
      <div className="w-64 sm:w-80 lg:w-96 h-36 sm:h-40 border-solid border-2 bg-white drop-shadow-lg shadow-black rounded-lg fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 animate-myanimation">
        <h1 className="text-xl text-center pt-4">This site owner Abdullah Say:</h1>
        <p className="text-center pt-4">Welcome: {username}</p>
        <button className="w-20 h-10 bg-blue-600 text-white font-semibold text-lg rounded-md mx-auto mt-4 block" onClick={stop}>Ok</button>
      </div>
    }
  </div>
}
{haserr &&
  <p className="text-red-600 text-2xl flex justify-center pt-5">{err}</p>
}
</div>

    </>
  );
}
