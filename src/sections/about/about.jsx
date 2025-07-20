import SandingImage from "@/images/sanding.jpg";

export function About() {
  return (
    <div id="about" className="text-white py-24 px-[120px]">
      <div className="flex items-center">
        <div className="flex flex-col items-center justify-center w-1/2">
          <h2 className="text-3xl text-center font-bold mb-6">À propos</h2>
          <p className="w-2/3">
            Artisan menuisier et plombier avec plus de 20 ans d’expérience, j’ai
            accompagné de nombreux clients particuliers ainsi que de grandes
            entreprises. <br />
            Basé autour de Mande, je réalise principalement des projets en
            région, tout en intervenant occasionnellement dans le Sud-Ouest,
            notamment autour de Bordeaux et Toulouse. Je m’appuie sur un
            savoir-faire solide pour offrir un travail soigné, durable et adapté
            à chaque besoin.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center bg-violet-200  w-1/2">
          <img src={SandingImage} />
        </div>
      </div>
    </div>
  );
}
