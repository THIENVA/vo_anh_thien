import { useLocation } from "react-router-dom";
import NavLink from "./navLink";
import headerData from "./data/header.json";
import Block from "./Block";
import { useTheme } from "./context/ThemeContext";

function Header() {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  // Ẩn header portfolio khi ở các trang này
  const hiddenRoutes = ["/dashboard", "/signin", "/blog/editor"];
  if (hiddenRoutes.some((route) => location.pathname.startsWith(route))) {
    return null;
  }

  return (
    <Block>
      <div className="flex items-center justify-between px-10">
        {/* LOGO */}
        <a
          href="/"
          className="@apply text-3xl font-bold text-[#e7870a] whitespace-nowrap"
        >
          {headerData.logo}
        </a>
        <div className=" flex items-center gap-10 hover:text-hsl(242, 90%, 45%) ">
          {/* MENU */}
          <nav className="flex gap-10 text-[#e7870a] font-bold ">
            {/* <NavLink icon={"#about"} title={"About"} />
            <NavLink icon={"#skill"} title={"Skill"} />
            <NavLink icon={"#exp"} title={"Experience"} />
            <NavLink icon={"#project"} title={"Projects"} />
            <NavLink icon={"#contact"} title={"Contact"} /> */}
            {headerData.menu.map((item) => (
              <NavLink key={item.id} icon={item.link} title={item.title} />
            ))}
            <NavLink icon={headerData.blogRoute} title="Blog" />
          </nav>
          <div className="w-[3px] h-6 bg-[#e7870a] ml-[15px]"></div>
          {/* ACTIONS */}
          <div className="flex items-center gap-4 pl-[5px]">
            {/* THEME BUTTON*/}
            <button
              onClick={toggleTheme}
              className="text-xl cursor-pointer p-2 rounded-lg hover:bg-[#000] dark:hover:bg-[#fff]"
            >
              {isDark ? "🌙" : "☀️"}
            </button>

            {/*DOWNLOAD CV*/}
            {/* <button className="bg-[#e7870a] text-[#ffffff] py-2  px-4  rounded-xl font-medium cursor-pointer hover:bg-[#374151] ">
              Download CV
            </button> */}
            <a
              href={headerData.download.link}
              className="bg-[#e7870a] text-[#ffffff] py-2  px-4  rounded-xl font-medium cursor-pointer hover:bg-[#374151] whitespace-nowrap"
            >
              {headerData.download.text}
            </a>
          </div>
        </div>
      </div>
    </Block>
  );
}

export default Header;
