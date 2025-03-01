import CodeBlock from "./CodeBlock"

export default function StepsToUse() {
    const toasterCode = `import { Toaster } from 'toastrr';

export default function App() {
    return (
        <div>
            <Toaster 
                position="top-right"
                theme="light"
                duration={3000}
                closeButton={true}
            />
            <MyComponent />
            <MyComponent2 />
        </div>
    )
}`;

    const toastCode = `import { toast } from 'toastrr';

function showToast() {
    toast.success('This is an info toast', {
        theme: 'dark',
        duration: 'infinite',
        closeButton: true
    });
}`;

    return (
        <div className="flex flex-col w-full sm:w-3/4 xl:w-1/2 justify-center p-4" id="documentation">
            <div className="text-3xl sm:text-4xl font-bold text-center my-[20px] underline">Get Started</div>
            <div className='mb-4'>
                <div className='text-lg font-bold flex flex-row items-center gap-2'>
                    <div className="text-xl bg-black text-white rounded-full p-3 w-[20px] h-[20px] flex items-center justify-center">1</div>
                    <div>Install the package</div>
                </div>
                <div>
                  <CodeBlock code={`npm install toastrr`} />
                </div>
        
            </div>
            <div className='mb-4'>
                <div className='text-lg font-bold flex flex-row items-center gap-2'>
                    <div className="text-xl bg-black text-white rounded-full p-3 w-[20px] h-[20px] flex items-center justify-center">2</div>
                    <div>Import the Toaster component</div>
                </div>
                <div>
                    <CodeBlock code={toasterCode} iconAtTopRight={true} />
                </div>
            </div>
            <div className='mb-4'>
                <div className='text-lg font-bold flex flex-row items-center gap-2'>
                    <div className="text-xl bg-black text-white rounded-full p-3 w-[20px] h-[20px] flex items-center justify-center">3</div>
                    <div>Start calling the toasts from anywhere in your app</div>
                </div>
                <div>
                    <CodeBlock code={toastCode} iconAtTopRight={true} />
                </div>
                <div className="text-md text-gray-700">
                    Note, the configurations passed to the toast function will override the default configurations set in the Toaster component.
                </div>
            </div>
        </div>
    )
}
