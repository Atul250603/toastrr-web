'use client'
import { atom } from 'jotai';
import { typeToastDuration, typeToastPosition, typeToastTheme } from '@/types';

export const toastPosition = atom<typeToastPosition>('top-right');
export const toastTheme = atom<typeToastTheme>('light');
export const toastDuration = atom<typeToastDuration>(3000);
export const toastCloseButton = atom<boolean>(true);
