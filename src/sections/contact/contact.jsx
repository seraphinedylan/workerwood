import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <div id="contact" className="pb-20 text-white bg-[#222630]">
      <div className="w-full h-[400px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d45503.46898326446!2d3.4553207!3d44.5363121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b36c2d51f0295b%3A0x40788211669a290!2s48000%20Mende!5e0!3m2!1sfr!2sfr!4v1753039518363!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-14 px-6 md:px-[120px] gap-8 md:gap-0">
        <div>
          <h2 className="text-3xl font-bold mb-3">Contactez-moi</h2>
          <div className="w-12 h-1 bg-[#FF7607] mb-6 rounded-full" />
          <p className="text-white/60 mb-6 max-w-sm">
            Besoin d'un artisan de confiance ? Décrivez-moi votre projet et je
            vous réponds rapidement.
          </p>
          <div className="flex flex-col gap-3 text-sm text-white/70">
            <span>📍 Mende, Lozère (48)</span>
            <span>📞 06 XX XX XX XX</span>
            <span>✉️ contact@pro-pose.fr</span>
          </div>
        </div>

        <a href="mailto:contact@propose.com">
          <Button
            size="lg"
            className="bg-[#FF7607] hover:bg-[#e06800] text-white border-none cursor-pointer text-base px-10 py-6"
          >
            Envoyer un message
          </Button>
        </a>
      </div>
    </div>
  );
}
