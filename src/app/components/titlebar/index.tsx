import Image from "next/image";
import Link from "next/link";

const Titlebar = () => {
  return (
    <>
      <div className="bg-white dark:bg-teal-800 text-black dark:text-white border-b-2 border-black dark:border-teal-600">
        <div className="flex row justify-between">
          <div className="flex row place-content-center">
            <Image src="/images/smiley-icon-25px.png" alt="Smiley face icon" width={25} height={25}/>
            <p>text.txt</p>
            </div>
            <Link href="/" className="flex place-content-center">
              <Image src="/images/close-icon.png" alt="close button x icon" width={25} height={25} className="dark:hidden"/>
              <Image src="/images/close-icon-dark.png" alt="close button x icon" width={25} height={25} className="hidden dark:flex"/>
            </Link>
        </div>
      </div>
    </>
  );
};

export default Titlebar;
