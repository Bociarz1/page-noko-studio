export interface INavLink<T> {
  label: string;
  href: T;
  isPathActive?: boolean;
}

type TSectionIds<T extends string> = Partial<Record<T, any>>;

export enum NavLinks {
  HOME = '/',
  PORTFOLIO = '/portfolio/',
  ABOUT_US = `/#o-nas`,
  OFFER = '/oferta/',
  BLOG = '/blog/',
  CONTACT = '/kontakt/',
  PRIVACY_POLICY = '/polityka-prywatnosci/',
  TERMS_OF_SERVICE = '/regulamin/',
  INSTAGRAM = 'https://www.instagram.com/noko_studio?igsh=MTg3ZDRhcGFvMGZy',
  FACEBOOK = 'https://www.facebook.com/profile.php?id=61567628939661',
}

export const SectionIds = {
  [NavLinks.HOME]: { hero: '', ourServices: 'nasze-uslugi', portfolio: 'portfolio', aboutUs: 'o-nas', cta: 'cta', reviews: 'opinie' },
  [NavLinks.PORTFOLIO]: { hero: '', grid: 'projekty' },
  [NavLinks.OFFER]: { hero: '', offerCards: 'pakiety', faq: 'faq' },
  [NavLinks.CONTACT]: { hero: '', contact: 'kontakt' },
} satisfies TSectionIds<NavLinks>;

export const NAV_ELEMENTS = [
  {
    label: 'Home',
    href: NavLinks.HOME,
  },
  {
    label: 'Portfolio',
    href: NavLinks.PORTFOLIO,
  },
  {
    label: 'O nas',
    href: NavLinks.ABOUT_US,
  },
  {
    label: 'Oferta',
    href: NavLinks.OFFER,
  },
  {
    label: 'Blog',
    href: NavLinks.BLOG,
  },
  {
    label: 'Kontakt',
    href: NavLinks.CONTACT,
  },
] satisfies INavLink<NavLinks>[];
