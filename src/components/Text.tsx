"use client";

import { useRecoilValue } from "recoil";
import { fontSizeState } from "./FontButton";

export default function Text() {
  const fontSize = useRecoilValue(fontSizeState);
  return (
    <p style={{ fontSize }}>This text will increase if you click the button</p>
  );
}
