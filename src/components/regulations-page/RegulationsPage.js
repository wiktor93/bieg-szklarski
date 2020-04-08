import React from 'react';

import styles from './RegulationsPage.module.scss';

const RegulationsPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h2>Regulamin</h2>
      </header>

      <section className={styles.content}>
        <h2>REGULAMIN ZAWODÓW – 3. BIEG SZKLARSKI</h2>
        <div className={styles.terms}>
          <h3>1. Cel</h3>
          <ul>
            <li>Upowszechnianie masowego biegania</li>
            <li>
              Integracja mieszkańców dwóch sąsiadujących miast – Sandomierza i
              Tarnobrzega
            </li>
            <li>
              Wsparcie charytatywne dla wybranych imprez rekreacyjno-sportowych
              powiatu tarnobrzeskiego i sandomierskiego
            </li>
          </ul>

          <h3>2. Organizator</h3>
          <ul>
            <li>NSG GROUP właściciel marki PILKINGTON</li>
            <li>
              Miejski Ośrodek Sportu i Rekreacji im. Alfreda Freyera w
              Tarnobrzegu
            </li>
            <li>Miejski Ośrodek Sportu i Rekreacji w Sandomierzu</li>
          </ul>

          <h3>3. TERMIN, DYSTANS, OPIS BIEGU</h3>
          <ul>
            <li>Termin – 20.09.2020 r. (niedziela)</li>

            <li>
              Biuro Zawodów czynne w dniu zawodów od godziny 8:00 do 9:45 dla
              Biegu Głównego i od 8:00 do 10:45 dla Szklanej Piątki i Nordic
              Walking – miejsce: Bulwar im. Marszałka Piłsudskiego nad Wisłą w
              Sandomierzu
            </li>

            <li>
              Wyjazd zawodników na START autokarami godzina: 9:45 – Bieg Główny
              / 10:45 – Szklana Piątka i Nordic Walking
            </li>

            <li>Można wziąć udział w 3 rodzajach zawodów:</li>
            <ul className={styles.nested}>
              <li>
                Biegu Główny 21,0975 km – START godzina 11:00 – Zamek Dzikowski
                w Tarnobrzegu
              </li>

              <li>
                Szklana Piątka 5 km – START godzina 12:00 – Brama Zakładu w
                Sandomierzu os. Huta, ul. Portowa 24
              </li>

              <li>
                Nordic Walking 5 km – START godzina 12:00 – Brama Zakładu w
                Sandomierzu os. Huta, ul. Portowa 24
              </li>
            </ul>

            <li>
              Trasa Biegu Głównego – START Zamek Dzikowski w Tarnobrzegu / Plac
              Czerwony / ul. Przy Zalewie Dzików / Zakrzów / Sielec / Wielowieś
              / Koćmierzów / os. Huta Sandomierz / Bulwar nad Wisłą w
              Sandomierzu META
            </li>

            <li>
              Trasa Szklanej Piątki – START Brama Zakładu na os. Huta Sandomierz
              / os Vitrum / ul. Mostowa / stary most / Bulwar na Wisłą w
              Sandomierzu - META
            </li>

            <li>Trasa Nordic Walking – taka sama jak Szklanej Piątki</li>

            <li>
              Opis trasy – płaska, oznakowana
              <ul className={styles.nested}>
                <li>Bieg Główny – 90% asfalt, 10% szuter</li>
                <li>Szklana Piątka, Nordic Walking – 100% asfalt </li>
              </ul>
            </li>

            <li>Pomiar czasu – elektroniczny, chipy mocowane do butów</li>
          </ul>

          <h3>4. Warunki uczestnictwa</h3>
          <ul>
            <li>
              Uczestnikiem biegu może zostać każda osoba, która do dnia 20
              września 2020 roku ukończy 16 lat. Warunkiem udziału w Biegu jest
              przedstawienie aktualnego zaświadczenia lekarskiego o braku
              przeciwwskazań do udziału w biegu długodystansowym lub
              własnoręczne złożenie podpisu pod oświadczeniem o zdolności do
              udziału w biegu na własną odpowiedzialność.
            </li>

            <li>
              Wszyscy zawodnicy biorący udział w Biegu Szklarskim muszą zostać
              zweryfikowani w Biurze Zawodów. Zawodnik musi posiadać podczas
              weryfikacji dowód tożsamości lub paszport celem kontroli daty
              urodzenia i obywatelstwa.
            </li>

            <li>
              Decyzje Opieki Medycznej w trakcie zawodów, dotyczące
              kontynuowania biegu są ostateczne i nieodwołalne.
            </li>
          </ul>

          <h3>5. ZGŁOSZENIA I OPŁATA STARTOWA</h3>
          <ul>
            <li>
              Zgłoszenia przyjmowane będą drogą elektroniczną na stronie:
              www.timekeeper.pl
            </li>

            <li>Ostateczny termin zgłoszeń elektronicznych: 15.09.2020 r.</li>

            <li>
              Zgłoszenia przyjmowane będą również w Biurze Zawodów w dniu
              startu: Bieg Główny od 8:00 do 9:45 / Szklana Piątka i Nordic
              Walking od 8:00 do 10:45
            </li>

            <li>
              Zawodników obowiązuje opłata startowa w wysokości:
              <ul className={styles.nested}>
                <li>
                  wpłacona do dnia 15.09.2020:
                  <ul className={styles.nested}>
                    <li>Bieg Główny = 40 zł</li>
                    <li>Szklana Piątka i Nordic Walking = 30 zł</li>
                  </ul>
                </li>
                <li>
                  wpłacona po 15.09.2020 i w dniu zawodów:
                  <ul className={styles.nested}>
                    <li>Bieg Główny = 50 zł </li>
                    <li>Szklana Piątka i Nordic Walking = 40 zł</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Z opłaty startowej zwolnione są wyłącznie osoby legitymujące się
              dokumentem o niepełnosprawności.
            </li>
            <li>
              <b>
                Wpisowe przeznaczymy na wsparcie imprez sportowo-rekreacyjnych
                dla dzieci i młodzieży w powiecie tarnobrzeskim i sandomierskim.
              </b>
            </li>
          </ul>

          <h3>6. ORGANIZACJA: PAKIET STARTOWY / DEPOZYTY / PUNKTY ODŻYWCZE</h3>
          <ul>
            <li>
              Pakiet startowy – numer startowy / chip / worek na depozyt /
              upominki
            </li>
            <li>
              Na starcie, mecie oraz trasie biegu dostępna opieka medyczna
            </li>
            <li>
              Punkty wodno-odżywcze tylko na trasie Biegu Głównego – 7. i 14.
              kilometr (woda niegazowana, kubek lub butelka, gorzka czekolada i
              banan)
            </li>

            <li>Na starcie dostępne będą toalety i umywalki</li>
            <li>Na mecie będą napoje i ciepły posiłek regeneracyjny</li>
            <li>
              Przy Biurze Zawodów przez cały czas trwania imprezy dostępne są
              toalety, umywalki oraz depozyt
            </li>
            <li>
              W depozycie prosimy nie pozostawiać wartościowych przedmiotów.
              Organizator nie ponosi odpowiedzialności za zaginione rzeczy.
            </li>
          </ul>

          <h3>7. KLASYFIKACJE ZAWODÓW</h3>
          <ul>
            <li>Generalna Bieg Główny – K / M</li>
            <li>Generalna Szklana Piątka – K / M</li>
            <li>Generalna Nordic Walking – K / M</li>
            <li>
              Drużynowa – 4 najlepsze wyniki: K i M z Biegu Głównego plus K i M
              ze Szklanej Piątki
            </li>
            <li>Kategorie wiekowe K / M:</li>
            <ul className={styles.terms}>
              <li>K30 i M30 – (rocznik włącznie do 1991)</li>
              <li>K45 i M45 – (roczniki 1990 – 1976)</li>
              <li>K60 i M60 – (roczniki 1975 – 1956)</li>
              <li>K60+ i M60+ – (włącznie od rocznika 1960+)</li>
            </ul>
            <li>
              Uwaga: W przypadku gdy w danej kategorii będzie mniej niż 5
              uczestników, zostanie ona połączona z kategorią sąsiednią.
            </li>
            <li>Niepełnosprawni ruchowo K / M:</li>
            <ul className={styles.terms}>
              <li>
                Kategorie zostaną zdefiniowane w zależności od zgłoszeń
                uczestników
              </li>
            </ul>
            <li>Klasyfikacje dodatkowe:</li>
            <ul>
              <li>
                Najstarszy / Najmłodszy uczestnik Biegu Głównego i Szklanej
                Piątki
              </li>
              <li>
                Najlepszy pracownik firmy NSG GROUP (K / M) Biegu Głównego i
                Szklanej Piątki
              </li>
            </ul>
          </ul>

          <h3>8. NAGRODY, UPOMINKI</h3>
          <ul>
            <li>
              Nagrody rzeczowe dla zwycięzców w klasyfikacji generalnej – Bieg
              Główny (K / M), Szklana Piątka (K / M), Nordic Walking (K / M)
            </li>
            <li>Upominki dla zwycięzców w pozostałych kategoriach</li>
            <li>Każdy uczestnik Biegu otrzyma pamiątkowy medal</li>
            <li>
              Spośród wszystkich uczestników biegu, obecnych na ceremonii
              dekoracji, zostaną rozlosowane nagrody rzeczowe
            </li>
          </ul>

          <h3>9. OCHRONA DANYCH OSOBOWYCH</h3>
          <ul>
            <li>
              Dane osobowe uczestników będą przetwarzane zgodnie z
              obowiązującymi przepisami, w szczególności z Rozporządzeniem
              Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
              2016 r. w sprawie ochrony osób fizycznych w związku z
              przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
              takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne
              rozporządzenie o ochronie danych).
            </li>

            <li>
              Przetwarzanie danych, o którym mowa w powyższym punkcie obejmuje
              również publikację: imienia, nazwiska, roku urodzenia, nazwy
              miejscowości, nazwy klubu, zdjęcia wizerunku.
            </li>
          </ul>

          <h3>10. POSTANOWIENIA KOŃCOWE</h3>
          <ul>
            <li>
              W czasie trwania biegu, uczestnicy powinni stosować się do poleceń
              wydawanych przez osoby odpowiedzialne za bezpieczeństwo, służby
              porządkowe oraz inne osoby wyznaczone przez Organizatora
            </li>
            <li>
              Organizator nie zapewnia uczestnikowi ubezpieczenia NW na czas
              trwania biegu
            </li>
            <li>
              Każdy uczestnik jest zobowiązany do podpisania oświadczenia o
              znajomości regulaminu. Podpisując ww. oświadczenie, uczestnik
              wyraża zgodę na udzielenie pierwszej pomocy medycznej, wykonanie
              innych zabiegów medycznych oraz transport poszkodowanego w
              bezpieczne miejsce przez personel medyczny i paramedyczny
              działający w imieniu Organizatora.
            </li>
            <li>
              Uczestnik oświadcza, że jest zdolny do udziału w biegu, nie są mu
              znane żadne powody o charakterze zdrowotnym wykluczające go z
              udziału w biegu oraz że startuje na własną odpowiedzialność.
              Przyjmuje do wiadomości, że udział w biegu wiąże się z wysiłkiem
              fizycznym i pociąga za sobą naturalne ryzyko wypadku, odniesienia
              obrażeń ciała i urazów fizycznych, a także szkód i strat o
              charakterze majątkowym. Ponadto, z udziałem w zawodach mogą wiązać
              się inne, niemożliwe w tej chwili do przewidzenia czynniki ryzyka.
              Podpisanie oświadczenia o znajomości regulaminu oznacza, że
              uczestnik rozważył i ocenił zakres oraz charakter ryzyka wiążącego
              się z udziałem w biegu. Startuje dobrowolnie i wyłącznie na własną
              odpowiedzialność. Decyzje lekarzy dotyczące kontynuowania biegu
              podczas imprezy są ostateczne i nieodwołalne.
            </li>
            <li>
              Zapisując się do udziału w zawodach, uczestnik akceptuje niniejszy
              regulamin i wyraża zgodę na nieodpłatne wykorzystanie jego
              wizerunku utrwalonego w formie fotografii lub zapisu wideo oraz
              udziela Organizatorowi nieodpłatnej licencji na wykorzystanie go
              na wszystkich polach eksploatacji, w tym: utrwalania i
              rozpowszechniania w dowolnej formie oraz wprowadzanie do pamięci
              komputera, wykorzystania do promocji i organizacji imprezy, na
              promocyjnych materiałach drukowanych przez Organizatora, w prasie,
              na stronach internetowych oraz w przekazach telewizyjnych i
              radiowych.
            </li>
            <li>
              Wiążąca i ostateczna interpretacja niniejszego regulaminu
              przysługuje wyłącznie Organizatorowi Biegu Szklarskiego. Sprawy
              nie ujęte w regulaminie są rozstrzygane przez organizatora. Jeżeli
              którekolwiek z postanowień Regulaminu zostanie częściowo lub w
              całości uznane za nieważne lub niemożliwe do wyegzekwowania –
              wszelkie inne postanowienia zachowują ważność.
            </li>
          </ul>

          <h3>11. KONTAKT</h3>
          <ul>
            <li>email: biegszklarski@gmail.com </li>
            <li>tel: 605-192-829</li>
            <li>facebook: Bieg Szklarski</li>
            <li>strona: www.biegszklarski.pl</li>
          </ul>
        </div>
      </section>

      <hr />
    </>
  );
};

export default RegulationsPage;
