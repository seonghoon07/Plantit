"use client";

import { atom } from "jotai";

export interface User {
  email: string;
  name: string;
  level: string;
  percent: string;
}

export const userAtom = atom<User | null>(null);

export const setUserAtom = atom(
  (get) => get(userAtom),
  (get, set, newUser: User | null) => {
    set(userAtom, newUser);
  }
);
