import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-white rounded-lg shadow pt-10  mt-10">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4">
        <div className="flex items-center justify-center md:justify-between">
          <div className="mr-12 hidden md:block text-gray-500 px-4">
            <span>Get connected with me on social networks:</span>
          </div>
          <div className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <div className="mr-6 text-neutral-600 h-4 w-4">
              <Link href="/">
                <MdEmail />
              </Link>
            </div>
            <div className="mr-6 text-neutral-600 h-4 w-4">
              <Link href="/">
                <FaGithub />
              </Link>
            </div>
            <div className="mr-6 text-neutral-600 h-4 w-4">
              <Link href="/">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <Link href="/">Ibnu Afif™</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
