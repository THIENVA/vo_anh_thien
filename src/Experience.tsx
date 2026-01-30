import { ntt, pnj, vinatech } from "./assets";

function Experience() {
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
        >
          WORK EXPERIENCE
        </button>
        <div className="block justify-center items-center mt-5 mb-5">
          <div
            className="
            flex gap-[3.75rem] 
            ml-96 mr-80 mt-5 mb-5 
            pl-15 pr-15 pt-5 pb-3 
            rounded-3xl backdrop-blur-md bg-[aliceblue] 
            hover:-translate-y-[6px]
            hover:shadow-[0_0_15px_rgba(255,165,0,0.6),0_0_40px_rgba(255,165,0,0.3),0_12px_40px_rgba(0,0,0,0.4)] 
            border-[3px] border-[#ebad0f]"
          >
            <img src={pnj} alt="pnj" />
            <div className="block gap-[0.31rem] rounded-3xl text-indigo-600">
              <h3>2016 - 2020</h3>
              <h2>PHU NHUAN JEWELRY FACTORY</h2>
              <div className="h-1 w-full mt-2  mx-0  mb-3 bg-[orange]"></div>
              <h3>Data & information employee - Office Administrator</h3>
            </div>
          </div>
          <div
            className="
            flex gap-[3.75rem] 
            ml-96 mr-80 mt-5 mb-5 
            pl-15 pr-15 pt-5 pb-3 
            rounded-3xl backdrop-blur-md bg-[aliceblue] 
            hover:-translate-y-[6px]
            hover:shadow-[0_0_15px_rgba(255,165,0,0.6),0_0_40px_rgba(255,165,0,0.3),0_12px_40px_rgba(0,0,0,0.4)] 
            border-[3px] border-[#ebad0f]"
          >
            <img src={ntt} />
            <div className="block gap-[0.31rem] rounded-3xl text-indigo-600">
              <h3>2021</h3>
              <h2>NTT</h2>
              <div className="h-1 w-full mt-2  mx-0  mb-3 bg-[orange]"></div>
              <h3>IT Heldesk support L1 (remote and onsite).</h3>
            </div>
          </div>
          <div
            className="
            flex gap-[3.75rem] 
            ml-96 mr-80 mt-5 mb-5 
            pl-15 pr-15 pt-5 pb-3 
            rounded-3xl backdrop-blur-md bg-[aliceblue] 
            hover:-translate-y-[6px]
            hover:shadow-[0_0_15px_rgba(255,165,0,0.6),0_0_40px_rgba(255,165,0,0.3),0_12px_40px_rgba(0,0,0,0.4)] 
            border-[3px] border-[#ebad0f]"
          >
            <img src={vinatech} alt="vinatech" />
            <div className="block gap-[0.31rem] rounded-3xl text-indigo-600">
              <h3>2022</h3>
              <h2>VINATECH</h2>
              <div className="h-1 w-full mt-2  mx-0  mb-3 bg-[orange]"></div>
              <h3>IT Heldesk support L1 (remote and onsite).</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
