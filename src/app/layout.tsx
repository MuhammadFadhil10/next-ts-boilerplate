import "./globals.css";
import MuiThemeProvider from "@/providers/MuiThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MuiThemeProvider>
        <body>{children}</body>
      </MuiThemeProvider>
    </html>
  );
}
