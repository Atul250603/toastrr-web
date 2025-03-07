'use client'
import { typeToastTheme, typeToastType } from "@/types";
import CodeBlock from "./CodeBlock";
import { toast } from 'toastrr';
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import Notification from "@/public/notification.json"
import Link from "next/link";
export default function Hero() {
  const toastTypes: typeToastType[] = ['info', 'success', 'warning', 'error'];
  const themeTypes: typeToastTheme[] = ['light', 'dark'];
  const raiseToast = () => {
    const randomToastType: typeToastType = toastTypes[Math.floor(Math.random() * toastTypes.length)];
    const randomThemeType: typeToastTheme = themeTypes[Math.floor(Math.random() * themeTypes.length)];
    switch(randomToastType) {
      case 'info':
        toast.info('This is an info toast', {
          theme: randomThemeType,
          duration: 3000
        });
        break;
      case 'success':
        toast.success('This is a success toast', {
            theme: randomThemeType,
            duration: 3000
        });
        break;
      case 'warning':
        toast.warning('This is a warning toast', {
            theme: randomThemeType,
            duration: 3000
        });
        break;
      case 'error':
        toast.error('This is an error toast', {
            theme: randomThemeType,
            duration: 3000
        });
        break;
      default:
        toast.info('This is an info toast', {
            theme: randomThemeType,
            duration: 3000
        });
        break;
    }
  }
  return(
    <div className="flex flex-col w-full sm:w-3/4 xl:w-1/2 items-center justify-center p-4">
        <div className="flex flex-row items-center justify-center mb-3">
            <div className="w-[40px] h-[40px] -rotate-90">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#9ea6ae" d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg>
            </div>
            <div className="w-[50px] h-[50px]">
                <Lottie animationData={Notification} loop={true} />
            </div>
            <div className="w-[40px] h-[40px] rotate-90">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#9ea6ae" d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg>
            </div>
        </div>
        <span className="text-4xl sm:text-5xl font-bold mb-3">Toastrr</span>
        <span className="text-xl mb-3 text-center">The Coolest Toast Notifications Library Out There</span>
        <div className="flex flex-row gap-2 mb-3">
          <button className="bg-black text-white px-4 py-2 rounded-md cursor-pointer" onClick={raiseToast}>Random Toast</button>
          <a className="button bg-gray-100 text-black px-4 py-2 rounded-md shadow-[inset_0_0_2px_rgba(0,0,0,0.3)] cursor-pointer" href="https://github.com/Atul250603/toastrr" target="_blank">Github</a>
        </div>
        <Link href="#documentation" className="mb-3 underline cursor-pointer">
          Documentation
        </Link>
        <div className="mt-4 w-3/4 md:w-1/2">
          <CodeBlock code={ 'npm install toastrr' }/>
        </div>
    </div>
  )
}
