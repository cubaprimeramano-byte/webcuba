import { Inter } from "next/font/google";
import "./globals.css";
import { content } from "@/data/content";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: content.site.title,
  description: content.site.subtitle,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <style>{`
          :root {
            --primary: ${content.colors.primary};
            --secondary: ${content.colors.secondary};
            --accent: ${content.colors.accent};
          }
        `}</style>
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
