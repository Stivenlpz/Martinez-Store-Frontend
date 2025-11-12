"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductComments, type ProductComment } from "./product-comments";
import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { CreateComment } from "./create-comment";
import { useMarketStore } from "@/store/useMarketStore";

interface ProductCommentsSectionProps {
  productId: string;
}

export function ProductCommentsSection({
  productId,
}: ProductCommentsSectionProps) {
  const { isAuth } = useMarketStore((state) => state);
  const [comments, setComments] = useState<ProductComment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setIsLoading(true);
        const data = await apiFetch(`/comments/product/${productId}`);
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [productId]);

  return (
    <section className="space-y-4 max-h-20">
      <header>
        <h3 className="text-lg sm:text-xl">Comentarios del Producto</h3>
        <p className="text-sm text-muted-foreground mt-1">
          {comments.length}{" "}
          {comments.length === 1 ? "comentario" : "comentarios"}
        </p>
      </header>
      {isAuth && <CreateComment productId={productId} />}
      <ProductComments comments={comments} isLoading={isLoading} />
    </section>
  );
}
