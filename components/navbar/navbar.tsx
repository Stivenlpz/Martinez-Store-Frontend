import Link from "next/link";
import { ProfileButton } from "./profile-button";
import { CartButton } from "./cart-button";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-input">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo-wide.png"
              alt="Martinez Boutique Store"
              width={200}
              height={60}
              className="h-auto w-auto object-contain dark:invert"
              priority
            />
          </Link>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
          <Button variant="link" asChild>
            <Link href="/collections">Colecciones</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="#">Explorar</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/contact">Contacto</Link>
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          <ProfileButton />
          <CartButton />
        </div>
      </div>
    </nav>
  );
}
