"use client";

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
  const {username,setUsername} = useContext(StudentContext)
  const [alertuser,setAlertuser] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/Login");
     
    }

  
   
  
  }, []);



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

      axios.post("http://localhost:3000/img", formdata, {
        headers:{
          Authorization:'Bearer '+localStorage.getItem("token")
        }
      })
        .then(res => {
          console.log(res);
          setImg(img1);
          axios.post("http://localhost:3000/student", {
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

            <div className="flex justify-between  item-center">
              <Image src={img} alt="" width={100} height={50} className="w-[50px]" />
              <Link href='/Showstudent'><button className="w-[150px] h-[40px] text-[white]  bg-[blue] rounded-md">Student-list</button></Link>
              <Link href='/'><button className="w-[150px] h-[40px] text-[white]  bg-[blue] rounded-md">Home</button></Link>
              <button className="w-[150px] h-[40px] text-[white]  bg-[blue] rounded-md" onClick={logOut}>Logout  </button>
            </div>
            <h1 className="text-[36px] text-[white] flex justify-center pt-[70px]">Enter Student data </h1>
            <div className="ml-[35%] mr-[35%]">
              <input type="text" className="my-[30px] mx-[20px] w-[500px] h-[60px] rounded-lg outline-none pl-[30px] bg-[#fdf7f7de]" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
              <input type="text" className="my-[30px] mx-[20px] w-[500px] h-[60px] rounded-lg outline-none pl-[30px]" placeholder="Father_Name" onChange={(e) => { setFathername(e.target.value) }} />
              <input type="number" className="my-[30px] mx-[20px] w-[500px] h-[60px] rounded-lg outline-none pl-[30px]" placeholder="Roll_No" onChange={(e) => { setRoll(e.target.value) }} />
              <input type="text" className="my-[30px] mx-[20px] w-[500px] h-[60px] rounded-lg outline-none pl-[30px]" placeholder="Class_Name" onChange={(e) => { setClassn(e.target.value) }} />
              <h1 className="text-[26px] text-[white] ml-[200px]">Select Image</h1>
              <form>
                <input type="file" className="ml-[200px] py-7" onChange={(e) => imgpath(e)} />
              </form>
            </div>
            <button onClick={submithandler} className="bg-[green] w-[150px] h-[40px] ml-[45%] mt-[20px] rounded-md">Submit</button>
            { alertuser &&
            <div className="w-[500px] h-[150px] border-solid border-2 bg-[white]  drop-shadow-lg  shadow-black  rounded-lg absolute top-0 right-[630px] animate-myanimation">
<h1 className="text-[20px]   text-center pt-[10px]">This site owner Abdullah Say :</h1>
<p className="text-center pt-[20px] "> Welcome:{username}</p>
<button className="w-[90px] h-[40px] bg-[#3552af] text-[white] font-semibold text-[20px] rounded-md ml-[410px] mt-[24.6px]" onClick={stop}>Ok</button>
            </div>}



          </div>}
        {haserr &&
          <p className="text-[red] text-[40px] flex justify-center pt-[5] ">{err}</p>
        }
      </div>
    </>
  );
}
