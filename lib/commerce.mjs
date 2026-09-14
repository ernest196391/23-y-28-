export const money=n=>new Intl.NumberFormat("es-CU").format(n)+" CUP";
export function shipping(mode,municipality,locality,rates={}){if(mode==="pickup")return 0;const n=rates[municipality+"|"+locality];return typeof n==="number"&&Number.isFinite(n)&&n>=0?n:null}
export function whatsappUrl(phone,text){const n=String(phone||"").replace(/[^0-9]/g,"");return /^[1-9][0-9]{7,14}$/.test(n)?"https://wa.me/"+n+"?text="+encodeURIComponent(text):null}
export function orderMessage(order){return [
"*Mercado 23 y 28 · Pedido #"+order.reference+"*","",
...order.lines.map(p=>"• "+p.quantity+" × "+p.n+" ("+p.d+") — "+money(p.p*p.quantity)),"",
"Subtotal: "+money(order.subtotal),
"Mensajería: "+(order.fee===null?"Por confirmar":money(order.fee)),
"Total: "+(order.fee===null?"Pendiente de mensajería (productos: "+money(order.subtotal)+")":money(order.subtotal+order.fee)),
"Modalidad: "+(order.mode==="pickup"?"Recoger en tienda":"Entrega a domicilio"),
"Nombre: "+order.fullName,"Teléfono: "+order.phone,
...(order.mode==="delivery"?["Municipio: "+order.municipality,"Reparto/localidad: "+order.locality,"Dirección: "+order.address,order.referenceAddress&&"Referencia: "+order.referenceAddress,order.location&&"Ubicación: https://www.google.com/maps/search/?api=1&query="+order.location]:["Recogida en Mercado 23 y 28 · Vedado"]),
"","Solicito confirmar disponibilidad y coordinación."
].filter(Boolean).join("\n")}
