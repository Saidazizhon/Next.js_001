import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "@/assets/Logo.svg"
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='container bg-[#232536] mx-auto w-full'>
    <div className='p-5 bg-[#232536] pl-32  text-white flex gap-10'>
        <Image src={Logo} alt='rasm'/>
        <Link className='ml-[460px] ' href={"/"}>Home</Link>
        <Link href={"/service"}>Service</Link>
        <Link href={"/company"}>Company</Link>
        <Link href={"/career"}>Career</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link className='flex text-[#FFD3AF]' href={"/project"}>Project <FaArrowRightLong className='mt-[5px] ml-2 text-white'/></Link>
    </div>
    <hr />
    </div>
  )
}

export default Header