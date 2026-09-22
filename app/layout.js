import "./globals.css";
import "./assistant.css";
import "./assistant-fixes.css";
import InstallPrompt from "./InstallPrompt";
import {tenant} from "../lib/tenant";
const themeVars=Object.entries({"--ink":tenant.theme.ink,"--deep":tenant.theme.primary,"--orange":tenant.theme.accent,"--mint":tenant.theme.mint,"--assistant-teal":tenant.theme.assistant,"--assistant-dark":tenant.theme.assistantDark,"--assistant-brand":tenant.theme.assistantInk,"--assistant-border":tenant.theme.assistantBorder,"--assistant-tint":tenant.theme.assistantSoft,"--assistant-tint-hover":tenant.theme.assistantSoftHover}).map(([k,v])=>k+":"+v).join(";");
export const metadata={
  title:tenant.seo.title,
  description:tenant.seo.description,
  manifest:"/manifest.webmanifest?v=4",
  icons:{
    icon:[
      {url:"/icons/icon-192.png?v=4",sizes:"192x192",type:"image/png"},
      {url:"/icons/icon-512.png?v=4",sizes:"512x512",type:"image/png"}
    ],
    apple:"/apple-touch-icon.png?v=4"
  },
  appleWebApp:{capable:true,title:tenant.shortName,statusBarStyle:"default"},
  robots:{index:false,follow:false}
};
export const viewport={themeColor:tenant.theme.assistant,width:"device-width",initialScale:1};
export default function RootLayout({children}){return <html lang="es"><body><style dangerouslySetInnerHTML={{__html:":root,.assistantV2{"+themeVars+"}"}}/>{children}<InstallPrompt/></body></html>}