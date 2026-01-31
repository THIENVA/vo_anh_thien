import { aboutImage } from "./assets";
import Block from "./Block";
import Button from "./Button";

function About() {
  return (
    <Block>
      <Button title="ABOUT ME" onClick={() => console.log("clicked")} />
      <div className="flex gap-10 items-start">
        <img src={aboutImage} alt="about-image" className="w-55 h-50" />
        <div className="text-[#d67f1f] text-[110%] leading-relaxed">
          <p className="mt-5">
            I'm a passionate, self-proclaimed developer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me. I am very much a
            progressive thinker and enjoy working on products end to end, from
            ideation all the way to development.
          </p>
          <div className="mt-6">
            <p>Finally, some opportunities that's my interest.</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Front-end developer</li>
              <li>IT Technician</li>
              <li>System Administrator</li>
              <li>Website Administrator</li>
            </ul>
          </div>
        </div>
      </div>
    </Block>
  );
}

export default About;
