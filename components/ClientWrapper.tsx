'use client'

import React, { Suspense } from 'react';
import { Provider } from "jotai";
import ToasterWrapper from "@/components/ToastWrapper";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={null}>
            <Provider>
                <Suspense fallback={null}>
                    <ToasterWrapper />
                    {children}
                </Suspense>
            </Provider>
        </Suspense>
    )
}
