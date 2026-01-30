import { aws, css, docker, html, js, react, ubuntu } from "./assets";

function Skill() {
  return (
    <>
      <div className="bg-[wheat] block rounded-3xl border-b-[3px] border-[#ebad0f] mt-5 mb-5">
        <button
          className="relative
bg-gradient-to-b from-[#f7b45a] via-[#e79a35] to-[#d67f1f]
text-white font-bold
rounded-3xl
cursor-pointer
mt-5 mr-[500px] mb-5 ml-[500px]
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
          id="#skill"
        >
          TECHNICAL SKILL
        </button>
        <p className="text-[140%] leading-none italic  mb-9  ml-[60px] text-[#000]">
          The skills, tools and technologies I am adapted:
        </p>
        <div className="flex justify-between my-0  mx-72">
          <div className="block gap-5 rounded-2xl">
            <button
              className="relative
bg-gradient-to-b from-[#f7b45a] via-[#e79a35] to-[#d67f1f]
text-white font-bold
rounded-3xl
cursor-pointer
mt-5 mb-5
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
text-[130%] leading-none
border-[3px] border-[#ebad0f]"
            >
              Web Development
            </button>
            <div className="grid grid-cols-[repeat(2,_1fr)] justify-items-center text-center gap-[3.13rem]">
              <div className="skill-item">
                <img src={html} alt="html" className="w-12 h-auto" />
                <h3 className="mt-3 text-xl font-bold text-[120%, #000]">
                  HTML
                </h3>
              </div>
              <div className="text-left mb-8">
                <img src={css} alt="CSS" className="w-12 h-auto" />
                <h3 className="mt-3 text-xl font-bold text-[120%, #000]">
                  CSS
                </h3>
              </div>
              <div className="skill-item">
                <img src={js} alt="JS" className="w-12 h-auto" />
                <h3 className="mt-3 text-xl font-bold text-[120%, #000]">
                  Javascript
                </h3>
              </div>
              <div className="skill-item">
                <img src={react} alt="react" className="w-12 h-auto" />
                <h3 className="mt-3 text-xl font-bold text-[120%, #000]">
                  React
                </h3>
              </div>
            </div>
          </div>
          <div className="h-[400px] w-[3px] bg-[#e18a22] mx-[30px]"></div>
          <div className="block gap-10">
            <button
              className="relative
bg-gradient-to-b from-[#f7b45a] via-[#e79a35] to-[#d67f1f]
text-white font-bold
rounded-3xl
cursor-pointer
mt-5 mb-5
whitespace-nowrap
pt-5 pb-5
py-10 px-10
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
text-[130%] leading-none
border-[3px] border-[#ebad0f]"
            >
              Web Deploy
            </button>
            <div className="grid grid-cols-[repeat(2,_1fr)] justify-items-center text-center gap-[3.13rem]">
              <div className="skill-item">
                <img src={ubuntu} alt="ubuntu" className="w-12 h-auto" />
                <h3 className="mt-3 text-xl font-bold text-[120%, #000]">
                  Ubuntu
                </h3>
              </div>
              <div className="skill-item">
                <img src={aws} alt="aws" className="w-12 h-auto" />
                <h3 className="mt-3 text-xl font-bold text-[120%, #000]">
                  AWS
                </h3>
              </div>
              <div className="skill-item">
                <img src={docker} alt="docker" className="w-12 h-auto" />
                <h3 className="mt-3 text-xl font-bold text-[120%, #000]">
                  Docker
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
