"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useMenuStore } from "@/store/useMenuStore";

const Navbar2 = () => {
  const collectionMenu = useMenuStore((s) => s.collectionMenu);  
  const [backdrop, setBackdrop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpenMenu = () => {
    setBackdrop(!backdrop);
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header
        className="fixed top-0 w-full  hidden lg:flex justify-center items-center p-[20px]"
        style={{ zIndex: 10 }}
      >
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
        <div className="flex flex-row items-center justify-between z-[100] w-[330px]">
          <button onClick={handleOpenMenu}>collection</button>
          {/* <Link href={"/"}>collection</Link> */}
          {/* <Link href={"/"}>view</Link> */}
          <Link href={"/checkout"}>bag</Link>
        </div>
      </header>
      <header
        className="lg:hidden flex px-[10px] py-[10px] w-full justify-between items-center fixed left-0 h-[48px]"
        style={{ zIndex: 10 }}
      >
        <div>
          <Link href={"/"}>info</Link>
        </div>
        <div>
          <Link href={"/checkout"}>bag</Link>
        </div>
      </header>
      <div className="fixed lg:hidden left-0 pointer-events-none h-[48px] mx-auto z-[1000] flex items-center justify-center w-full min-w-full">
        <p>Dilli Disco District</p>
      </div>
      <div className="fixed lg:hidden bottom-0 left-0 right-0 w-full h-[120px] flex justify-between items-end z-[500] px-[5px] py-[20px] bg-[linear-gradient(0deg,_rgba(231,236,234,1)_42%,_rgba(231,236,234,0)_100%)]">
        <div className="flex flex-row items-center justify-between pr-[80px] w-[330px]">
          {/* <Link href={"/"}>view</Link> */}
        </div>
        <div className="flex items-end justify-end">
          <button onClick={handleOpenMenu} className="ml-0 whitespace-nowrap px-[15px] py-[6px]">collection</button>
          <Link
            href={"/"}
            className="ml-0 whitespace-nowrap px-[15px] py-[6px]"
          >
            refine
          </Link>
          <Link
            href={"/"}
            className="m-0 h-[32px] px-[15px] py-[6px] leading-[1] relative"
          >
            🔍
          </Link>
          <Link
            href={"/"}
            className="m-0 h-[32px] px-[15px] py-[6px] leading-[1] relative"
          >
            ↑
          </Link>
        </div>
      </div>
      {backdrop && <div className="fixed top-0 left-0 w-screen h-screen z-[9] bg-[linear-gradient(rgba(231,236,234,0)_0%,rgba(231,236,234,0.9)_60%)] lg:bg-[linear-gradient(#e7ecea_10%,rgba(231,236,234,0)_80%)] mt-0 opacity-100 pointer-events-auto"></div>}
      {menuOpen && <div className="fixed lg:top-0 lg:right-[220px] lg:bottom-auto top-auto bottom-[80px] right-[20px] justify-end items-end lg:mt-[90px] pb-5 w-[120px] text-black z-[10] flex flex-col opacity-100">
        <ul>
          {
            collectionMenu.map((item, index) => (
              <li key={index} className="mb-2">
                <Link href={`/collections/${item.handle}`} className="text-sm">
                  {item.title}
                </Link>
              </li>
            ))  
          }
        </ul>
      </div>}
    </>
  );
};

export default Navbar2;
