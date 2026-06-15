
import "./globals.css";
import type { ReactNode } from "react";
export const metadata={title:"Hugo's House Collective",description:"For deeply loved dogs."};
export default function RootLayout({children}:{children:ReactNode}){
return <html lang="en"><body>{children}</body></html>;
}
