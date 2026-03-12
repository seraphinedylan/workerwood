import { Marquee } from "@/components/marquee/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Marie L.",
    username: "Cliente particulière",
    body: "Pose de cuisine impeccable, travail soigné et dans les délais. Je recommande vivement !",
    img: "https://avatar.vercel.sh/marie",
  },
  {
    name: "Thomas B.",
    username: "Client particulier",
    body: "Réparation de fuite urgente réglée en moins d'une heure. Professionnel et efficace.",
    img: "https://avatar.vercel.sh/thomas",
  },
  {
    name: "Sophie M.",
    username: "Cliente particulière",
    body: "Escalier sur mesure magnifique. Un vrai artisan passionné par son métier.",
    img: "https://avatar.vercel.sh/sophie",
  },
  {
    name: "Entreprise Aubert",
    username: "Client professionnel",
    body: "Intervient régulièrement sur nos chantiers de rénovation. Sérieux et fiable.",
    img: "https://avatar.vercel.sh/aubert",
  },
  {
    name: "Pierre D.",
    username: "Client particulier",
    body: "Fenêtres et portes posées avec soin. Excellent rapport qualité-prix.",
    img: "https://avatar.vercel.sh/pierre",
  },
  {
    name: "Claire V.",
    username: "Cliente particulière",
    body: "Cuisine clé en main livrée en temps et en heure. On est ravis du résultat !",
    img: "https://avatar.vercel.sh/claire",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

function ReviewCard({ img, name, username, body }) {
  return (
    <figure
      className={cn(
        "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border p-5",
        "border-white/10 bg-[#20252E] hover:bg-[#252B35] transition-colors duration-200",
        "text-white"
      )}
    >
      <div className="flex items-center gap-1 mb-3">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="text-[#FF7607] text-xs">
              ★
            </span>
          ))}
      </div>
      <blockquote className="text-sm text-white/75 mb-4 leading-relaxed">
        "{body}"
      </blockquote>
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold">{name}</figcaption>
          <p className="text-xs text-white/50">{username}</p>
        </div>
      </div>
    </figure>
  );
}

export function CustomerReview() {
  return (
    <section id="customer-review" className="bg-[#16191F] py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-3">
          Ils me font confiance
        </h2>
        <div className="w-12 h-1 bg-[#FF7607] mx-auto mb-5 rounded-full" />
        <p className="text-white/60 text-sm max-w-md mx-auto">
          Particuliers et professionnels satisfaits de mes interventions en
          Lozère et dans le Sud-Ouest.
        </p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-3">
        <Marquee pauseOnHover className="[--duration:25s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#16191F] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#16191F] to-transparent" />
      </div>
    </section>
  );
}
