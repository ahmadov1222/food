import "./Sidebar.scss";
import {
  DashboardIcon,
  DiscountIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  MessageIcon,
  NotificationeIcon,
  SettingIcon,
} from "../../assets/icon/Icon";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [activePage, setActivePage] = useState("home");
  return (
    <div className="sidebar">
      <div className="pr-6 pl-3">
        <Link
          to={"/"}
          className="flex justify-center p-2 rounded-[12px] items-center bg-[#543C3C]"
        >
          <LogoIcon />
        </Link>
      </div>

      <ul className="sidebar-list">
        <li className={`sidebar-icon ${activePage === "home" ? "active" : ""}`}>
          <Link
            to={"/"}
            className={`sidebar-btn ${activePage === "home" ? "active" : ""}`}
            onClick={() => setActivePage("home")}
          >
            <HomeIcon activePage={activePage} />
          </Link>
        </li>

        <li
          className={`sidebar-icon  ${
            activePage === "discount" ? "active" : ""
          } `}
        >
          <Link
            to={"/"}
            className={`sidebar-btn ${
              activePage === "discount" ? "active" : ""
            }`}
            onClick={() => setActivePage("discount")}
          >
            <DiscountIcon />
          </Link>
        </li>

        <li className={`sidebar-icon ${activePage === "dash" ? "active" : ""}`}>
          <Link
            to={"/"}
            className={`sidebar-btn ${activePage === "dash" ? "active" : ""}`}
            onClick={() => setActivePage("dash")}
          >
            <DashboardIcon />
          </Link>
        </li>

        <li
          className={`sidebar-icon ${activePage === "message" ? "active" : ""}`}
        >
          <Link
            to={"/"}
            className={`sidebar-btn ${
              activePage === "message" ? "active" : ""
            }`}
            onClick={() => setActivePage("message")}
          >
            <MessageIcon />
          </Link>
        </li>

        <li
          className={`sidebar-icon ${
            activePage === "notification" ? "active" : ""
          }`}
        >
          <Link
            to={"/"}
            className={`sidebar-btn ${
              activePage === "notification" ? "active" : ""
            }`}
            onClick={() => setActivePage("notification")}
          >
            <NotificationeIcon />
          </Link>
        </li>

        <li
          className={`sidebar-icon ${activePage === "settind" ? "active" : ""}`}
        >
          <Link
            to={"/"}
            className={`sidebar-btn ${
              activePage === "settind" ? "active" : ""
            }`}
            onClick={() => setActivePage("settind")}
          >
            <SettingIcon setActivePage={activePage} />
          </Link>
        </li>
      </ul>

      <div className="logout-icon">
        <Link to={"/"} className="sidebar-btn ">
          <LogoutIcon />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
