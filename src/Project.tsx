import { project1, project2 } from "./assets";

function Project() {
  return (
    <>
      <div className="block rounded-3xl bg-[wheat] border-b-[3px] border-[#ebad0f] mt-5 mb-5">
        <button
          className="relative
bg-gradient-to-b from-[#f7b45a] via-[#e79a35] to-[#d67f1f]
text-white font-bold
rounded-3xl
cursor-pointer
mt-5 mb-5 ml-[650px]
whitespace-nowrap
pt-5 pb-5
py-5 px-5
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
        >
          PROJECTS
        </button>
        <p className="text-[140%] leading-none italic mt-5 mb-9  ml-[550px] text-[#000]">
          Some of the noteworthy projects I have built:
        </p>
        <div className="block justify-between my-0  mx-72">
          <div
            className="
            flex gap-[20px] 
            mt-0  mb-5 mr-5 ml-5 pt-2  pr-5  pb-2  pl-5
            rounded-3xl backdrop-blur-md bg-[aliceblue] 
            hover:-translate-y-[6px]
            hover:shadow-[0_0_15px_rgba(255,165,0,0.6),0_0_40px_rgba(255,165,0,0.3),0_12px_40px_rgba(0,0,0,0.4)] 
            border-[3px] border-[#ebad0f]
            justify-center
            items-center"
          >
            <img src={project1} alt="project-1" />
            <div className="relative top-[0.31rem] h-36 w-2 rounded-xl bg-[orange]"></div>
            <div className="project-1-info">
              <h2 className="font-bold">SHOP.COM</h2>
              <h4 className="font-bold">
                A web app for fashion trade and business. View your top
                products, top style, recently top model, and combo.
              </h4>
            </div>
          </div>
          <div
            className="
            flex gap-[20px] 
            mt-0  mb-5 mr-5 ml-5 pt-2  pr-5  pb-2  pl-5
            rounded-3xl backdrop-blur-md bg-[aliceblue] 
            hover:-translate-y-[6px]
            hover:shadow-[0_0_15px_rgba(255,165,0,0.6),0_0_40px_rgba(255,165,0,0.3),0_12px_40px_rgba(0,0,0,0.4)] 
            border-[3px] border-[#ebad0f]
            justify-center
            items-center"
          >
            <div>
              <h2 className="font-bold">LESSON.COM</h2>
              <h4 className="font-bold">
                An education app with specify special courses for sell.
              </h4>
            </div>
            <div className="relative top-[0.31rem] h-36 w-2 rounded-xl bg-[orange]"></div>
            <img src={project2} alt="project-2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
