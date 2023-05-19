import Image from "next/image"
import Link from 'next/link'
import { FaLock, FaUser } from 'react-icons/fa'

export default function Home() {
  return (
    <>
    {/* Contaoner */}
    <div className="bg-gradient-to-r from-blue-300 via-white to-blue-300 block h-screen items-center justify-center p-4 md:flex">
      {/* Login Card */}
      <div className="bg-cover bg-image flex flex-col items-center max-w-screen-lg overflow-hidden rounded-lg shadow-lg text-gray-600 w-full md:flex-row">
        {/* Image */}
        <div className="backdrop-blur-md backdrop-filter flex flex-col items-center justify-center p-4 w-full md:w-1/2">
        <Image src="/Logo.png" alt="logo.png" width={300} height={300} />
          <p className="text-black font-medium">Berkualitas dan Cepat</p>
        </div>

        {/* Form */}
        <div className="bg-white flex flex-col items-center p-4 space-y-8 w-full md:w-1/2">
          {/* welcome */}
          <div className="flex flex-col items-center">
            <h1 className="font-medium text-blue-400 -text-xl">Welcome Back</h1>
            <p>Login to Yout Account</p>
          </div>

          {/* input */}
          <form className="flex flex-col items-center space-y-4">
            <div className="relative">
              <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400"><FaUser /></span>
              <input className="border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300" placeholder="username..." type="text"/>
            </div>
            <div className="relative">
              <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400"><FaLock /></span>
              <input className="border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300" placeholder="password..." type="password"/>
            </div>
            <button className="bg-blue-400 font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-blue-500" type="submit">
              <FaUser className="mr-2" /> Login
            </button>
          </form>

          {/* link */}
          <div className="flex flex-col items-center">
            <p className="italic">
              join us now.
              <Link href="/" className="ml-1 text-blue-500 hover:underline"> Register Here</Link>
              .
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
} 