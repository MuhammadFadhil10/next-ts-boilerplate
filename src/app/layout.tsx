import "./globals.css";
import TanstackProvider from "@/providers/TanstackProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <TanstackProvider>
        <body>{children}</body>
      </TanstackProvider>
    </html>
  );
}
