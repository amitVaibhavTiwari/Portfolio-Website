import "./Page-changer.scss";
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
export const PageChanger = ({ children }) => {
  useEffect(() => {
    window.scrollTo(10, 0);
  }, []);
  return <div className="animate-wiggle">{children}</div>;
};
