import { address, github, mail, phone } from "./assets";

function Contact() {
  return (
    <>
      <div className="block rounded-3xl bg-[wheat] border-b-[3px] border-[#ebad0f] mt-5 mb-5">
        <button
          className="relative
bg-gradient-to-b from-[#f7b45a] via-[#e79a35] to-[#d67f1f]
text-white font-bold
rounded-3xl
cursor-pointer
mt-5 mr-[500px] ml-[500px]
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
          CONTACT ME
        </button>
        <p className="text-[140%] leading-none italic mt-5 mb-9  ml-[60px] text-[#000]">
          Feel free to reach out to me if you're looking for a developer, have a
          query, or simply want to connect.
        </p>
        <div
          className="block gap-10
            mt-0  mb-5 mr-[300px] ml-[400px] pt-2  pr-[40px]  pb-2  pl-[40px]
            rounded-3xl backdrop-blur-md bg-[aliceblue] 
            hover:-translate-y-[6px]
            hover:shadow-[0_0_15px_rgba(255,165,0,0.6),0_0_40px_rgba(255,165,0,0.3),0_12px_40px_rgba(0,0,0,0.4)] 
            border-[3px] border-[#ebad0f]"
        >
          <div className="flex gap-[1.88rem] text-[120%] leading-none text-[#000] whitespace-nowrap">
            <img src={phone} alt="phone" />
            <h3>083-445-5322</h3>
          </div>
          <div className="flex gap-[1.88rem] text-[120%] leading-none text-[#000] whitespace-nowrap">
            <img src={mail} alt="email" />
            <h4>v.voanhthien@gmail.com</h4>
          </div>
          <div className="flex gap-[1.88rem] text-[120%] leading-none text-[#000] whitespace-nowrap">
            <img src={address} alt="address" />
            <h4>162/42A Phan Dang Luu str, Duc Nhuan dist</h4>
          </div>
          <div className="flex gap-[1.88rem] text-[120%] leading-none text-[#000] whitespace-nowrap">
            <img src={github} alt="github" />
            <h4>https://github.com/THIENVA/THIENVA.git</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
