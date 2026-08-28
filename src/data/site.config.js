export const siteConfig = {
  domain: 'hippolytek.fr',
  url: 'https://hippolytek.fr',
  fallbackUrl: 'https://aziguy.github.io/react-portfolio',
  defaultLocale: 'fr',
  locales: ['fr', 'en'],
};

export const author = {
  name: 'Hippolyte Kengni',
  shortName: 'Hippolyte K.',
  initials: 'HK',
  email: 'kengnihippolyte@gmail.com',
  phone: '+237686777838',
  phoneDisplay: '+237 686 777 838',
  location: { city: 'Montpellier', country: 'France', countryCode: 'FR' },
  yearsOfExperience: 9,
};

export const social = {
  github: 'https://github.com/Aziguy',
  linkedin: 'https://www.linkedin.com/in/hippolyte-kengni/',
  credly: 'https://www.credly.com/users/hippolyte-kengni/badges',
  whatsapp: `https://api.whatsapp.com/send?phone=${author.phone.replace('+', '')}`,
  messenger: 'https://m.me/hippolyte.kengni',
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
};

export const isEmailjsConfigured = Boolean(
  emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey,
);

export const highlights = {
  projectsDelivered: 50,
};
