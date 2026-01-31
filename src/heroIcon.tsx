type HeroIconProps = {
  path: string; // đường dẫn image
};

function HeroIcon({ path }: HeroIconProps) {
  return (
    <img
      src={path}
      className="hover:-translate-y-[6px]
    hover:shadow-[0_0_15px_rgba(255,165,0,0.6),0_0_40px_rgba(255,165,0,0.3),0_12px_40px_rgba(0,0,0,0.4)]"
    />
  );
}

export default HeroIcon;
