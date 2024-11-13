"use client";
// import all necessary modules
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// font from google
import { notoSans } from "@/lib/fonts/notoSans";
// all routes that will present in navbar
import { home, products, cart } from "@/lib/utilities/routes";
// import icons from font awesome
import {
  faBars,
  faBox,
  faCartShopping,
  faHouse,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { query } from "@/lib/store/features/searchProducts/searchProductSlice";

// data structure for link elements to create routes.
interface Url {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const Navbar = () => {
  const searchProducts: string = useSelector(
    (state: RootState) => state.searchProducts
  );
  // all routes (their name, icon and path)
  const className = "w-5 !h-5 text-gray-700";

  const [search, setSearch] = useState<string>(searchProducts);
  const dispatch = useDispatch();
  const setSearchProducts = () => {
    dispatch(query(search));
  };

  const url: Url[] = [
    {
      name: "home",
      url: home,
      icon: <FontAwesomeIcon icon={faHouse} className={className} />,
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
  ];

  const [toggleUl, setToggleUl] = useState<boolean>(false);
  const ulClassNameClose = "max-h-0 overflow-y-hidden  ";
  const ulClassNameOpen = "max-h-96 overflow-y-hidden  ";

  return (
    <nav className="flex justify-center flex-col md:gap-7  sm:py-2 px-10 sm:px-4 items-center sm:flex-row md:justify-between bg-white shadow-xl">
      <div
        className={` lg:m-0 flex justify-center items-center w-full sm:w-auto `}
      >
        <Link href={"/"} className="mx-auto">
          <Image
            src={process.env.NEXT_PUBLIC_SIDE_ICON || ""}
            alt="main logo"
            width={800}
            height={800}
            className="w-32 h-auto"
            // className="w-28 h-auto md:w-auto md:min-w-16"
          />
        </Link>
        <button
          className="mt-3 cursor-pointer sm:hidden"
          onClick={() => setToggleUl((value) => !value)}
        >
          <FontAwesomeIcon icon={faBars} className="w-6 !h-6" />
        </button>
      </div>

      <div
        className={`${
          !toggleUl ? ulClassNameClose : ulClassNameOpen + " my-4"
        }   sm:max-h-96 transition-all duration-300 ease-in-out block sm:flex sm:justify-end sm:items-center sm:gap-4 w-full`}
      >
        <div className="sm:w-1/3 md:w-1/2 pr-2 border-2 border-solid border-blue-600 rounded-full  justify-center items-center flex mb-4 sm:mb-0 md:mx-auto">
          <input
            type="text"
            className="focus:outline-none focus-visible:border-none focus-visible:outline-none focus:border-none w-full px-4 py-2 sm:py-1 md:py-2 pr-4 placeholder:capitalize placeholder:text-blue-600 placeholder:font-light rounded-full"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            placeholder="search everything at fmcg bharat"
          />
          <Link
            href={{ pathname: "/products", query: { search } }}
            className="px-1 rounded-full bg-blue-900 cursor-pointer"
            onClick={setSearchProducts}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
          </Link>
        </div>

        <ul className=" flex gap-3 md:gap-6 flex-wrap  justify-center md:flex-nowrap lg:text-base lg:m-0">
          {/* use url array to create all list item using map function */}

          {url.map((item: Url, index: number) => {
            const { name, url, icon } = item;

            return (
              <li
                key={index}
                className="flex justify-center items-center gap-2"
              >
                {/* icon and link*/}
                {icon}
                <Link
                  href={url}
                  className={`hover-link ${notoSans.className} tracking-widest  text-slate-950 md:text-xl  `}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
