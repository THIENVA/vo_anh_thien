import { aws, css, docker, html, js, react, ubuntu } from "./assets";
import Block from "./Block";
import SkillItem from "./SkillItem";
import Button from "./Button";

function Skill() {
  return (
    <Block>
      <Button title="TECHNICALL SKILL" onClick={() => console.log("clicked")} />
      <p className="text-[140%] leading-none italic text-center mt-[10px] mb-[10px] text-[#000]">
        The skills, tools and technologies I am adapted:
      </p>
      <div className="flex justify-between m-full">
        <div className="block gap-7">
          <Button
            title="Web Development"
            onClick={() => console.log("clicked")}
            className="mb-10"
          />
          <div className="grid grid-cols-2 gap-10 text-center">
            <SkillItem icon={html} title="HTML" />
            <SkillItem icon={css} title="CSS" />
            <SkillItem icon={js} title="Javascript" />
            <SkillItem icon={react} title="react" />
          </div>
        </div>
        <div className="h-[400px] w-[3px] bg-[#e18a22] mx-[30px] gap-5"></div>
        <div className="block gap-7">
          <Button
            title="Web Deploy"
            onClick={() => console.log("clicked")}
            className="mb-10"
          />
          <div className="grid grid-cols-2 gap-10 text-center mr-[400px]">
            <SkillItem icon={ubuntu} title="Ubuntu" />
            <SkillItem icon={aws} title="AWS" />
            <SkillItem icon={docker} title="Docker" />
          </div>
        </div>
      </div>
    </Block>
  );
}

export default Skill;
