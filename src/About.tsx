import { aboutImage } from "./assets";

function About() {
  return (
    <>
      <div className="bg-[wheat] rounded-3xl border-b-[3px] border-[#ebad0f]">
        <button
          className="relative
bg-gradient-to-b from-[#f7b45a] via-[#e79a35] to-[#d67f1f]
text-white font-bold
rounded-3xl
cursor-pointer
mt-5 mb-5 ml-[650px]
whitespace-nowrap
pt-5 pb-5
py-2 px-4
overflow-hidden
before:content-['']
before:absolute
before:top-[0.38rem]
before:left-[0.38rem]
before:right-[0.38rem]
before:h-[45%]
before:rounded-3xl
focus:outline
focus:outline-2
focus:outline-[#e7870a]
active:outline
active:outline-2
active:outline-[#e7870a]
focus:shadow-[inset_0_4px_8px_rgba(255,255,255,0.45),0_0_15px_#e7870a]
active:shadow-[inset_0_4px_8px_rgba(255,255,255,0.45),0_0_15px_#e7870a]
border-[3px] border-[#ebad0f]"
          id="#about"
        >
          ABOUT ME
        </button>
        <div className="flex gap-10 my-0  mx-8">
          <img src={aboutImage} alt="about-image" className="w-70 h-70" />
          <div className="text-[#d67f1f] text-[110%] leading-relaxed font-normal not-italic text-center">
            <p className="mt-5">
              I'm a passionate, self-proclaimed developer who specializes in
              full stack development (React.js & Node.js). I am very
              enthusiastic about bringing the technical and visual aspects of
              digital products to life. User experience, pixel perfect design,
              and writing clear, readable, highly performant code matters to me.
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
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
      </div>
    </>
  );
}

export default About;
