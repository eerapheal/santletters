import type { Metadata } from "next";
import "../shared/styles/globals.css"
import Providers from "../shared/utils/Providers";
export const metadata: Metadata = {
  title: "Sant News Letters",
  description: "Sant News Letters allows users to build codeless customs news letter email templete and send unlimited emails to subcribers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-fontFamily">
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  );
}
