import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Bhavya Gulati — Portfolio",
  description: "Full-Stack Engineer | Backend / Full-Stack Roles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={firaCode.className}>
      <body>{children}</body>
    </html>
  );
}
