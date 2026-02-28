import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function ExperienceItem({ children }: Props) {
  return (
    <div className="w-[75%] bg-gray-200 rounded-[40px] border-4 border-[#c7771a] p-12">
      {children}
    </div>
  );
}

export default ExperienceItem;
