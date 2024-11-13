import React from "react";

const MiniWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-8">{children}</div>;
};

export default MiniWrapper;
