import Link from 'next/link';
import React from 'react';
import BackButton from './BackButton';

function Navbar() {
  return (
    <nav className="bg-[#01AC0F] p-4 flex justify-between items-center">
      {/* App Name on the Left */}
      <div className="flex items-center">
        <BackButton />
        <Link href="/">
          <p className="text-white font-light text-3xl ml-2" style={{ fontFamily: 'Bauhaus 93 V2' }}>
            tokopediaTV
          </p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
