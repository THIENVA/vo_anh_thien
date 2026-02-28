import Block from "./Block";
import NavLink from "./navLink";
import headerData from "./data/header.json";
import { it } from "node:test";

function Header() {
  return (
    <Block>
      <div className="flex items-center gap-10 justify-between px-10">
        {/* LOGO */}
        <a href="/" className="@apply text-3xl font-bold text-[#e7870a] ml-8">
          {headerData.logo}
        </a>
        <div className=" flex items-center gap-10 hover:text-hsl(242, 90%, 45%) ">
          {/* MENU */}
          {/* <nav className="flex gap-10 text-[#e7870a] font-bold ">
            <NavLink icon={"#about"} title={"About"} />
            <NavLink icon={"#skill"} title={"Skill"} />
            <NavLink icon={"#exp"} title={"Experience"} />
            <NavLink icon={"#project"} title={"Projects"} />
            <NavLink icon={"#blog"} title={"Blog"} />
            <NavLink icon={"#contact"} title={"Contact"} />
          </nav> */}
          <nav className="flex gap-10 text-[#e7870a] font-bold ">
            {headerData.menu.map((item) => (
              <NavLink key={item.id} icon={item.link} title={item.title} />
            ))}
          </nav>
          <div className="w-[3px] h-6 bg-[#e7870a] ml-[15px]"></div>
          {/* ACTIONS */}
          <div className="flex items-center gap-4 pl-[100px]">
            {/* THEME BUTTON*/}
            <button className="text-xl cursor-pointer p-2 rounded-lg hover:bg-[#000] ">
              ☀️
            </button>

            {/*DOWNLOAD CV*/}
            {/* <button className="bg-[#e7870a] text-[#ffffff] py-2  px-4  rounded-xl font-medium cursor-pointer hover:bg-[#374151]">
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
