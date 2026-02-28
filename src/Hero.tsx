import Block from "./Block";
import dataHero from "./data/hero.json";

function Hero() {
  return (
    <Block>
      <div className="flex mr-8 ml-8">
        <div className="flex flex-col text-[#e7870a]">
          <h1 className="text-[x-large] font-bold mb-6">{dataHero.title}</h1>
          <p className="text-[100%] leading-none italic">
            {dataHero.description}
          </p>
          <div className="block mt-6 pl-0 gap-[10_px]">
            {dataHero.info.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <img src={item.icon} className="w-6 h-6" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-6 w-auto h-10 items-center">
            {dataHero.social.map((item) => (
              <a key={item.id} href={item.link}>
                <img
                  src={item.icon}
                  className="h-10 w-auto hover:scale-110 transition flex"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mr-8 pt-5 w-72 h-72 rounded-3xl hover:transition-all duration-300 ease-in-out">
          <img
            src={dataHero.avatar}
            alt="hero-image"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </Block>
  );
}

export default Hero;
