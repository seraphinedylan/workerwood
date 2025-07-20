import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <div id="contact" className="pb-10 text-white bg-[#222630]">
      <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d45503.46898326446!2d3.4553207!3d44.5363121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b36c2d51f0295b%3A0x40788211669a290!2s48000%20Mende!5e0!3m2!1sfr!2sfr!4v1753039518363!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="flex items-center justify-between mt-10 px-[120px]">
        <div>
          <h2 className="text-3xl text-center font-bold mb-6">Contactez-moi</h2>
          <p className="text-lg">
            Besoin d’un artisan de confiance ? Contactez-moi.
          </p>
        </div>
        <Button variant="secondary" size="lg" className="cursor-pointer">
          Contact
        </Button>
      </div>
    </div>
  );
}
