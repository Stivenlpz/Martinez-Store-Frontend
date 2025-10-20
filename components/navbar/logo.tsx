import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="SDFM 2520"
        width={200}
        height={200}
        priority
        className="object-contain dark:invert"
      />
    </Link>
  );
}
