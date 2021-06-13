export const currentYear = new Date().getUTCFullYear()
export const startDate = new Date('2021', '08', '19', '11') //month is presented by numbers from 0 to 11

export const registrationLink =
  'https://competitions.timekeeper.pl/competitions/75'

export const contactDetails = {
  email: 'biegszklarski@gmail.com',
  phone: '+48 605 192 829',
}

export const routes = [
  {name: 'Start', path: '/'},
  {name: 'Wyniki', path: '/wyniki'},
  {name: 'Galeria', path: '/galeria'},
  {name: 'Zapisy', path: '/zapisy'},
  {name: 'Trasa', path: '/trasa'},
  {name: 'Regulamin', path: '/regulamin'},
  {name: 'Kontakt', path: '/kontakt'},
]

export const bannerDetails = [
  {name: 'date', info: '26 września 2021', icon: 'fas fa-calendar-alt'},
  {
    name: 'localization',
    info: 'Tarnobrzeg — Sandomierz',
    icon: 'fas fa-map-marked-alt',
  },
  {
    name: 'main_event',
    info: 'Bieg Główny — 21,0975 km',
    icon: 'fas fa-running',
  },
  {name: 'sub_event_2', info: 'Szklana Piątka — 5 km', icon: 'fas fa-running'},
  {name: 'sub_event_1', info: 'Nordic Walking — 5 km', icon: 'fas fa-walking'},
]
