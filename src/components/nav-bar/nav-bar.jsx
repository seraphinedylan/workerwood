import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function NavBar() {
  const [activeKey, setActiveKey] = useState("home");

  return (
    <div className="sticky top-0 left-0 w-full backdrop-blur-xs z-50 py-4 px-[120px] flex justify-between items-center bg-black/30">
      <div className="text-white">LOGO</div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                "text-white hover:text-blue-600 hover:underline hover:bg-transparent focus:bg-transparent",
                { "font-bold underline ": activeKey === "home" }
              )}
              href="#home"
              onClick={() => setActiveKey("home")}
            >
              Accueil
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                "text-white  hover:text-blue-600 hover:underline hover:bg-transparent active:bg-transparent focus:bg-transparent",
                { "font-bold underline": activeKey === "services" }
              )}
              href="#services"
              onClick={() => setActiveKey("services")}
            >
              Services
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                "text-white  hover:text-blue-600 hover:underline hover:bg-transparent active:bg-transparent focus:bg-transparent",
                { "font-bold underline": activeKey === "about" }
              )}
              href="#about"
              onClick={() => setActiveKey("about")}
            >
              À propos
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                "text-white  hover:text-blue-600 hover:underline hover:bg-transparent active:bg-transparent focus:bg-transparent",
                { "font-bold underline": activeKey === "tst" }
              )}
              href="#contact"
              onClick={() => setActiveKey("tst")}
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button
        variant="outline"
        className="text-secondary bg-transparent border-secondary  hover:text-primary cursor-pointer"
      >
        Me contacter
      </Button>
    </div>
  );
}
