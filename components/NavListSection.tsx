/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface NavListSectionProps {
  title: string;
  items: any[];
  isVisible: boolean;
  bottomAlignment?: boolean;
}

const NavListSection: React.FC<NavListSectionProps> = ({
  title,
  items,
  isVisible,
  bottomAlignment = false,
}) => {
  return (
    <div
      className={`absolute z-20 left-0 top-0 bottom-0 h-full w-full transition-[opacity,visibility] ease-in-out duration-[350ms] px-6 pt-28 pb-24 ${
        bottomAlignment ? "flex items-end justify-start pb-20" : ""
      } ${isVisible ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <ul className="header-nav-list">
        <li
          className={`md:hidden z-10 mb-6 font-bold transition-[opacity,visibility,transform] ease-in-out duration-1000 delay-[200ms]  pointer-events-none ${
            isVisible
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible -translate-x-[10px]"
          }`}
        >
          <h3>{title}</h3>
        </li>
        {items.map(({ label, href }, index) => (
          <li
            key={index}
            className={`font-bold z-20 text-2xl leading-tight transition-[opacity,visibility,transform] ease-in-out duration-1000 pointer-events-none ${
              isVisible
                ? "opacity-100 visible translate-x-0"
                : "opacity-0 invisible -translate-x-[10px]"
            }`}

            style={{ transitionDelay: `${250 + index * 50}ms` }}
          >
            <a  href={href} aria-disabled="false">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavListSection;
