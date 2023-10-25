"use client";

import { atom, useRecoilState } from "recoil";

export const fontSizeState = atom({
  key: "fontSizeState",
  default: 14,
});

export default function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);

  return (
    <button
      onClick={() => setFontSize((size) => size + 1)}
      style={{ fontSize }}
    >
      Click to Enlarge
    </button>
  );
}
