export const currentYear = new Date().getUTCFullYear();
export const startDate = new Date('2020', '09', '20', '11');

export const contactDetails = {
  email: 'biegszklarski@gmail.com',
  phone: '+48 605 192 829'
};

export const routes = [
  {name: 'Start', path: '/'},
  {name: 'Wyniki', path: './results'},
  {name: 'Galeria', path: './gallery'},
  {name: 'Zapisy', path: './registration'},
  {name: 'Trasa', path: './routes'},
  {name: 'Regulamin', path: '/terms-and-conditions'},
  {name: 'Kontakt', path: '/contact'}
];

export const bannerDetails = [
  {name: 'date', info: '20 września 2020', icon: 'fas fa-calendar-alt'},
  {
    name: 'localization',
    info: 'Tarnobrzeg — Sandomierz',
    icon: 'fas fa-map-marked-alt'
  },
  {name: 'main_event', info: 'Bieg Główny — 20 km', icon: 'fas fa-running'},
  {name: 'sub_event_1', info: 'Nordic Walking — 10 km', icon: 'fas fa-walking'},
  {name: 'sub_event_2', info: 'Szklana Piątka — 5 km', icon: 'fas fa-running'}
];
