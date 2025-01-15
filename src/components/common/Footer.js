import Link from "next/link";
import React from "react";
import { companyLinks, resourcesLinks } from "../../../data/data";
import { Facebook, Twitter, Instagram } from "lucide-react";

const LinkGenerator = (name, link, isNewPage) => {
  return (
    <Link
      href={link}
      className="hover:underline hover:text-primary"
      target={isNewPage ? "_blank" : "_self"}
      rel={isNewPage ? "noopener noreferrer" : undefined}
    >
      {name}
    </Link>
  );
};

function Footer() {
  const socialIcons = [
    {
      Icon: <Facebook className="hover:text-primary transition-all" />,
      href: "https://www.facebook.com",
    },
    {
      Icon: <Twitter className="hover:text-primary transition-all" />,
      href: "https://www.twitter.com",
    },
    {
      Icon: <Instagram className="hover:text-primary transition-all" />,
      href: "https://www.instagram.com",
    },
  ];
  return (
    <>
      <footer className="globalPadding grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-7 border-t-[1px]">
        <div className="flex flex-col items-center md:items-start justify-center gap-10 md:gap-14">
          <img src="logo.png" className="w-32 md:w-36" alt="Logo" />

          <div className="flex w-full items-center justify-center md:justify-start gap-8 md:gap-7">
            {socialIcons.map((item, index) => {
              const { Icon, href } = item;
              return (
                <Link key={index} href={href} target="_blank" rel="noreferrer">
                  {Icon}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex">
          <h3 className="text-xl md:text-2xl font-bold opacity-0 mb-5">N/A</h3>
        </div>
        <div className="flex flex-col items-center md:items-start justify-start gap-4">
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-5">
            Company
          </h3>
          {companyLinks.map((link) => (
            <div key={link.href}>{LinkGenerator(link.label, link.href)}</div>
          ))}
        </div>

        <div className="flex flex-col items-center md:items-start justify-start gap-4">
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-5">
            Resources
          </h3>
          {resourcesLinks.map((link) => (
            <div key={link.href}>
              {link.isDropdown ? (
                link.children.map((child) => (
                  <div key={child.href}>
                    {LinkGenerator(child.label, child.href)}
                  </div>
                ))
              ) : (
                <div>{LinkGenerator(link.label, link.href)}</div>
              )}
            </div>
          ))}
        </div>
      </footer>

      <div className="globalPadding text-xs md:text-balance !py-6 flex flex-col md:flex-row items-center justify-between gap-7">
        <p>
          Copyright &#169; 2020 - {new Date().getFullYear()}. Sanmati foods and
          spices.
        </p>
        <span className="flex items-center justify-center gap-5">
          {LinkGenerator("Data Privacy", "/data-privacy")}|
          {LinkGenerator("Privacy Policy", "/privacy-policy")}|
          {LinkGenerator("Terms of service", "/terms-of-service")}
        </span>
      </div>

      <div className="globalPadding !pt-0 !pb-4 text-center">
        <p className="text-sm">
          Designed and developed by:{" "}
          {LinkGenerator("RUDISN", "https://www.rudisn.com/", true)}
        </p>
      </div>
    </>
  );
}

export default Footer;
