"use client";

import * as s from "./style.css";
import Home from "@/assets/home";
import Diary from "@/assets/diary";
import Profile from "@/assets/profile";
import { usePathname, useRouter } from "next/navigation";
import theme from "@/styles/theme.css";

const Navbar = () => {
  const currentPath = usePathname();
  const router = useRouter(); // 라우터 객체 가져오기

  const navItems = [
    { id: 1, icon: <Home color={currentPath === "/home" ? theme.green[100] : theme.white} />, text: "홈", path: "/home" },
    { id: 2, icon: <Diary color={currentPath === "/diary" ? theme.green[100] : theme.white} />, text: "일기", path: "/diary" },
    { id: 3, icon: <Profile color={currentPath === "/profile" ? theme.green[100] : theme.white} />, text: "프로필", path: "/profile" },
  ];

  return (
    <div className={s.container}>
      {navItems.map((navItem) => {
        const isActive = currentPath === navItem.path;
        return (
          <div
            key={navItem.id}
            className={s.itemWrapper}
            onClick={() => router.push(navItem.path)}
          >
            {navItem.icon}
            <p
              className={s.itemText}
              style={{ color: isActive ? theme.green[100] : theme.white }}
            >
              {navItem.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
