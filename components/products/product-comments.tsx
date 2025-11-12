"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export type ProductComment = {
  id: string;
  productId: string;
  userId: string;
  user: { name: string };
  content: string;
  stars: number;
  images: string[];
  createdAt: Date | string;
};

interface ProductCommentsProps {
  comments: ProductComment[];
  isLoading?: boolean;
}

export function ProductComments({
  comments,
  isLoading = false,
}: ProductCommentsProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
          />
        ))}
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-32 bg-muted rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  if (comments.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-muted-foreground">No hay comentarios aún</p>
        <p className="text-sm text-muted-foreground mt-2">
          Sé el primero en comentar este producto
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <Card key={comment.id}>
          <CardContent>
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <p className="font-semibold text-foreground text-sm truncate">
                    {comment.user.name}
                  </p>
                  <div className="flex items-center gap-2">
                    {renderStars(comment.stars)}
                    <span className="text-xs text-muted-foreground">
                      ({comment.stars}/5)
                    </span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  {new Date(comment.createdAt).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>

            <p className="text-sm text-foreground mb-4 leading-relaxed">
              {comment.content}
            </p>

            {comment.images && comment.images.length > 0 && (
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-4">
                {comment.images.map((image, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <button
                        onClick={() => setSelectedImageIndex(index)}
                        className="relative aspect-square rounded-md overflow-hidden border border-border hover:border-primary transition-colors cursor-pointer group"
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Comentario imagen ${index + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                          sizes="120px"
                        />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <div className="relative w-full aspect-square">
                        <Image
                          src={comment.images[selectedImageIndex ?? index]}
                          alt={`Imagen ampliada del comentario`}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
