import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { exo2, lato } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charles Russell Developer Portfolio",
  description:
    "Charles Russell's developer portfolio. From intuitive interfaces and engaging experiences to seamless automations and robust dashboards, I can make it happen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`size-full ${exo2.variable} ${lato.variable}`}>
        <body
          className={`size-full min-h-screen bg-background text-foreground antialiased bg-dot-white/[0.2]`}
        >
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
