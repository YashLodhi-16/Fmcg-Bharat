"use client";
import React, { useEffect, useState } from "react";
import BasicLayout from "./BasicLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { CategoryDetails } from "@/lib/interfaces/Product";
import fetchData from "@/lib/utilities/fetchData";
import Link from "next/link";
import { products } from "@/lib/utilities/routes";

// CategorySection Component
const CategorySection = (props: {
  currentCategory: CategoryDetails;
  mainCategory: string;
}) => {
  const { currentCategory, mainCategory } = props;
  const { noCategories } = currentCategory;
  const subCategories: string[] = Object.keys(currentCategory.subCategory);
  const baseURI: string = products + `/${mainCategory}`;
  return (
    <div className="flex gap-4 flex-wrap items-start justify-start">
      {noCategories?.map((value: string, index: number) => {
        return (
          <div key={index}>
            {noCategories?.map((noCategoriesValue, idx) => (
              <Link
                href={baseURI + `/${noCategoriesValue}`}
                key={idx}
                className="cursor-pointer font-medium hover-link w-max"
              >
                {noCategoriesValue}
              </Link>
            ))}
          </div>
        );
      })}
      {subCategories.map((subValue, index: number) => {
        return (
          <div key={index}>
            <Link
              href={baseURI + `/${subValue}`}
              className="font-medium cursor-pointer hover-link w-max"
            >
              {subValue}
            </Link>
            <div>
              {currentCategory.subCategory[subValue].map(
                (underValue, idx: number) => (
                  <Link
                    href={baseURI + `/${subValue}/${underValue}`}
                    key={idx}
                    className="font-light cursor-pointer hover-link w-max block"
                  >
                    {underValue}
                  </Link>
                )
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

interface BaseCategory {
  [mainCategory: string]: CategoryDetails;
}
// Filter Component
const Filter = () => {
  // state for the categories that will come from server.
  const [categories, setCategories] = useState<BaseCategory>({});
  // it will set categories data into state in a more meaning full way.
  useEffect(() => {
    // function to perform a get request to get categories data from the server.
    const getData = async () => {
      // simple get request and a query param all=ture
      const data: { products: BaseCategory } = await fetchData(
        "/api/products/category?all=true"
      );

      // after every categories gets structurise then push it into categories state
      setCategories(data?.products);
    };
    // run the function to perform those tasks mention above.
    getData();
    // useEffect will run once when the component mounts.
  }, []);

  const mainCategory: string[] = Object.keys(categories);

  const [status, setStatus] = useState<{
    index: number | null;
    yAxis: boolean;
  }>({
    yAxis: false,
    index: null,
  });

  const openCategoriesPanel = (index: number) => {
    setStatus((prev) => ({
      yAxis: prev.index === index ? !prev.yAxis : true,
      index: prev.index === index ? null : index,
    }));
  };
  return (
    <header className="">
      <BasicLayout className="bg-slate-900 !py-4" paddingTop={true}>
        <div className="w-fit m-auto relative select-none">
          <ul className="flex gap-4 sm:gap-x-10 sm:gap-y-4 items-center flex-wrap">
            {mainCategory?.map((value, index) => (
              <li
                className="font-semibold text-neutral-300 text-lg cursor-pointer flex"
                onClick={() => openCategoriesPanel(index)}
                key={index}
              >
                {value}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`my-auto ml-2 ${
                    status.index === index && status.yAxis
                      ? "rotate-180"
                      : "rotate-0"
                  }`}
                  width={20}
                  height={20}
                />
              </li>
            ))}
          </ul>

          {status.yAxis && (
            <div className="max-h-svh overflow-y-scroll text-slate-800 absolute left-0 rounded-b px-4 py-4 w-full translate-y-full -bottom-[1rem] shadow-xl bg-white">
              {typeof status.index === "number" &&
                categories &&
                categories[mainCategory[status.index]] && (
                  <CategorySection
                    currentCategory={categories[mainCategory[status.index]]}
                    key={0}
                    mainCategory={mainCategory[status.index]}
                  />
                )}
            </div>
          )}
        </div>
      </BasicLayout>
    </header>
  );
};

export default Filter;
