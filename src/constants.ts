export const LANGUAGES = {
  EN: 'EN',
  AR: 'AR',
} as const;

export type Language = keyof typeof LANGUAGES;

export const CONTENT = {
  [LANGUAGES.EN]: {
    hero: {
      subtitle: "Visual Legacy & Architectural Monograph",
      title1: "One Shot... ",
      title2: "Forever.",
      cta: "Enter The Archive",
    },
    nav: {
      brand: "AYMAN AL-MAJALI",
      atelier: "Atelier",
      archive: "Archive",
      inquiry: "Inquiry",
      studio: "Studio",
      private: "Private",
      concierge: "Concierge",
    }
  },
  [LANGUAGES.AR]: {
    hero: {
      subtitle: "إرث بصري ومخطط معماري",
      title1: "لقطة واحدة... ",
      title2: "للأبد.",
      cta: "ادخل الأرشيف",
    },
    nav: {
      brand: "أيمن المجالي",
      atelier: "الأتيلييه",
      archive: "الأرشيف",
      inquiry: "الاستفسارات",
      studio: "أستوديو",
      private: "خاص",
      concierge: "كونسيرج",
    }
  }
};
