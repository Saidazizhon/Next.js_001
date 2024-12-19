import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='container w-full mx-auto px-32'>
       <div className="py-16 flex justify-between items-start">
        <div className="max-w-xl space-y-8">
          <div>
            <p className="text-sm text-gray-600 uppercase tracking-wide mb-4">Contact us</p>
            <h1 className="text-4xl font-bold leading-tight">
              Have a Question ?<br />
              Let's Get in Touch with us 👋
            </h1>
            <p className="text-gray-600 mt-4">Fill up the Form and ou team will get back to within 24 hrs</p>
          </div>
          <form className="space-y-6">
            <div className="space-y-1">
              <label className="text-sm text-gray-600">Name</label>
              <input 
                type="text"
                placeholder='Your Name'
                className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-[#5D5DFF]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-600">E-mail</label>
              <input 
                type="email"
                placeholder='Enter Your Email'
                className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-[#5D5DFF]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-600">Subject</label>
              <input 
                type="text"
                className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-[#5D5DFF]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-600">Message</label>
              <textarea 
                placeholder="Type your Message..."
                className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-[#5D5DFF] min-h-[100px]"
              />
            </div>
            <button className="bg-[#666DFF] text-white px-6 py-3 rounded flex items-center gap-2 text-sm">
              Send Message
              <span>→</span>
            </button>
          </form>
        </div>
        <div className="bg-[#5D5DFF] text-white p-12 rounded-lg w-[400px]">
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium mb-4">Location</h3>
              <p>DLF Cybercity, Bhubaneswar,<br />India, &52050</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Working Hour</h3>
              <p>Monday To Friday<br />9:00 AM to 8:00 PM</p>
              <p className="text-sm mt-2 text-white/80">Our Support Team is available 24Hrs</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Contact Us</h3>
              <p className="text-xl font-medium">020 7993 2905</p>
              <p className="text-sm mt-1">Hello@ether.com</p>
            </div>
            <div className="flex gap-4">
              <FaFacebookF size={20} className="text-white hover:text-white/80 cursor-pointer" />
              <FaTwitter size={20} className="text-white hover:text-white/80 cursor-pointer" />
              <FaInstagram size={20} className="text-white hover:text-white/80 cursor-pointer" />
              <FaLinkedinIn size={20} className="text-white hover:text-white/80 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact