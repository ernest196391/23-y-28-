import "./globals.css";
import "./veci.css";
import "./veci-fixes.css";
import InstallPrompt from "./InstallPrompt";
export const metadata={
  title:"Mercado 23 y 28 — Vedado, La Habana",
  description:"Tu vecino de confianza. Compra fácil desde el móvil.",
  manifest:"/manifest.webmanifest",
  icons:{icon:"/brand/app-icon.svg",apple:"/brand/app-icon.svg"},
  appleWebApp:{capable:true,title:"23 y 28",statusBarStyle:"default"},
  robots:{index:false,follow:false}
};
export const viewport={themeColor:"#00A6B6",width:"device-width",initialScale:1};
export default function RootLayout({children}){return <html lang="es"><body>{children}<InstallPrompt/></body></html>}