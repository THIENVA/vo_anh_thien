import { address, github, mail, phone } from "./assets";
import Block from "./Block";
import Button from "./Button";

function Contact() {
  return (
    <Block>
      <Button title="CONTACT" onClick={() => console.log("clicked")} />
      <p className="text-[140%] leading-none italic mt-5 mb-9  ml-[180px] text-[#000]">
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
    </Block>
  );
}

export default Contact;
