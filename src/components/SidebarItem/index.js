import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const SidebarItem = (props) => {
  const location = useLocation();

  const { label, icon, link, active, handleOpenAccordion } = props;

  return (
    <div className="w-full">
      <Link to={link}>
    

        <div className="flex gap-2 items-center">
          <img src={icon} alt="" />
          <div className="flex-1">
            <span className="font-medium">{label}</span>
          </div>

        </div>
      </Link>
      {/* {active && (
        <div className={`flex flex-col pt-1.5`}>
          {children.map((child, key) => (
            <Link to={child.link} key={key}>
              <div
                className={`mt-[11px] text-[13px] pl-[37px] rounded py-1.5 hover:text-[#069DD9] cursor-pointer ${
                  location.pathname === child.link && "text-[#069DD9]"
                }`}
              >
                {child.label}
              </div>
            </Link>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default SidebarItem;
