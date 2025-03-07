'use client'
import { useState } from 'react';
import ToasterPropsTable from './ToasterPropsTable';
import ToastPropsTable from './ToastPropsTable';

export default function ConfigurationList() {
    const [selectedTab, setSelectedTab] = useState<'toaster' | 'toast'>('toaster');
    const [selectedToastType, setSelectedToastType] = useState<'regular' | 'promise'>('regular');
    
    const buttonStyle = (selectedValue: string, current: string) => `px-3 py-2 sm:px-4 sm:py-2 text-sm font-medium hover:cursor-pointer ${
        selectedValue === current ? 'bg-gray-700 text-white dark:bg-gray-700' : 'text-gray-700 bg-transparent shadow-[inset_0_0_2px_rgba(0,0,0,0.3)]'
    }`;

    return (
        <div className="flex flex-col w-full sm:w-3/4 xl:w-1/2 justify-center p-4">
            <div className="text-3xl sm:text-4xl font-bold text-center my-[20px] underline">Configuration Options</div>
            <div className='flex flex-row gap-2 items-center justify-center mb-4'>
                <div className='inline-flex rounded-md' role="group">
                    <button 
                        className={`${buttonStyle(selectedTab, 'toaster')} rounded-s-lg`} 
                        onClick={() => setSelectedTab('toaster')}
                    >
                        Toaster Component
                    </button>
                    <button 
                        className={`${buttonStyle(selectedTab, 'toast')} rounded-e-lg`} 
                        onClick={() => setSelectedTab('toast')}
                    >
                        Toast Function
                    </button>
                </div>
            </div>
            <div>
                {selectedTab === 'toaster' ? (
                    <ToasterPropsTable/>
                ) : (
                    <>
                    <div className='flex flex-row gap-2 items-center justify-center mb-4'>
                        <select
                            value={selectedToastType}
                            onChange={(e) => setSelectedToastType(e.target.value as 'regular' | 'promise')}
                            className="px-4 pr-8 py-2 text-sm font-medium rounded-md 
                                text-gray-700 bg-transparent 
                                shadow-[inset_0_0_2px_rgba(0,0,0,0.3)]
                                dark:text-white
                                hover:cursor-pointer 
                                focus:outline-none"
                        >
                            <option value="regular">Regular Toast</option>
                            <option value="promise">Promise Toast</option>
                        </select>
                    </div>
                    <ToastPropsTable toastType={selectedToastType}/>
                    </>
                )}
            </div>
        </div>
    )
}
