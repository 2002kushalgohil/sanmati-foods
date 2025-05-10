"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { XIcon, MenuIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname } from "next/navigation";
import { companyLinks, resourcesLinks } from "../../../data/data";

const NavMenu = () => {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-0 lg:gap-3">
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/"
            className={`${navigationMenuTriggerStyle()} ${
              pathname === "/" ? "bg-primary text-white hover:bg-primary/90 hover:text-white" : ""
            }`}
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/about"
            className={`${navigationMenuTriggerStyle()} ${
              pathname === "/about" ? "bg-primary text-white hover:bg-primary/90 hover:text-white" : ""
            }`}
          >
            About
          </NavigationMenuLink>
        </NavigationMenuItem>

        {resourcesLinks.map((link, index) => {
          const isActive = (link) => {
            if (link?.href) {
              return pathname === link.href;
            }
            if (link?.children) {
              return link.children.some((child) => pathname === child.href);
            }
            return false;
          };

          return link.isDropdown ? (
            <NavigationMenuItem key={index}>
              <NavigationMenuTrigger
                className={isActive(link) ? "bg-primary text-white" : ""}
              >
                {link.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[350px]">
                  {link.children.map((child, idx) => (
                    <NavigationMenuLink
                      key={idx}
                      asChild
                      className={
                        isActive(child)
                          ? "bg-primary text-white hover:bg-primary/90 hover:text-white"
                          : ""
                      }
                    >
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href={child.href}
                        target={child?.isNewPage ? "_blank" : "_self"}
                        rel={child?.isNewPage ? "noopener noreferrer" : undefined}
                      >
                        <div className="text-sm font-medium leading-none">
                          {child.label}
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                href={link.href}
                className={`${navigationMenuTriggerStyle()} ${
                  isActive(link)
                    ? "bg-primary text-white hover:bg-primary/90 hover:text-white"
                    : ""
                }`}
              >
                {link.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const NavBar = () => {
  const pathname = usePathname();
  const [isFullNav, setIsFullNav] = useState(false);

  const toggleNavbar = () => {
    setIsFullNav((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = isFullNav ? "hidden" : "";
  }, [isFullNav]);

  useEffect(() => {
    setIsFullNav(false);
  }, [pathname]);

  const isActive = (link) => {
    if (link?.href) {
      return pathname === link.href;
    }
    if (link?.children) {
      return link.children.some((child) => pathname === child.href);
    }
    return false;
  };

  return (
    <>
      <nav className="globalPadding sticky top-0 left-0 w-full !py-5 z-50 flex items-center justify-between gap-10 transition-all duration-200 bg-white border-b-[1px]">
        <Link href="/">
          <img src="/logo.png" className="w-full max-w-24 md:w-36" alt="Logo" />
        </Link>
        <div className="hidden lg:block">
          <NavMenu />
        </div>
        <div className="flex items-center justify-center gap-5">
          <Link href="/contact">
            <Button className="px-4 md:px-8">Contact us</Button>
          </Link>
          <Button
            onClick={toggleNavbar}
            variant="ghost"
            className="flex lg:hidden bg-primary text-white px-3"
          >
            {isFullNav ? <XIcon /> : <MenuIcon />}
          </Button>
        </div>
      </nav>

      {/* Mobile Version with Accordion as Navbar and Sub Navbar */}
      <nav
        className={`globalPadding flex fixed top-0 right-0 !py-5 h-screen w-full backdrop-filter lg:hidden flex-col items-center bg-white z-50 ${
          isFullNav ? "transform translate-x-0" : "transform translate-x-full"
        }`}
        style={{
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className="w-full flex items-center justify-between">
          <Link href="/">
            <img src="/logo.png" className="w-full max-w-24 md:w-36" alt="Logo" />
          </Link>
          <Button
            onClick={toggleNavbar}
            variant="ghost"
            className="flex lg:hidden bg-primary text-white px-3"
          >
            <XIcon />
          </Button>
        </div>

        {/* Accordion for Navbar Items */}
        <div className="w-full h-full mt-10">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-home">
              <Link
                href="/"
                className={`flex flex-1 items-center justify-between py-4 text-sm font-medium hover:underline text-left ${
                  pathname === "/" ? "text-primary" : ""
                }`}
              >
                Home
              </Link>
            </AccordionItem>

            <AccordionItem value="item-about">
              <Link
                href="/about"
                className={`flex flex-1 items-center justify-between py-4 text-sm font-medium hover:underline text-left ${
                  pathname === "/about" ? "text-primary" : ""
                }`}
              >
                About
              </Link>
            </AccordionItem>

            {resourcesLinks.map((link, index) =>
              link.isDropdown ? (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{link.label}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {link.children.map((child, idx) => (
                        <li key={idx}>
                          <Link
                            href={child.href}
                            className={`block text-sm p-3 hover:bg-accent rounded-sm ${
                              isActive(child) ? "text-primary" : ""
                            }`}
                            target={child?.isNewPage ? "_blank" : "_self"}
                            rel={
                              child?.isNewPage ? "noopener noreferrer" : undefined
                            }
                          >
                            <div className="font-medium">{child.label}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <AccordionItem key={index} value={`item-${index}`}>
                  <Link
                    href={link.href}
                    className={`flex flex-1 items-center justify-between py-4 text-sm font-medium hover:underline text-left ${
                      isActive(link) ? "text-primary" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </AccordionItem>
              )
            )}
          </Accordion>
        </div>
      </nav>
    </>
  );
};

export default NavBar;