"use client";
// import all necessary modules
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// font from google
import { notoSans } from "@/lib/fonts/notoSans";
// all routes that will present in navbar
import { contact, about, home, products, cart } from "@/lib/utilities/routes";
import { usePathname } from "next/navigation";

// import icons from font awesome
import {
  faBox,
  faCartShopping,
  faCircleInfo,
  faHouse,
  faMagnifyingGlass,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { query } from "@/lib/store/features/searchProducts/searchProductSlice";

// data structure for link elements to create routes.
interface Url {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const Navbar = (props: { defaultSearch?: string }) => {
  const { defaultSearch } = props;
  // all routes (their name, icon and path)
  const className = "w-5 !h-5 text-gray-700";

  const pathname = usePathname();
  const [search, setSearch] = useState<string>(defaultSearch || "");
  const dispatch = useDispatch();
  const searchProducts = () => {
    dispatch(query(search));
  };
  useEffect(() => {
    searchProducts();
  }, [search]);

  const url: Url[] = [
    {
      name: "home",
      url: home,
      icon: <FontAwesomeIcon icon={faHouse} className={className} />,
    },
    {
      name: "contact",
      url: contact,
      icon: <FontAwesomeIcon icon={faPhone} className={className} />,
    },
    {
      name: "products",
      url: products,
      icon: <FontAwesomeIcon icon={faBox} className={className} />,
    },
    {
      name: "cart",
      url: cart,
      icon: <FontAwesomeIcon icon={faCartShopping} className={className} />,
    },
    {
      name: "about",
      url: about,
      icon: <FontAwesomeIcon icon={faCircleInfo} className={className} />,
    },
  ];

  return (
    <nav className="flex justify-center flex-col gap-7 py-2 px-10 items-center md:flex-row md:flex-wrap md:justify-between bg-white ">
      <div className="m-auto lg:m-0">
        <Link href={"/"}>
          <Image
            src={process.env.NEXT_PUBLIC_SIDE_ICON || ""}
            alt="main logo"
            width={800}
            height={800}
            className="w-32 h-auto"
            // className="w-28 h-auto md:w-auto md:min-w-16"
          />
        </Link>
      </div>

      {pathname.includes(products) && (
        <div className="md:w-1/2 pr-2 border-2 border-solid border-blue-600 rounded-full flex justify-center items-center">
          <input
            type="text"
            className="focus:outline-none focus-visible:border-none focus-visible:outline-none focus:border-none w-full px-4 py-2 pr-4 placeholder:capitalize placeholder:text-blue-600 placeholder:font-light rounded-full"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            placeholder="search everything at fmcg bharat"
          />
          <Link
            href={{ pathname: "/products", query: { search } }}
            className="px-1 rounded-full bg-blue-900 cursor-pointer"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
          </Link>
        </div>
      )}
      <ul className="flex gap-6 sm:gap-8 flex-wrap  justify-center md:flex-nowrap lg:text-base m-auto lg:m-0">
        {/* use url array to create all list item using map function */}

        {url.map((item: Url, index: number) => {
          const { name, url, icon } = item;

          if (pathname.includes(products)) {
            if (cart === "/" + name || name === "home") {
              return (
                <li
                  key={index}
                  className="flex justify-center items-center gap-2"
                >
                  {/* icon and link*/}
                  {icon}
                  <Link
                    href={url}
                    className={`hover-link ${notoSans.className} tracking-widest  text-slate-950 text-xl  `}
                  >
                    {name}
                  </Link>
                </li>
              );
            }
          }
          // basic list item
          else {
            return (
              <li
                key={index}
                className="flex justify-center items-center gap-2"
              >
                {/* icon and link*/}
                {icon}
                <Link
                  href={url}
                  className={`hover-link ${notoSans.className} tracking-widest  text-slate-950 text-xl  `}
                >
                  {name}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
