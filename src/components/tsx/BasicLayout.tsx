import React from "react";

// data structure for section element
interface Props {
  className?: string;
  children: React.ReactNode;
  id?: string;
  paddingTop: boolean;
}

const BasicLayout = (props: Props) => {
  // getting from props
  const { children, id, paddingTop } = props;
  // adding default value to className variable
  const className: string = props?.className || "";
  return (
    // adding extra class if need
    <section
      className={` px-6 py-16 sm:py-16 sm:px-12  lg:px-16 md:py-24 grid gap-8 ${
        paddingTop ? "" : "!pt-0"
      } ${className}`}
      id={id}
    >
      {/* this children contains element that are the main content of this section element */}
      {children}
    </section>
  );
};

export default BasicLayout;
