"use client";

import { useEffect } from "react";
import { authorizeAccess } from "./authService";

export const useAuthService = () => {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    const error = searchParams.get("error");

    if (code) {
      (async () => {
        try {
          await authorizeAccess(code);
        } catch (err) {
          console.error(err);
        }
      })();
    } else if (error) {
      window.location.replace("/login");
    }
  }, []);
};
