import React from 'react';
import Link from "next/link";

const Navmobile = ({
    isOpen,
    toggle,
  }: {
    isOpen: boolean;
    toggle: () => void;
  }): JSX.Element => {
    return (
        <nav className="md:hidden flex fixed top-0 left-0 right-0 h-[60px] my-auto px-2 bg-blue-200 border-b-2 border-black">
            <Link href="/" className="m-auto">
                {/*eslint-disable-next-line*/}
                <img
                    src="/images/star.png"
                    alt="Logo"
                    width={50}
                    height={50}
                />
            </Link>
        </nav>
    )
}

export default Navmobile;