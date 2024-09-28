import { links4 } from '@/data/footerlink';
import Link from 'next/link';
import React from 'react';

export default function FooterLinks3() {
  return (
    <>
      {links4.map((link) => (
        <li key={link.id}>
          {/* Allow scrolling for all anchor links */}
          <Link href={link.href} scroll={true}>
            {link.text}
          </Link>
        </li>
      ))}
    </>
  );
}
