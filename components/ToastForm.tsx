'use client'
import { toastCloseButton, toastDuration, toastPosition, toastTheme } from '@/store/atom';
import { typeToastDuration, typeToastPosition, typeToastTheme, typeToastType } from '@/types/index';
import React, { useState } from 'react';
import { useAtom} from 'jotai';
import { toast } from 'toastrr';
export default function ToastForm() {
    const [selectedPosition, setSelectedPosition] = useAtom<typeToastPosition>(toastPosition);
    const [infinite, setInfinite] = useState<boolean>(false);
    const [duration, setDuration] = useAtom<typeToastDuration>(toastDuration);
    const [closeButton, setCloseButton] = useAtom<boolean>(toastCloseButton);
    const [theme, setTheme] = useAtom<typeToastTheme>(toastTheme);
    const [toastType, setToastType] = useState<typeToastType>('success');
    const buttonStyle = (selectedValue: string, position: string) => `p-2 sm:px-4 sm:py-2 text-sm font-medium hover:cursor-pointer ${
        selectedValue === position ? 'bg-gray-700 text-white dark:bg-gray-700' : 'text-gray-700 bg-transparent shadow-[inset_0_0_2px_rgba(0,0,0,0.3)]'
    }`;
    const generatePromise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            Math.random() > 0.5 ? resolve(
                1
            ) : reject(1)
            }, 1000);
        });
    }

    function raiseToast() {
        switch(toastType) {
            case 'info':
                toast.info('This is an info toast');
                break;
            case 'success':
                toast.success('This is a success toast');
                break;
            case 'warning':
                toast.warning('This is a warning toast');
                break;
            case 'error':
                toast.error('This is an error toast');
                break;
            case 'promise':
                toast.promise(generatePromise(), {
                    loadingMessage: 'Loading...',
                    successMessage: 'Data fetched successfully',
                    errorMessage: 'Data fetch failed'
                });
                break;
            default:
                toast.info('This is an info toast');
                break;
        }
    }
    return (
        <div className="flex flex-col w-full sm:w-3/4 xl:w-1/2 justify-center p-4">
            <div className="text-3xl sm:text-4xl font-bold text-center my-[20px] underline">Configure & Raise Toast</div>

            <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center mt-4">
                <div className="text-lg font-bold whitespace-nowrap sm:mr-2">Position</div>
                <div className="w-full sm:w-auto overflow-x-auto">
                    <div className="inline-flex rounded-lg shadow-[inset_0_0_2px_rgba(0,0,0,0.3)] border border-gray-200 whitespace-nowrap" role="group">
                        <button 
                            type="button" 
                            onClick={() => setSelectedPosition('top-left')}
                            className={`${buttonStyle(selectedPosition,'top-left')} rounded-s-lg`}
                        >
                            Top Left
                        </button>
                        <button 
                            type="button" 
                            onClick={() => setSelectedPosition('top-center')}
                            className={buttonStyle(selectedPosition, 'top-center')}
                        >
                            Top Center
                        </button>
                        <button 
                            type="button" 
                            onClick={() => setSelectedPosition('top-right')}
                            className={buttonStyle(selectedPosition, 'top-right')}
                        >
                            Top Right
                        </button>
                        <button 
                            type="button" 
                            onClick={() => setSelectedPosition('bottom-left')}
                            className={buttonStyle(selectedPosition, 'bottom-left')}
                        >
                            Bottom Left
                        </button>
                        <button 
                            type="button" 
                            onClick={() => setSelectedPosition('bottom-center')}
                            className={buttonStyle(selectedPosition, 'bottom-center')}
                        >
                            Bottom Center
                        </button>
                        <button 
                            type="button" 
                            onClick={() => setSelectedPosition('bottom-right')}
                            className={`${buttonStyle(selectedPosition, 'bottom-right')} rounded-e-lg`}
                        >
                            Bottom Right
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center mt-4">
                <div className="text-lg font-bold whitespace-nowrap sm:mr-2">Duration</div>
                <div className='flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-center w-full'>
                <div className="inline-flex items-center rounded-md" role="group">
                <span className="me-3 text-md font-medium text-gray-900 dark:text-gray-300">Infinite Duration</span>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={infinite} onChange={(e) => { setInfinite(e.target.checked) ; setDuration('infinite') }} className="sr-only peer"/>
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-700"></div>
                </label>
                </div>
                <div className='w-full xs:w-auto flex flex-1'>
                {
                    !infinite ? <input type="number" value={duration} min={1000} onChange={(e) => setDuration(parseInt(e.target.value))} className="w-full p-2 rounded-md border-gray-300 shadow-[inset_0_0_2px_rgba(0,0,0,0.3)]" placeholder='Duration in ms'/>  : null
                }
                </div>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-2 items-start sm:items-center mt-4'>
                <div className='text-lg font-bold whitespace-nowrap sm:mr-2'>Show Close Button</div>
                <div className="inline-flex items-center rounded-md" role="group">
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={closeButton} onChange={(e) => setCloseButton(e.target.checked)} className="sr-only peer"/>
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-700"></div>
                </label>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center mt-4">
                <div className="text-lg font-bold whitespace-nowrap sm:mr-2">Theme</div>
                <div className="w-full sm:w-auto overflow-x-auto">
                    <div className="inline-flex rounded-lg shadow-[inset_0_0_2px_rgba(0,0,0,0.3)] border border-gray-200 whitespace-nowrap" role="group">
                        <button className={`${buttonStyle(theme, 'light')} rounded-s-lg`} onClick={() => setTheme('light')}>Light</button>
                        <button className={`${buttonStyle(theme, 'dark')} rounded-e-lg`} onClick={() => setTheme('dark')}>Dark</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center mt-4">
                <div className="text-lg font-bold whitespace-nowrap sm:mr-2">Toast Type</div>
                <div className="w-full sm:w-auto overflow-x-auto">
                    <div className="inline-flex rounded-lg shadow-[inset_0_0_2px_rgba(0,0,0,0.3)] border border-gray-200 whitespace-nowrap" role="group">
                        <button className={`${buttonStyle(toastType, 'info')} rounded-s-lg`} onClick={() => setToastType('info')}>Info</button>
                        <button className={`${buttonStyle(toastType, 'success')}`} onClick={() => setToastType('success')}>Success</button>
                        <button className={`${buttonStyle(toastType, 'warning')}`} onClick={() => setToastType('warning')}>Warning</button>
                        <button className={`${buttonStyle(toastType, 'error')}`} onClick={() => setToastType('error')}>Error</button>
                        <button className={`${buttonStyle(toastType, 'promise')} rounded-e-lg`} onClick={() => setToastType('promise')}>Promise</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-2 justify-center items-center mt-5'>
                <div>
                    <button className='bg-black text-white px-4 py-2 rounded-md cursor-pointer' onClick={() => raiseToast()}>Raise Toast</button>
                </div>
            </div>
        </div>
    )
}
