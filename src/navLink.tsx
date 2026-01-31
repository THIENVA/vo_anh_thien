type NavLinkProps = {
  icon: string; // đường dẫn image
  title: string; // nội dung h3
};

function NavLink({ icon, title }: NavLinkProps) {
  return (
    <a
      href={icon}
      className="text-[#e7870a] font-bold hover:text-[hsl(242,90%,45%)]"
    >
      {title}
    </a>
  );
}

export default NavLink;
