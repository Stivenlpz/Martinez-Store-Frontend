import { Spinner } from "@/components/ui/spinner";

export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Spinner className="size-12" />
    </div>
  );
}
