// HeaderBlog.js
"use client";

import { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png"; // Ensure this path correctly points to your logo image
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
      <Popover.Button
        className={`flex items-center gap-2 shrink-0 ${isOpen ? "text-opacity-100" : "text-opacity-80"}`}
        aria-expanded={isOpen}
      >
        Categories
      </Popover.Button>
      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-sm px-4 sm:px-0">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="bg-white divide-y divide-gray-100">
              {categories.map((category) => (
                (<Link
                  key={category.slug}
                  href={`/blog/category/${category.slug}`}
                  passHref
                  className="flex items-center p-3 hover:bg-gray-50">

                  {category.name}

                </Link>)
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

const HeaderBlog = () => {
  return (
    <header className="bg-base-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/" passHref>

              <span className="sr-only">{config.appName}</span>
              <Image src={logo} alt="Logo" width={40} height={40} />

            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {links.map((link) => (
                (<Link
                  key={link.href}
                  href={link.href}
                  passHref
                  className="text-base font-medium text-white hover:text-indigo-50">

                  {link.label}

                </Link>)
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <ButtonPopoverCategories />
            {cta}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderBlog;
