import { Link } from "react-router-dom";

type NavLinkProps = {
  icon: string;
  title: string;
};

function NavLink({ icon, title }: NavLinkProps) {
  const isRoute = icon.startsWith("/");

  if (isRoute) {
    // Dùng React Router Link cho các route như /blog
    return (
      <Link
        to={icon}
        className="text-[#e7870a] font-bold hover:text-[hsl(242,90%,45%)]"
      >
        {title}
      </Link>
    );
  }

  // Dùng <a> bình thường cho anchor #about, #skill...
  return (
    <Link
      to={icon}
      className="text-[#e7870a] font-bold hover:text-[hsl(242,90%,45%)]"
    >
      {title}
    </Link>
  );
}

export default NavLink;
