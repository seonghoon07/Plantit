"use client"

import * as s from "./style.css"
import Logo from "@/assets/Logo"
import Trees from "@/assets/Trees"
import Google from "@/assets/Google"
import {customAxios} from "@/utils/customAxios";

const Login = () => {
  const handleGoogleLoginClick = async () => {
    try {
      const { data } = await customAxios.get("/auth/google/link")
      if (data) {
        window.location.href = data.data;
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className={s.background}>
      <div className={s.contentWrapper}>
        <div className={s.infoWrapper}>
          <div className={s.logoWrapper}>
            <Logo />
            <p className={s.subTitle}>
              눈으로 보는 일기장
            </p>
          </div>
          <div className={s.treesLayout}>
            <Trees />
          </div>
        </div>
        <div className={s.loginWrapper}>
          <div className={s.devideLayout}>
            <div className={s.devideLine} />
              <p className={s.easyLoginText}>간편 로그인</p>
            <div className={s.devideLine} />
          </div>
          <button className={s.googleLoginLayout} onClick={handleGoogleLoginClick}>
            <Google />
            <div className={s.googleLoginTextLayout}>
              <p className={s.googleLoginText}>구글 로그인</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;