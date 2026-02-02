import PrjInfo from "./ProjectInfo";

type PrjBlockProps = {
  path: string;
  name: string;
  desc: string;
};

function PrjBlock({ path, name, desc }: PrjBlockProps) {
  return (
    <div
      className="
            flex gap-[3.75rem] 
            mt-0  mb-5 mr-5 ml-5 pt-2  pr-5  pb-2  pl-5 
            rounded-3xl backdrop-blur-md bg-[aliceblue] 
            hover:-translate-y-[6px]
            hover:shadow-[0_0_15px_rgba(255,165,0,0.6),0_0_40px_rgba(255,165,0,0.3),0_12px_40px_rgba(0,0,0,0.4)] 
            border-[3px] border-[#ebad0f]"
    >
      <img src={path} />

      <PrjInfo name={name} desc={desc} />
    </div>
  );
}

export default PrjBlock;
