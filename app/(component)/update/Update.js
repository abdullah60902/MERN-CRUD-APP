"use client"

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import img1 from '../../imagesnew/tslmy.png';
import axios from "axios";
import Link from "next/link";
import StudentContext from '../../context/StudentContext';
import { useRouter } from "next/navigation";
export default function Update() {
  const [name, setName] = useState('');
  const [urlcode, setUrlcode] = useState(null);
  const [fathername, setFathername] = useState('');
  const [roll, setRoll] = useState(null);
  const [classn, setClassn] = useState('');
  const [img, setImg] = useState(img1);
  const [err, setErr] = useState('');
  const [haserr, setHaserr] = useState(false);
  const [showloader, setShowloader] = useState(false);
  const { studentData } = useContext(StudentContext);
  const { hjk, imgId } = studentData;
  const router= useRouter()

  const { isAuthenticated } = useContext(StudentContext);
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/Login');
    }
  }, [isAuthenticated]);

console.log(hjk);
  console.log(studentData.hjk);
console.log(imgId);
 
  useEffect(() => {
    setShowloader(true)
    const fetchData = async () => {
      try {
        const studentResponse = await axios.get('http://localhost:3000/student/'+studentData.hjk);
        console.log("kl",studentResponse.data.student.username);
        setName(studentResponse.data.student.username);
        setFathername(studentResponse.data.student.father);
        setRoll(studentResponse.data.student.Roll);
        setClassn(studentResponse.data.student.classname);
      const studentimgresponse = await axios.get('http://localhost:3000/img/'+studentData.imgId)
      console.log("jko",studentimgresponse.data.new_img.photo);
      setImg(studentimgresponse.data.new_img.photo)
      setShowloader(false)
      } catch (err) {
        setHaserr(true);
        setErr(err.message);
        console.error(err);
        setShowloader(false)
      }
    };

    fetchData();
  }, []);
const imgpath = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUrlcode(file);
      setImg(URL.createObjectURL(file));
    }
  };
const submithandler = () => {
    setShowloader(true);
    if (name === "" || fathername === '' || roll === null || classn === "") {
      setHaserr(true);
      setErr('Please fill all the fields');
      setShowloader(false);
    } else if (urlcode === null) {
      setHaserr(true);
      setErr('Please select a valid image');
      setShowloader(false);
    } else {
      const formdata = new FormData();
      formdata.append('photo', urlcode);
      axios.put(`http://localhost:3000/img/${studentData.imgId}`, formdata)
        .then(() => {
          axios.put(`http://localhost:3000/student/${studentData.hjk}`, {
            username: name,
            father: fathername,
            Roll: roll,
            classname: classn
          }).then(() => {
            setShowloader(false);
        router.push('/Showstudent')
          }).catch((err) => {
            console.error(err);
            setShowloader(false);
            setHaserr(true);
            setErr(err.message);
          });
        }).catch((err) => {
          console.error(err);
          setHaserr(true);
          setShowloader(false);
          setErr(err.message);
        });
        }
  };
  const logOut = ()=>{
    localStorage.removeItem("token");
    router.push('/Login')
  }
return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex justify-center items-center relative">
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
            <div className="">
            <div className="flex justify-between  item-center">
              <Image src={img} alt="" width={100} height={50} className="w-[50px]" />
              <Link href='/Showstudent'><button className="w-[150px] h-[40px] text-[white]  bg-[blue] rounded-md">Student-list</button></Link>
              <Link href='/'><button className="w-[150px] h-[40px] text-[white]  bg-[blue] rounded-md">Home</button></Link>
              <button className="w-[150px] h-[40px] text-[white]  bg-[blue] rounded-md" onClick={logOut}>Logout</button>
            </div>
            </div>
            <h1 className="text-[36px] text-[white] flex justify-center pt-[70px]">Enter Student data </h1>
            <div className="ml-[35%] mr-[35%]">
              <input type="text" className="my-[30px] mx-[20px] w-[500px] h-[60px] rounded-lg outline-none pl-[30px] bg-[#fdf7f7de]" placeholder="Name" onChange={(e) => { setName(e.target.value) }} value={name} />
              <input type="text" className="my-[30px] mx-[20px] w-[500px] h-[60px] rounded-lg outline-none pl-[30px]" placeholder="Father_Name" onChange={(e) => { setFathername(e.target.value) }} value={fathername} />
              <input type="number" className="my-[30px] mx-[20px] w-[500px] h-[60px] rounded-lg outline-none pl-[30px]" placeholder="Roll_No" onChange={(e) => { setRoll(e.target.value) }} value={roll} />
              <input type="text" className="my-[30px] mx-[20px] w-[500px] h-[60px] rounded-lg outline-none pl-[30px]" placeholder="Class_Name" onChange={(e) => { setClassn(e.target.value) }} value={classn} />
              <h1 className="text-[26px] text-[white] ml-[200px]">Select Image</h1>
              <form>
                <input type="file" className="ml-[200px] py-7" onChange={(e) => imgpath(e)}  />
              </form>
            </div>
            <button onClick={submithandler} className="bg-[green] w-[150px] h-[40px] ml-[45%] mt-[20px] rounded-md">Submit</button>
          </div>}
        {haserr &&
          <p className="text-[red] text-[40px] flex justify-center pt-[5] ">{err}</p>
        }
      </div>
    </>
  );
}
