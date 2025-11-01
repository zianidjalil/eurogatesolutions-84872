import { Translation } from '@/types/translations';

export const translations: Record<'fr' | 'ar' | 'en', Translation> = {
  fr: {
    header: {
      programs: 'Programmes',
      whyUs: 'Pourquoi nous',
      guarantees: 'Garanties',
      faq: 'FAQ',
      contact: 'Contact',
    },
    hero: {
      title: 'Votre Avenir en Roumanie Commence Ici',
      subtitle: 'Accompagnement premium pour vos études et votre immigration en Roumanie',
      cta: 'Consultation gratuite de 15 minutes',
    },
    programs: {
      title: 'Nos Programmes Premium',
      subtitle: 'Des solutions adaptées à vos besoins',
      items: [
        {
          name: 'Culture & Langue',
          duration: 'Gagnez l\'équivalent de 63,64 % de votre budget initial',
          price: '',
          description: 'Immersion culturelle complète avec cours de langue roumaine intensifs pour une intégration réussie',
          features: [
            'Cours intensif de roumain A1 → A2 (niveau requis pour le visa)',
            'Préparation administrative + traductions certifiées',
            'Accompagnement à l\'inscription universitaire'
          ]
        },
        {
          name: 'Formation Accélérée Premium',
          duration: '3 mois',
          price: '',
          description: 'Programme intensif pour professionnels avec accompagnement personnalisé et placement garanti',
          features: [
            'Langage médical, technique et du business',
            'Coaching CV européen + entretien d\'embauche',
            'Accès à notre réseau de 10+ entreprises partenaires'
          ]
        },
        {
          name: 'VIP Total A à Z',
          duration: 'Sur mesure',
          price: '',
          description: 'Service premium tout compris de la demande de visa à l\'obtention du permis de séjour',
          features: [
            'Tout inclus : de la demande de visa à l\'obtention du permis de séjour',
            'Accueil à l\'aéroport + logement + compte bancaire + assurance santé',
            'Changement du profile d\'étudiant en employé'
          ]
        },
        {
          name: 'Entrepreneur/Investisseur',
          duration: 'Flexible',
          price: '',
          description: 'Accompagnement spécialisé pour créer votre entreprise en Roumanie avec support juridique et fiscal',
          features: [
            'Consultation juridique et professionnelle',
            'Domaine à exploiter : l\'immobilier, microsociété, startup, métiers de main d\'œuvre'
          ]
        },
      ],
    },
    whyUs: {
      title: 'Pourquoi Choisir EUROGATE ?',
      items: [
        {
          title: 'Partenaires locaux certifiés',
          description: 'Avocats, traducteurs, universités, RH',
        },
        {
          title: 'Paiement sécurisé',
          description: 'CIB par virement en toute sécurité sans frais cachés',
        },
        {
          title: 'Support multilingue',
          description: 'Support client disponible en EN, FR et AR 7 j/7.',
        },
        {
          title: 'Accompagnement de A à Z',
          description: 'Avant, pendant, et après votre arrivée',
        },
      ],
    },
    guarantees: {
      title: 'Nos Garanties',
      items: [
        {
          title: 'Satisfaction Client',
          description: 'Nous nous engageons à vous offrir un service de qualité exceptionnelle',
        },
        {
          title: 'Suivi Personnalisé',
          description: 'Un conseiller dédié vous accompagne tout au long de votre parcours',
        },
      ],
    },
    refundPolicy: {
      title: 'Politique de Remboursement',
      items: [
        {
          title: 'Remboursement partiel',
          description: 'Remboursement à hauteur de 80% en cas de refus de visa par les autorités compétentes.',
        },
        {
          title: 'Remboursement intégral',
          description: 'Remboursement intégral (100%) si notre service n\'est pas en mesure d\'assurer les prestations annoncées et garanties.',
        },
      ],
    },
    faq: {
      title: 'Questions Fréquentes',
      items: [
        {
          question: 'Quels sont les délais de traitement?',
          answer: 'Délais de traitement du dossier dès réception du visa jusqu\'à obtention du permis de séjour pour étudiant entre une semaine (jours ouvrables) jusqu\'à deux semaines.',
        },
        {
          question: 'Dois-je parler roumain?',
          answer: 'Non, ce n\'est pas obligatoire au départ. Nous incluons des cours de langue dans nos programmes.',
        },
        {
          question: 'Aidez-vous à trouver un logement?',
          answer: 'Oui! Nous vous assistons dans la recherche et la sécurisation d\'un logement adapté.',
        },
        {
          question: 'Puis-je travailler pendant mes études?',
          answer: 'Oui, les étudiants internationaux peuvent travailler en Roumanie avec certaines conditions.',
        },
        {
          question: 'Comment assurez-vous votre activité en Algérie?',
          answer: 'Pour l\'apprentissage, nous assurons en collaboration avec des instituts, des académies et des écoles agréées à lourd poids dans le domaine afin d\'offrir une expérience unique et innovante de l\'idée à l\'opérationnel.',
        },
      ],
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Notre équipe est là pour répondre à toutes vos questions',
      name: 'Nom',
      email: 'Email',
      emailAddress: 'eurogate@outlook.fr',
      phone: 'Téléphone',
      message: 'Message',
      send: 'Envoyer',
      whatsappRo: '',
      whatsappDz: '',
      address: 'Adresse',
      addressText: 'Omar El Khelifa Street (or Cherif Omar Road), Algiers 16000, Algeria',
      privacyNotice: 'En prenant contact avec nous via email ou par téléphone, vos données ne seront utilisées qu\'après votre consentement exprès et uniquement pour répondre à votre demande, conformément à la Loi algérienne n°18-07.',
    },
    chatbot: {
      title: 'Assistant',
      placeholder: 'Posez votre question...',
      welcome: 'Bonjour! Comment puis-je vous aider?',
    },
  },
  ar: {
    header: {
      programs: 'البرامج',
      whyUs: 'لماذا نحن',
      guarantees: 'الضمانات',
      faq: 'الأسئلة الشائعة',
      contact: 'اتصل بنا',
    },
    hero: {
      title: 'مستقبلك في رومانيا يبدأ هنا',
      subtitle: 'مرافقة متميزة لدراستك وهجرتك إلى رومانيا',
      cta: 'استشارة مجانية لمدة 15 دقيقة',
    },
    programs: {
      title: 'برامجنا المتميزة',
      subtitle: 'حلول مصممة لتلبية احتياجاتك',
      items: [
        {
          name: 'الثقافة واللغة',
          duration: 'وفر ما يعادل 63,64% من ميزانيتك الأولية',
          price: '',
          description: 'انغماس ثقافي كامل مع دورات مكثفة في اللغة الرومانية للاندماج الناجح',
          features: [
            'دورة مكثفة في اللغة الرومانية A1 → A2 (المستوى المطلوب للتأشيرة)',
            'التحضير الإداري + الترجمات المعتمدة',
            'المرافقة في التسجيل الجامعي'
          ]
        },
        {
          name: 'التدريب المتسارع المميز',
          duration: '3 أشهر',
          price: '',
          description: 'برنامج مكثف للمحترفين مع مرافقة شخصية وتوظيف مضمون',
          features: [
            'اللغة الطبية والتقنية والتجارية',
            'تدريب على السيرة الذاتية الأوروبية + مقابلة العمل',
            'الوصول إلى شبكتنا من أكثر من 10 شركات شريكة'
          ]
        },
        {
          name: 'VIP الشامل من الألف إلى الياء',
          duration: 'حسب الطلب',
          price: '',
          description: 'خدمة متميزة شاملة من طلب التأشيرة إلى الحصول على تصريح الإقامة',
          features: [
            'شامل كليًا: من طلب التأشيرة إلى الحصول على تصريح الإقامة',
            'الاستقبال في المطار + السكن + الحساب البنكي + التأمين الصحي',
            'تحويل الملف الشخصي من طالب إلى موظف'
          ]
        },
        {
          name: 'رائد أعمال/مستثمر',
          duration: 'مرن',
          price: '',
          description: 'مرافقة متخصصة لإنشاء عملك في رومانيا مع دعم قانوني وضريبي',
          features: [
            'استشارة قانونية ومهنية',
            'المجالات المقترحة: العقارات، الشركات الصغيرة، الشركات الناشئة، الحرف اليدوية'
          ]
        },
      ],
    },
    whyUs: {
      title: 'لماذا تختار EUROGATE؟',
      items: [
        {
          title: 'شركاء محليون معتمدون',
          description: 'محامون، مترجمون، جامعات، موارد بشرية',
        },
        {
          title: 'دفع آمن',
          description: 'CIB عن طريق التحويل بكل أمان دون رسوم خفية',
        },
        {
          title: 'دعم متعدد اللغات',
          description: 'دعم العملاء متاح بالإنجليزية والفرنسية والعربية 7 أيام/7.',
        },
        {
          title: 'مرافقة من الألف إلى الياء',
          description: 'قبل وأثناء وبعد وصولك',
        },
      ],
    },
    guarantees: {
      title: 'ضماناتنا',
      items: [
        {
          title: 'رضا العملاء',
          description: 'نلتزم بتقديم خدمة ذات جودة استثنائية',
        },
        {
          title: 'متابعة شخصية',
          description: 'مستشار مخصص يرافقك طوال رحلتك',
        },
      ],
    },
    refundPolicy: {
      title: 'سياسة الاسترداد',
      items: [
        {
          title: 'استرداد جزئي',
          description: 'استرداد بنسبة 80% في حالة رفض التأشيرة من قبل السلطات المختصة.',
        },
        {
          title: 'استرداد كامل',
          description: 'استرداد كامل (100%) إذا لم تتمكن خدمتنا من تقديم الخدمات المعلنة والمضمونة.',
        },
      ],
    },
    faq: {
      title: 'الأسئلة الشائعة',
      items: [
        {
          question: 'ما هي فترات المعالجة؟',
          answer: 'مدة معالجة الملف من استلام التأشيرة حتى الحصول على تصريح الإقامة للطالب تتراوح بين أسبوع واحد (أيام العمل) حتى أسبوعين.',
        },
        {
          question: 'هل يجب أن أتحدث الرومانية؟',
          answer: 'لا، ليس إلزاميًا في البداية. نحن نقدم دروس اللغة في برامجنا.',
        },
        {
          question: 'هل تساعدون في إيجاد سكن؟',
          answer: 'نعم! نساعدك في البحث عن سكن مناسب وتأمينه.',
        },
        {
          question: 'هل يمكنني العمل أثناء الدراسة؟',
          answer: 'نعم، يمكن للطلاب الدوليين العمل في رومانيا بشروط معينة.',
        },
        {
          question: 'كيف تضمنون نشاطكم في الجزائر؟',
          answer: 'من أجل التعليم، نضمن بالتعاون مع المعاهد والأكاديميات والمدارس المعتمدة ذات الثقل الكبير في المجال من أجل تقديم تجربة فريدة ومبتكرة من الفكرة إلى التنفيذ.',
        },
      ],
    },
    contact: {
      title: 'اتصل بنا',
      subtitle: 'فريقنا هنا للإجابة على جميع أسئلتك',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      emailAddress: 'eurogate@outlook.fr',
      phone: 'الهاتف',
      message: 'الرسالة',
      send: 'إرسال',
      whatsappRo: '',
      whatsappDz: '',
      address: 'العنوان',
      addressText: 'Omar El Khelifa Street (or Cherif Omar Road), Algiers 16000, Algeria',
      privacyNotice: 'عند الاتصال بنا عبر البريد الإلكتروني أو الهاتف، لن يتم استخدام بياناتك إلا بعد موافقتك الصريحة وفقط للرد على طلبك، وفقًا للقانون الجزائري رقم 18-07.',
    },
    chatbot: {
      title: 'المساعد',
      placeholder: 'اطرح سؤالك...',
      welcome: 'مرحباً! كيف يمكنني مساعدتك؟',
    },
  },
  en: {
    header: {
      programs: 'Programs',
      whyUs: 'Why Us',
      guarantees: 'Guarantees',
      faq: 'FAQ',
      contact: 'Contact',
    },
    hero: {
      title: 'Your Future in Romania Starts Here',
      subtitle: 'Premium support for your studies and immigration to Romania',
      cta: 'Free 15-minute consultation',
    },
    programs: {
      title: 'Our Premium Programs',
      subtitle: 'Solutions tailored to your needs',
      items: [
        {
          name: 'Culture & Language',
          duration: 'Save the equivalent of 63.64% of your initial budget',
          price: '',
          description: 'Complete cultural immersion with intensive Romanian language courses for successful integration',
          features: [
            'Intensive Romanian course A1 → A2 (required level for visa)',
            'Administrative preparation + certified translations',
            'University enrollment support'
          ]
        },
        {
          name: 'Premium Accelerated Training',
          duration: '3 months',
          price: '',
          description: 'Intensive program for professionals with personalized support and guaranteed placement',
          features: [
            'Medical, technical and business language',
            'European CV coaching + job interview',
            'Access to our network of 10+ partner companies'
          ]
        },
        {
          name: 'VIP Total A to Z',
          duration: 'Customized',
          price: '',
          description: 'Premium all-inclusive service from visa application to residence permit',
          features: [
            'All-inclusive: from visa application to residence permit',
            'Airport pickup + accommodation + bank account + health insurance',
            'Student to employee profile change'
          ]
        },
        {
          name: 'Entrepreneur/Investor',
          duration: 'Flexible',
          price: '',
          description: 'Specialized support to create your business in Romania with legal and tax support',
          features: [
            'Legal and professional consultation',
            'Fields to explore: real estate, micro-company, startup, manual trades'
          ]
        },
      ],
    },
    whyUs: {
      title: 'Why Choose EUROGATE?',
      items: [
        {
          title: 'Certified local partners',
          description: 'Lawyers, translators, universities, HR',
        },
        {
          title: 'Secure payment',
          description: 'CIB by transfer in complete security without hidden fees',
        },
        {
          title: 'Multilingual support',
          description: 'Customer support available in EN, FR and AR 7/7.',
        },
        {
          title: 'A to Z support',
          description: 'Before, during, and after your arrival',
        },
      ],
    },
    guarantees: {
      title: 'Our Guarantees',
      items: [
        {
          title: 'Customer Satisfaction',
          description: 'We are committed to providing you with exceptional quality service',
        },
        {
          title: 'Personalized Follow-up',
          description: 'A dedicated advisor accompanies you throughout your journey',
        },
      ],
    },
    refundPolicy: {
      title: 'Refund Policy',
      items: [
        {
          title: 'Partial refund',
          description: 'Refund of 80% in case of visa refusal by the competent authorities.',
        },
        {
          title: 'Full refund',
          description: 'Full refund (100%) if our service is unable to provide the announced and guaranteed services.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What are the processing times?',
          answer: 'File processing time from visa receipt to student residence permit between one week (working days) to two weeks.',
        },
        {
          question: 'Do I need to speak Romanian?',
          answer: 'No, it is not mandatory at the start. We include language courses in our programs.',
        },
        {
          question: 'Do you help find accommodation?',
          answer: 'Yes! We assist you in finding and securing suitable accommodation.',
        },
        {
          question: 'Can I work while studying?',
          answer: 'Yes, international students can work in Romania under certain conditions.',
        },
        {
          question: 'How do you ensure your activity in Algeria?',
          answer: 'For training, we ensure through collaboration with accredited institutes, academies and schools with significant weight in the field to offer a unique and innovative experience from idea to implementation.',
        },
      ],
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Our team is here to answer all your questions',
      name: 'Name',
      email: 'Email',
      emailAddress: 'eurogate@outlook.fr',
      phone: 'Phone',
      message: 'Message',
      send: 'Send',
      whatsappRo: '',
      whatsappDz: '',
      address: 'Address',
      addressText: 'Omar El Khelifa Street (or Cherif Omar Road), Algiers 16000, Algeria',
      privacyNotice: 'By contacting us via email or phone, your data will only be used after your express consent and only to respond to your request, in accordance with Algerian Law No. 18-07.',
    },
    chatbot: {
      title: 'Assistant',
      placeholder: 'Ask your question...',
      welcome: 'Hello! How can I help you?',
    },
  },
};
