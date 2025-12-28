export type Language = 'fr' | 'ar' | 'en';

export interface Translation {
  header: {
    programs: string;
    whyUs: string;
    guarantees: string;
    faq: string;
    contact: string;
    b2b: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
    b2cSegment: string;
    b2bSegment: string;
  };
  programs: {
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      duration: string;
      price: string;
      description: string;
      features: string[];
    }>;
  };
  whyUs: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  guarantees: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  refundPolicy: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    emailAddress: string;
    phone: string;
    message: string;
    send: string;
    whatsappRo: string;
    whatsappDz: string;
    address: string;
    addressText: string;
    privacyNotice: string;
  };
  chatbot: {
    title: string;
    placeholder: string;
    welcome: string;
  };
  b2b: {
    title: string;
    subtitle: string;
    cta: string;
    items: Array<{
      title: string;
      description: string;
      features: string[];
    }>;
    contactForm: {
      title: string;
      orgType: string;
      annualVolume: string;
      phone: string;
      message: string;
      submit: string;
      description: string;
      details: string;
    };
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  skillsCenter?: {
    title: string;
    subtitle: string;
    description: string;
    imageCaption1: string;
    imageCaption2: string;
  };
  resources: {
    pdfGuide: string;
    audioContent: string;
  };
  footer: {
    privacy: {
      title: string;
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
    };
  };
}
