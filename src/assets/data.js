import mosir_sandomierz from '../images/sponsors/mosir_sandomierz.jpg';
import mosir_tarnobrzeg from '../images/sponsors/mosir_tbg.JPG';
import dom_dziecka from '../images/sponsors/domdzieckawskopaniu.jpg';
import bbl from '../images/sponsors/biegambolubie.jpg';
import radio_leliwa from '../images/sponsors/radioleliwa.png';
import itv_wisla from '../images/sponsors/itv_wisla.png';
import nadwisla24 from '../images/sponsors/nadwisla24.png';
import echodnia from '../images/sponsors/echodnia.jpg';
import sandomierztv from '../images/sponsors/sandomierztv.png';

export const partners = [
  {
    link: 'http://mosir.sandomierz.pl/',
    img: mosir_sandomierz,
    alt: 'MOSIR Sandomierz'
  },
  {
    link: 'http://mosir.tarnobrzeg.pl/',
    img: mosir_tarnobrzeg,
    alt: 'MOSIR Tarnobrzeg'
  },
  {
    link: 'https://www.facebook.com/domdziecka.skopanie/',
    img: dom_dziecka,
    alt: 'Dom dziecka w Skopaniu'
  },
  {
    link:
      'https://www.facebook.com/pages/category/Community/Biegam-Bo-Lubi%C4%99-Sandomierz-1898374857096842/',
    img: bbl,
    alt: 'Biegam Bo Lubię'
  }
];

export const mediaPatrones = [
  {
    link: 'http://leliwa.pl/',
    img: radio_leliwa,
    alt: 'Radio Leliwa'
  },
  {
    link: 'https://itvwisla.tv/',
    img: itv_wisla,
    alt: 'iTV WISŁA'
  },
  {
    link: 'http://nadwisla24.pl/',
    img: nadwisla24,
    alt: 'Nad Wisłą 24'
  },
  {
    link: 'https://echodnia.eu/',
    img: echodnia,
    alt: 'Echo Dnia'
  },
  {
    link: 'https://www.sandomierztv.pl/',
    img: sandomierztv,
    alt: 'Sandomierz tv'
  }
];

export const currentYear = new Date().getUTCFullYear();

export const routes = [
  {name: 'Start', path: '/'},
  {name: 'Wyniki', path: './result'},
  {name: 'Galeria', path: './gallery'},
  {name: 'Zapisy', path: './registration'},
  {name: 'Trasa', path: './route'},
  {name: 'Regulamin', path: '/terms-and-conditions'},
  {name: 'Kontakt', path: '/contact'}
];
