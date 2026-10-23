'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode, use } from 'react';

const NavLinks = ({ href, children }: { href: string, children: ReactNode }) => {
    const pathName = usePathname();
    const isActive = href === '/' ? pathName === '/' : pathName.startsWith(href);

    return (
        <Link
            href={href}
            className={`${isActive
                    ? "text-[#C2F800] bg-[#1B2610] rounded-full px-7 py-3"
                    : "text-[#9CA3AF]"
                } font-medium`}
        >
            {children}
        </Link>
    );
};

export default NavLinks;