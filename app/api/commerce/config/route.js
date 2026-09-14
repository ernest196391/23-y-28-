import business from "../../../../config/business.json";
import {whatsappUrl} from "../../../../lib/commerce.mjs";
export const dynamic="force-dynamic";
export async function GET(){return Response.json({whatsapp:whatsappUrl(process.env.MARKET_WHATSAPP_NUMBER||business.whatsapp,"Hola, necesito ayuda con Mercado 23 y 28."),assistantReady:!!((process.env.OPENAI_API_KEY&&process.env.OPENAI_MODEL)||(process.env.GEMINI_API_KEY&&process.env.GEMINI_MODEL)),avatar:business.assistantAvatar},{headers:{"Cache-Control":"no-store"}})}
