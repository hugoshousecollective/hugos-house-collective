import "./globals.css";

export const metadata = {
  title: "Hugo's House Collective",
  description: "For deeply loved dogs."
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
