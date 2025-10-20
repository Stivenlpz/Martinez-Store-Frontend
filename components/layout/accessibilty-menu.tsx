"use client";

import { Moon, Sun, Type, Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "next-themes";

const FONT_SIZES = {
  small: "text-sm",
  normal: "text-base",
  large: "text-lg",
  xlarge: "text-xl",
};

type FontSize = keyof typeof FONT_SIZES;

export function AccessibilityMenu() {
  const { theme, setTheme } = useTheme();
  const [fontSize, setFontSize] = useState<FontSize>("normal");

  useEffect(() => {
    const savedFontSize = localStorage.getItem("fontSize") as FontSize | null;

    if (savedFontSize) {
      setFontSize(savedFontSize);
      document.documentElement.setAttribute("data-font-size", savedFontSize);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const increaseFontSize = () => {
    const sizes: FontSize[] = ["small", "normal", "large", "xlarge"];
    const currentIndex = sizes.indexOf(fontSize);
    if (currentIndex < sizes.length - 1) {
      const newSize = sizes[currentIndex + 1];
      setFontSize(newSize);
      document.documentElement.setAttribute("data-font-size", newSize);
      localStorage.setItem("fontSize", newSize);
    }
  };

  const decreaseFontSize = () => {
    const sizes: FontSize[] = ["small", "normal", "large", "xlarge"];
    const currentIndex = sizes.indexOf(fontSize);
    if (currentIndex > 0) {
      const newSize = sizes[currentIndex - 1];
      setFontSize(newSize);
      document.documentElement.setAttribute("data-font-size", newSize);
      localStorage.setItem("fontSize", newSize);
    }
  };

  const resetFontSize = () => {
    setFontSize("normal");
    document.documentElement.setAttribute("data-font-size", "normal");
    localStorage.setItem("fontSize", "normal");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="rounded-full"
            aria-label="Opciones de accesibilidad"
          >
            <Type className="size-5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64" align="end" side="top">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-sm mb-3">Accesibilidad</h4>
            </div>

            <Separator />

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Tema</p>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="w-full justify-start gap-2 bg-transparent"
                aria-label={`Cambiar a modo ${theme === "light" ? "oscuro" : "claro"}`}
              >
                {theme === "light" ? (
                  <>
                    <Moon className="h-4 w-4" />
                    <span>Modo Oscuro</span>
                  </>
                ) : (
                  <>
                    <Sun className="h-4 w-4" />
                    <span>Modo Claro</span>
                  </>
                )}
              </Button>
            </div>

            <Separator />

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Tamaño de texto</p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decreaseFontSize}
                  disabled={fontSize === "small"}
                  aria-label="Disminuir tamaño de texto"
                  className="h-9 w-9 bg-transparent"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetFontSize}
                  className="flex-1 text-xs"
                  aria-label="Restablecer tamaño de texto"
                >
                  {fontSize === "small" && "Pequeño"}
                  {fontSize === "normal" && "Normal"}
                  {fontSize === "large" && "Grande"}
                  {fontSize === "xlarge" && "Muy grande"}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={increaseFontSize}
                  disabled={fontSize === "xlarge"}
                  aria-label="Aumentar tamaño de texto"
                  className="h-9 w-9 bg-transparent"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
