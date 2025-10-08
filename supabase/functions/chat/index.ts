import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, language } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompts = {
      fr: `Tu es un assistant virtuel pour EUROGATE, une agence premium d'accompagnement pour l'immigration vers la Roumanie.

INFORMATIONS CLÉS:
- EUROGATE offre 4 programmes: Culture & Langue (6 mois, €1,150), Accéléré Pro (3 mois, €1,450), VIP Total A à Z (€550-€1,550), Entrepreneur/Investisseur (dès €1,950)
- Garanties exceptionnelles: 100% remboursement si visa refusé, 80% si non admis université
- Services: accompagnement complet de A à Z, placement professionnel, assistance administrative, cours de langue
- Contact: contact@eurogate.ro, WhatsApp Roumanie et Algérie disponibles

DIRECTIVES:
- Sois professionnel, chaleureux et rassurant
- Réponds de manière concise et claire
- Mets en avant les garanties et l'expertise
- Encourage à prendre contact pour un accompagnement personnalisé
- Si demande technique hors expertise, oriente vers l'équipe`,

      ar: `أنت مساعد افتراضي لـ EUROGATE، وكالة مميزة للمرافقة في الهجرة إلى رومانيا.

المعلومات الأساسية:
- تقدم EUROGATE 4 برامج: الثقافة واللغة (6 أشهر، €1,150)، برو المتسارع (3 أشهر، €1,450)، VIP الشامل من الألف إلى الياء (€550-€1,550)، رائد أعمال/مستثمر (ابتداءً من €1,950)
- ضمانات استثنائية: 100% استرداد في حالة رفض التأشيرة، 80% في حالة عدم القبول بالجامعة
- الخدمات: مرافقة كاملة من الألف إلى الياء، توظيف مهني، مساعدة إدارية، دروس اللغة
- الاتصال: contact@eurogate.ro، واتساب رومانيا والجزائر متاحان

التوجيهات:
- كن محترفاً ودافئاً ومطمئناً
- أجب بشكل موجز وواضح
- أبرز الضمانات والخبرة
- شجع على الاتصال للحصول على مرافقة شخصية
- إذا كان الطلب تقنياً خارج نطاق الخبرة، وجّه إلى الفريق`
    };

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { 
            role: "system", 
            content: systemPrompts[language as 'fr' | 'ar'] || systemPrompts.fr 
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded, please try again later." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required, please add funds to your Lovable AI workspace." }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      return new Response(
        JSON.stringify({ error: "AI gateway error" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
