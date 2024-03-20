"use client";
import { NextUIProvider } from '@nextui-org/react';
import { usePathname } from 'next/navigation';

interface ProviderProps {
  children: React.ReactNode;
}

export default function Providers({children}: ProviderProps) {
  const pathname = usePathname();

  return (
    <NextUIProvider>
      {pathname !== '/dashboard/new-email' && pathname !== '/' && pathname !== '/sign-in' && pathname !== '/subscribe' && pathname !== '/sign-up'? (
        <div className='w-full flex'>
          <div className="w-[290px] h-screen overflow-y-scroll"></div>
        </div>
      ) : (
        <>{children}</>
      )}
    </NextUIProvider>
  )
}