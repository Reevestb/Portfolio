import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import "@radix-ui/themes/styles.css";

import { Theme, ThemePanel } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Theo Reeves Portfolio",
  description: "Created in Next.Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme accentColor="orange" radius="full" appearance="inherit">
          {/* <ThemePanel /> */}
          <Header />
          {children}
        </Theme>
      </body>
    </html>
  );
}
