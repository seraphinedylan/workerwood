import SandingImage from "@/images/sanding.jpg";

export function About() {
  return (
    <div id="about" className="bg-[#16191F] text-white py-24 px-6 md:px-[120px]">
      {/* Stats bar */}
      <div className="grid grid-cols-2 md:flex md:justify-center md:items-center gap-8 md:gap-12 mb-20 border-y border-white/10 py-10">
        <div className="text-center">
          <p className="text-5xl font-bold text-[#FF7607]">20+</p>
          <p className="text-sm text-white/60 mt-2 uppercase tracking-wider">Ans d'expérience</p>
        </div>
        <div className="hidden md:block w-px h-12 bg-white/10" />
        <div className="text-center">
          <p className="text-5xl font-bold text-[#FF7607]">500+</p>
          <p className="text-sm text-white/60 mt-2 uppercase tracking-wider">Projets réalisés</p>
        </div>
        <div className="hidden md:block w-px h-12 bg-white/10" />
        <div className="text-center">
          <p className="text-5xl font-bold text-[#FF7607]">3</p>
          <p className="text-sm text-white/60 mt-2 uppercase tracking-wider">Services proposés</p>
        </div>
        <div className="hidden md:block w-px h-12 bg-white/10" />
        <div className="text-center">
          <p className="text-5xl font-bold text-[#FF7607]">100%</p>
          <p className="text-sm text-white/60 mt-2 uppercase tracking-wider">Satisfaction client</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
        <div className="flex flex-col w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-3">À propos</h2>
          <div className="w-12 h-1 bg-[#FF7607] mb-6 rounded-full" />
          <p className="text-white/70 leading-relaxed">
            Artisan menuisier et plombier avec plus de 20 ans d'expérience, j'ai
            accompagné de nombreux clients particuliers ainsi que de grandes
            entreprises.
          </p>
          <p className="text-white/70 leading-relaxed mt-4">
            Basé autour de Mende, je réalise principalement des projets en
            région, tout en intervenant occasionnellement dans le Sud-Ouest,
            notamment autour de Bordeaux et Toulouse. Je m'appuie sur un
            savoir-faire solide pour offrir un travail soigné, durable et adapté
            à chaque besoin.
          </p>
        </div>

        <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={SandingImage}
            className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
}
