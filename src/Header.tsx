function Header() {
  return (
    <header className="block rounded-3xl bg-[wheat] border-b-[3px] border-[#ebad0f] mt-5 mb-5 pt-5 pb-5">
      <div className="flex items-center gap-10 justify-between px-10">
        {/* LOGO */}
        <a href="/" className="@apply text-3xl font-bold text-[#e7870a] ml-8">
          VÕ ANH THIỆN
        </a>
        <div className=" flex items-center gap-10 hover:text-hsl(242, 90%, 45%) ">
          {/* MENU */}
          <nav className="flex gap-10 text-[#e7870a] font-bold ">
            <a
              href="#about"
              className="text-[#e7870a] font-bold hover:text-[hsl(242,90%,45%)]"
            >
              About
            </a>
            <a
              href="#skill"
              className="text-[#e7870a] font-bold hover:text-[hsl(242,90%,45%)]"
            >
              Skills
            </a>
            <a
              href="#exp"
              className="text-[#e7870a] font-bold hover:text-[hsl(242,90%,45%)]"
            >
              Experiences
            </a>
            <a
              href="#project"
              className="text-[#e7870a] font-bold hover:text-[hsl(242,90%,45%)]"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-[#e7870a] font-bold hover:text-[hsl(242,90%,45%)]"
            >
              Contact
            </a>
            <div className="w-0 h-6 bg-[#e7870a]"></div>
          </nav>
          {/* ACTIONS */}
          <div className="flex items-center gap-4 mr-8">
            {/* THEME BUTTON*/}
            <button className="text-xl cursor-pointer p-2 rounded-lg hover:bg-[#000] ">
              ☀️
            </button>

            {/*DOWNLOAD CV*/}
            <button className="bg-[#e7870a] text-[#ffffff] py-2  px-4  rounded-xl font-medium cursor-pointer hover:bg-[#374151]">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
