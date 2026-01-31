import ExpInfo from "./ExpInfo";

type ExpBlockProps = {
  path: string;
  time: string;
  place: string;
  job: string; // đường dẫn image
};

function ExpBlock({ path, time, place, job }: ExpBlockProps) {
  return (
    <div
      className="
            flex gap-[3.75rem] 
            ml-96 mr-80 mt-5 mb-5 
            pl-15 pr-15 pt-5 pb-3 
            rounded-3xl backdrop-blur-md bg-[aliceblue] 
            hover:-translate-y-[6px]
            hover:shadow-[0_0_15px_rgba(255,165,0,0.6),0_0_40px_rgba(255,165,0,0.3),0_12px_40px_rgba(0,0,0,0.4)] 
            border-[3px] border-[#ebad0f]"
    >
      <img src={path} />
      <div className="h-1 w-full mt-2  mx-0  mb-3 bg-[orange]"></div>
      <ExpInfo time={time} place={place} job={job} />
    </div>
  );
}

export default ExpBlock;
