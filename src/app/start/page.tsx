"use client"

import * as s from "./style.css"
import Logo from "@/assets/Logo"
import {useEffect} from "react";
import {redirect} from "next/navigation";

const StartPage = () => {
  useEffect(() => {
    setTimeout(() => {
      redirect("/login");
    }, 1000)
  }, []);

  return (
    <div className={s.background}>
      <Logo />
    </div>
  );
};

export default StartPage;