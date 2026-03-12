import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SawingImage from "@/images/sawing.jpg";
import ToolsImage from "@/images/tools.jpg";
import WorkingImage from "@/images/working.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Services() {
  return (
    <div className="relative z-10">
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-t from-[#16191F] to-transparent pointer-events-none z-[-1]" />

      <section id="services" className="bg-[#16191F] text-white py-24">
        <div className="text-center mb-16 px-6">
          <h2 className="text-3xl font-bold mb-3">Mes services</h2>
          <div className="w-12 h-1 bg-[#FF7607] mx-auto mb-5 rounded-full" />
          <p className="text-white/60 max-w-md mx-auto">
            Avec plus de 20 ans d'expérience, je réalise vos travaux de
            menuiserie, pose de cuisine et plomberie avec passion et confiance.
          </p>
        </div>

        <Card
          style={{ backgroundImage: `url(${SawingImage})` }}
          className="relative mx-4 md:mx-[120px] bg-cover bg-center bg-no-repeat min-h-[250px] overflow-hidden border-none mt-4 cursor-pointer group"
        >
          {/* Fade overlay */}
          <div
            className="absolute top-0 left-0 h-full transition-opacity duration-300 group-hover:opacity-90"
            style={{
              width: "95%",
              background:
                "linear-gradient(to right, #20252E 0%, #20252E 40%, rgba(32, 37, 46, 0) 100%)",
            }}
          />

          <div className="relative z-10 p-8 text-start w-2/3 md:w-1/2 my-auto">
            <h3 className="text-2xl font-bold text-white">Menuiserie</h3>
            <p className="text-sm text-white/70 mt-3 leading-relaxed">
              Je réalise tous travaux de menuiserie : meubles sur mesure,
              portes, escaliers, fenêtres et parquets. Pour rénovation ou
              construction neuve, je garantis un travail soigné et durable.
            </p>

            <Button variant="link" className="mt-5 text-[#FF7607] p-0 hover:text-[#e06800]">
              En savoir plus <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
            </Button>
          </div>
        </Card>

        <div className="flex flex-col md:flex-row gap-3 mt-3 mx-4 md:mx-[120px]">
          <Card
            style={{ backgroundImage: `url(${ToolsImage})` }}
            className="relative bg-cover bg-center bg-no-repeat min-h-[250px] overflow-hidden border-none cursor-pointer w-full md:w-1/2 group"
          >
            {/* Fade overlay */}
            <div
              className="absolute top-0 left-0 h-full transition-opacity duration-300 group-hover:opacity-90"
              style={{
                width: "95%",
                background:
                  "linear-gradient(to right, #20252E 0%, #20252E 40%, rgba(32, 37, 46, 0) 100%)",
              }}
            />

            <div className="relative z-10 p-8 text-start w-2/3 md:w-1/2 my-auto">
              <h3 className="text-2xl font-bold text-white">Plomberie</h3>
              <p className="text-sm text-white/70 mt-3 leading-relaxed">
                J'interviens pour tous vos travaux de plomberie, en installation
                comme en rénovation. Fuites, robinetterie, raccordements : un
                service rapide et fiable.
              </p>

              <Button variant="link" className="mt-5 text-[#FF7607] p-0 hover:text-[#e06800]">
                En savoir plus <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
              </Button>
            </div>
          </Card>

          <Card
            style={{ backgroundImage: `url(${WorkingImage})` }}
            className="relative bg-cover bg-center bg-no-repeat min-h-[250px] overflow-hidden border-none cursor-pointer w-full md:w-1/2 group"
          >
            {/* Fade overlay */}
            <div
              className="absolute top-0 left-0 h-full transition-opacity duration-300 group-hover:opacity-90"
              style={{
                width: "95%",
                background:
                  "linear-gradient(to right, #20252E 0%, #20252E 40%, rgba(32, 37, 46, 0) 100%)",
              }}
            />

            <div className="relative z-10 p-8 text-start w-2/3 md:w-1/2 my-auto">
              <h3 className="text-2xl font-bold text-white">
                Cuisine clé en main
              </h3>
              <p className="text-sm text-white/70 mt-3 leading-relaxed">
                Je réalise la pose complète de votre cuisine, de l'assemblage
                des meubles aux raccordements plomberie et électroménager.
              </p>

              <Button variant="link" className="mt-5 text-[#FF7607] p-0 hover:text-[#e06800]">
                En savoir plus <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
