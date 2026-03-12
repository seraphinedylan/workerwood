import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export function NavBar() {
  const [activeKey, setActiveKey] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { key: "home", label: "Accueil", href: "#home" },
    { key: "services", label: "Services", href: "#services" },
    { key: "about", label: "À propos", href: "#about" },
    { key: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <div className="sticky top-0 left-0 w-full backdrop-blur-xs z-50 bg-black/30">
      <div className="flex justify-between items-center py-4 px-6 md:px-[120px]">
        <a href="#home" className="text-white font-bold text-xl tracking-wide">
          Pro<span className="text-[#FF7607]">Pose</span>
        </a>

        {/* Desktop nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map(({ key, label, href }) => (
              <NavigationMenuItem key={key}>
                <NavigationMenuLink
                  className={cn(
                    "text-white hover:text-[#FF7607] hover:bg-transparent focus:bg-transparent transition-colors",
                    { "font-bold text-[#FF7607]": activeKey === key }
                  )}
                  href={href}
                  onClick={() => setActiveKey(key)}
                >
                  {label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <a href="mailto:contact@propose.com" className="hidden md:block">
          <Button
            variant="outline"
            className="text-white bg-transparent border-white/50 hover:bg-[#FF7607] hover:text-white hover:border-[#FF7607] cursor-pointer transition-colors"
          >
            Me contacter
          </Button>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} size="lg" />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 flex flex-col px-6 py-4 gap-4">
          {navLinks.map(({ key, label, href }) => (
            <a
              key={key}
              href={href}
              className={cn(
                "text-white hover:text-[#FF7607] transition-colors text-sm py-1",
                { "font-bold text-[#FF7607]": activeKey === key }
              )}
              onClick={() => {
                setActiveKey(key);
                setIsMenuOpen(false);
              }}
            >
              {label}
            </a>
          ))}
          <a href="mailto:contact@propose.com" onClick={() => setIsMenuOpen(false)}>
            <Button
              variant="outline"
              className="w-full text-white bg-transparent border-white/50 hover:bg-[#FF7607] hover:text-white hover:border-[#FF7607] cursor-pointer transition-colors"
            >
              Me contacter
            </Button>
          </a>
        </div>
      )}
    </div>
  );
}
