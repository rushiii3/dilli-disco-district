import Navbar2 from "@/components/navbar2";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar2 />
      {children}
    </>
  );
}
