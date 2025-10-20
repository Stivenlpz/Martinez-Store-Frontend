import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/layout/footer";
import { AutoLogout } from "@/components/layout/auto-logout";
import { SplashScreen } from "@/components/layout/splash-screen";
import { AccessibilityMenu } from "@/components/layout/accessibilty-menu";
import { WhatsappButton } from "@/components/layout/whatsapp-button";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SplashScreen />
      <Navbar />
      <div className="">{children}</div>
      <Footer />
      <AutoLogout />
      <AccessibilityMenu />
      <WhatsappButton />
    </>
  );
}
