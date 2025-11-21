import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// --- FONTES ---
// Carregamos a fonte principal (Inter) e a de código (JetBrains)
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

// --- METADATA (SEO) ---
export const metadata: Metadata = {
  title: {
    default: "Samuel Alexandrino | Engenheiro de Software",
    template: "%s | Samuel Alexandrino"
  },
  description: "Portfólio oficial de Samuel Alexandrino. Engenheiro de Software focado em .NET, Arquitetura Cloud e Soluções de Inteligência Artificial.",
  keywords: ["Engenheiro de Software", ".NET", "C#", "React", "Next.js", "AI", "Machine Learning", "Developer", "Fullstack"],
  authors: [{ name: "Samuel Alexandrino" }],
  creator: "Samuel Alexandrino",
  
  // Configuração para Redes Sociais (Open Graph)
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://samuelalexandrino.com.br",
    title: "Samuel Alexandrino | Construindo Arquiteturas Escaláveis",
    description: "Engenheiro de Software focado em .NET e IA. Transformo requisitos complexos em sistemas robustos.",
    siteName: "Samuel Alexandrino Portfolio",
    // images: [
    //   {
    //     url: "/og-image.png", // Vamos criar isso depois
    //     width: 1200,
    //     height: 630,
    //     alt: "Samuel Alexandrino Portfolio",
    //   },
    // ],
  },
  
  // Configuração para Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Samuel Alexandrino | Engenheiro de Software",
    description: "Focado em .NET, Cloud e IA.",
    // images: ["/og-image.png"],
  },
  
  icons: {
    icon: "/favicon.ico", // Certifique-se de ter um icone
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} bg-slate-950 text-slate-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}