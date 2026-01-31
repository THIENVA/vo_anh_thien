import { project1, project2 } from "./assets";
import Block from "./Block";
import Button from "./Button";
import PrjBlock from "./ProjectBlock";

function Project() {
  return (
    <Block>
      <Button title="PROJECT" onClick={() => console.log("clicked")} />
      <p className="text-[140%] leading-none italic mt-5 mb-9  ml-[550px] text-[#000]">
        Some of the noteworthy projects I have built:
      </p>
      <div className="block justify-between my-0  mx-72">
        <PrjBlock
          path={project1}
          name={"SHOP.COM"}
          desc={
            "A web app for fashion trade and business. View your top products,top style, recently top model, and combo."
          }
        />
        <PrjBlock
          path={project2}
          name={"LESSON.COM"}
          desc={"An education app with specify special courses for sell."}
        />
      </div>
    </Block>
  );
}

export default Project;
