// all import statements
import { BasicCategoryCardDetails } from "@/lib/interfaces/Card";
import Link from "next/link";

// component - BasicCategoryCard
const BasicCategoryCard = (props: BasicCategoryCardDetails) => {
  // get data
  const { categories, heading, href } = props;
  return (
    <div className="flex flex-col items-start justify-center gap-2  border border-solid border-gray-300 rounded-md px-4 sm:px-8 py-4 sm:py-8 text-lg ">
      <h3 className="text-3xl font-semibold">{heading}</h3>
      <p>we have various products like:-</p>
      <ul className="list-disc ml-6 text-slate-600">
        {/* generate all categories */}
        {categories.map((value: string, index: number) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <div className="flex gap-2 justify-start items-center">
        <Link href={href} className="text-blue-600 hover-link">
          see more
        </Link>
      </div>
    </div>
  );
};
export default BasicCategoryCard;
