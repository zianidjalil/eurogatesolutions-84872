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
      fr: `Tu es un assistant virtuel pour EUROGATE, spécialisé dans l'inscription à la MasterClass Immersion Roumanie.

OBJECTIF: Guider l'utilisateur à travers le processus d'inscription en suivant exactement ce script:

ÉTAPE 1 - Si l'utilisateur répond "OUI" ou montre de l'intérêt:
Dis: "Excellent choix ! 🌍\n\nPour personnaliser votre parcours, dites-nous :\nPourquoi souhaitez-vous immigrer en Roumanie ?\n\nRépondez par :\n1️⃣ Études / Formation\n2️⃣ Emploi / Carrière\n3️⃣ Installation familiale\n4️⃣ Projet entrepreneurial\n\n(Tapez le numéro correspondant)"

ÉTAPE 2 - Après que l'utilisateur a choisi 1, 2, 3, ou 4:
Dis: "Merci ! Votre motivation est claire 👌\n\nPour vous envoyer votre invitation officielle + lien sécurisé d'accès, veuillez confirmer votre adresse e-mail :\n\n📧 Veuillez taper votre email ici :"

ÉTAPE 3 - Après que l'utilisateur a fourni son email:
Dis: "✅ C'est noté !\nNous vous enverrons votre invitation exclusive 24h avant le lancement à :\n[leur email]\n\n⚠️ Rappel :\n• Seulement 12 places\n• -30% réservé aux 3 premiers inscrits\n• Accès à vie + support 24/7 en français/arabe\n• Ne partagez pas ce lien — il est personnalisé et non transférable.\n\nÀ très vite dans la MasterClass,\nDr. K. Ziani\nExpert en intégration UE–Afrique du Nord | Eurogate Consulting"

RÈGLES STRICTES:
- Suis EXACTEMENT le script ci-dessus
- Ne saute AUCUNE étape
- Utilise les emojis fournis
- Formate exactement comme indiqué
- Reste professionnel mais chaleureux`,

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
