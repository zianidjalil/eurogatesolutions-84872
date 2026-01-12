import { Translation } from '@/types/translations';

export const translations: Record<'fr' | 'ar' | 'en', Translation> = {
  fr: {
    header: {
      programs: 'Programmes',
      whyUs: 'Pourquoi nous',
      guarantees: 'Garanties',
      faq: 'FAQ',
      contact: 'Contact',
      b2b: 'Entreprises & Partenariats',
    },
    hero: {
      title: 'Votre Avenir en Roumanie Commence d\'ici',
      subtitle: 'Accompagnement premium pour vos études et votre immigration en Roumanie',
      cta: 'Réservez un appel gratuit',
      secondaryCta: 'Téléchargez notre guide Roumanie 2025',
      b2cSegment: 'Pour les étudiants & particuliers',
      b2bSegment: 'Pour les entreprises & investisseurs',
    },
    programs: {
      title: 'Nos Programmes Premium',
      subtitle: 'Des solutions adaptées à vos besoins',
      items: [
        {
          name: 'Culture & Langue',
          duration: 'Gagnez l\'équivalent de 63,64 % de votre budget initial',
          price: 'Avec Seulement 14970 DA Par mois!',
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
          price: 'Avec seulement 1150 €',
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
            'Domaine à exploiter : pharma, l\'industrie, l\'immobilier, microsociété, startup, métiers de main d\'œuvre'
          ]
        },
      ],
    },
    whyUs: {
      title: 'Pourquoi Choisir EUROGATE ?',
      items: [
        {
          title: 'Partenaires locaux et internationaux certifiés et agréés',
          description: 'Avocats, traducteurs, universités, RH',
        },
        {
          title: 'Paiement par virement bancaire',
          description: 'Paiement par virement bancaire (CIB, CCP, BaridiMob) – confirmé via formulaire sécurisé – sans frais cachés',
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
          description: 'Nous nous engageons à vous offrir un service de qualité exceptionnelle, en collaboration avec nos partenaires B2B, à l\'échelle nationale et internationale',
        },
        {
          title: 'Suivi Personnalisé',
          description: 'Une équipe coordonnée de sept consultants internationaux, basés à l\'étranger, vous garantit un accompagnement personnalisé à chaque étape de votre parcours.',
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
          answer: 'Un service « Swift » qui garantit un délai de traitement du dossier — de la réception du visa au dépôt en ligne de la demande d\'établissement du permis de séjour étudiant — de deux à cinq jours ouvrables',
        },
        {
          question: 'Dois-je parler roumain?',
          answer: 'Non, ce n\'est pas obligatoire au départ. Nous incluons des cours de langue dans nos programmes.',
        },
        {
          question: 'Aidez-vous à trouver un logement?',
          answer: 'Un consultant expert en immobilier assure, grâce à son réseau, une assistance complète dans la recherche et la sécurisation d\'un logement adapté.',
        },
        {
          question: 'Puis-je travailler pendant mes études?',
          answer: 'Oui, les étudiants internationaux peuvent travailler légalement en Roumanie à temps partiel — soit 4 à 6 heures par jour — selon la région. »',
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
    b2b: {
      title: 'Partenariats & Solutions Entreprises',
      subtitle: 'Services B2B pour instituts de formation, entreprises et investisseurs',
      cta: 'Demander une proposition commerciale',
      items: [
        {
          title: 'Partenariats Académiques',
          description: 'Collaboration avec instituts, académie et centre privés de formation algériens, des auto-entrepreneurs pour programmes d\'accompagnement, upskilling et reskilling',
          features: ['Programmes personnalisés de formation', 'Support administratif complet', 'Certification internationale']
        },
        {
          title: 'Solutions pour Investisseurs',
          description: 'Accompagnement pour créer votre entité roumaine, modèle incubateur et implantation stratégique',
          features: ['Conseil juridique & fiscal', 'Domiciliation d\'entreprise', 'Support RH international']
        },
        {
          title: 'Formation Interculturelle EDM',
          description: 'Formation EDM et interculturelle pour entreprises multinationaleset expatriés',
          features: ['Training interculturel sur mesure', 'Coaching d\'équipes internationales', 'Support RH & recrutement']
        }
      ],
      contactForm: {
        title: 'Contact Entreprises',
        orgType: 'Type d\'organisation',
        annualVolume: 'Volume annuel de stagiaires / employés',
        phone: 'Téléphone professionnel',
        message: 'Décrivez votre projet',
        submit: 'Envoyer la demande',
        description: 'Pour une proposition commerciale personnalisée, contactez-nous directement :',
        details: 'Mentionnez: Type d\'organisation, volume annuel, et décrivez votre projet',
      },
    },
    gallery: {
      title: 'Galerie Roumanie',
      subtitle: 'Découvrez la beauté et la richesse culturelle de la Roumanie',
    },
    skillsCenter: {
      title: 'Partenariat Skills Center',
      subtitle: 'Notre partenaire stratégique pour l\'excellence de la formation en Algérie',
      description: 'Skills Center est notre partenaire algérien de confiance, fournissant des installations de formation de classe mondiale et une expertise pour les programmes d\'amélioration et de reconversion des compétences. Ensemble, nous offrons des solutions éducatives complètes qui préparent les étudiants et les professionnels à réussir sur le marché européen.',
      imageCaption1: 'Installations de formation modernes',
      imageCaption2: 'Environnement d\'apprentissage de pointe',
    },
    resources: {
      pdfGuide: 'Envoyez-nous un e-mail et obtenez gratuitement votre guide PDF : « Le profil étudiant idéal pour étudier en Roumanie ».',
      audioContent: 'Audio Content',
    },
    footer: {
      privacy: {
        title: 'Confidentialité',
        paragraph1: 'En nous contactant par e-mail ou par téléphone, vos données ne seront utilisées qu\'après votre consentement exprès et uniquement pour répondre à votre demande, conformément à la loi algérienne n° 18-07.',
        paragraph2: 'Nous ne collectons aucune donnée personnelle via ce site web. Si vous nous contactez par e-mail, votre message sera utilisé uniquement pour répondre à votre demande et supprimé suite à votre accord dans un délai de 24 Heures.',
        paragraph3: 'Aucun cookie, outil d\'analyse ou dispositif de suivi n\'est utilisé.',
      },
    },
  },
  ar: {
    header: {
      programs: 'البرامج',
      whyUs: 'لماذا نحن',
      guarantees: 'الضمانات',
      faq: 'الأسئلة الشائعة',
      contact: 'اتصل بنا',
      b2b: 'الشركات والشراكات',
    },
    hero: {
      title: 'مستقبلك في رومانيا يبدأ هنا',
      subtitle: 'مرافقة متميزة لدراستك وهجرتك إلى رومانيا',
      cta: 'احجز مكالمة مجانية',
      secondaryCta: 'قم بتنزيل دليل رومانيا 2025',
      b2cSegment: 'للطلاب والأفراد',
      b2bSegment: 'للشركات والمستثمرين',
    },
    programs: {
      title: 'برامجنا المتميزة',
      subtitle: 'حلول مصممة لتلبية احتياجاتك',
      items: [
        {
          name: 'الثقافة واللغة',
          duration: 'وفر ما يعادل 63,64% من ميزانيتك الأولية',
          price: 'بـ 14970 دج فقط شهريًا!',
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
          price: 'بـ 1150 يورو فقط',
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
          title: 'شركاء محليون ودوليون معتمدون ومعتمدون',
          description: 'محامون، مترجمون، جامعات، موارد بشرية',
        },
        {
          title: 'الدفع عن طريق التحويل البنكي',
          description: 'الدفع عن طريق التحويل البنكي (CIB، CCP، BaridiMob) - مؤكد عبر نموذج آمن - بدون رسوم مخفية',
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
    b2b: {
      title: 'الشراكات وحلول الشركات',
      subtitle: 'خدمات B2B لمعاهد التدريب والشركات والمستثمرين',
      cta: 'طلب عرض تجاري',
      items: [
        {
          title: 'الشراكات الأكاديمية',
          description: 'التعاون مع معاهد، أكاديميات ومراكز تدريب خاصة جزائرية (مثل: Skills Center، CREO Studio، GTI) لبرامج التنقل بين الاتحاد الأوروبي والجزائر',
          features: ['برامج تدريب مخصصة', 'دعم إداري كامل', 'شهادة دولية']
        },
        {
          title: 'حلول للمستثمرين',
          description: 'مرافقة لإنشاء كيانك الروماني ونموذج الحاضنة والزرع الاستراتيجي',
          features: ['استشارات قانونية وضريبية', 'إقامة الشركة', 'دعم الموارد البشرية الدولية']
        },
        {
          title: 'التدريب الثقافي EDM',
          description: 'تدريب EDM والثقافات المتعددة للشركات متعددة الجنسيات والمغتربين',
          features: ['تدريب ثقافي مخصص', 'تدريب الفرق الدولية', 'دعم الموارد البشرية والتوظيف']
        }
      ],
      contactForm: {
        title: 'اتصال الشركات',
        orgType: 'نوع المنظمة',
        annualVolume: 'الحجم السنوي للمتدربين / الموظفين',
        phone: 'هاتف العمل',
        message: 'صف مشروعك',
        submit: 'إرسال الطلب',
        description: 'للحصول على عرض تجاري مخصص، اتصل بنا مباشرة:',
        details: 'اذكر: نوع المنظمة، الحجم السنوي، واشرح مشروعك',
      },
    },
    gallery: {
      title: 'معرض رومانيا',
      subtitle: 'اكتشف جمال وغنى الثقافة الرومانية',
    },
    skillsCenter: {
      title: 'شراكة سكيلز سنتر',
      subtitle: 'شريكنا الاستراتيجي للتميز في التدريب في الجزائر',
      description: 'سكيلز سنتر هو شريكنا الجزائري الموثوق، الذي يوفر مرافق تدريب عالمية المستوى وخبرة لبرامج تطوير المهارات وإعادة التأهيل. معًا، نقدم حلولاً تعليمية شاملة تعد الطلاب والمهنيين للنجاح في السوق الأوروبية.',
      imageCaption1: 'مرافق تدريب حديثة',
      imageCaption2: 'بيئة تعلم متطورة',
    },
    resources: {
      pdfGuide: 'أرسل لنا بريدًا إلكترونيًا واحصل مجانًا على دليلك بصيغة PDF: "ملف الطالب المثالي للدراسة في رومانيا".',
      audioContent: 'محتوى صوتي',
    },
    footer: {
      privacy: {
        title: 'الخصوصية',
        paragraph1: 'بالاتصال بنا عبر البريد الإلكتروني أو الهاتف، لن تُستخدم بياناتك إلا بعد موافقتك الصريحة وفقط للرد على طلبك، وفقًا للقانون الجزائري رقم 18-07.',
        paragraph2: 'نحن لا نجمع أي بيانات شخصية عبر هذا الموقع. إذا اتصلت بنا عبر البريد الإلكتروني، سيتم استخدام رسالتك فقط للرد على طلبك وحذفها بموافقتك خلال 24 ساعة.',
        paragraph3: 'لا يتم استخدام ملفات تعريف الارتباط أو أدوات التحليل أو أجهزة التتبع.',
      },
    },
  },
  en: {
    header: {
      programs: 'Programs',
      whyUs: 'Why Us',
      guarantees: 'Guarantees',
      faq: 'FAQ',
      contact: 'Contact',
      b2b: 'Business & Partnerships',
    },
    hero: {
      title: 'Your Future in Romania Starts Here',
      subtitle: 'Premium support for your studies and career in Romania',
      cta: 'Book a free call',
      secondaryCta: 'Download Romania 2025 Guide',
      b2cSegment: 'For students & individuals',
      b2bSegment: 'For businesses & investors',
    },
    programs: {
      title: 'Our Premium Programs',
      subtitle: 'Solutions tailored to your needs',
      items: [
        {
          name: 'Culture & Language',
          duration: 'Save the equivalent of 63.64% of your initial budget',
          price: 'With Only 14970 DA Per month!',
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
          price: 'With only 1150 €',
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
          title: 'Certified and accredited local and international partners',
          description: 'Lawyers, translators, universities, HR',
        },
        {
          title: 'Payment by bank transfer',
          description: 'Payment by bank transfer (CIB, CCP, BaridiMob) – confirmed via secure form – no hidden fees',
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
    b2b: {
      title: 'Partnerships & Business Solutions',
      subtitle: 'B2B services for training institutes, companies and investors',
      cta: 'Request a business proposal',
      items: [
        {
          title: 'Academic Partnerships',
          description: 'Collaboration with Algerian training institutes, academies and private training centers (e.g., Skills Center, CREO Studio, GTI)',
          features: ['Customized training programs', 'Full administrative support', 'International certification']
        },
        {
          title: 'Investor Solutions',
          description: 'Support for creating your Romanian entity, incubator model and strategic establishment',
          features: ['Legal & tax consulting', 'Company domiciliation', 'International HR support']
        },
        {
          title: 'EDM Intercultural Training',
          description: 'EDM and intercultural training for multinational companies and expatriates',
          features: ['Custom intercultural training', 'International team coaching', 'HR & recruitment support']
        }
      ],
      contactForm: {
        title: 'Business Contact',
        orgType: 'Organization type',
        annualVolume: 'Annual volume of trainees / employees',
        phone: 'Business phone',
        message: 'Describe your project',
        submit: 'Submit request',
        description: 'For a personalized commercial proposal, contact us directly:',
        details: 'Mention: Organization type, annual volume, and describe your project',
      },
    },
    gallery: {
      title: 'Romania Gallery',
      subtitle: 'Discover the beauty and cultural richness of Romania',
    },
    skillsCenter: {
      title: 'Skills Center Partnership',
      subtitle: 'Our strategic partner for training excellence in Algeria',
      description: 'Skills Center is our trusted Algerian partner, providing world-class training facilities and expertise for upskilling and reskilling programs. Together, we deliver comprehensive educational solutions that prepare students and professionals for success in the European market.',
      imageCaption1: 'Modern Training Facilities',
      imageCaption2: 'State-of-the-Art Learning Environment',
    },
    resources: {
      pdfGuide: 'Send us an email and get your free PDF guide: "The ideal student profile to study in Romania".',
      audioContent: 'Audio Content',
    },
    footer: {
      privacy: {
        title: 'Privacy',
        paragraph1: 'By contacting us by email or phone, your data will only be used after your express consent and only to respond to your request, in accordance with Algerian law No. 18-07.',
        paragraph2: 'We do not collect any personal data through this website. If you contact us by email, your message will be used only to respond to your request and deleted with your agreement within 24 Hours.',
        paragraph3: 'No cookies, analytics tools or tracking devices are used.',
      },
    },
  },
};
