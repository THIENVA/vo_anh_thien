type SkillItemProps = {
  icon: string; // đường dẫn image
  title: string; // nội dung h3
};

function SkillItem({ icon, title }: SkillItemProps) {
  return (
    <div className="skill-item flex flex-col items-center ml-[100px]">
      <img
        src={icon}
        alt={title}
        className="w-[80px] h-[80px] object-contain bg-white p-2 rounded-xl"
      />
      <h3 className="mt-3 text-xl font-bold text-[#000]">{title}</h3>
    </div>
  );
}

export default SkillItem;
