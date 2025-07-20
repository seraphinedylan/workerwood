import { NavBar } from "@/components/nav-bar/nav-bar";
import WoodImage from "@/images/woodworker.jpg";

export function Header() {
  return (
    <section
      id="home"
      className="h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${WoodImage})` }}
    >
      <NavBar />

      {/* This is the blur fade */}
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-b from-transparent via-black/60 to-[#16191F] backdrop-blur-sm" />
    </section>
  );
}
