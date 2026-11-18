import HeroIntro from "./HeroIntro";
import HeroScroll from "./HeroScroll";
import HeroStatement from "./HeroStatement";

export default function Hero() {
  return <HeroScroll intro={<HeroIntro />} statement={<HeroStatement />} />;
}
