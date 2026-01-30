import {
  heroIntro31,
  heroIntro32,
  heroIntro41,
  heroIntro42,
  heroIntro43,
  heroImage,
} from "./assets";

function Hero() {
  return (
    <>
      <div className="flex mt-5 gap-12 mb-5 rounded-3xl bg-[wheat] border-b-[3px] border-[#ebad0f]">
        <div className="block items-start ml-8 pt-5 text-left text-[#e7870a]">
          <h1 className="text-[x-large] font-bold mb-6">
            Good day! I'm VO ANH THIEN!
          </h1>
          <p className="text-[100%] leading-none italic">
            A developer with a passion for visualizing and logical thinking. I
            value personal space and cooperation and motivate colleagues toward
            our goal. My goal is to deeply understand developing and deploying
            websites.
          </p>
          <div className="block mt-6 pl-0 gap-[10_px]">
            <li className="flex gap-4">
              <img src={heroIntro31} alt="her0-intro-3.1" />
              <p className="text-[100%] leading-none italic">
                162/42A Phan Dang Luu str, Duc Nhuan dist, Ho Chi Minh city
              </p>
            </li>
            <li className="flex gap-4">
              <img src={heroIntro32} alt="her0-intro-3.2" />
              <p className="text-[100%] leading-none italic">
                2. Available for new projects
              </p>
            </li>
          </div>
          <div className="flex gap-4 mt-6 w-9 h-9 items-center ">
            <img
              src={heroIntro41}
              alt="her0-intro-4.1"
              className="hover:-translate-y-[6px]
    hover:shadow-[0_0_15px_rgba(255,165,0,0.6),0_0_40px_rgba(255,165,0,0.3),0_12px_40px_rgba(0,0,0,0.4)]"
            />
            <img
              src={heroIntro42}
              alt="her0-intro-4.2"
              className="hover:-translate-y-[6px]
    hover:shadow-[0_0_15px_rgba(255,165,0,0.6),0_0_40px_rgba(255,165,0,0.3),0_12px_40px_rgba(0,0,0,0.4)]"
            />
            <img
              src={heroIntro43}
              alt="her0-intro-4.3"
              className="hover:-translate-y-[6px]
    hover:shadow-[0_0_15px_rgba(255,165,0,0.6),0_0_40px_rgba(255,165,0,0.3),0_12px_40px_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>
        <div
          className="relative mr-8 pt-5 w-72 h-72 rounded-3xl hover:transition-all duration-300 ease-in-out
    "
        >
          <img
            src={heroImage}
            alt="hero-image"
            className="w-50 h-55 rounded-3xl"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
