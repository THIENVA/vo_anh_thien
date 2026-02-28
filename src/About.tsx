import Block from "./Block";
import Button from "./Button";
import dataAbout from "./data/about.json";

function About() {
  return (
    <Block>
      <Button title="ABOUT ME" onClick={() => console.log("clicked")} />
      <div className="flex gap-12 m-auto">
        <img src={dataAbout.image} alt="about-image" className="w-55 h-50" />
        <div className="text-[#d67f1f] text-[110%] leading-relaxed">
          <p className="mt-5">{dataAbout.description}</p>
          <div className="mt-6">
            <p>{dataAbout.subtitle} </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              {dataAbout.interest.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Block>
  );
}

export default About;
