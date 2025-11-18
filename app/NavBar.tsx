'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Create Task', href: '/create-task' },
  ];

  return (
    <nav className="flex space-x-5 border-b px-5 mb-5 h-14 items-center">
      <Link href="/">Logo</Link>
      <ul className="flex space-x-5">
        {links.map((link) => (
          <li
            key={link.href}
            className={`hover:bg-gray-500 ${
              currentPath === link.href && 'bg-gray-300'
            }`}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
