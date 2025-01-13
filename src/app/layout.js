import { DM_Sans } from "next/font/google";
import "./globals.css";
import PageLayout from "@/components/layout/PageLayout";
import { Toaster } from "@/components/ui/sonner";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <PageLayout>
          <NavBar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </PageLayout>
      </body>
    </html>
  );
}
