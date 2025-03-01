'use client'

import React from 'react';
import { useAtomValue } from "jotai";
import { Toaster } from "toastrr";
import { toastCloseButton, toastDuration, toastPosition, toastTheme } from "@/store/atom";

export default function ToasterWrapper() {
  const position = useAtomValue(toastPosition);
  const theme = useAtomValue(toastTheme);
  const duration = useAtomValue(toastDuration);
  const closeButton = useAtomValue(toastCloseButton);

  return (
    <Toaster
      position={position}
      theme={theme}
      duration={duration}
      closeButton={closeButton}
    />
  );
}