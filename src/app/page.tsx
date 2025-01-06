"use client"

import * as s from "./page.css"
import Logo from "@/assets/Logo"
import {useEffect} from "react";
import {useRouter} from "next/navigation";

const StartPage = () => {
  const router = useRouter();
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setTimeout(() => {
        router.push("/home");
      }, 1000)
    } else {
      setTimeout(() => {
        router.push("/login");
      }, 1000)
    }
  }, []);

  return (
    <div className={s.background}>
      <Logo />
    </div>
  );
};

export default StartPage;