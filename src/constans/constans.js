// Icons Sidebar
import dashboardIcon from "../assets/icons/dashboard-icon.svg";
import ratingIndexIcon from "../assets/icons/index-rating-icon.svg";
import databaseInovationIcon from "../assets/icons/database-inovation-icon.svg";
import governmentInovateIcon from "../assets/icons/government-inovate-icon.svg";
import reportIcon from "../assets/icons/report-icon.svg";
import masterDataIcon from "../assets/icons/master-data-icon.svg";
import configurationIcon from "../assets/icons/configuration-icon.svg";
import affairIcon from "../assets/icons/affairs-icon.svg";

export const sidebarDataDummy = [
  {
    label: "Dashboard",
    icon: dashboardIcon,
    active: true,
    link: "/",
  },
  {
    label: "Akun Saya",
    icon: ratingIndexIcon,
    active: false,
    link: "/akun-saya",
  },
  {
    label: "Login Akses User",
    icon: databaseInovationIcon,
    active: false,
    link: "/akses-user",
  },
  {
    label: "Urusan",
    icon: affairIcon,
    active: false,
    link: "/urusan",
  },
  {
    label: "Organisasi",
    icon: governmentInovateIcon,
    active: false,
    link: "/organisasi",
  },
  {
    label: "Program",
    icon: reportIcon,
    active: false,
    link: "/program",
  },
  {
    label: "Kegiatan",
    icon: masterDataIcon,
    active: false,
    link: "/kegiatan",
  },
  {
    label: "Sasaran",
    icon: configurationIcon,
    active: false,
    link: "/sasaran",
  },
  {
    label: "Data Laporan",
    icon: reportIcon,
    active: false,
    link: "/data-laporan",
  },

];
