import { Phone } from "lucide-react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import Link from "next/link";
import { Separator } from "../ui/separator";

export const WhatsappButton = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="fixed bottom-20 right-6 rounded-full"
        >
          <Phone className="size-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" side="top" className="space-y-4">
        <h4 className="text-sm font-bold">Contactanos</h4>
        <Separator />
        <Button variant="outline" className="w-full" asChild>
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=573108756795&text=Martinez%20Boutique%20Store"
          >
            Contactanos por Whatsapp
          </Link>
        </Button>
      </PopoverContent>
    </Popover>
  );
};
