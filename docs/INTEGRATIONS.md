# Contrato de adaptación NEXO → Mercado 23 y 28
Autorización: solicitud explícita del usuario para adaptar checkout, IA y botón WhatsApp. No se modifica NEXO ni se usa su catálogo, número, credenciales o endpoint.
Origen inspeccionado: app/checkout/CheckoutClient.tsx, lib/commerce/delivery.ts, lib/commerce/order-whatsapp.ts, app/GlobalCommerceAssistant.tsx, app/api/assistant/chat/route.ts, lib/commerce/ai-providers.ts, assistant-rate-limit.ts y config/shipping-rates.csv.
Contratos adaptados: selección municipio/localidad; cotización pending/pickup/zone; ubicación voluntaria; composición de WhatsApp; contexto público de catálogo; respuesta IA answer/productIds validada contra catálogo; proveedores OpenAI/Gemini y errores explícitos; controles de adjuntos.
Snapshot geográfico extraído de CSV NEXO: solo nombres, sin tarifas comerciales. Confirmar cobertura del mercado.
Diferencias: no WooCommerce ni pedidos registrados; resumen permanece en estado de navegador hasta envío. No promete persistencia operativa, reserva, pago ni cancelación. Contacto vacío bloquea salida dirigida a WhatsApp pero permite revisar/copiar. Dictado usa navegador (no transcripción de audio del servidor); sin HEIC, sin roles de gestora/admin ni acciones sobre pedidos NEXO.
Secretos deben configurarse en este proyecto. No se extraen claves de otro servicio.
Límite IA por instancia (12/5 min), no rate limit distribuido; sustituir por almacén compartido antes de tráfico elevado.
