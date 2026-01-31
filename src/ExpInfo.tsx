type ExpInfoProps = {
  time: string;
  place: string;
  job: string;
};

function ExpInfo({ time, place, job }: ExpInfoProps) {
  return (
    <div className="block gap-[0.31rem] rounded-3xl text-indigo-600 font-bold tex-[120%]">
      <p>{time}</p>
      <p>{place}</p>
      <div></div>
      <p>{job}</p>
    </div>
  );
}

export default ExpInfo;
