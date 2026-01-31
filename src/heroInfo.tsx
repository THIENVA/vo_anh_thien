type HeroInfoProps = {
  path: string; // đường dẫn image
  title: string; // nội dung h3
};

function HeroInfo({ path, title }: HeroInfoProps) {
  return (
    <div className="flex gap-[5px] mt-3 text-[100%] leading-none italic">
      <img src={path} />
      <h3>{title}</h3>
    </div>
  );
}

export default HeroInfo;
