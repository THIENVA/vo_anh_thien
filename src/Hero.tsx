import {
  heroIntro31,
  heroIntro32,
  heroIntro41,
  heroIntro42,
  heroIntro43,
  heroImage,
} from "./assets";
import Block from "./Block";
import HeroInfo from "./heroInfo";
import HeroIcon from "./heroIcon";

function Hero() {
  return (
    <Block>
      <div className="flex mr-8 ml-8">
        <div className="flex flex-col text-[#e7870a]">
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
            <HeroInfo
              path={heroIntro31}
              title={
                "162/42A Phan Dang Luu str, Duc Nhuan dist, Ho Chi Minh city"
              }
            />
            <HeroInfo
              path={heroIntro32}
              title={"2. Available for new projects"}
            />
            <div className="flex gap-4 items-center ">
              <HeroIcon path={heroIntro41} />
              <HeroIcon path={heroIntro42} />
              <HeroIcon path={heroIntro43} />
            </div>
          </div>
        </div>
        <div className="relative pt-5 w-72 h-72 rounded-3xl hover:transition-all duration-300 ease-in-out">
          <img
            src={heroImage}
            alt="hero-image"
            className="w-50 h-55 rounded-3xl"
          />
        </div>
      </div>
    </Block>
  );
}

export default Hero;
