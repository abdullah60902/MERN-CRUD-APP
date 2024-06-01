'use client';

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { MdCancel } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useRouter } from 'next/navigation';
import StudentContext from '../../context/StudentContext';
import Link from 'next/link';
import Image from 'next/image';
export default function Showdata() {
  const [students, setStudents] = useState([]);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [showimg, setShowimg] = useState(false);
  const [studentid, setStudentid] = useState(null)
  const [idimg, setIdimg] = useState(null)
  const [imgshowalone, setImgshowalone] = useState(null)
  const router = useRouter();
  const { setStudentData } = useContext(StudentContext);
  
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push('/Login');
    }
  }, );


  const [studentshowalone, setStudentshowalone] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const imgResponse = await axios.get('https://mern-api-ftcs.vercel.app/img');
        const studentResponse = await axios.get('https://mern-api-ftcs.vercel.app/student');
        setStudents(studentResponse.data.Studentdata);
        setImages(imgResponse.data.img_new);
      } catch (err) {
        setError(err.message);
        console.error(err);
        setError(err.message)
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div className="text-red-500 font-bold text-center mt-4">Error: {error}</div>;
  }
  const imgdisplay = (student, index) => {
    const id = student._id;
    const imgid = images[index]._id
    console.log(id, imgid);
    setStudentid(id);
    setIdimg(imgid)
    setShowimg(true)
    getTheItemsById(index)
  }
  const getTheItemsById = async (index) => {
    try {
      var GetImgId = await axios.get('https://mern-api-ftcs.vercel.app/img/', idimg)
      const getimgSucess = GetImgId.data.img_new[index]
      console.log(getimgSucess);
      setImgshowalone(getimgSucess)
      var GetStudentId = await axios.get('https://mern-api-ftcs.vercel.app/student/', studentid)
      const getStudentSucess = GetStudentId.data.Studentdata[index]
      console.log(getStudentSucess);
      setStudentshowalone(getStudentSucess)
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };
  const deleteo = async (imglinki, student, index) => {
    const secondstId = student._id;
    const secImgId = images[index]._id;
    console.log('Image ID:', secImgId);
    console.log('Student ID:', secondstId);
    try {
      const imgDeleteResponse = await axios.delete(`https://mern-api-ftcs.vercel.app/img`, { params: { id: secImgId, imageUrl: imglinki } });
      console.log('Image delete response:', imgDeleteResponse);
      const studentDeleteResponse = await axios.delete(`https://mern-api-ftcs.vercel.app/student/${secondstId}`);
      console.log('Student delete response:', studentDeleteResponse);
    
      window.location.reload();
      
    } catch (error) {
      console.error('Error deleting image or student:', error.response ? error.response.data : error.message);
    }
  };
  const handleEdit = (student, index) => {
    const imgId = images[index]._id;
    const hjk = student._id
    setStudentData({ hjk, imgId })
    router.push('/Upload');
  }
  const logOut = () => {
    localStorage.removeItem("token");
    router.push('/Login')
  }
  return (
    <div className="p-4" >
      <div className="flex justify-between  item-center">
        <Link href='/Showstudent'><button className="w-[150px] h-[40px] text-[white]  bg-[blue] rounded-md">Student-list</button></Link>
        <Link href='/'><button className="w-[150px] h-[40px] text-[white]  bg-[blue] rounded-md">Home</button></Link>
        <button className="w-[150px] h-[40px] text-[white]  bg-[blue] rounded-md" onClick={logOut}>Logout</button>
      </div>
      <h1 className="text-3xl font-semibold mb-6 text-center mt-[20px]">Student Data</h1>
      {students.length > 0 ? (
        <div className=" h-[70vh] overflow-auto py-6">
          <table className="min-w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl rounded-lg ">
            <thead className="bg-gradient-to-r from-purple-500 to-pink-500">
              <tr>
                <th className="py-4 px-6 text-left font-semibold uppercase tracking-wider">Name</th>
                <th className="py-4 px-6 text-left font-semibold uppercase tracking-wider">Father &apos; Name</th>
                <th className="py-4 px-6 text-left font-semibold uppercase tracking-wider">Roll&apos; No</th>
                <th className="py-4 px-6 text-left font-semibold uppercase tracking-wider">Class&apos; Name</th>
                <th className="py-4 px-6 text-left font-semibold uppercase tracking-wider">Photo</th>
                <th className="py-4 px-6 text-left font-semibold uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => {
                const img = images[index]; // Match student and image by index
                return (
                  <tr key={index} className="odd:bg-opacity-20 even:bg-opacity-10 hover:bg-opacity-30 transition duration-200">
                    <td className="py-4 px-8 border-b border-white text-[24px]" >{student?.username?.length > 10 ? student.username.slice(0, 10) + "..." : student.username}</td>
                    <td className="py-4 px-8 border-b border-white text-[24px]">{student?.father?.length > 10 ? student.father.slice(0, 10) + "..." : student.father}</td>
                    <td className="py-4 px-8 border-b border-white text-[24px]">  {String(student?.Roll).length > 6 ? String(student.Roll).slice(0, 6) + "..." : student.Roll}
                    </td>
                    <td className="py-4 px-8 border-b border-white text-[24px]">{student?.classname?.length > 10 ? student.classname.slice(0, 10) + "..." : student.classname}</td>
                    <td className="py-4 px-8 border-b border-white ">
                      {img ? (
                        <Image src={img.photo} alt={student.username} width={100} height={100} className="w-24  h-28 rounded-lg shadow-md transform hover:scale-105 transition duration-200" onClick={() => imgdisplay(student, index)} />
                      ) : (
                        <p className="italic text-gray-200">No image available</p>
                      )}
                    </td>
                    <td className="py-4 px-8 border-b border-white ">
                      <button className='text-[red] text-[60px]' onClick={() => deleteo(img.photo, student, index)}><MdDelete /></button>
                      <button className='text-[#5fb997] text-[60px] pl-[10px]' onClick={() => (handleEdit(student, index))}
                      ><MdEdit /></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
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
        </div>
      )}
      {
        showimg &&
        <div className='h-full drop-shadow-2xl w-full bg-[#7a7a7a69] absolute top-[0px] left-[0px] '>
          <div className='w-[500px] h-[600px] border-solid bg-[#46b4ab] rounded-lg  drop-shadow-lg absolute  top-[150px] right-[620px] animate-myanimation		'>
            <div className=''>
              <Image src={imgshowalone?.photo} alt=""  className='w-[500px] h-[450px] rounded-lg drop-shadow-lg ' width={500} height={450}/>

            </div>
            <div className='flex justify-between pt-[20px]'>
              <button className='w-[200px] h-[40px] flex bg-[#0e282e] text-center py-[5px] px-[15px] rounded-md drop-shadow-lg shadow-[#1e413f]'>
                <p className='text-[18px] text-[white] font-semibold'>Name:&apos; </p>
                <p className='text-[18px] text-[white] italic pl-[3px]'>
                  {studentshowalone?.username?.length > 10 ? studentshowalone?.username.slice(0, 10) + "..." : studentshowalone?.username}
                </p>
              </button>
              <button className='w-[200px] h-[40px] flex bg-[#0e282e] text-center py-[5px] px-[15px] rounded-md drop-shadow-lg shadow-[#1e413f]'>
                <p className='text-[18px] text-[white] font-semibold'>Father:&apos;</p>
                <p className='text-[18px] text-[white] italic pl-[3px]'>
                  {studentshowalone?.father?.length > 10 ? studentshowalone?.father.slice(0, 10) + "..." : studentshowalone?.father}
                </p>
              </button>
            </div>
            <p onClick={() => setShowimg(false)} className='px-[230px] text-[30px] animate-myanimation'>
              <MdCancel />
            </p>
            <div className='flex justify-between'>
              <button className='w-[200px] h-[40px] flex bg-[#0e282e] text-center py-[5px] px-[15px] rounded-md drop-shadow-lg shadow-[#1e413f]'>
                <p className='text-[18px] text-[white] font-semibold'>ROll-no:&apos;</p>
                <p className='text-[18px] text-[white] italic pl-[3px]'>
                  {String(studentshowalone?.Roll).length > 6 ? String(studentshowalone?.Roll).slice(0, 6) + "..." : studentshowalone?.Roll}
                </p>
              </button>
              <button className='w-[200px] h-[40px] flex bg-[#0e282e] text-center py-[5px] px-[15px] rounded-md drop-shadow-lg shadow-[#1e413f]'>
                <p className='text-[18px] text-[white] font-semibold'>Class:&apos;</p>
                <p className='text-[18px] text-[white] italic pl-[3px]'>
                  {studentshowalone?.classname?.length > 10 ? studentshowalone?.classname.slice(0, 8) + "..." : studentshowalone?.classname}
                </p>
              </button>
            </div>

          </div>
        </div>
      }
    </div>
  );
}



