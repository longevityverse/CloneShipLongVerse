"use client";

import { useState, useEffect, Fragment } from "react";
import { useSearchParams } from "next/navigation";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png"; // Make sure this path correctly points to your logo image
import config from "@/config"; // Ensure this config file exists and contains necessary configurations
import { categories } from "../content"; // Update this path if your categories data is located elsewhere
import ButtonSignin from "@/components/ButtonSignin"; // Ensure this component exists in your project

const links = [
  {
    href: "/blog/",
    label: "All Posts",
  },
  {
    href: "/blog/category/health-and-wellness",
    label: "Health & Wellness",
  },
  {
    href: "/blog/category/science-and-research",
    label: "Science & Research",
  },
];

const cta = (
  <ButtonSignin text="Join the Community" extraStyle="btn-primary md:btn-sm" />
);

const ButtonPopoverCategories = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover className="relative z-30">
      <Popover.Button className="flex items-center gap-2 shrink-0">
        <span className="font-extrabold text-lg">Categories</span>
      </Popover.Button>
      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-in"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 transform left-1/2 -translate-x-1/2 sm:px-0">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="relative grid gap-6 p-5 bg-white sm:gap-8 sm:p-8">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog/category/${category.slug}`}
                  passHref
                >
                  <a className="flex items-center justify-between p-2 -m-3 transition duration-150 ease-in-out bg-opacity-10 bg-gray-100 rounded-lg hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100 focus-visible:ring-gray-500">
                    <span className="font-semibold">{category.name}</span>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

const HeaderBlog = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <header className="bg-base-200">
      <nav className="max-w-7xl flex items-center justify-between px-8 py-3 mx-auto">
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            title={`${config.appName} homepage`}
          >
            <Image
              src={logo}
              alt={`${config.appName} logo`}
              width={32}
              height={32}
              priority={true}
              className="w-8 h-8"
            />
            <span className="font-bold text-lg">{config.appName}</span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                {link.label}
              </a>
            </Link>
          ))}
          <ButtonPopoverCategories />
          {cta}
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md focus:outline-none focus:ring focus:ring-opacity-50"
          >
            {/* SVG for mobile menu toggle button */}
          </button>
        </div>
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link) => (
                <Link key={link.href} href={link.href} passHref>
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    {link.label}
                  </a>
                </Link>
              ))}
              {/* Mobile categories accordion or similar component */}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderBlog;
