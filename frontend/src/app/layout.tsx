import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="fixed bottom-0 w-full h-200 bg-white rounded-2xl"></div>
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}
