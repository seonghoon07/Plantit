"use client"

import * as s from "./style.css"
import Logo from "@/assets/Logo"
import {useEffect} from "react";
import {useRouter} from "next/navigation";

const StartPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/login");
    }, 1000)
  }, []);

  return (
    <div className={s.background}>
      <Logo />
    </div>
  );
};

export default StartPage;