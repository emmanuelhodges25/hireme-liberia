import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "HireMe Liberia",
  description:
    "Liberia's platform for jobs, internships, scholarships and opportunities.",
  openGraph: {
    title: "HireMe Liberia",
    description:
      "Find jobs, internships, scholarships and programs in Liberia.",
    siteName: "Career Liberia",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        className="
          bg-black
          text-white
          antialiased
        "
      >
        {children}
      </body>
    </html>
  );
}