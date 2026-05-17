interface NavLink {
  label: string;
  href: string;
}

export const NAV_ELEMENTS = [
  {
    label: 'Home',
    href: '',
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
  },
  {
    label: 'O nas',
    href: '/#about-us',
  },
  {
    label: 'Oferta',
    href: '/oferta',
  },
  {
    label: 'Kontakt',
    href: '/#contact',
  },
] satisfies NavLink[];
