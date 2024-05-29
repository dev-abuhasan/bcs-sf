'use client';
import dynamic from 'next/dynamic';

export const Navbar = dynamic(() => import('./atoms/navbar'), {
    // loading: () => <Loading single={{ line: true, height: '50px' }} />,
    ssr: false
});