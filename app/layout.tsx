import "@/app/globals.css";
import { Inter } from "next/font/google";
import type React from "react"; // Import React

const inter = Inter({ subsets: ["latin"] });

const title = "AGI Tespit Testi";
const description =
  "AGI'ye ulaşıp ulaşmadığımızı anlamak için bu soruları yanıtla";

const images = [
  {
    url: `/agigeldimi.png`,
    width: 360,
    height: 360,
    alt: description,
  },
];

export const metadata = {
  title: "AGI Tespit Testi",
  description: "AGI'ye ulaşıp ulaşmadığımızı anlamak için bu soruları yanıtla",
  image: images[0].url,
  keywords: ["AGI", "Yapay Zeka", "Test"],
  twitter: {
    card: "summary",
    title,
    description,
    creator: "@scihan",
    site: "@scihan",
    images,
  },
  openGraph: {
    siteName: title,
    title,
    type: "website",
    url: "https://agigeldimi.selcukcihan.com",
    description,
    images,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
