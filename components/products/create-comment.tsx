"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { apiFetch } from "@/lib/api";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import { Plus, X, Loader2 } from "lucide-react";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const commentSchema = z.object({
  content: z.string().min(3, "El comentario debe tener al menos 3 caracteres."),
  stars: z.number().min(0).max(5),
  images: z.array(z.string()),
});

type CommentFormData = z.infer<typeof commentSchema>;

interface Props {
  productId: string;
}

export function CreateComment({ productId }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
    defaultValues: { content: "", stars: 0, images: [] },
  });

  const addImage = (url: string) => {
    const current = form.getValues("images");
    form.setValue("images", [...current, url]);
  };

  const removeImage = (index: number) => {
    const current = form.getValues("images");
    form.setValue(
      "images",
      current.filter((_, i) => i !== index),
    );
  };

  async function onSubmit(values: CommentFormData) {
    try {
      const userData = await apiFetch("/users/me");
      await apiFetch("/comments", {
        method: "POST",
        data: {
          userId: userData.id,
          productId,
          ...values,
        },
      });
      toast.success("Comentario enviado con éxito");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Error al enviar comentario");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 p-4 rounded-xl border border-border bg-background/60 backdrop-blur-sm"
      >
        {/* Campo de comentario */}
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Escribe tu comentario..."
                  {...field}
                  className="bg-background border-border focus-visible:ring-primary/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Campo de estrellas */}
        <FormField
          control={form.control}
          name="stars"
          render={({ field }) => (
            <FormItem>
              <Label className="text-sm text-muted-foreground">
                Puntuación: {field.value} ⭐
              </Label>
              <FormControl>
                <Slider
                  min={0}
                  max={5}
                  step={1}
                  value={[field.value]}
                  onValueChange={(val) => field.onChange(val[0])}
                  className="mt-2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Campo de imágenes */}
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <Label className="text-sm text-muted-foreground">
                Imágenes (opcional)
              </Label>
              <div className="flex gap-2 mt-2">
                <CldUploadWidget
                  uploadPreset="ml_default"
                  onSuccess={(result) => {
                    //@ts-expect-error Cloudinary types incompletos
                    addImage(result.info.secure_url);
                  }}
                >
                  {({ open }) => (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => open()}
                      className="flex items-center gap-2"
                    >
                      <Plus className="h-4 w-4" />
                      Subir
                    </Button>
                  )}
                </CldUploadWidget>
              </div>

              {/* Previsualización */}
              <div className="flex flex-wrap gap-2 mt-3">
                {field.value?.map((img, i) => (
                  <div
                    key={i}
                    className="relative size-16 rounded-md overflow-hidden border border-border"
                  >
                    <Image
                      src={img}
                      alt={`Imagen ${i + 1}`}
                      width={64}
                      height={64}
                      className="object-cover size-full"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(i)}
                      className="absolute top-0 right-0 bg-background/60 hover:bg-background text-foreground rounded-bl-md p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Botón de envío */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full transition-all duration-300"
        >
          {isLoading ? (
            <>
              <Loader2 className="size-4 animate-spin mr-2" />
              Enviando...
            </>
          ) : (
            "Enviar comentario"
          )}
        </Button>
      </form>
    </Form>
  );
}
