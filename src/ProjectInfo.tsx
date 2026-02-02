type PrjInfoProps = {
  name: string;
  desc: string;
};

function PrjInfo({ name, desc }: PrjInfoProps) {
  return (
    <div className="font-bold">
      <h2>{name}</h2>

      <h4>{desc}</h4>
    </div>
  );
}

export default PrjInfo;
