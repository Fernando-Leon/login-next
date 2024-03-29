import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundImage:  'url("/background.jpg")', height: '100vh', margin: '0px', padding: '0px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}  className={inter.className}>{children}</body>
    </html>
  );
}
