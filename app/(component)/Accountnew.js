"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function AccountNew() {
  const [names, setNames] = useState('');
  const [emails, setEmails] = useState('');
  const [passwords, setPasswords] = useState('');
  const [phones, setPhones] = useState('');
  const [genders, setGenders] = useState('');
  const [err, setErr] = useState('');
  const [haserr, setHaserr] = useState(false);
  const [showloader, setShowloader] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    setShowloader(true);
    const name1 = names.trim();
    const email1 = emails.trim();
    const password1 = passwords.trim();
    const phone1 = phones.trim();
    const gender1 = genders.trim();

    if (name1 === '' || email1 === '' || password1 === '' || phone1 === '' || gender1 === '') {
      setHaserr(true);
      setErr("Please fill all the fields");
      setShowloader(false);
    } else {
      axios.post('http://localhost:3000/user/signup', {
        Name: name1,
        email: email1,
        password: password1,
        phone: phone1,
        gender: gender1
      })
        .then(res => {
          console.log(res.data);
          setShowloader(false);
          router.push('/Login');
        })
        .catch(error => {
          console.log(error);
          setShowloader(false);
          setHaserr(true);
          setErr(error.response?.data?.message || error.message || "An error occurred");
        });
    }
  };

  return (
    <>
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
        </div>
      }

      {!showloader && 
        <div>
          <h1 className='text-[32px] font-semibold text-center items-center mt-[200px]'>SignUp to create account</h1>
          <p className='text-[12px] text-center mt-[10px] font-semibold'>Already have an account? <Link href={'/Login'} className='text-[#9533b3]'>login</Link></p>
          <form action="" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <input type="text" placeholder='UserName' className='w-[500px] h-[40px] border-solid border-[#cdd1d3] border-2 outline-none rounded-md pl-[20px] font-semibold mt-[20px] ml-[650px]' onChange={(e) => { setNames(e.target.value) }} />
            <input type="Email" placeholder='Email' className='w-[500px] h-[40px] border-solid border-[#cdd1d3] border-2 outline-none rounded-md pl-[20px] font-semibold mt-[20px] ml-[650px]' required onChange={(e) => { setEmails(e.target.value) }} />
            <input type="password" placeholder='Password' className='w-[500px] h-[40px] border-solid border-[#cdd1d3] border-2 outline-none rounded-md pl-[20px] font-semibold mt-[20px] ml-[650px]' required onChange={(e) => { setPasswords(e.target.value) }} />
            <input type="text" placeholder='Phone' className='w-[500px] h-[40px] border-solid border-[#cdd1d3] border-2 outline-none rounded-md pl-[20px] font-semibold mt-[20px] ml-[650px]' required onChange={(e) => { setPhones(e.target.value) }} />
            <input type="text" placeholder='Gender' className='w-[500px] h-[40px] border-solid border-[#cdd1d3] border-2 outline-none rounded-md pl-[20px] font-semibold mt-[20px] ml-[650px]' required onChange={(e) => { setGenders(e.target.value) }} />
            <button type='submit' className='w-[120px] h-[40px] rounded-md bg-[#86269e] text-[white] ml-[830px] my-[50px]'>SignUp</button>
          </form>
        </div>
      }
      {haserr && <p className='text-[red] text-[20px] ml-[800px]'>{err}</p>}
    </>
  );
}
