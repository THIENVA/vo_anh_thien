import { ntt, pnj, vinatech } from "./assets";
import Block from "./Block";
import Button from "./Button";
import ExpBlock from "./ExpBlock";
import dataExperience from "./data/experience.json";

function Experience() {
  return (
    <Block>
      <Button
        title={dataExperience.title}
        onClick={() => console.log("clicked")}
      />
      <div className="block justify-center items-center mt-5 mb-5">
        <ExpBlock
          path={pnj}
          time={"2016 - 2020"}
          place={"PHU NHUAN JEWELRY FACTORY"}
          job={"Data & information employee - Office Administrator"}
        />
        <ExpBlock
          path={ntt}
          time={"2021"}
          place={"NTT"}
          job={"IT Heldesk support L1 (remote and onsite)."}
        />
        <ExpBlock
          path={vinatech}
          time={"2022"}
          place={"VINATECH"}
          job={"IT Heldesk support L1 (remote and onsite)."}
        />
      </div>
    </Block>
  );
}

export default Experience;
