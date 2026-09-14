import business from "../../../../config/business.json";
import {whatsappUrl} from "../../../../lib/commerce.mjs";
import {assistantReady} from "../../../../lib/ai-config";
export const dynamic="force-dynamic";
export async function GET(){return Response.json({whatsapp:whatsappUrl(process.env.MARKET_WHATSAPP_NUMBER||business.whatsapp,"Hola, necesito ayuda con Mercado 23 y 28."),assistantReady:assistantReady(),avatar:business.assistantAvatar},{headers:{"Cache-Control":"no-store"}})}
