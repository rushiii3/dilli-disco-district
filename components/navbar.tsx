"use client";
import React from "react";
import Link from "next/link";
import { useUIStore } from "../store/useDrawerStore";
import NavListSection from "./NavListSection";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const {
    isDrawerOpen,
    openDrawer,
    openDropdown,
    isMainMenuOpen,
    isDropdownOpen,
    closeDrawer,
    closeDropdown,
    isCartOpen,
    openCart,
    closeCart,
  } = useUIStore();
  const menuItems = [
    { label: "Albums", href: "#", delay: "250ms" },
    { label: "Projects", href: "#", delay: "300ms" },
    { label: "Tour", href: "/pages/tour", delay: "350ms" },
    { label: "Shop All", href: "/collections/shop-all", delay: "400ms" },
  ];
  const containerVariants = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.08,
        staggerDirection: -1, // Animate children in reverse order
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -10,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: -10,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };
  const exploreItems = [
    { label: "Front", href: "/rooms/front", delay: "250ms" },
    { label: "Studio", href: "/rooms/studio", delay: "300ms" },
    { label: "Lounge", href: "/rooms/lounge", delay: "350ms" },
    { label: "Bedroom", href: "/rooms/bedroom", delay: "400ms" },
    { label: "Closet", href: "/rooms/closet", delay: "450ms" },
    {
      label: "El Chico Studios",
      href: "/rooms/el-chico-studios",
      delay: "500ms",
    },
    { label: "Air Drake", href: "/rooms/air-drake", delay: "550ms" },
    { label: "Pool", href: "/rooms/pool", delay: "600ms" },
    { label: "Kitchen", href: "/rooms/kitchen", delay: "650ms" },
    { label: "Court", href: "/", delay: "700ms", disabled: true },
    { label: "Garage", href: "/", delay: "750ms", disabled: true },
  ];

  const albumLinks = [
    {
      label: "$ome $exy $ongs 4 U",
      href: "/collections/some-sexy-songs-4-u",
      delay: "250ms",
    },
    {
      label: "For All The Dogs",
      href: "/collections/for-all-the-dogs",
      delay: "300ms",
    },
    { label: "Her Loss", href: "/collections/her-loss", delay: "350ms" },
    {
      label: "Honestly, Nevermind",
      href: "/collections/honestly-nevermind",
      delay: "400ms",
    },
    {
      label: "Certified Lover Boy",
      href: "/collections/certified-lover-boy",
      delay: "450ms",
    },
    {
      label: "Dark Lane Demo Tapes",
      href: "/collections/dark-lane-demo-tapes",
      delay: "500ms",
    },
    { label: "Scorpion", href: "/collections/scorpion", delay: "550ms" },
    { label: "More Life", href: "/collections/more-life", delay: "600ms" },
    { label: "Views", href: "/collections/views", delay: "650ms" },
    { label: "Take Care", href: "/collections/take-care", delay: "700ms" },
    {
      label: "Thank Me Later",
      href: "/collections/thank-me-later",
      delay: "750ms",
    },
    { label: "So Far Gone", href: "/collections/so-far-gone", delay: "800ms" },
    {
      label: "If You’re Reading This…",
      href: "/",
      delay: "850ms",
      disabled: true,
    },
    {
      label: "Nothing Was The Same",
      href: "/",
      delay: "900ms",
      disabled: true,
    },
  ];

  const projects = [
    {
      name: "DreamCrew",
      link: "https://dreamcrew.com/",
    },
    {
      name: "El Chico Studios",
      link: "/collections/el-chico-studios",
    },
    {
      name: "NOCTA",
      link: "https://www.nocta.com/",
    },
    {
      name: "Octobers Very Own",
      link: "https://octobersveryown.com",
    },
    {
      name: "OVO Sound",
      link: "https://www.ovosound.com/",
    },
    {
      name: "Sound42",
      link: "https://player.siriusxm.com/sound42",
    },
    {
      name: "Better World Fragrance House",
      link: "https://www.betterworldfragrancehouse.co/",
    },
  ];

  const drawerVariants = {
    hidden: { x: "-100%" }, // Completely off-screen to left
    visible: {
      x: 0,
      transition: {
        type: "tween",
        ease: [0.165, 0.84, 0.44, 1],
        duration: 0.5,
      },
    },
    exit: { x: "-100%", transition: { duration: 0.4 } },
  };
  const handleDropDown = () => {
    console.log("Dropdown clicked");

    openDropdown();
  };
  return (
    <header
      role="banner"
      className="fixed left-0 bottom-6 md:bottom-auto md:top-0 w-full md:h-full z-50 pointer-events-none -type-alternate"
    >
      <div className="flex justify-between items-center md:h-[72px] pointer-events-auto mx-6 text-white">
        <nav>
          <ul className="header-nav-list flex items-center gap-7 relative z-20">
            <li className="hidden md:block">
              <button
                className="text-base font-semibold transition-opacity duration-300 px-2.5 z-10"
                aria-disabled="false"
                onClick={handleDropDown}
              >
                Albums
              </button>
            </li>
            <li className="hidden md:block">
              <button
                className="text-base font-semibold transition-opacity duration-300 px-2.5 z-10"
                aria-disabled="false"
                onClick={handleDropDown}
              >
                Projects
              </button>
            </li>
            <li className="hidden md:block">
              <a
                className="text-base font-semibold transition-opacity duration-300 px-2.5 z-10"
                href="/pages/tour"
                aria-disabled="false"
                data-discover="true"
              >
                Tour
              </a>
            </li>
            <li className="hidden md:block">
              <Link
                className="text-base font-semibold transition-opacity duration-300 px-2.5 z-10"
                href={"/product"}
                aria-disabled="false"
                data-discover="true"
              >
                Shop All
              </Link>
            </li>
            <li className="hidden md:block">
              <button
                className="text-base font-semibold transition-opacity duration-300 px-2.5 z-10 fixed bottom-6 left-6"
                aria-disabled="false"
              >
                Explore
              </button>
            </li>
            <li className="hidden md:block">
              <button className="text-base font-semibold transition-opacity duration-300 px-2.5 z-10 fixed bottom-6 right-6">
                ®
              </button>
            </li>
            <li className="md:hidden">
              <AnimatePresence mode="wait">
                {isDrawerOpen ? (
                  isDropdownOpen ? (
                    <motion.button
                      key="back"
                      onClick={closeDropdown}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="text-neutral-300 border-neutral-300 font-bold antialiased cursor-pointer px-2 h-10 relative border block"
                    >
                      Back
                    </motion.button>
                  ) : (
                    <motion.button
                      key="close"
                      onClick={closeDrawer}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="text-neutral-300 border-neutral-300 font-bold antialiased cursor-pointer px-2 h-10 relative border block"
                    >
                      Close
                    </motion.button>
                  )
                ) : (
                  <motion.button
                    key="menu"
                    onClick={openDrawer}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="text-neutral-300 border-neutral-300 font-bold antialiased cursor-pointer px-2 h-10 relative border block"
                  >
                    Menu
                  </motion.button>
                )}
              </AnimatePresence>
            </li>
          </ul>
          <AnimatePresence>
            {isDrawerOpen && (
              <motion.div
                role="dialog"
                aria-modal="true"
                className="fixed md:absolute z-10 top-0 bottom-0 max-w-[353px] w-full left-0 text-left"
                style={{ width: "calc(-135px + 100vw)" }}
                variants={drawerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div
                  className="absolute z-10 left-0 top-0 bottom-0 h-full w-full flex flex-col justify-between items-start py-28 px-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <AnimatePresence mode="wait">
                    {isMainMenuOpen && (
                      <>
                        {/* Main Menu Section */}
                        <motion.ul
                          className="header-nav-list"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          key="mainMenu"
                        >
                          {menuItems.map(({ label, href }) => {
                            const isDropdownTrigger = href === "#";
                            return (
                              <motion.li
                                key={label}
                                variants={itemVariants}
                                className="font-bold text-2xl leading-tight"
                              >
                                {isDropdownTrigger ? (
                                  <button
                                    type="button"
                                    onClick={handleDropDown}
                                    className="block w-full text-left"
                                  >
                                    {label}
                                  </button>
                                ) : (
                                  <a href={href} aria-disabled={false}>
                                    {label}
                                  </a>
                                )}
                              </motion.li>
                            );
                          })}
                        </motion.ul>

                        {/* Explore Section */}
                        <motion.ul
                          className="header-nav-list"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          key="exploreMenu"
                        >
                          {/* Heading */}
                          <motion.li
                            className="md:hidden mb-6 font-bold"
                            variants={headingVariants}
                            key="heading"
                          >
                            <h3>Explore</h3>
                          </motion.li>

                          {/* Items */}
                          {exploreItems.map(
                            ({ label, href, disabled }, index) => (
                              <motion.li
                                key={index}
                                variants={itemVariants}
                                className="font-bold text-2xl leading-tight"
                              >
                                <a
                                  href={href}
                                  aria-disabled={disabled ? "true" : "false"}
                                  className={
                                    disabled
                                      ? "pointer-events-none opacity-20"
                                      : ""
                                  }
                                >
                                  {label}
                                </a>
                              </motion.li>
                            )
                          )}
                        </motion.ul>
                      </>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Bottom Sections (can animate them too if you want) */}
                <NavListSection
                  title="Albums"
                  items={albumLinks}
                  isVisible={isDropdownOpen}
                />
                <NavListSection
                  title="Projects"
                  items={projects}
                  isVisible={false}
                />
                <NavListSection
                  title="Explore"
                  items={exploreItems}
                  isVisible={false}
                  bottomAlignment
                />
              </motion.div>
            )}
          </AnimatePresence>
          {/* socials */}
          <motion.div
            role="dialog"
            aria-modal="true"
            style={{ maxWidth: "135px" }}
            className="fixed md:absolute top-0 bottom-0 max-w-[353px] w-full right-0 text-right"
            initial={{ x: 100 }}
            animate={{
              x: isMainMenuOpen ? 0 : 100,
              transition: { duration: 0.35, ease: "easeInOut" },
            }}

            // transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.div
              className="absolute left-0 top-0 bottom-0 h-full w-full flex flex-col justify-end items-end py-28 px-6 md:pb-20"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isMainMenuOpen ? 1 : 0,
                transition: { duration: 0.35, ease: "easeInOut" },
              }}
            >
              <motion.ul
                className="header-nav-list"
                initial={{ opacity: 0, x: 10 }}
                animate={{
                  opacity: isDrawerOpen ? 1 : 0,
                  x: isDrawerOpen ? 0 : 10,
                  transition: {
                    duration: 1,
                    delayChildren: 0.2,
                    staggerChildren: 0.1,
                  },
                }}
              >
                {[
                  {
                    href: "https://www.instagram.com/drakerelated/",
                    label: "Instagram",
                    delay: 0.25,
                  },
                  {
                    href: "https://www.facebook.com/Drakerelated/",
                    label: "Facebook",
                    delay: 0.3,
                  },
                  {
                    href: "https://twitter.com/drakerelated",
                    label: "Twitter",
                    delay: 0.35,
                  },
                  {
                    href: "/pages/subscribe",
                    label: "Subscribe",
                    delay: 0.25,
                    disabled: true,
                  },
                  {
                    href: "/policies/terms-of-service",
                    label: "Terms",
                    delay: 0.3,
                    disabled: true,
                  },
                  {
                    href: "/policies/privacy-policy",
                    label: "Privacy",
                    delay: 0.35,
                    disabled: true,
                  },
                  {
                    href: "/pages/faqs",
                    label: "FAQ",
                    delay: 0.4,
                    disabled: true,
                  },
                ].map(({ href, label, delay, disabled = false }, index) => (
                  <motion.li
                    key={index}
                    className={`font-bold text-base leading-tight transition-all ease-in-out duration-1000 ${
                      disabled && "pointer-events-none"
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: isDrawerOpen ? 1 : 0,
                      x: isDrawerOpen ? 0 : -10,
                      transition: { delay, duration: 0.5 },
                    }}
                  >
                    <a href={href} aria-disabled={disabled}>
                      {label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          <AnimatePresence>
            {isCartOpen && (
              <motion.div
                initial={{ right: "-100%" }} // Start off-screen (right)
                animate={{ right: "0%" }} // Animate into view
                exit={{ right: "-100%" }} // Animate out of view
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="md:w-2/5 w-4/5 max-w-sm p-6 pt-[10px] pb-20 bg-white md:border-l md:border-l-black fixed shadow-2xl shadow-neutral-800 text-black top-0 h-full z-[41]"
              >
                <div className="grid">
                  <div className="h-screen flex flex-col">
                    <div className="h-18 px-1 border-b-black flex items-center justify-between">
                      <button
                        className="font-semibold hidden cursor-pointer md:block antialiased"
                        onClick={closeCart}
                      >
                        Close
                      </button>
                      <button className="font-semibold cursor-pointer hidden md:block antialiased">
                        Cart (0)
                      </button>
                      <button className="font-semibold block md:hidden antialiased">
                        Cart
                      </button>
                      <button
                        onClick={closeCart}
                        className="font-semibold cursor-pointer block md:hidden text-neutral-300 antialiased"
                      >
                        Close
                      </button>
                    </div>
                    <section
                      aria-labelledby="cart-contents"
                      className="overflow-y-scroll scrollbar-hidden antialiased"
                    >
                      <ul className="flex flex-col"></ul>
                    </section>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
        <h1 className="left-1/2 -translate-x-1/2 fixed top-10  md:absolute md:top-auto">
          <Link className="font-bold" data-discover="true" href="/">
            Dilli Disco District
          </Link>
        </h1>
        <div className="flex items-center">
          <button
            id="close-btn-cart"
            type="button"
            onClick={openCart}
            className="text-neutral-300 border-neutral-300 md:text-[inherit] md:border-none font-bold cursor px-2 h-8 relative border block cursor-pointer"
          >
            Cart <span className="hidden md:inline">( </span>0
            <span className="hidden md:inline"> )</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
