import "./globals.css";
import "./veci.css";
export const metadata={title:"Mercado 23 y 28 — Vedado, La Habana",description:"Tu vecino de confianza. Compra fácil desde el móvil.",manifest:"/manifest.webmanifest",robots:{index:false,follow:false}};
export const viewport={themeColor:"#2FA7A0",width:"device-width",initialScale:1};
export default function RootLayout({children}){return <html lang="es"><body>{children}</body></html>}