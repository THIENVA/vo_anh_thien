import Block from "./Block";
import Button from "./Button";
import dataSkill from "./data/skill.json";

function Skill() {
  return (
    <Block>
      <Button title={dataSkill.title} onClick={() => console.log("clicked")} />
      <p className="text-[140%] leading-none italic mt-5 mb-9 text-[#c7771a] justify-center">
        {dataSkill.description}
      </p>
      <div className="relative flex items-start justify-center w-full mt-10">
        <div className="flex-1 flex flex-col items-center">
          <Button
            title={dataSkill.categories[0].name}
            onClick={() => console.log("clicked")}
            className="mb-12"
          />
          <div className="grid grid-cols-2 gap-12 text-center">
            {dataSkill.categories[0].items.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <img src={item.icon} alt={item.title} className="h-16 w-auto" />
                <p className="font-semi-bold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Line */}
        <div className="h-[400px] w-[3px] bg-[#e18a22] mx-[30px] gap-5" />

        {/* Category Right */}
        <div className="flex-1 flex flex-col items-center">
          <Button
            title={dataSkill.categories[0].name}
            onClick={() => {}}
            className="mb-12"
          />
          <div className="grid grid-cols-2 gap-12 text-center">
            {dataSkill.categories[1].items.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <img src={item.icon} alt={item.title} className="h-16 w-auto" />
                <p className="font-semi-bold"> {item.title} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Block>
  );
}

export default Skill;
