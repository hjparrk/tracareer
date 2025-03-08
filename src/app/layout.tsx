import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tracareer",
  description: "Track your career",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        <div className="bg-white text-black">{children}</div>
      </body>
    </html>
  );
}
