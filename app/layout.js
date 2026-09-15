import "./globals.css";
import "./veci.css";
import "./veci-fixes.css";
import InstallPrompt from "./InstallPrompt";
export const metadata={
  title:"Mercado 23 y 28 — Vedado, La Habana",
  description:"Tu vecino de confianza. Compra fácil desde el móvil.",
  manifest:"/manifest.webmanifest?v=4",
  icons:{
    icon:[
      {url:"/icons/icon-192.png?v=4",sizes:"192x192",type:"image/png"},
      {url:"/icons/icon-512.png?v=4",sizes:"512x512",type:"image/png"}
    ],
    apple:"/apple-touch-icon.png?v=4"
  },
  appleWebApp:{capable:true,title:"23 y 28",statusBarStyle:"default"},
  robots:{index:false,follow:false}
};
export const viewport={themeColor:"#2FA7A0",width:"device-width",initialScale:1};
export default function RootLayout({children}){return <html lang="es"><body>{children}<InstallPrompt/></body></html>}