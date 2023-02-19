import React from "react";
import logo from "../../assets/images/logo.svg";
import SidebarItem from "../SidebarItem";
import { MdLogout } from "react-icons/md";
import { sidebarDataDummy } from "../../constans/constans";
import { useDispatch } from 'react-redux'
import { signOut } from "../../redux/actions/auth";

const Sidebar = () => {
  const dispatch = useDispatch()
  const [sidebarData, setSidebarData] = React.useState(sidebarDataDummy);

  const handleOpenAccordion = (label, active) => {
    const sidebarDataTemp = sidebarData;
    let index = sidebarDataTemp.findIndex((val) => val.label === label);

    sidebarDataTemp.forEach((sidebar, i) => {
      if (i === index) {
        sidebar.active = active;
      } else {
        sidebar.active = false;
      }
    });

    setSidebarData([...sidebarDataTemp]);
  };

  const handleSignOut = () => {
    localStorage.removeItem("isLoggedIn");
    dispatch(signOut());
  };

  return (
    <div className="min-w-[281px] max-w-[281px] flex flex-col justify-between">
      {/* Header sidebar */}
      <div className="flex gap-4 p-6">
        <img src={logo} alt="logo" className="w-[35px] h-[37px]" />
        <div className="flex flex-col">
          <span className="font-bold text-[#333333] text-s">E-MONEV</span>
          <span className="text-[#333333] text-xs">KABUPATEN SORONG</span>
        </div>
      </div>
      <div className="w-full h-px bg-[#EBEFF2]"></div>
      {/* Body sidebar */}
      <div className="flex-1 flex flex-col overflow-scroll">
        <div className="flex ml-5 mt-5 items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-bold text-base">Super Admin</span>
            <span className="text-[11px] text-[#828282] font-medium">
             Nama OPD
            </span>
          </div>
        </div>
        <div className="w-full p-6 flex flex-col gap-6">
          {sidebarData.map((item, key) => {
            return (
              <SidebarItem
                key={key}
                label={item.label}
                icon={item.icon}
                active={item.active}
                link={item.link}
                handleOpenAccordion={handleOpenAccordion}
              />
            );
          })}
        </div>
        <div className="w-full h-px bg-[#EBEFF2]"></div>
        <div className="w-full p-6 flex flex-col gap-6">
          <div className="flex gap-2 items-center text-[#BDBDBD] cursor-pointer hover:text-[#069DD9]" onClick={handleSignOut}>
            <MdLogout />
            <div className="flex-1">
              <span className="font-medium">Keluar</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 flex items-center bg-white justify-center bottom-0 max-w-[281px] w-full border-t-[1px] border-[#EBEFF2]">
        <div className="text-[#828282] text-[15px] text-center">
          <div className="font-semibold">&copy; 2023 BAPPEDA</div>
          <div className="font-normal">KAB. SORONG</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
