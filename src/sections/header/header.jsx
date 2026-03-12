import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/nav-bar/nav-bar";
import WoodImage from "@/images/woodworker.jpg";

export function Header() {
  return (
    <section
      id="home"
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${WoodImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <NavBar />

      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 pointer-events-none">
        <span className="text-[#FF7607] text-sm font-semibold tracking-widest uppercase mb-5">
          Artisan qualifié · Lozère
        </span>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
          Votre artisan<br />de confiance
        </h1>
        <p className="text-base md:text-lg text-white/70 max-w-lg mb-10">
          Menuiserie, plomberie et cuisine clé en main.<br />
          Plus de 20 ans d'expérience au service de vos projets.
        </p>
        <a href="mailto:contact@propose.com" className="pointer-events-auto">
          <Button
            size="lg"
            className="bg-[#FF7607] hover:bg-[#e06800] text-white border-none cursor-pointer text-base px-8 py-6"
          >
            Demander un devis
          </Button>
        </a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-black/60 to-[#16191F]" />
    </section>
  );
}
