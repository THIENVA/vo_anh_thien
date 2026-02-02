type PrjInfoProps = {
  name: string;
  desc: string;
};

function PrjInfo({ name, desc }: PrjInfoProps) {
  return (
    <div className="font-bold">
      <h2>{name}</h2>
      <div className="w-20 h-1 bg-orange-500"></div>
      <h4>{desc}</h4>
    </div>
  );
}

export default PrjInfo;
