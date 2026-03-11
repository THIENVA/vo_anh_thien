import type { ReactNode } from "react";

type BlockProps = {
  children: ReactNode;
};

function Block({ children }: BlockProps) {
  return (
    <div className="bg-[wheat] dark:bg-[#1e293b] rounded-3xl border-b-[3px] border-[#ebad0f] dark:border-[#e7870a]/50 mb-5 p-5">
      {children}
    </div>
  );
}

export default Block;
