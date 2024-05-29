import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/services/scss/globals.scss';
import { Navbar } from "@/components/lazy-load";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bcs Self Improvement!",
  description: "Bcs self improvement website!",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="md:container md:mx-auto px-2">
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;