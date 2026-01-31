import type { ReactNode } from "react";

type BlockProps = {
  children: ReactNode;
};

function Block({ children }: BlockProps) {
  return (
    <div className="bg-[wheat] rounded-3xl border-b-[3px] border-[#ebad0f] mb-5 p-5">
      {children}
    </div>
  );
}

export default Block;
