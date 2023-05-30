import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adakin's portfolio",
  description:
    "Hi, I'm Adam!-Frontend development isn't just my profession—it's my playground. I thrive in turning creative concepts into live, user-friendly applications.Ready to rock the digital world with my code?",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
