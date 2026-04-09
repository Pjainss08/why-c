import type { Metadata } from "next";
import { Outfit, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "WHY C? — Only for top 1% rejected",
  description:
    "A formidable reject is one who seems like they'll ship anyway, regardless of whatever rejection emails are in the way.",
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${sourceSerif4.variable} antialiased`}>
      <head>
        <script async src="https://tally.so/widgets/embed.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}
