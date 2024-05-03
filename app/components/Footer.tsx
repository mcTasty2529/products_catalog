import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      id: "facebook",
      icon: <FaFacebook />,
      url: "https://www.facebook.com/",
    },
    {
      id: "twitter",
      icon: <FaTwitter />,
      url: "https://www.twitter.com/",
    },
    {
      id: "linkedin",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/",
    },
  ];
  return (
    <footer className="flex flex-col items-center justify-center bg-zinc-900 h-[25dvh] ">
      <div className="font-thin text-xl text-zinc-300">Copyright ©</div>
      <div className=" flex items-center justify-center w-full mt-4 p-4 gap-6">
        {socialLinks.map((item, index) => (
          <>
            <Link key={index} href={item.url}>
              {item.icon}
            </Link>
          </>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
