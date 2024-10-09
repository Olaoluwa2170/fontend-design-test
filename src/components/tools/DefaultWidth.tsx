import React, { Fragment, ReactNode } from "react";

const DefaultWidth: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="max-w-[70vw] mx-auto">{children}</div>;
};

export default DefaultWidth;
