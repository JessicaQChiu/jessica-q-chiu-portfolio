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
        <nav className="md:hidden flex fixed top-0 left-0 right-0 h-[60px] z-20 bg-black my-auto px-2">
            <Link href="/" className="mx-auto">
                {/*eslint-disable-next-line*/}
                <img
                    src={"https://raw.githubusercontent.com/JessicaQChiu/ladybug-jumper-game/main/imgs/ladybug.png"}
                    alt="Company Logo"
                    width={50}
                    height={50}
                />
            </Link>
        </nav>
    )
}

export default Navmobile;