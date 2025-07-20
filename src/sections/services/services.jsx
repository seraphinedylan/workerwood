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
        <h2 className="text-3xl text-center font-bold mb-6">Mes services</h2>
        <div className="w-1/2 mx-auto text-center">
          <p>Avec plus de 20 ans d’expérience.</p>
          <p>
            Je réalise vos travaux de menuiserie, pose de cuisine et plomberie
            avec passion et confiance.
          </p>
        </div>
        <Card
          style={{ backgroundImage: `url(${SawingImage})` }}
          className="relative mx-[120px] bg-cover bg-center bg-no-repeat h-[250px] overflow-hidden border-none mt-20 cursor-pointer"
        >
          {/* Fade overlay */}
          <div
            className="absolute top-0 left-0 h-full"
            style={{
              width: "95%",
              background:
                "linear-gradient(to right, #20252E 0%, #20252E 40%, rgba(32, 37, 46, 0) 100%)",
            }}
          />

          <div className="relative z-10 p-6 text-start w-1/2 my-auto">
            <h3 className="text-2xl font-bold text-white">Menuserie</h3>
            <p className="text-xs text-white mt-3">
              Je réalise tous travaux de menuiserie : meubles sur mesure,
              portes, escaliers, fenêtres et parquets. Pour rénovation ou
              construction neuve, je garantis un travail soigné et durable.
            </p>

            <Button variant="link" className="mt-6 text-[#FF7607] p-0">
              En savoir plus <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </div>
        </Card>

        <div className="flex items-center gap-x-3 mt-2 mx-[120px]">
          <Card
            style={{ backgroundImage: `url(${ToolsImage})` }}
            className="relative  bg-cover bg-center bg-no-repeat h-[250px] overflow-hidden border-none cursor-pointer"
          >
            {/* Fade overlay */}
            <div
              className="absolute top-0 left-0 h-full"
              style={{
                width: "95%",
                background:
                  "linear-gradient(to right, #20252E 0%, #20252E 40%, rgba(32, 37, 46, 0) 100%)",
              }}
            />

            <div className="relative z-10 p-6 text-start w-1/2 my-auto">
              <h3 className="text-2xl font-bold text-white">Plomberie</h3>
              <p className="text-xs text-white mt-3">
                J’interviens pour tous vos travaux de plomberie, en installation
                comme en rénovation. Fuites, robinetterie, raccordements : un
                service rapide et fiable.
              </p>

              <Button variant="link" className="mt-6 text-[#FF7607] p-0">
                En savoir plus <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </Card>
          <Card
            style={{ backgroundImage: `url(${WorkingImage})` }}
            className="relative bg-cover bg-center bg-no-repeat h-[250px] overflow-hidden border-none cursor-pointer"
          >
            {/* Fade overlay */}
            <div
              className="absolute top-0 left-0 h-full"
              style={{
                width: "95%",
                background:
                  "linear-gradient(to right, #20252E 0%, #20252E 40%, rgba(32, 37, 46, 0) 100%)",
              }}
            />

            <div className="relative z-10 p-6 text-start w-1/2 my-auto">
              <h3 className="text-2xl font-bold text-white">
                Cuisine clé en main
              </h3>
              <p className="text-xs text-white mt-3">
                Je réalise la pose complète de votre cuisine, de l’assemblage
                des meubles aux raccordements plomberie et électroménager.
              </p>

              <Button variant="link" className="mt-6 text-[#FF7607] p-0">
                En savoir plus <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
