import Image from "next/image";
import Img_Header from "@/assets/Header-Image.svg"
import { FaArrowRightLong } from "react-icons/fa6";
import Logos from "@/assets/Logos.svg"

export default function Home() {
  return (
    <div className="bg-[#232536] container mx-auto">
    <div className="bg-[#232536] flex gap-24"> 
      <div className="w-[624px] pt-52 ml-32">
        <div className="w-6 h-6 bg-[#303242]"></div>
        <b className="text-white text-6xl">Transform Your Idea Into Reality with Finsweet</b>
        <p className="mt-8 text-slate-300">The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.</p>
        <button type="button" className=" flex mt-8 h-16 pt-5 w-48 pl-[38px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Request Quote <FaArrowRightLong className='mt-[5px] ml-2 text-white'/></button>
      </div>
      <div className="mt-24">
        <Image src={Img_Header} alt="image"/>
      </div>
    </div>
    <Image className=" ml-32 mt-8" src={Logos} alt="homiylar"/>
    </div>
  );
}
