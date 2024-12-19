import Link from 'next/link'
import React from 'react'
import Logo from "@/assets/Logo.svg"
import Image from 'next/image'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='w-full h-24 pt-4 bg-[#f7d8be] px-32'>
      <div className='container mx-auto flex justify-between items-center py-4'>
        <div className='flex gap-16 items-center'>
          <Link href={'/'}>
            <Image className='w-40 max-sm:w-32' src={Logo} alt='image' />
          </Link>
          <p className='text-lg text-black font-semibold max-md:hidden'>©2021 Finsweet</p>
        </div>
        <nav className='flex gap-10 max-sm:gap-5'>
          <FaFacebook className='text-black duration-300 text-2xl cursor-pointer max-sm:text-lg' />
          <FaTwitter className='text-black duration-300 text-2xl cursor-pointer max-sm:text-lg' />
          <FaInstagram className='text-black duration-300 text-2xl cursor-pointer max-sm:text-lg' />
          <FaLinkedin className='text-black duration-300 text-2xl cursor-pointer max-sm:text-lg' />
        </nav>
      </div>
    </footer>
  )
}

export default Footer