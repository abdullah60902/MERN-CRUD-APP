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
      <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">Sign Up to Create an Account</h1>
      <p className="text-sm mb-8">Already have an account? <Link href={'/Login'} className="text-[#9533b3]">Login</Link></p>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-semibold">Username</label>
          <input type="text" id="username" placeholder="Username" className="w-full h-10 border border-gray-300 rounded-md px-3 mt-1 outline-none" onChange={(e) => { setNames(e.target.value) }} />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold">Email</label>
          <input type="email" id="email" placeholder="Email" className="w-full h-10 border border-gray-300 rounded-md px-3 mt-1 outline-none" required onChange={(e) => { setEmails(e.target.value) }} />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold">Password</label>
          <input type="password" id="password" placeholder="Password" className="w-full h-10 border border-gray-300 rounded-md px-3 mt-1 outline-none" required onChange={(e) => { setPasswords(e.target.value) }} />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-semibold">Phone</label>
          <input type="text" id="phone" placeholder="Phone" className="w-full h-10 border border-gray-300 rounded-md px-3 mt-1 outline-none" required onChange={(e) => { setPhones(e.target.value) }} />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-semibold">Gender</label>
          <input type="text" id="gender" placeholder="Gender" className="w-full h-10 border border-gray-300 rounded-md px-3 mt-1 outline-none" required onChange={(e) => { setGenders(e.target.value) }} />
        </div>
        <button type="submit" className="w-full h-10 bg-purple-600 text-white rounded-md mt-2">Sign Up</button>
      </form>
    </div>
    
     
      }
      {haserr && <p className='text-[red] text-[20px] ml-[800px]'>{err}</p>}
    </>
  );
}
