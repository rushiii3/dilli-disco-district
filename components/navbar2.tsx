import React from 'react'
import Link from "next/link";

const Navbar2 = () => {
  return (
    <>
    <header className="fixed top-0 w-full  hidden lg:flex justify-center items-center p-[20px] z-[99]">
        <div className="flex flex-row items-center justify-between pr-[80px] w-[330px]">
          <Link href={"/"}>SHOP</Link> <Link href={"/"}>HEHEEH</Link>
        </div>
        <div
          className="flex justify-center items-center"
          style={{ width: "calc(100% - 330px - 330px)" }}
        >
          {" "}
          <div className="min-w-[140px] w-[10%] pointer-events-none opacity-100 transition-all duration-500 ease-in-out z-[100]">
            Dilli Disco District
          </div>
        </div>
        <div className="flex flex-row items-center justify-between z-[100] pointer-events-none w-[330px]">
          <Link href={"/"}>collection</Link>
          <Link href={"/"}>view</Link>
          <Link href={"/"}>bag</Link>
        </div>
      </header>
      <header className="lg:hidden flex px-[10px] py-[10px] w-full justify-between items-center fixed left-0 h-[48px] pointer-events-auto">
        <div>
          <Link href={"/"}>info</Link>
        </div>
        <div>
          <Link href={"/"}>bag</Link>
        </div>
      </header>
      <div className="fixed lg:hidden left-0 pointer-events-none h-[48px] mx-auto z-[1000] flex items-center justify-center w-full min-w-full">
        <p>Dilli Disco District</p>
      </div>
      <div className="fixed lg:hidden bottom-0 left-0 right-0 w-full h-[120px] flex justify-between items-end z-[500] px-[5px] py-[20px] bg-[linear-gradient(0deg,_rgba(231,236,234,1)_42%,_rgba(231,236,234,0)_100%)]">
        <div className="flex flex-row items-center justify-between pr-[80px] w-[330px]">
          <Link href={"/"}>view</Link>
        </div>
        <div className="flex items-end justify-end">
          <Link href={"/"} className="ml-0 whitespace-nowrap px-[15px] py-[6px]">collection</Link>
          <Link href={"/"} className="ml-0 whitespace-nowrap px-[15px] py-[6px]">refine</Link>
          <Link href={"/"} className="m-0 h-[32px] px-[15px] py-[6px] leading-[1] relative">🔍</Link>
          <Link href={"/"} className="m-0 h-[32px] px-[15px] py-[6px] leading-[1] relative">↑</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar2