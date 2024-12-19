import React from 'react'
import Image from 'next/image'
import Image1 from "@/assets/Image_1.svg"
import Image2 from "@/assets/Image_2.svg"
import Image3 from "@/assets/Image_3.svg"

const Company = () => {
  return (
    <div className='px-32'>
        <div className='container w-full mx-auto p-5 py-24'>
            <div className='flex flex-col mb-16'>
            <p className='text-[#232536] w-[640px]'>COMPANY</p>
                <h1 className='text-[46px] w-[600px] font-bold leading-[68px] text-[#232536]'>Award-winning Company seen and used by millions around the world.</h1>
                <p className='text-[#232536] w-[640px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. </p>
            </div>
            <div className='flex justify-between gap-4'>
                <div className='w-[100%] bg-agent object-cover bg-cover bg-no-repeat bg-center'>
                  <Image src={Image1} alt='rasm'/>
                </div>
                <div className='w-[100%] bg-agentTwo object-cover bg-cover bg-no-repeat bg-center'>
                <Image src={Image2} alt='rasm'/>
                </div>
                <div className='w-[100%] bg-agentThree object-cover bg-cover bg-no-repeat bg-center'>
                <Image className='h-[420px]' src={Image3} alt='rasm'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Company