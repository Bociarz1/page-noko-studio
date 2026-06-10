export interface FaqItem {
  q: string;
  a: string;
}

export function buildFAQ(faqItems: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}
