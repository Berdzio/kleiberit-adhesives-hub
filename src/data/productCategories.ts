import { Layers, Zap, TreePine, Hammer, FlaskConical, Paintbrush, SprayCan, Shield, LucideIcon } from "lucide-react";
import { sectors, Product } from "./sectors";

export interface ProductCategorySubcategory {
  title: string;
  description?: string;
  matchTypes: string[];
}

export interface ProductCategory {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  matchTypes: string[];
  subcategories?: ProductCategorySubcategory[];
}

// Standalone products not tied to any sector
export const standaloneProducts: { categorySlug: string; product: Product }[] = [
  // ── PVAc (standalone) ──
  {
    categorySlug: "pvac",
    product: {
      name: "KLEIBERIT® 303.0",
      code: "303.0",
      description:
        "Kleiberit 303.0 – przemysłowy klej PVAc D3 (1K) lub D4 (z utwardzaczem 303.5, 5%). Do produkcji okien, drzwi, schodów, sklejeń HPL i drewna egzotycznego. Certyfikat IMO, zgodność FDA. Op. 0,5–1000 kg.",
      type: "PVAc",
      image: "/products/303.jpg",
      badge: "IMO",
      details: {
        body: "Kleiberit 303.0 to sprawdzony, przemysłowy klej dyspersyjny PVAc do wodoodpornych sklejeń drewna i materiałów drewnopochodnych wg DIN EN 204. Jako klej jednoskładnikowy (1K) osiąga klasę D3, a po dodaniu 5% utwardzacza Kleiberit 303.5 – klasę D4. Elastyczność jedno- lub dwuskładnikowego stosowania bez konieczności zakupu osobnych produktów. Certyfikat IMO (FTP-Code, cz. 2 i 5) dopuszcza go do przemysłu stoczniowego, a zgodność z FDA 21CFR §175.105 – do opakowań kontaktujących się z żywnością.",
        keyFeature: "Jeden produkt – dwie klasy wytrzymałości: D3 jako 1K lub D4 z 5% utwardzacza 303.5. Certyfikat IMO i zgodność FDA.",
        specs: [
          { label: "Baza", value: "Dyspersja PVAc" },
          { label: "Klasa", value: "D3 (1K) / D4 (2K)" },
          { label: "Utwardzacz (2K)", value: "Kleiberit 303.5 (5%)" },
          { label: "Lepkość (20°C)", value: "12 000 ±2 000 mPa·s" },
          { label: "Gęstość", value: "ok. 1,10 g/cm³" },
          { label: "pH", value: "ok. 3" },
          { label: "Czas otwarty", value: "6–10 min (20°C)" },
          { label: "Żywotność mieszanki", value: "ok. 24h (2K)" },
          { label: "Nanoszenie – fugi", value: "150–200 g/m²" },
          { label: "Nanoszenie – HPL", value: "100–130 g/m²" },
          { label: "Siła docisku", value: "0,7–1,0 N/mm²" },
          { label: "Min. temp. pracy", value: "+10°C" },
          { label: "Mrozoodporność", value: "do –30°C" },
          { label: "Pełna wytrzymałość", value: "po 7 dniach" },
          { label: "Trwałość", value: "ok. 12 mies." },
          { label: "Opakowania", value: "0,5 / 4,5 / 10 / 28 / 130 / 1000 kg" },
        ],
        applications: "Produkcja okien i drzwi · schody i ścianki działowe · sklejenia powierzchniowe HPL · sklejenia płyt warstwowych · klejenie mikrofalowe (HF) · drewno twarde i egzotyczne · przemysł stoczniowy (IMO).",
        note: "Czasy docisku fug: 20°C od 15 min · 50°C od 5 min · 80°C od 2 min. HPL: 20°C 15–20 min · 50°C ok. 5 min · 80°C 1–2 min. Przy stosowaniu jako 2K czasy docisku zwiększyć o ok. 50%.",
      },
    },
  },
  {
    categorySlug: "pvac",
    product: {
      name: "KLEIBERIT® 304.1",
      code: "304.1",
      description:
        "Kleiberit 304.1 – dwuskładnikowy klej PVAc klasy D4 z utwardzaczem 304.3 (5%). Wyjątkowa żywotność mieszanki do 7 dni przy 20°C. Do produkcji okien, drzwi, schodów, mikrowczepów. Atesty D4, WATT 91.",
      type: "PVAc",
      image: "/products/303.jpg",
      badge: "D4",
      details: {
        body: "Kleiberit 304.1 to przemysłowy klej dyspersyjny PVAc stosowany wyłącznie jako klej dwuskładnikowy (2K) klasy D4 z 5-procentowym dodatkiem bezbarwnego utwardzacza Kleiberit 304.3. Wyróżniającą cechą w tej kategorii jest wyjątkowo długi czas żywotności mieszanki wynoszący do 7 dni w temperaturze 20°C – kluczowa zaleta w zakładach wielkoseryjnej produkcji okien i drzwi, gdzie eliminuje konieczność codziennego mieszania i minimalizuje straty materiału. Jednocześnie oferuje krótki czas docisku na zimno i gorąco.",
        keyFeature: "Żywotność mieszanki do 7 dni (20°C) — najdłuższa w klasie klejów PVAc D4; eliminuje codzienne mieszanie w produkcji wielkoseryjnej.",
        specs: [
          { label: "Baza", value: "Dyspersja PVAc" },
          { label: "Klasa", value: "D4 (wyłącznie 2K)" },
          { label: "Utwardzacz", value: "Kleiberit 304.3 (5%)" },
          { label: "Żywotność mieszanki", value: "do 7 dni (20°C)" },
          { label: "Czas otwarty", value: "6–10 min (20°C)" },
          { label: "Barwa / fuga", value: "Biały / bezbarwna" },
          { label: "Min. temp. pracy", value: "+10°C (opt. 18–20°C)" },
          { label: "Mrozoodporność", value: "do –30°C" },
          { label: "Pełna wytrzymałość", value: "po 7 dniach" },
          { label: "Trwałość", value: "ok. 12 mies." },
        ],
        applications: "Produkcja okien i okiennic · drzwi i ramy drzwiowe · schody i ścianki działowe · płyty warstwowe i laminatowe · złącza wpustowe, wczepowo-trapezowe i mikrowczepy · klejenie mikrofalowe (HF) · drewno twarde i egzotyczne.",
        note: "Klej (1K) nie wymaga oznakowania wg wytycznych UE. Utwardzacz 304.3 podlega obowiązkowemu oznakowaniu — patrz karta charakterystyki. Mrozoodporny do –30°C; przed użyciem po przemrożeniu doprowadzić do temperatury pokojowej i wymieszać.",
      },
    },
  },
  {
    categorySlug: "pvac",
    product: {
      name: "KLEIBERIT® 304.4 EPI",
      code: "304.4",
      description:
        "Kleiberit 304.4 EPI – dwuskładnikowy klej systemu EPI klasy D4 do drewna egzotycznego (teak, merbau, bangkirai), okien i złączy mikrowczepowych. Bezbarwna fuga, nie niszczy narzędzi. Utwardzacz 808.0 (15%), D4, WATT 91, BRL 2339, JAIA F****.",
      type: "PVAc",
      image: "/placeholder.svg",
      badge: "EPI · D4",
      details: {
        body: "Kleiberit 304.4 to dwuskładnikowy klej oparty na systemie EPI (Emulsion Polymer Isocyanate) – technologii łączącej zalety dyspersji polimerowej z reaktywnością izocyjanianu. W odróżnieniu od klasycznych klejów PVAc, system EPI charakteryzuje się wyjątkowo wysoką przyczepnością do drewna egzotycznego i twardego – gatunków trudnych do klejenia ze względu na naturalną zawartość olejów, żywic i substancji inhibitorowych. To klej pierwszego wyboru dla producentów okien, schodów tarasowych i elementów ogrodowych z drewna tropikalnego. Bezbarwna spoina nie niszczy narzędzi tnących (pił, frezów, noży okleinujących).",
        keyFeature: "Specjalista od drewna egzotycznego — system EPI przełamuje barierę adhezji do gatunków bogatych w oleje i żywice (teak, merbau, bangkirai, iroko), gdzie kleje PVAc zawodzą. Bezbarwna fuga, nie niszczy narzędzi.",
        specs: [
          { label: "Baza", value: "System EPI (dyspersja + izocyjanian)" },
          { label: "Klasa", value: "D4 / WATT 91" },
          { label: "Utwardzacz", value: "Kleiberit 808.0 (15%)" },
          { label: "Żywotność mieszanki", value: "ok. 60 min (20°C)" },
          { label: "Czas otwarty", value: "8–12 min (20°C)" },
          { label: "Wiązanie wtórne", value: "ok. 90 min" },
          { label: "Siła docisku", value: "0,4–0,7 N/mm²" },
          { label: "Lepkość (20°C)", value: "10 000 ±2 000 mPa·s" },
          { label: "Gęstość mieszanki", value: "ok. 1,3 g/cm³" },
          { label: "pH mieszanki", value: "ok. 7" },
          { label: "Barwa spoiny", value: "Bezbarwna / kremowa" },
          { label: "Nanoszenie", value: "120–200 g/m²" },
          { label: "Min. temp. pracy", value: "+10°C (opt. 18–20°C)" },
          { label: "Pełna wytrzymałość", value: "po 7 dniach (20°C)" },
          { label: "Trwałość", value: "ok. 9 mies." },
          { label: "Opakowania", value: "10 / 28 / 130 / 1000 kg (IBC)" },
        ],
        applications: "Drewno egzotyczne i twarde (teak, merbau, bangkirai, iroko) · kantówka okienna i ramy drzwiowe · schody z drewna miękkiego, twardego i egzotycznego · meble ogrodowe i deski tarasowe · panele i elementy ścienne klejone · złącza wpustowe, mikrowczepy i klejenie HF.",
        note: "Czasy docisku fug: 20°C od 45 min · 30°C od 30 min · 50°C od 20 min. Wyższe temperatury kleju skracają żywotność mieszanki. Unikać kontaktu sklejenia z żelazem (ryzyko przebarwień). Zarówno klej 304.4 jak i utwardzacz 808.0 podlegają obowiązkowemu oznakowaniu wg wytycznych UE.",
      },
    },
  },
  {
    categorySlug: "pvac",
    product: {
      name: "KLEIBERIT® 314.3",
      code: "314.3",
      description:
        "Kleiberit 314.3 – jednokomponentowy klej PVAc klasy D4 bez utwardzacza. Bezbarwna fuga, nie niszczy narzędzi. Certyfikaty D4, WATT 91, BRL 2339. Czas otwarty 4–7 min, min. temp. +15°C. Op. 4,5–1050 kg.",
      type: "PVAc",
      image: "/products/314.jpg",
      badge: "D4",
      details: {
        body: "Kleiberit 314.3 to jednokomponentowy klej dyspersyjny PVAc, który jako klej gotowy do użycia osiąga klasę D4 bez konieczności dodawania utwardzacza. To kluczowa cecha odróżniająca go od 303.0 (D3 jako 1K) i 304.1 (D4, ale wymaga utwardzacza). Produkt posiada bezbarwną, przezroczystą fugę, która nie niszczy narzędzi – ideał dla producentów okien i schodów, gdzie estetyka spoiny i trwałość narzędzi mają znaczenie ekonomiczne. Posiada certyfikat BRL 2339 (nr 33331) – dopuszczenie do połączeń na wczepy klinowe ze świerka, sosny i modrzewia jako elementów nienośnych, wymagane na rynkach Beneluksu.",
        keyFeature: "D4 jako klej 1K gotowy do użycia – bez utwardzacza, bez mieszania, bez ograniczenia żywotności mieszanki. Bezbarwna fuga, nie niszczy narzędzi.",
        warning: "Podczas pracy uwalniają się niewielkie ilości SO₂. Przy temperaturze prasowania >20°C wymagana skuteczna wentylacja. Nie stosować poniżej +15°C (wyższy próg niż 303.0!). Trwałość zależna od temperatury składowania: 15°C – ok. 8 mies. · 20°C – ok. 6 mies. · 25°C – ok. 4 mies. Chronić przed mrozem.",
        specs: [
          { label: "Baza", value: "Dyspersja PVAc" },
          { label: "Klasa", value: "D4 (1K bez utwardzacza)" },
          { label: "Certyfikaty", value: "D4, WATT 91, BRL 2339" },
          { label: "Lepkość (20°C)", value: "8 000 ±2 500 mPa·s" },
          { label: "Gęstość", value: "ok. 1,11 g/cm³" },
          { label: "Czas otwarty", value: "4–7 min (20°C)" },
          { label: "Barwa / fuga", value: "Biały / bezbarwna" },
          { label: "Nanoszenie (masz.)", value: "100 g/m²" },
          { label: "Nanoszenie (ręcz.)", value: "150 g/m²" },
          { label: "Siła docisku", value: "0,2–1,0 N/mm²" },
          { label: "Min. temp. pracy", value: "+15°C" },
          { label: "Opakowania", value: "4,5 / 5 / 10 / 28 / 130 / 1050 kg" },
        ],
        applications: "Produkcja okien i drzwi · złącza mikrowczepowe i klinowe · schody drewniane · klejenie drewna egzotycznego · elementy wymagające estetycznej, bezbarwnej spoiny.",
        note: "Czasy docisku – fugi: 20°C od 15 min · 50°C od 5 min · 80°C od 2 min. HPL: 20°C od 20 min · 50°C ok. 5 min · 80°C ok. 2 min.",
      },
    },
  },
  {
    categorySlug: "pvac",
    product: {
      name: "KLEIBERIT® 316.0",
      code: "316.0",
      description:
        "Kleiberit 316.0 – wyspecjalizowany klej PVAc do kołków i miniwczepów. Ultra-niska lepkość 470 mPa·s – dysze nie zatykają się, doskonałe właściwości natryskowe. Do automatów kołkowych i łatarek sęków. Op. 4,5–26 kg.",
      type: "PVAc",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 316.0 to klej dyspersyjny PVAc zaprojektowany wyłącznie do automatycznych maszyn kołkowych i łatarek sęków. Jego wyjątkowo niska lepkość (ok. 470 mPa·s) – wielokrotnie niższa niż standardowych klejów PVAc – zapewnia idealne właściwości natryskowe i przepływowe: dysze nie zapychają się nawet przy ciągłym użytkowaniu i podczas przerw w pracy. Produkt gotowy do użycia bez modyfikacji.",
        keyFeature: "Lepkość ok. 470 mPa·s — wielokrotnie niższa niż standardowe kleje PVAc. Dysze nie zatykają się przy ciągłej pracy i podczas przerw.",
        warning: "Chronić przed mrozem! Punkt białości ok. +8°C — nie przechowywać w nieogrzewanym magazynie w okresie zimowym.",
        specs: [
          { label: "Baza", value: "Dyspersja PVAc" },
          { label: "Lepkość (20°C)", value: "ok. 470 ±150 mPa·s" },
          { label: "Gęstość", value: "ok. 1,05 g/cm³" },
          { label: "pH", value: "ok. 5" },
          { label: "Punkt białości", value: "ok. +8°C" },
          { label: "Barwa", value: "Biały" },
          { label: "Trwałość", value: "ok. 12 mies. (20°C)" },
          { label: "Opakowania", value: "4,5 / 10 / 26 kg" },
        ],
        applications: "Sklejenia korpusów na automatach kołkowych (dysze natryskowe) · kołki konstrukcyjne – drewno miękkie, twarde i egzotyczne · miniwczepy ram drewnianych · automaty do łatania dziur po sękach.",
        note: "Technika nanoszenia: automaty kołkowe z natryskiem dyszowym, zaciski szkieletów, pompy dozujące (pod-/nadciśnienie), pistolety natryskowe. Czyszczenie: woda.",
      },
    },
  },
  {
    categorySlug: "pvac",
    product: {
      name: "KLEIBERIT® 322.1",
      code: "322.1",
      description:
        "Kleiberit 322.1 – specjalna dyspersja PVAc do fornirowania płyt wiórowych i stolarskich oraz klejenia HPL, folii papierowych i laminatów. Czas otwarty do 6 min, bez EU oznakowania. Op. 34 / 130 kg.",
      type: "PVAc",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 322.1 to specjalna jednokomponentowa dyspersja PVAc, zaprojektowana do fornirowania płyt wiórowych i stolarskich oraz klejenia powierzchniowego płyt HPL, żywicznych folii papierowych i laminatu papierowego. Klej gwarantuje dobre sklejenie wszystkich rodzajów fornirów, a fornirowane powierzchnie po wyschnięciu łatwo poddają się bejcowaniu. Jako klej 1K nie wymaga mieszania ani dozowania utwardzacza. Bez obowiązkowego oznakowania EU.",
        keyFeature: "Specjalista od fornirowania — dobre sklejenie wszystkich rodzajów fornirów; fornirowane powierzchnie łatwo poddają się bejcowaniu. Bez oznakowania EU.",
        warning: "Chronić przed mrozem! Nie stosować w pobliżu nieosłoniętego ognia. Czas prasowania nie powinien przekraczać 1–2 min przy wysokich temperaturach i dużej ilości kleju (ryzyko prześwitu spoiny). Po prasowaniu zachować 24h przed dalszą obróbką.",
        specs: [
          { label: "Baza", value: "Spec. dyspersja PVAc" },
          { label: "Lepkość (20°C)", value: "6 000 ±1 000 mPa·s" },
          { label: "Gęstość", value: "ok. 1,2 g/cm³" },
          { label: "Barwa", value: "Beżowy" },
          { label: "Czas otwarty", value: "do 6 min (20°C)" },
          { label: "Ciśnienie", value: "0,2–0,5 N/mm²" },
          { label: "Nanoszenie", value: "120–180 g/m²" },
          { label: "Oznakowanie EU", value: "Niewymagane" },
          { label: "Trwałość", value: "ok. 1 rok (20°C)" },
          { label: "Opakowania", value: "34 kg / 130 kg" },
        ],
        applications: "Fornirowanie płyt wiórowych i stolarskich · klejenie HPL · żywiczne folie papierowe i laminat papierowy.",
        note: "Czasy docisku – fornirowanie: 20°C od 10 min · 50°C 4 min + 2 min/mm grub. forniru · 60°C 3 min + 2 min/mm · 80°C 1,5 min + 1 min/mm · 100°C 1 min + 0,5 min/mm. Nanoszenie: szpachlą, nakładarkami Gupfo-Leimer, urządzenia do nanoszenia.",
      },
    },
  },
  {
    categorySlug: "pvac",
    product: {
      name: "KLEIBERIT® 323.0",
      code: "323.0",
      description:
        "Kleiberit 323.0 – wielozadaniowy klej PVAc D2 do fug, kołków, obrzeży ręcznych, HPL, korpusów mebli i postformingu. Wysoka wytrzymałość początkowa, fuga bezbarwna. Mrozoodporny do –25°C. Op. 10–130 kg.",
      type: "PVAc",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 323.0 to wysokojakościowa dyspersja PVAc klasy D2, łącząca w jednym produkcie cechy kleju montażowego, konstrukcyjnego i do okleinowania obrzeży. Wyróżnia się wysoką wytrzymałością początkową umożliwiającą krótki czas docisku, bezbarwną fugą, która nie niszczy narzędzi, oraz szerokim spektrum zastosowań – od sklejeń fug i kołków, przez okleinowanie ręczne obrzeży, po klejenie HPL i postforming. Bez obowiązkowego oznakowania EU.",
        keyFeature: "Jeden klej – wiele zastosowań: fugi, kołki, obrzeża ręczne, HPL, korpusy mebli, postforming. Fuga bezbarwna, nie niszczy narzędzi. Mrozoodporny do –25°C.",
        specs: [
          { label: "Baza", value: "Dyspersja PVAc" },
          { label: "Klasa", value: "D2 (DIN EN 204)" },
          { label: "Lepkość (20°C)", value: "13 000 ±2 000 mPa·s" },
          { label: "Gęstość", value: "ok. 1,10 g/cm³" },
          { label: "Czas otwarty", value: "5–10 min (20°C)" },
          { label: "Barwa / fuga", value: "Biały / bezbarwna" },
          { label: "Siła docisku", value: "0,2–0,7 N/mm²" },
          { label: "Nanoszenie", value: "100–200 g/m²" },
          { label: "Min. temp. pracy", value: "+10°C" },
          { label: "Mrozoodporność", value: "do –25°C" },
          { label: "Oznakowanie EU", value: "Niewymagane" },
          { label: "Trwałość", value: "ok. 1 rok (20°C)" },
          { label: "Opakowania", value: "10 / 32 / 130 kg" },
        ],
        applications: "Fugi, czopy i kołki (drewno iglaste, liściaste, egzotyczne) · klejenie HPL i płyt wielowarstwowych · korpusy mebli i klejenie montażowe · ręczne okleinowanie obrzeży · ramy i elementy z drewna · postforming.",
        note: "Czasy docisku: fugi 20°C od 12 min · fugi 50°C od 8 min · HPL 20°C od 15 min · HPL 50°C od 10 min · ręczne oklejanie obrzeży 70°C od 4 min. Unikać kontaktu z żelazem (ryzyko przebarwień). Po przemrożeniu ostrożnie odmrozić i wymieszać.",
      },
    },
  },
  {
    categorySlug: "pvac",
    product: {
      name: "KLEIBERIT® 431.7 Supratherm",
      code: "431.7",
      description:
        "Kleiberit 431.7 Supratherm – jednoskładnikowy dyspersyjny klej PUR do prasy membranowej i deep-draw. Klejenie trójwymiarowe folii meblowych PVC i ABS na MDF. Reaktywacja do 72 h od 50°C. Certyfikat FIRA BS 6222. Natrysk 40–80 g/m². Op. 4,5–1000 kg.",
      type: "Prasa membranowa",
      image: "/placeholder.svg",
      badge: "FIRA",
      details: {
        body: "Kleiberit 431.7 Supratherm to jednoskładnikowy (1K) klej na bazie dyspersji poliuretanowej, przeznaczony do okleinowania powierzchni trójwymiarowych folią meblową w technologii prasy membranowej, deep-draw (głębokiego tłoczenia) i prasowania wielokształtowego. Klej nanosi się natryskiem na płytę MDF, pozostawia do wyschnięcia (30 min), a następnie — w oknie reaktywacji trwającym nawet do 72 godzin — aktywuje się go ciepłem (od 50°C) i dociska arkusz folii w prasie. Tak długie okno reaktywacji to kluczowa zaleta przy produkcji o nieregularnym rytmie lub przy złożonych kształtach wymagających powtórnego prasowania. Po wyschnięciu tworzy przezroczysty film, który nie wpływa na kolor obrzeży. Klej posiada certyfikat FIRA zgodny z BS 6222 Part 3 1999.",
        keyFeature: "Okno reaktywacji do 72 h — klej nałożony rano może być prasowany nawet następnego dnia. Idealny do produkcji wielokształtowych frontów meblowych 3D z folią PVC lub ABS na MDF.",
        specs: [
          { label: "Baza", value: "Dyspersja PUR (1K)" },
          { label: "Gęstość", value: "ok. 1,1 g/cm³" },
          { label: "pH", value: "ok. 8" },
          { label: "Barwa", value: "biały" },
          { label: "Lepkość (20°C)", value: "2 000 ±300 mPa·s" },
          { label: "Opt. dysza", value: "1,0–1,4 mm" },
          { label: "Ciśnienie natrysku", value: "ok. 4,0 bar (2,0 bar przy pistolecie)" },
          { label: "Temp. reaktywacji", value: "od 50°C" },
          { label: "Czas schnięcia", value: "30–60 min (20°C)" },
          { label: "Okno reaktywacji", value: "do 72 h" },
          { label: "Nanoszenie – gładkie", value: "40–80 g/m²" },
          { label: "Nanoszenie – zaoblenia", value: "100–120 g/m²" },
          { label: "Czas docisku (deep-draw)", value: "30–60 s" },
          { label: "Czas docisku (prasa membr.)", value: "30–90 s" },
          { label: "Ciśnienie docisku", value: "4–5 bar" },
          { label: "Odporność na zimno", value: "do –40°C" },
          { label: "Certyfikat", value: "FIRA BS 6222 Part 3 1999" },
          { label: "Trwałość", value: "ok. 6 mies. (20°C, zamknięte op.)" },
          { label: "Opakowania", value: "4,5 / 26 / 1000 kg (IBC)" },
        ],
        applications: "Prasa membranowa i multiform · głębokie tłoczenie (deep-draw) · folie meblowe termoplastyczne PVC i ABS · fronty meblowe 3D · zaoblone i frezowane płyty MDF · okleinowanie powierzchni nieplanarnych.",
        note: "Przed użyciem wymieszać i przefiltrować (szczególnie przed natryskiem — usunąć cząstki polimeru z schnięcia). Ciśnienie mierzyć bezpośrednio przy pistolecie: ok. 2,0 bar. Na zaobleniach i wyfrezowaniach zaleca się podwójne nanoszenie ze względu na wyższą chłonność materiału. Nie składować poniżej +5°C ani powyżej +30°C. Chronić przed mrozem.",
      },
    },
  },
  {
    categorySlug: "pvac",
    product: {
      name: "KLEIBERIT® Supratherm 436",
      code: "436.2",
      description:
        "Kleiberit Supratherm 436 – jedno- lub dwuskładnikowy klej PUR do prasy membranowej i kaszerowania 3D folii meblowych na MDF. 7 wariantów (436.2–436.8) o dwóch lepkościach i różnych kolorach. 2K z utwardzaczem 807.0: odporność do 120°C. Reaktywacja (1K) do 24 h. Bez oznakowania EU. Op. 10–120 kg.",
      type: "Prasa membranowa",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit Supratherm 436 to dyspersja poliuretanowa do okleinowania powierzchni trójwymiarowych folią meblową w prasach membranowych i wielokształtowych. Wyróżnia się elastycznością systemu: jako klej 1K osiąga odporność termiczną do 90°C z oknem reaktywacji do 24 godzin; po dodaniu 5% utwardzacza Kleiberit 807.0 (system 2K) odporność rośnie do 120°C, a reaktywacja skraca się do 8 godzin. Żywotność mieszanki 2K wynosi ok. 8 godzin. Nie posiada obowiązkowego oznakowania wg wytycznych UE, co upraszcza dokumentację BHP. Seria 436 obejmuje 7 wariantów różniących się lepkością i kolorem, dopasowanych do różnych systemów nanoszenia i kontroli pokrycia: warianty 436.2–436.5 (lepkość 800 mPa·s, dysza 1,2–1,7 mm, ciśnienie 3,0–4,0 bar) dedykowane są do systemów cienkodyszowych; warianty 436.6–436.8 (lepkość 2200 mPa·s, dysza 1,7–2,0 mm, ciśnienie 4,0–6,0 bar) do standardowych pistoletek. Wariant 436.5 fluorescencyjny biały umożliwia szybką kontrolę wizualną i UV pokrycia klejem. Warianty 436.2 i 436.6 są niebieskie — ich kontrast z białą płytą MDF ułatwia ocenę równomierności naniesienia.",
        keyFeature: "System 1K/2K bez zmiany produktu — bez utwardzacza reaktywacja do 24 h i odporność do 90°C; z 5% utwardzaczem 807.0 odporność do 120°C. Brak oznakowania EU upraszcza BHP.",
        specs: [
          { label: "Baza", value: "Dyspersja PUR (1K/2K)" },
          { label: "Gęstość", value: "ok. 1,1 g/cm³" },
          { label: "pH", value: "ok. 7" },
          { label: "Utwardzacz (2K)", value: "5% Kleiberit 807.0" },
          { label: "Żywotność mieszanki (2K)", value: "ok. 8 h" },
          { label: "Czas schnięcia", value: "30–60 min (20°C)" },
          { label: "Okno reaktywacji (1K)", value: "do 24 h" },
          { label: "Okno reaktywacji (2K)", value: "do 8 h" },
          { label: "Temp. reaktywacji", value: "od 50°C" },
          { label: "Odporność termiczna (1K)", value: "do 90°C" },
          { label: "Odporność termiczna (2K)", value: "do 120°C" },
          { label: "Odporność na zimno", value: "do –40°C" },
          { label: "Lepkość 436.2–436.5 (20°C)", value: "800 ±200 mPa·s" },
          { label: "Opt. dysza 436.2–436.5", value: "1,2–1,7 mm · 3,0–4,0 bar" },
          { label: "Lepkość 436.6–436.8 (20°C)", value: "2 200 ±300 mPa·s" },
          { label: "Opt. dysza 436.6–436.8", value: "1,7–2,0 mm · 4,0–6,0 bar" },
          { label: "Nanoszenie – gładkie", value: "40–80 g/m²" },
          { label: "Nanoszenie – zaoblenia", value: "100–120 g/m²" },
          { label: "Czas docisku (prasa membr.)", value: "30–90 s" },
          { label: "Ciśnienie docisku", value: "4–5 bar" },
          { label: "Oznakowanie EU", value: "Niewymagane" },
          { label: "Trwałość", value: "ok. 9 mies. (20°C, zamknięte op.)" },
          { label: "Opakowania", value: "10 / 26 / 120 kg" },
        ],
        applications: "Prasa membranowa i wielokształtowa · kaszerowanie powierzchni 3D · folie meblowe termoplastyczne PVC, ABS, CPL na MDF · fronty meblowe · zaoblone i frezowane płyty drewnopochodne.",
        note: "Warianty i ich charakterystyka: 436.2 niebieski 800 mPa·s · 436.3 biały 800 mPa·s · 436.4 biały 800 mPa·s · 436.5 fluorescencyjny biały 800 mPa·s (kontrola UV) · 436.6 niebieski 2200 mPa·s · 436.7 biały 2200 mPa·s · 436.8 biały 2200 mPa·s. Przy stosowaniu utwardzacza 807.0 dodawać powoli, dokładnie mieszając. Urządzenia czyścić wodą; przed ponownym napełnieniem — całkowicie wysuszyć. Nie składować poniżej +5°C ani powyżej +30°C. Chronić przed mrozem.",
      },
    },
  },
  // ── Czyściwa ──
  {
    categorySlug: "cleaners",
    product: {
      name: "KLEIBERIT® 760.3",
      code: "760.3",
      description:
        "Kleiberit 760.3 – specjalistyczny płynny środek czyszczący do wałków i urządzeń nanoszących dyspersyjne kleje PVAc (303.0, 304.1, 322.1, 332.0 i inne). Czyszczenie po zakończeniu pracy lub przerwie produkcyjnej.",
      type: "Czyściwo",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 760.3 to płynne czyściwo do wałków i urządzeń nanoszących dyspersje PVAc – klejów takich jak 303.0, 304.1, 322.1, 323.0, 332.0. Umożliwia efektywne usunięcie pozostałości kleju dyspersyjnego z wałków nanoszących, łopat i zbiorników maszyn klejących przed wyschnięciem dyspersji.",
        applications: "Czyszczenie wałków i urządzeń nanoszących kleje PVAc (303.0, 304.1, 322.1, 323.0, 332.0) po zakończeniu pracy lub przerwie produkcyjnej.",
      },
    },
  },
  {
    categorySlug: "cleaners",
    product: {
      name: "KLEIBERIT® 761.6",
      code: "761.6",
      description:
        "Kleiberit 761.6 – czyściwo 2w1 do maszyn z termotopliwym PUR: łączy funkcję czyściwa płuczącego (761.7) i intensywnego (826.0). Niebieski granulat, 150–160°C, do zbiorników, pomp, węży i dysz szczelinowych. Op. 6×1,8 kg / 50 kg.",
      type: "Czyściwo",
      image: "/products/7616.jpg",
      details: {
        body: "Kleiberit 761.6 to dwufunkcyjne czyściwo do maszyn przetwarzających termotopliwy klej PUR – łączy w jednym produkcie funkcję czyściwa płuczącego (jak 761.7) i intensywnego (jak 826.0). Usuwa zarówno nieutwardzony, jak i utwardzony oraz zeszklały PUR ze zbiorników, pomp, węży transportowych i metalowych głowic nanoszących. Niebieski kolor ułatwia kontrolę przepłukiwania.",
        specs: [
          { label: "Forma / kolor", value: "Bryłki / NIEBIESKI" },
          { label: "Temp. pracy", value: "150–160 °C" },
          { label: "Gęstość", value: "ok. 0,98 g/cm³" },
          { label: "Opakowania", value: "6×1,8 kg · 18 kg · 50 kg" },
          { label: "Trwałość", value: "ok. 2 lata" },
          { label: "Konserwacja prewent.", value: "Zalecana kwartalnie" },
        ],
        applications: "Czyszczenie zbiorników, pomp, węży i dysz szczelinowych maszyn z klejami PUR HM.",
        note: "Gdy maszyna zawiera zeszklały/utwardzony PUR – 761.6 usuwa zanieczyszczenia, których samo przepłukiwanie (761.7) nie poradzi. Do regularnej konserwacji wystarczy 761.7.",
      },
    },
  },
  {
    categorySlug: "cleaners",
    product: {
      name: "KLEIBERIT® 761.7",
      code: "761.7",
      description:
        "Kleiberit 761.7 – czyściwo do przepłukiwania systemów z klejami PUR i EVA HM. Neutralizuje reakcję izocyjanianu, zapobiega zatykaniu dysz. Ta sama temperatura pracy co klej PUR. Op. 12×0,25 kg / 1,5 kg / 15 kg / 20 kg.",
      type: "Czyściwo",
      image: "/products/7617.jpg",
      details: {
        body: "Kleiberit 761.7 to czyściwo do regularnego płukania maszyn przetwarzających termotopliwe kleje PUR i EVA. Stosowane szczególnie podczas przerw w produkcji – neutralizuje reakcję izocyjanianu w pozostałościach PUR, zapobiegając utwardzaniu się kleju w dyszach, wężach i pompach. Temperatura pracy identyczna jak przetwarzanego kleju PUR.",
        specs: [
          { label: "Forma", value: "Bryłki" },
          { label: "Temp. pracy", value: "Jak przetwarzany PUR HM" },
          { label: "Opakowania", value: "12×0,25 kg · 4×1,5 kg · 15 kg · 20 kg" },
          { label: "Trwałość", value: "ok. 2 lata" },
        ],
        applications: "Regularne przepłukiwanie systemów z klejami PUR i EVA HM. Stosować przed planowaną przerwą produkcyjną.",
      },
    },
  },
  {
    categorySlug: "cleaners",
    product: {
      name: "KLEIBERIT® 761.8",
      code: "761.8",
      description:
        "Kleiberit 761.8 – specjalistyczny proszek do czyszczenia walców w maszynach do laminowania szerokich powierzchni przetwarzających PUR HM. Proszek roztopić w zbiorniku, uruchomić bieg wsteczny walca – resztki kleju usuwane efektywnie. Op. wiadro 20 kg.",
      type: "Czyściwo",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 761.8 to proszek w formie sypkiej, przeznaczony wyłącznie do czyszczenia walców nanoszących w maszynach do laminowania szerokich powierzchni przetwarzających PUR HM. Technika: proszek stopić w urządzeniu, a następnie uruchamiając bieg wsteczny walca usunąć resztki kleju.",
        specs: [
          { label: "Forma", value: "Proszek (unikalna!)" },
          { label: "Technika", value: "Roztopić → bieg wsteczny walca" },
          { label: "Opakowanie", value: "Wiadro 20 kg" },
        ],
        applications: "Czyszczenie walców nanoszących w maszynach do laminowania szerokich powierzchni z klejami PUR HM (706.x, 709.x, 711.x).",
      },
    },
  },
  {
    categorySlug: "cleaners",
    product: {
      name: "KLEIBERIT® 820.0",
      code: "820.0",
      description:
        "Kleiberit 820.0 – płynny rozcieńczalnik i czyściwo PUR bez toluenu. Usuwa nieutwardzone ciekłe kleje PUR, CR i STP z narzędzi i urządzeń. Do wszystkich klejów PUR 1K i 2K. Op. 4,5 / 22 kg.",
      type: "Czyściwo",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 820.0 to standardowe czyściwo i rozcieńczalnik do wszystkich ciekłych klejów PUR (1K i 2K) produkowanych przez Kleiberit. Stosowany do narzędzi, urządzeń i skóry przed całkowitym utwardzeniem kleju. Nie zawiera toluenu. Utwardzony klej PUR można usunąć wyłącznie mechanicznie – dlatego kluczowe jest zastosowanie 820.0 natychmiast po zakończeniu pracy.",
        specs: [
          { label: "Forma", value: "Płynny" },
          { label: "Toluen", value: "Nie zawiera" },
          { label: "Opakowania", value: "4,5 kg / 22 kg" },
          { label: "Temp. pracy", value: "Pokojowa" },
        ],
        applications: "Czyszczenie narzędzi i urządzeń po klejach 501.x, 508.5, 510.3.x, 541.6, 566, 568, 584, 601.1 i klejach kontaktowych CR (114.5, 152.x). Stosować przed utwardzeniem kleju.",
      },
    },
  },
  {
    categorySlug: "cleaners",
    product: {
      name: "KLEIBERIT® 821.0",
      code: "821.0",
      description:
        "Kleiberit 821.0 – płynny środek czyszczący do urządzeń nanoszących dyspersje PVAc i kleje PUR. Do wałków, dysz i zbiorników nanoszących – alternatywa lub uzupełnienie 820.0.",
      type: "Czyściwo",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 821.0 to płynny środek czyszczący do urządzeń nanoszących kleje dyspersyjne PVAc oraz ciekłe kleje PUR. Stosowany do czyszczenia wałków, dysz i zbiorników nanoszących. Uzupełnia 820.0 w zakresie dyspersji wodnych – do czyszczenia urządzeń po klejach PVAc.",
        applications: "Czyszczenie urządzeń nanoszących po klejach PVAc (303.0, 304.1, 322.1, 332.0) i ciekłych klejach PUR.",
      },
    },
  },
  {
    categorySlug: "cleaners",
    product: {
      name: "KLEIBERIT® 823.3",
      code: "823.3",
      description:
        "Kleiberit 823.3 – czyściwo PUR w aerozolu do pistoletów montażowych (pianki 535.0, 536.0, 585.5) i aplikatorów ciekłego PUR. Błyskawiczne czyszczenie zaciśniętych zaworów i dysz. Op. 12×500 ml.",
      type: "Czyściwo",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 823.3 to czyściwo PUR w aerozolu, dedykowane do pistoletów montażowych do pianek PUR (535.0, 536.0, 585.5) i aplikatorów ciekłego PUR. Aerozol umożliwia precyzyjne przepłukanie zaworów i dysz bez demontażu pistoletu. Stosować natychmiast po zakończeniu pracy – utwardzonej pianki nie można usunąć aerozolem.",
        specs: [
          { label: "Forma", value: "Aerozol w puszce" },
          { label: "Opakowanie", value: "12 × 500 ml" },
        ],
        applications: "Czyszczenie pistoletów do pianek PUR 535.0, 536.0, 585.5 i aplikatorów ciekłego PUR. Stosować natychmiast po zakończeniu pracy.",
      },
    },
  },
  {
    categorySlug: "cleaners",
    product: {
      name: "KLEIBERIT® 826.0",
      code: "826.0",
      description:
        "Kleiberit 826.0 – intensywny środek czyszczący (niebieski) do usuwania nawet utwardzonych i zeszklałych pozostałości PUR HM ze zbiorników, dysz i pomp. Temp. 150–160°C. Działa tam, gdzie 761.7 nie wystarcza.",
      type: "Czyściwo",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 826.0 to intensywny środek czyszczący (niebieski granulat) do usuwania nawet utwardzonych i zeszklałych pozostałości termotopliwego PUR ze zbiorników, pomp, węży i głowic nanoszących. Skuteczny tam, gdzie zwykłe przepłukiwanie (761.7) nie jest wystarczające. Jego funkcjonalność jest zintegrowana w produkcie 761.6 – jeśli masz 761.6, nie potrzebujesz kupować 826.0 osobno.",
        specs: [
          { label: "Forma / kolor", value: "Bryłki / NIEBIESKI" },
          { label: "Temp. pracy", value: "150–160 °C" },
          { label: "Relacja do 761.6", value: "826.0 jest składnikiem 761.6" },
        ],
        applications: "Intensywne czyszczenie zbiorników, pomp, węży i głowic nanoszących z utwardzonym lub zeszklałym PUR HM.",
      },
    },
  },
  {
    categorySlug: "cleaners",
    product: {
      name: "KLEIBERIT® 827.0",
      code: "827.0",
      description:
        "Kleiberit 827.0 – specjalistyczny środek czyszczący do zbiorników okleiniarek i maszyn przetwarzających termotopliwe kleje EVA (773.3, 788.x, 743.x). Granulki do stopienia i przepłukania zbiornika. Op. 4,5 kg.",
      type: "Czyściwo",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 827.0 to czyściwo w formie granulek, przeznaczone do czyszczenia zbiorników okleiniarek i maszyn przetwarzających termotopliwe kleje EVA. Granulki stopić w zbiorniku maszyny i przepłukać system przed planowaną przerwą produkcyjną lub wymianą kleju.",
        specs: [
          { label: "Forma", value: "Granulki (EVA)" },
          { label: "Temp. pracy", value: "Temp. pracy kleju EVA" },
          { label: "Opakowanie", value: "4,5 kg (kanister met.)" },
        ],
        applications: "Czyszczenie zbiorników okleiniarek i maszyn z klejami EVA (773.3, 788.3, 788.7, 743.6, 743.7). Stosować przed przerwą produkcyjną lub wymianą kleju.",
      },
    },
  },
  // ── Primery ──
  {
    categorySlug: "primer",
    product: {
      name: "KLEIBERIT® 831.0",
      code: "831.0",
      description:
        "Kleiberit 831.0 – solwentowy primer fluorescencyjny (UV) do opłaszczowywania profili PVC i aluminium klejami PUR HM. Zużycie 20–60 g/m², niepalny, mrozoodporny, trwałość 2 lata. Certyfikat RAL GZ 716. Op. 1 / 4,5 / 35 / 250 kg.",
      type: "Primer",
      badge: "RAL GZ 716",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 831.0 to solwentowy primer na bazie żywicy polikondensacyjnej, stosowany do przygotowania profili PVC i aluminium przed opłaszczowywaniem reaktywnymi klejami termotopliwymi PUR. Chlorowane węglowodory aktywują powierzchnię profilu, umożliwiając trwałe połączenie. Primer jest fluorescencyjny – widoczny pod lampą UV, co umożliwia kontrolę równomierności pokrycia.",
        specs: [
          { label: "Baza / rozpuszczalnik", value: "Żywica polikond. / węglowodory chlorowane" },
          { label: "Gęstość", value: "ok. 1,3 g/cm³" },
          { label: "Ciała stałe", value: "ok. 2,5%" },
          { label: "Zużycie (mokro)", value: "20–60 g/m²" },
          { label: "Fluorescencja UV", value: "Tak" },
          { label: "Palność", value: "Niepalny" },
          { label: "RAL GZ 716", value: "Certyfikowany" },
          { label: "Czyściwo", value: "Kleiberit 822.5" },
          { label: "Mrozoodporność", value: "Tak – nie jest mrozoczuły" },
          { label: "Trwałość", value: "ok. 2 lata (20°C)" },
        ],
        applications: "Przygotowanie profili PVC i aluminium przed opłaszczowywaniem klejami PUR HM.",
        note: "Urządzenia nanoszące: wolne od miedzi, mosiądzu, brązu, aluminium i ocynkowanej blachy. Opakowania: 12×1 kg · 4,5 kg · 35 kg · 250 kg.",
      },
    },
  },
  {
    categorySlug: "primer",
    product: {
      name: "KLEIBERIT® 831.4",
      code: "831.4",
      description:
        "Kleiberit 831.4 – specjalistyczny primer solwentowy wyłącznie do opłaszczowywania profili foliami akrylowymi (PMMA). Nanosić w cienkiej warstwie, całkowicie wysuszyć przed strefą klejenia. Kompatybilny z klejami 704.0, 704.3, 704.5.",
      type: "Primer",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 831.4 to solwentowy primer przeznaczony wyłącznie do przygotowania powierzchni profili przed okleinowaniem foliami akrylowymi (PMMA). Folie akrylowe mają inną chemię powierzchni niż folie PVC – wymagają dedykowanego primeru. Stosowanie 831.0 lub 842.0 zamiast 831.4 przy foliach PMMA skutkuje niedostateczną adhezją i ryzykiem odwarstwiania.",
        warning: "Zastosowanie wyłącznie do folii PMMA (akrylowych). Do folii PVC stosować 831.0 lub 842.0. Primer nanosić w cienkiej warstwie i całkowicie wysuszyć przed strefą klejenia – mokry primer pod klejem PUR dramatycznie obniża adhezję.",
        specs: [
          { label: "Typ folii", value: "Akrylowe (PMMA) – tylko!" },
          { label: "Ilość nanoszenia", value: "Cienka warstwa" },
          { label: "Suszenie", value: "Całkowicie suchy przed klejeniem" },
          { label: "Kleje kompatybilne", value: "704.0, 704.3, 704.5, 704.6" },
        ],
        applications: "Przygotowanie profili przed okleinowaniem foliami akrylowymi PMMA. Folie PVC → 831.0 lub 842.0. Folie akrylowe PMMA → 831.4 (jedyny właściwy wybór).",
      },
    },
  },
  {
    categorySlug: "primer",
    product: {
      name: "KLEIBERIT® 831.8",
      code: "831.8",
      description:
        "Kleiberit 831.8 – fluorescencyjny primer solwentowy do opłaszczowywania profili PVC okiennych i metalowych klejami PUR HM. Niższe zużycie niż 831.0 (10–15 g/m²), trwałość 6 miesięcy, czyściwo 821.0. Wrażliwy na mróz (min. +5°C). Op. 4,5 / 35 / 250 kg.",
      type: "Primer",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 831.8 to solwentowy primer fluorescencyjny na bazie żywicy polikondensacyjnej do opłaszczowywania profili PVC okiennych i profili metalowych klejami PUR HM. Ma identyczną bazę chemiczną co 831.0 (ta sama gęstość 1,3 g/cm³, te same ciała stałe 2,5%), ale niższe zalecane zużycie (10–15 g/m² zamiast 20–60 g/m²) oraz krótszą trwałość (6 miesięcy). Czyściwo: Kleiberit 821.0.",
        keyFeature: "831.8 vs 831.0 – kluczowe różnice: Zużycie 10–15 g/m² (831.8) vs 20–60 g/m² (831.0) · Trwałość 6 mies. vs 2 lata · Czyściwo 821.0 vs 822.5 · Wrażliwy na mróz vs mrozoodporny · Zawiera chlorek metylenu (EU oznakowanie).",
        specs: [
          { label: "Baza / rozpuszczalnik", value: "Żywica polikond. / węglowodory chlorowane" },
          { label: "Zawiera", value: "Chlorek metylenu (DCM)" },
          { label: "Gęstość", value: "ok. 1,3 g/cm³" },
          { label: "Ciała stałe", value: "ok. 2,5%" },
          { label: "Zużycie", value: "10–15 g/m²" },
          { label: "Fluorescencja UV", value: "Tak" },
          { label: "Czyściwo", value: "Kleiberit 821.0" },
          { label: "Mrozoodporność", value: "Min. +5°C!" },
          { label: "Trwałość", value: "ok. 6 miesięcy" },
          { label: "Oznakowanie EU", value: "Wymagane" },
          { label: "Opakowania", value: "4,5 / 35 / 250 kg" },
        ],
        applications: "Opłaszczowywanie profili PVC okiennych i profili metalowych klejami PUR HM.",
      },
    },
  },
  {
    categorySlug: "primer",
    product: {
      name: "KLEIBERIT® 842.0",
      code: "842.0",
      description:
        "Kleiberit 842.0 – primer Low VOC na bazie polimeru do opłaszczowywania profili PVC klejami PUR HM. Bez chlorowanych węglowodorów, fluorescencyjny (UV), zużycie 5–10 g/m², profil podgrzać do 35–40°C. Certyfikat RAL GZ 716, trwałość 12 mies. Op. 4,5 / 25 kg.",
      type: "Primer",
      badge: "RAL GZ 716",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 842.0 to nowoczesny primer na bazie polimeru wodnego z obniżoną emisją LZO (Low VOC), przeznaczony do przygotowania profili PVC przed opłaszczowywaniem reaktywnymi klejami PUR HM. W przeciwieństwie do solwentowych primerów serii 831.x, nie zawiera chlorowanych węglowodorów. Fluorescencyjny – umożliwia kontrolę pokrycia pod UV. Certyfikat RAL GZ 716. Wymagane podgrzanie profilu do 35–40°C dla właściwego suszenia.",
        keyFeature: "Low VOC – zdrowsze środowisko pracy: brak chlorowanych węglowodorów. Idealny dla zakładów z restrykcyjnymi wymaganiami BHP dotyczącymi LZO lub certyfikacją środowiskową.",
        specs: [
          { label: "Baza", value: "Polimer (Low VOC)" },
          { label: "Gęstość (20°C)", value: "ok. 1,05 g/cm³" },
          { label: "Barwa", value: "Klarowny / lekko żółtawy" },
          { label: "Zużycie", value: "5–10 g/m²" },
          { label: "Podgrzanie profilu", value: "35–40°C przed nanos." },
          { label: "Fluorescencja UV", value: "Tak" },
          { label: "RAL GZ 716", value: "Certyfikowany" },
          { label: "Mrozoodporność", value: "Min. +5°C!" },
          { label: "Trwałość", value: "ok. 12 miesięcy" },
          { label: "Opakowania", value: "4,5 kg / 25 kg" },
        ],
        applications: "Przygotowanie profili PVC przed opłaszczowywaniem PUR HM. Wybrać gdy zakład musi spełnić restrykcyjne normy LZO lub certyfikację środowiskową.",
        note: "Urządzenia nanoszące: wolne od mosiądzu, miedzi, PVC, PU, PS i Vitonu.",
      },
    },
  },
  // ── PUR termotopliwe (standalone) ──
  // okleinowanie obrzeży PUR
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 707.9.50 ME",
      code: "707.9.50",
      description:
        "Kleiberit 707.9.50 ME – reaktywny klej PUR z technologią ME (MDI <0,1%) do okleiniarek PUR, wariant kość słoniowa. Duroplastyczna spoina odporna na wilgoć i temperaturę. Bez obowiązkowego oznakowania EU. Dostępny również w kolorze białym (707.9.51) i transparentnym (707.9.58).",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "Mikroemisyjny",
      details: {
        body: "Kleiberit 707.9.50 ME to reaktywny klej termotopliwy PUR z technologią Micro-Emission (MDI <0,1%) do okleinowania obrzeży na okleinarkach PUR. W odróżnieniu od klejów EVA, reaktywny PUR sieciuje chemicznie pod wpływem wilgoci, tworząc trwałą, duroplastyczną spoinę odporną na wysoką temperaturę, wilgoć i środki chemiczne. Wariant kość słoniowa (kod 50) przeznaczony do naturalnych dekorów drewna, fornirów i ciepłych kolorów. Dzięki technologii ME nie wymaga obowiązkowego oznakowania zagrożenia wg UE. Produkt dostępny jest również w wariancie białym (707.9.51 — do białych i jasnych frontów) oraz transparentnym (707.9.58 — uniwersalny do wszystkich kolorów obrzeży).",
        keyFeature: "Reaktywny PUR vs EVA: spoina duroplastyczna nie odkształca się przy podgrzaniu, wyższa odporność na wilgoć i środki myjące. MDI <0,1% — bez obowiązkowego oznakowania EU.",
        specs: [
          { label: "Baza", value: "Reaktywny PUR (ME)" },
          { label: "MDI", value: "<0,1% (Micro-Emission)" },
          { label: "Kolor", value: "Kość słoniowa (.50)" },
          { label: "Temperatura pracy", value: "120–160°C" },
          { label: "Oznakowanie EU", value: "Niewymagane (ME)" },
          { label: "Czyściwo", value: "Kleiberit 761.7" },
        ],
        applications: "Okleinowanie obrzeży PVC, ABS, HPL, CPL i fornirowych na okleinarkach PUR · naturalne dekory drewna, forniry, ciepłe kolory.",
        note: "Seria 707.9 ME dostępna w 3 kolorach: 707.9.50 kość słoniowa · 707.9.51 biały · 707.9.58 transparentny. Dobór koloru spoiny do okleinowanego materiału eliminuje widoczność fugi.",
      },
    },
  },
  // profile wrapping zewnętrzny
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 704.0 Supramelt PUR",
      code: "704.0",
      description:
        "Kleiberit 704.0 Supramelt – reaktywny klej PUR do opłaszczowywania profili PVC i aluminium do zastosowań zewnętrznych. Odporność –40°C do +150°C, certyfikaty RAL GZ 716, IMO, BRL 2339. Temp. pracy 120–150°C.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "RAL GZ 716/1",
      details: {
        body: "Kleiberit 704.0 Supramelt to reaktywny klej termotopliwy PUR do opłaszczowywania profili PVC i aluminium w zastosowaniach zewnętrznych — okna, drzwi, fasady. Spoina zachowuje właściwości w zakresie –40°C do +150°C. Posiada certyfikat RAL GZ 716 (Gütegemeinschaft Kunststoff-Fensterprofilsysteme), certyfikat IMO FTP do zastosowań stoczniowych oraz BRL 2339 do parkietu 2-warstwowego na rynek holenderski.",
        keyFeature: "Certyfikat RAL GZ 716 + IMO + BRL 2339 — komplet dopuszczeń wymaganych przy produkcji okien, drzwi zewnętrznych i zastosowaniach stoczniowych. Odporność –40°C do +150°C.",
        warning: "Produkt standardowy (nie ME) — zawiera MDI i wymaga obowiązkowego oznakowania wg UE. Wymagana wentylacja stanowiska pracy.",
        specs: [
          { label: "Baza", value: "Reaktywny PUR (standard)" },
          { label: "Certyfikaty", value: "RAL GZ 716, IMO, BRL 2339" },
          { label: "Temperatura pracy", value: "120–150°C" },
          { label: "Odporność termiczna", value: "–40°C do +150°C" },
          { label: "Oznakowanie EU", value: "Wymagane" },
          { label: "Primer PVC", value: "Kleiberit 831.0 lub 842.0" },
          { label: "Primer akryl (PMMA)", value: "Kleiberit 831.4" },
          { label: "Czyściwo", value: "Kleiberit 761.7" },
        ],
        applications: "Opłaszczowywanie profili PVC i aluminium foliami PVC, foliami akrylowymi, papierami dekoracyjnymi i fornirami · okna, drzwi zewnętrzne, fasady, parapety zewnętrzne · przemysł stoczniowy (IMO) · parkiet 2-warstwowy (BRL 2339).",
      },
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 704.5",
      code: "704.5",
      description:
        "Kleiberit 704.5 – reaktywny PUR do opłaszczowywania profili zewnętrznych PVC i aluminium. Atest RAL GZ 716, odporność –40°C do +150°C, lepkość 33 000 mPa·s, posuw 5–40 m/min. Op. 0,3–200 kg.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "RAL GZ 716",
      details: {
        body: "Kleiberit 704.5 to reaktywny klej termotopliwy PUR do okleinowania profili PVC, wstępnie obrobionych profili aluminiowych i profili z materiałów drewnopochodnych foliami PVC, foliami akrylowymi, papierami dekoracyjnymi i fornirami w zastosowaniach zewnętrznych. Posiada atest RAL GZ 716. Cechuje się bardzo wysoką wytrzymałością początkową i bardzo szybkim wiązaniem. Niższa lepkość niż 704.0 Supramelt zapewnia lepszą aplikowalność przy systemach cienkodyszowych.",
        keyFeature: "Atest RAL GZ 716 · lepkość 33 000 mPa·s (120°C) · czas otwarty <5 s · posuw 5–40 m/min. Bardzo wysoka wytrzymałość początkowa przy szybkich liniach produkcyjnych.",
        warning: "Produkt standardowy (nie ME) — zawiera MDI i wymaga obowiązkowego oznakowania wg UE. Wymagana wentylacja stanowiska pracy.",
        specs: [
          { label: "Baza", value: "Reaktywny PUR (standard)" },
          { label: "Certyfikat", value: "RAL GZ 716" },
          { label: "Temperatura pracy", value: "120–140°C" },
          { label: "Lepkość 120°C", value: "33 000 ±4 000 mPa·s" },
          { label: "Lepkość 140°C", value: "17 000 ±3 000 mPa·s" },
          { label: "Czas otwarty", value: "<5 s" },
          { label: "Odporność termiczna", value: "–40°C do +150°C" },
          { label: "Prędkość posuwu", value: "5–40 m/min" },
          { label: "Gęstość", value: "ok. 1,1 g/cm³" },
          { label: "Oznakowanie EU", value: "Wymagane" },
          { label: "Opakowania", value: "12×0,3 kg · 6×2 kg · 20 kg · 200 kg" },
          { label: "Czyściwo", value: "Kleiberit 761.7" },
        ],
        applications: "Opłaszczowywanie profili PVC i aluminium foliami PVC, akrylowymi, papierami dekoracyjnymi i fornirami · okna, drzwi zewnętrzne, fasady, parapety zewnętrzne.",
        note: "Nanoszenie: folie PVC ogólne 30–50 g/m² · folie PVC okienne 45–60 g/m² · papiery dekoracyjne 30–70 g/m² · forniry 80–100 g/m². Primer do folii PVC: 831.0 lub 842.0. Primer do folii akrylowych (PMMA): wyłącznie 831.4.",
      },
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 704.3.50",
      code: "704.3.50",
      description:
        "Kleiberit 704.3.50 – reaktywny klej PUR do okleinowania profili okiennych PVC foliami PVC w kolorze kość słoniowej. Certyfikat RAL GZ 716, odporność –40°C do +120°C, posuw 5–20 m/min. Dedykowany do systemów profilowych okna białe/kość słoniowa.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "RAL GZ 716",
      details: {
        body: "Kleiberit 704.3.50 to reaktywny klej termotopliwy PUR przeznaczony do okleinowania profili okiennych PVC foliami PVC w kolorze kość słoniowej (kod .50). Produkt z serii 704 przeznaczonej do zewnętrznych zastosowań okiennych — spoina wytrzymuje warunki atmosferyczne, różnice temperatur i promieniowanie UV. Klej posiada certyfikat RAL GZ 716 potwierdzający przydatność do systemów okiennych PVC. Stosowany do profili okiennych białych i kość słoniowej na opłaszczowarkach profilowych.",
        keyFeature: "Certyfikat RAL GZ 716 — wymagany przez większość systemodawców okiennych przy homologacji technologii klejenia folii na profilach PVC.",
        specs: [
          { label: "Baza", value: "Reaktywny PUR" },
          { label: "Kolor kleju", value: "Kość słoniowa (.50)" },
          { label: "Temperatura pracy", value: "130–160°C" },
          { label: "Odporność termiczna", value: "do +120°C" },
          { label: "Mrozoodporność", value: "do –40°C" },
          { label: "Prędkość posuwu", value: "5–20 m/min" },
          { label: "Certyfikat", value: "RAL GZ 716" },
          { label: "Czyściwo", value: "Kleiberit 761.7" },
        ],
        applications: "Okleinowanie profili okiennych PVC foliami PVC · kolory białe i kość słoniowa · opłaszczowarki profilowe zewnętrzne.",
        note: "Seria 704.3: 704.3.50 kość słoniowa · 704.3.57 szary/antracyt. Dobór koloru kleju do folii eliminuje widoczność spoiny na profilu okiennym.",
      },
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 704.3.57",
      code: "704.3.57",
      description:
        "Kleiberit 704.3.57 – reaktywny klej PUR do okleinowania profili okiennych PVC foliami PVC w kolorze szary/antracyt. Certyfikat RAL GZ 716, odporność –40°C do +120°C, posuw 5–20 m/min. Dedykowany do ciemnych systemów profilowych okiennych.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "RAL GZ 716",
      details: {
        body: "Kleiberit 704.3.57 to reaktywny klej termotopliwy PUR przeznaczony do okleinowania profili okiennych PVC foliami PVC w kolorze szary/antracyt (kod .57). Produkt z serii 704 przeznaczonej do zewnętrznych zastosowań okiennych. Ciemny odcień kleju sprawia, że spoina jest niewidoczna przy szarych, antracytowych i ciemnobrązowych foliach okiennych. Klej posiada certyfikat RAL GZ 716 potwierdzający przydatność do systemów okiennych PVC.",
        keyFeature: "Ciemny pigment (.57) eliminuje widoczność spoiny przy szarych i antracytowych foliach — kluczowe przy nowoczesnych oknach w ciemnych kolorach.",
        specs: [
          { label: "Baza", value: "Reaktywny PUR" },
          { label: "Kolor kleju", value: "Szary/antracyt (.57)" },
          { label: "Temperatura pracy", value: "130–160°C" },
          { label: "Odporność termiczna", value: "do +120°C" },
          { label: "Mrozoodporność", value: "do –40°C" },
          { label: "Prędkość posuwu", value: "5–20 m/min" },
          { label: "Certyfikat", value: "RAL GZ 716" },
          { label: "Czyściwo", value: "Kleiberit 761.7" },
        ],
        applications: "Okleinowanie profili okiennych PVC foliami PVC · kolory szare, antracyt, ciemnobrązowe · opłaszczowarki profilowe zewnętrzne.",
        note: "Seria 704.3: 704.3.50 kość słoniowa · 704.3.57 szary/antracyt. Dobór koloru kleju do folii eliminuje widoczność spoiny na profilu okiennym.",
      },
    },
  },
  // profile wrapping wewnętrzny
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 702.5.50 ME",
      code: "702.5.50",
      description:
        "Kleiberit 702.5.50 ME – mikroemisyjny klej PUR do wrapping profili wewnętrznych (parapety, ościeżnice, listwy). MDI <0,1%, bez obowiązkowego oznakowania EU. Odporność do +140°C i –40°C. Posuw 20–50 m/min.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "Mikroemisyjny",
      details: {
        body: "Kleiberit 702.5.50 ME to reaktywny klej termotopliwy PUR z technologią Micro-Emission (MDI <0,1%) do okleinowania profili z materiałów drewnopochodnych i PVC foliami PVC oraz papierami dekoracyjnymi w zastosowaniach wewnętrznych. Dzięki technologii ME nie wymaga obowiązkowego oznakowania zagrożenia wg UE. Cechuje się wyjątkowo wysoką wytrzymałością początkową oraz wyraźną kleistością. Wyższa lepkość niż 702.8.49 (60 000 vs 33 000 mPa·s) oznacza grubszy film klejowy — lepszy przy fornirach i papierach dekoracyjnych.",
        keyFeature: "MDI <0,1% — bez obowiązkowego oznakowania EU. Bezpieczniejsze stanowisko pracy niż standardowy 702.8.49 przy zachowaniu tych samych właściwości użytkowych.",
        specs: [
          { label: "Baza", value: "Reaktywny PUR (ME, MDI <0,1%)" },
          { label: "Temperatura pracy", value: "130–160°C" },
          { label: "Lepkość 120°C", value: "60 000 ±15 000 mPa·s" },
          { label: "Lepkość 140°C", value: "35 000 ±10 000 mPa·s" },
          { label: "Czas otwarty", value: "<5 s" },
          { label: "Odporność termiczna", value: "powyżej +140°C" },
          { label: "Mrozoodporność", value: "do –40°C" },
          { label: "Prędkość posuwu", value: "20–50 m/min" },
          { label: "Nanoszenie (folie PVC)", value: "40–60 g/m²" },
          { label: "Nanoszenie (papiery dek.)", value: "50–70 g/m²" },
          { label: "Gęstość", value: "ok. 1,04 g/cm³" },
          { label: "Oznakowanie EU", value: "Niewymagane (ME)" },
          { label: "Opakowania", value: "20 kg · 200 kg" },
          { label: "Czyściwo", value: "Kleiberit 761.7" },
        ],
        applications: "Okleinowanie profili i listw z MDF/wiórowej folią PVC i papierami dekoracyjnymi — parapety wewnętrzne, ościeżnice, listwy przypodłogowe, fronty szaf, elementy meblowe.",
        note: "Vs 702.8.49: wyższa lepkość (60 000 vs 33 000 mPa·s) i wyższa temperatura pracy (do 160°C vs 150°C) — lepszy przy papierach dekoracyjnych i fornirach. 702.8.49 ma niższą lepkość — lepszą aplikowalność przy cienkodyszowych systemach nanoszenia, ale wymaga oznakowania EU.",
      },
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 702.8.49",
      code: "702.8.49",
      description:
        "Kleiberit 702.8.49 – reaktywny klej PUR do wrapping profili wewnętrznych foliami PVC, CPL i papierami dekoracyjnymi, kość słoniowa. Odporność do +150°C i –30°C, posuw 20–50 m/min. Op. 20 / 190 kg.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 702.8.49 to reaktywny klej termotopliwy PUR w wariancie kość słoniowa, przeznaczony do okleinowania profili z materiałów drewnopochodnych, PVC i aluminium foliami PVC i papierami dekoracyjnymi (w tym CPL) w zastosowaniach wewnętrznych. Niższa lepkość niż 702.5.50 ME (33 000 vs 60 000 mPa·s) zapewnia lepszą aplikowalność przy cienkodyszowych systemach nanoszenia i szybkich liniach produkcyjnych.",
        keyFeature: "Niższa lepkość (33 000 mPa·s) vs ME — lepsza aplikowalność przy cienkodyszowych systemach nanoszenia i szybkich liniach. Wybór gdy nie ma wymogu środowiska bez oznakowania EU.",
        warning: "Produkt standardowy (nie ME) — zawiera MDI i wymaga obowiązkowego oznakowania wg UE. Wymagana wentylacja stanowiska pracy. Gdy wymagane środowisko bez oznakowania EU — stosować 702.5.50 ME.",
        specs: [
          { label: "Baza", value: "Reaktywny PUR (standard)" },
          { label: "Kolor", value: "Kość słoniowa (.49)" },
          { label: "Temperatura pracy", value: "130–150°C" },
          { label: "Lepkość 120°C", value: "33 000 ±5 000 mPa·s" },
          { label: "Lepkość 140°C", value: "18 000 ±4 000 mPa·s" },
          { label: "Czas otwarty", value: "<10 s" },
          { label: "Odporność termiczna", value: "powyżej +150°C" },
          { label: "Mrozoodporność", value: "do –30°C" },
          { label: "Prędkość posuwu", value: "20–50 m/min" },
          { label: "Nanoszenie (folie PVC)", value: "40–60 g/m²" },
          { label: "Oznakowanie EU", value: "Wymagane" },
          { label: "Opakowania", value: "20 kg · 190 kg" },
          { label: "Czyściwo", value: "Kleiberit 761.7" },
        ],
        applications: "Okleinowanie profili i listw z MDF/wiórowej folią PVC, CPL i papierami dekoracyjnymi — parapety wewnętrzne, ościeżnice, listwy przypodłogowe, fronty szaf.",
      },
    },
  },
  // produkcja parkietu 2-warstwowego
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 705.7.00",
      code: "705.7.00",
      description:
        "Kleiberit 705.7.00 – reaktywny klej PUR do produkcji parkietu 2-warstwowego (engineered flooring). Łączy warstwę ścieralną z drewna litego z podkładem HDF/LVL/sklejką. Certyfikat BRL 2339. Odporność na wilgoć, temp. pracy 120–150°C.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 705.7.00 to reaktywny klej termotopliwy PUR przeznaczony do przemysłowej produkcji parkietu 2-warstwowego (engineered wood flooring). Klej łączy warstwę ścieralną z drewna litego (dąb, jesion, orzech) z podkładem z HDF, LVL lub sklejki na liniach produkcyjnych z prasą membranową lub walcową. Reaktywna spoina PUR zapewnia trwałe połączenie odporne na zmienne warunki wilgotnościowe i temperatury typowe dla zastosowań podłogowych. Posiada certyfikat BRL 2339 wymagany na rynku niderlandzkim. Klej charakteryzuje się wysoką wytrzymałością początkową umożliwiającą szybkie przejście na kolejny etap produkcji.",
        keyFeature: "Certyfikat BRL 2339 — wymagany przy sprzedaży parkietu na rynki Beneluksu. Reaktywna spoina PUR zapewnia stabilność wymiarową gotowego elementu w zmiennych warunkach wilgotnościowych.",
        specs: [
          { label: "Baza", value: "Reaktywny PUR" },
          { label: "Zastosowanie", value: "Parkiet 2-warstwowy (engineered)" },
          { label: "Temperatura pracy", value: "120–150°C" },
          { label: "Podkład", value: "HDF / LVL / sklejka" },
          { label: "Warstwa ścieralna", value: "Drewno lite" },
          { label: "Certyfikat", value: "BRL 2339" },
          { label: "Czyściwo", value: "Kleiberit 761.7" },
        ],
        applications: "Produkcja parkietu 2-warstwowego (engineered flooring) · klejenie warstwy ścieralnej do podkładu HDF/LVL/sklejka · linie produkcyjne z prasą membranową lub walcową.",
        note: "Do przemysłowej produkcji parkietu. Nie stosować do układania parkietu na budowie — w tym zastosowaniu używać elastycznych klejów STP.",
      },
    },
  },
  // flat lamination
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 706.2.50 ME",
      code: "706.2.50",
      description:
        "Kleiberit 706.2.50 ME – mikroemisyjny klej PUR do kaszerowania powierzchni płyt foliami PVC, ABS, PET i PMMA. MDI <0,1%, bez obowiązkowego oznakowania EU. Czas otwarty <4 min. Do maszyn do laminowania szerokich powierzchni.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "Mikroemisyjny",
      details: {
        body: "Kleiberit 706.2.50 ME to reaktywny klej termotopliwy PUR z technologią ME (MDI <0,1%), przeznaczony do kaszerowania powierzchni płyt meblowych foliami z tworzyw sztucznych — PVC, ABS, PET i PMMA. Nie wymaga obowiązkowego oznakowania EU. Stosowany na maszynach do laminowania szerokich powierzchni z nanoszeniem walcowym lub szczelinowym. Czas otwarty <4 min pozwala na sprawne zamknięcie prasy przy standardowych wymiarach płyt.",
        keyFeature: "MDI <0,1% — bez obowiązkowego oznakowania EU. Standardowy wybór do laminowania szerokich powierzchni foliami PVC/ABS/PET/PMMA przy zachowaniu bezpiecznego środowiska pracy.",
        specs: [
          { label: "Baza", value: "Reaktywny PUR (ME, MDI <0,1%)" },
          { label: "Temperatura pracy", value: "120–140°C" },
          { label: "Czas otwarty", value: "<4 min" },
          { label: "Folie kompatybilne", value: "PVC, ABS, PET, PMMA" },
          { label: "Oznakowanie EU", value: "Niewymagane (ME)" },
          { label: "Czyściwo (walce)", value: "Kleiberit 761.7 / 761.8" },
        ],
        applications: "Kaszerowanie frontów meblowych foliami PVC, ABS, PET i PMMA · płyty boczne i tylne mebli · na maszynach do laminowania szerokich powierzchni z nanoszeniem walcowym lub szczelinowym.",
        note: "Seria do laminowania szerokich powierzchni ME: 706.2.50 ME — folie PVC/ABS/PET/PMMA, czas otwarty <4 min · 709.3.50 ME — folie high gloss/super-mat, ultra-gładka spoina · 711.0.02 ME — folie transparentne, maks. 130°C, UV-stabilny.",
      },
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 709.3.50 ME",
      code: "709.3.50",
      description:
        "Kleiberit 709.3.50 ME – mikroemisyjny klej PUR do kaszerowania frontów foliami wysokopołyskowymi. Lepkość 8 000 mPa·s (120°C), ultra-gładka spoina, czas otwarty <3 min. MDI <0,1%, bez oznakowania EU.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "Mikroemisyjny",
      details: {
        body: "Kleiberit 709.3.50 ME to reaktywny klej termotopliwy PUR z technologią ME, specjalnie zaprojektowany do kaszerowania powierzchni foliami wysokopołyskowymi (high gloss) i super-mat. Jego kluczowa cecha to ekstremalnie niska lepkość (8 000 mPa·s przy 120°C), która zapewnia perfekcyjnie gładkie przeniesienie spoiny — każda nierówność w filmie klejowym jest widoczna przez cienką, błyszczącą folię. Niska lepkość = minimalna grubość filmu = brak widocznych nierówności przez folię lustrzaną.",
        keyFeature: "Lepkość 8 000 mPa·s (120°C) — jedyna techniczna droga do uzyskania efektu Piano Black czy folii lustrzanej bez pęcherzy i wgłębień widocznych przez folię.",
        specs: [
          { label: "Baza", value: "Reaktywny PUR (ME, MDI <0,1%)" },
          { label: "Temperatura pracy", value: "120–140°C" },
          { label: "Lepkość 120°C", value: "8 000 mPa·s" },
          { label: "Lepkość 140°C", value: "4 000 mPa·s" },
          { label: "Czas otwarty", value: "<3 min" },
          { label: "Oznakowanie EU", value: "Niewymagane (ME)" },
          { label: "Czyściwo (walce)", value: "Kleiberit 761.7 / 761.8" },
        ],
        applications: "Fronty meblowe high gloss i super-mat · płyty boczne i tylne mebli · półki — wszędzie tam, gdzie wymagana jest lustrzana jakość powierzchni (Piano Black, efekt chromu).",
      },
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 711.0",
      code: "711.0",
      description:
        "Kleiberit 711.0 – reaktywny klej PUR do kaszerowania płyt meblowych foliami z tworzyw sztucznych ABS, PET i materiałami trudnymi do zwilżenia. Wysoka wytrzymałość, odporność na wilgoć i ciepło. Do maszyn do laminowania szerokich powierzchni.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 711.0 to reaktywny klej termotopliwy PUR przeznaczony do kaszerowania powierzchni płyt meblowych foliami z tworzyw sztucznych — ABS, PET i innymi materiałami trudnymi do zwilżenia. Stosowany na maszynach do laminowania szerokich powierzchni. Reaktywna spoina PUR zapewnia wysoką wytrzymałość mechaniczną, odporność na wilgoć i ciepło.",
        specs: [
          { label: "Baza", value: "Reaktywny PUR" },
          { label: "Zastosowanie", value: "Flat lamination" },
          { label: "Folie kompatybilne", value: "ABS, PET i in." },
          { label: "Czyściwo (walce)", value: "Kleiberit 761.8" },
        ],
        applications: "Kaszerowanie frontów i płyt meblowych foliami ABS, PET · na maszynach do laminowania szerokich powierzchni.",
        note: "Wariant z funkcją ME i stabilnością UV do folii transparentnych: 711.0.02 ME (maks. 130°C, wymaga oznakowania EU mimo ME).",
      },
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 711.0.02 ME",
      code: "711.0.02",
      description:
        "Kleiberit 711.0.02 ME – reaktywny klej PUR do kaszerowania powierzchni transparentnymi foliami (PET, akryl, PP). Temp. pracy 110–130°C (maks.!), stabilność UV, MDI <0,1%. Lepkość 8 000 mPa·s. Op. 20 / 50 kg.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "Mikroemisyjny",
      details: {
        body: "Kleiberit 711.0.02 ME to reaktywny klej termotopliwy PUR z technologią ME (MDI <0,1%), stworzony specjalnie do kaszerowania powierzchni transparentnymi foliami z tworzyw sztucznych (PET, akryl, PP) na maszynach do laminowania szerokich powierzchni. Wyróżnia się wyjątkowo niską temperaturą pracy (110–130°C) oraz stabilnością UV — spoina nie żółknie pod wpływem światła, co jest kluczowe przy transparentnych foliach widocznych przez cały czas użytkowania produktu.",
        keyFeature: "UV-stabilna spoina — nie żółknie pod transparentną folią. Najniższa temperatura pracy w klasie (110–130°C). Jedyny wybór do folii transparentnych PET/akryl/PP.",
        warning: "Temperatura stopionego kleju w urządzeniu nie może przekraczać 130°C! Przekroczenie limitu powoduje degradację kleju. Wskazania termostatu mogą być błędne — zawsze weryfikować termometrem kontaktowym. UWAGA: mimo technologii ME (MDI <0,1%) produkt nadal wymaga obowiązkowego oznakowania wg UE — wyjątek wśród produktów ME!",
        specs: [
          { label: "Baza", value: "Reaktywny PUR (ME, MDI <0,1%)" },
          { label: "Temperatura pracy", value: "110–130°C (maks. 130°C!)" },
          { label: "Lepkość 120°C", value: "8 000 ±1 500 mPa·s" },
          { label: "Lepkość 140°C", value: "4 000 ±1 000 mPa·s" },
          { label: "Czas otwarty", value: "<1 min (100 g/m², 120°C)" },
          { label: "Gęstość", value: "ok. 1,1 g/cm³" },
          { label: "Stabilność UV", value: "Tak — spoina nie żółknie" },
          { label: "Oznakowanie EU", value: "Wymagane (mimo ME!)" },
          { label: "Opakowania", value: "Gilza 20 kg · beczka 50 kg" },
          { label: "Czyściwo walców", value: "Kleiberit 761.8 (proszek!)" },
        ],
        applications: "Kaszerowanie powierzchni transparentnymi foliami PET, akryl, PP · fronty meblowe z efektem przezroczystości · wszędzie gdzie wymagana UV-stabilna, nieżółknąca spoina.",
        note: "Czyściwo walców: Kleiberit 761.8 (proszek) — roztopić i wrzucić bieg wsteczny walca. Urządzenia: zbiorniki tankowe z zabezpieczeniem azotowym, stapialniki na opakowania 200 l, urządzenia walcowe.",
      },
    },
  },
  // ── EVA termotopliwe (standalone) ──
  {
    categorySlug: "eva-hot-melts",
    product: {
      name: "KLEIBERIT® 774.4",
      code: "774.4",
      description:
        "Kleiberit 774.4 – klej termotopliwy EVA do ręcznych i półautomatycznych okleiniarek obrzeży. Dobra przyczepność do obrzeży PVC, ABS i melaninowych. Temperatura pracy 150–180°C.",
      type: "Termotopliwe EVA",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 774.4 to klej termotopliwy na bazie kopolimerów EVA, przeznaczony do ręcznego okleinowania obrzeży na okleinarkach ręcznych i półautomatycznych. Zapewnia dobrą przyczepność do standardowych obrzeży PVC, ABS i melaninowych przy niższej temperaturze roboczej, co sprawia że nadaje się do maszyn bez zaawansowanego systemu kontroli temperatury. Gotowy do użycia – wsypać do zasobnika i topić. Bez obowiązkowego oznakowania EU.",
        specs: [
          { label: "Baza", value: "Kopolimery EVA" },
          { label: "Temperatura pracy", value: "150–180°C" },
          { label: "Metoda nanoszenia", value: "Wałek" },
          { label: "Wilgotność drewna", value: "8–10%" },
          { label: "Oznakowanie EU", value: "Niewymagane" },
        ],
        applications: "Okleinowanie obrzeży PVC, ABS i melaninowych na ręcznych i półautomatycznych okleinarkach · materiały drewnopochodne (MDF, płyta wiórowa) · produkcja małoseryjna i rzemieślnicza.",
      },
    },
  },
  {
    categorySlug: "eva-hot-melts",
    product: {
      name: "KLEIBERIT® 788.3 ME",
      code: "788.3",
      description:
        "Kleiberit 788.3 ME – niskotopliwy klej EVA z technologią Micro-Emission do ręcznych okleiniarek. Temperatura pracy od 130°C, 3 kolory: biały, kość słoniowa, transparentny. Op. 1 / 3 / 15 kg.",
      type: "Termotopliwe EVA",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 788.3 ME to niskotopliwy klej termotopliwy EVA z technologią Micro-Emission, przeznaczony do ręcznych okleiniarek pracujących w niższych temperaturach. Temperatura pracy od 130°C oznacza szybsze osiągnięcie gotowości roboczej i niższe zużycie energii w porównaniu do standardowych klejów EVA. Dostępny w 3 kolorach pozwala dopasować barwę spoiny do okleinowanego materiału.",
        keyFeature: "Temperatura pracy od 130°C — szybsze nagrzewanie i niższe zużycie energii niż standardowe kleje EVA. Dostępny w 3 kolorach.",
        specs: [
          { label: "Baza", value: "Kopolimery EVA" },
          { label: "Technologia", value: "ME (Micro-Emission)" },
          { label: "Temperatura pracy", value: "130–160°C" },
          { label: "Kolory", value: "Biały / kość słoniowa / transparentny" },
          { label: "Metoda nanoszenia", value: "Wałek (okleiniarki ręczne)" },
          { label: "Opakowania", value: "1 kg · 3 kg · 15 kg" },
        ],
        applications: "Ręczne okleiniarki pracujące w niższych temperaturach · obrzeża PVC, ABS i melaninowe · zastosowania wymagające niewidocznej fugi (kolor transparentny).",
        note: "Biały – do białych i jasnych obrzeży · Kość słoniowa – do naturalnych i ciepłych dekorów · Transparentny – do wszystkich kolorów gdy fuga ma być niewidoczna.",
      },
    },
  },
  {
    categorySlug: "eva-hot-melts",
    product: {
      name: "KLEIBERIT® 788.7",
      code: "788.7",
      description:
        "Kleiberit 788.7 – klej termotopliwy EVA do ręcznych i wolnobieżnych okleiniarek. Obrzeża ABS, PVC, poliester, papier, żywica melaminowa i fornir. Temperatura pracy 160–200°C, posuw 5–20 m/min. Granulat biały lub kość słoniowa. Op. 25 kg.",
      type: "Termotopliwe EVA",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 788.7 to klej termotopliwy na bazie kopolimerów EVA do ręcznych i wolnobieżnych okleiniarek obrzeży. Wyróżnia się bardzo dobrymi właściwościami topnienia i długim czasem otwartym (wysoką lepkością roboczą), co zapewnia równomierne wypełnienie szczeliny i stabilną jakość klejenia przy posuwach 5–20 m/min. Odporność termiczna spoiny do ok. 100°C oraz bardzo dobra odporność na niskie temperatury do ok. –30°C (zależnie od rodzaju obrzeża). Dostępny w dwóch kolorach granulatu: kość słoniowa (20) — do ciepłych dekorów i forniru, biały (10) — do obrzeży białych i melaninowych.",
        keyFeature: "Bardzo dobre właściwości topnienia i długi czas otwarty — stabilna jakość klejenia na ręcznych i wolnobieżnych okleinarkach przy posuwach 5–20 m/min.",
        specs: [
          { label: "Baza", value: "Kopolimery EVA" },
          { label: "Gęstość", value: "ok. 1,2 g/cm³" },
          { label: "Lepkość 160°C", value: "120 000 ±20 000 mPa·s" },
          { label: "Lepkość 180°C", value: "60 000 ±15 000 mPa·s" },
          { label: "Lepkość 200°C", value: "40 000 ±10 000 mPa·s" },
          { label: "MFI (150/1,2)", value: "40 ±15 g/10 min" },
          { label: "Temp. mięknienia", value: "ok. 90°C" },
          { label: "Temperatura pracy", value: "160–200°C" },
          { label: "Prędkość posuwu", value: "5–20 m/min" },
          { label: "Barwa", value: "Kość słoniowa (20) / Biały (10)" },
          { label: "Wilgotność drewna", value: "8–10%" },
          { label: "Min. temp. pomieszczenia", value: "18°C" },
          { label: "Trwałość", value: "ok. 2 lata" },
          { label: "Opakowania", value: "25 kg (worek, granulat)" },
        ],
        applications: "Okleinowanie obrzeży ABS, PVC, poliestru, papieru, żywicy melaminowej i forniru · ręczne i wolnobieżne okleiniarki obrzeży · produkcja meblarska i stolarska.",
        note: "Kość słoniowa (20) — do ciepłych dekorów drewna i forniru · biały (10) — do obrzeży białych i melaninowych. Temperaturę kontrolować bezpośrednio przy systemie nanoszenia. Czyściwo: Kleiberit 827.0.",
      },
    },
  },
  {
    categorySlug: "eva-hot-melts",
    product: {
      name: "KLEIBERIT® 773.3",
      code: "773.3",
      description:
        "Kleiberit 773.3 – klej termotopliwy EVA niewypełniony do automatycznych okleiniarek CNC i BAZ. Prędkość posuwu 10–30 m/min, temperatura pracy 170–200°C, lepkość 80 000 mPa·s (180°C). Granulat naturalny lub biały.",
      type: "Termotopliwe EVA",
      image: "/products/7733.jpg",
      details: {
        body: "Kleiberit 773.3 to klej termotopliwy na bazie kopolimerów EVA, zaprojektowany do automatycznych okleiniarek z nanoszeniem walcowym, w tym maszyn BAZ i centrów obróbczych CNC. Wyróżnia się doskonałymi właściwościami topnienia, czystą obróbką i brakiem powstawania nitek – kluczowymi cechami przy szybkiej produkcji seryjnej. Dostępny w dwóch wariantach kolorystycznych: naturalnym (beżowo-transparentny, do dekorów drewnianych i CPL) oraz białym (do jasnych obrzeży ABS, PVC i melaminowych).",
        keyFeature: "Dedykowany do automatycznych okleiniarek CNC i BAZ z nanoszeniem walcowym — brak powstawania nitek, czysta obróbka przy posuwach 10–30 m/min.",
        specs: [
          { label: "Baza", value: "Kopolimery EVA" },
          { label: "Temperatura pracy", value: "170–200°C" },
          { label: "Temperatura mięknienia", value: "105 ±5°C" },
          { label: "Lepkość 180°C", value: "80 000 ±15 000 mPa·s" },
          { label: "Lepkość 200°C", value: "50 000 ±10 000 mPa·s" },
          { label: "MFI (150/2,16)", value: "50 ±10 g/10 min" },
          { label: "Gęstość", value: "ok. 1,03 g/cm³" },
          { label: "Prędkość posuwu", value: "10–30 m/min" },
          { label: "Wilgotność drewna", value: "8–10%" },
          { label: "Trwałość", value: "ok. 2 lata" },
          { label: "Oznakowanie EU", value: "Niewymagane" },
          { label: "Opakowania", value: "20 kg (granulat)" },
        ],
        applications: "Oklejanie obrzeży poliestrowych, CPL i melaminowo-żywicznych · PVC i ABS (z primerem) · żywiczne obrzeża papierowe · obrzeża masywne i fornirowe · automatyczne maszyny z nanoszeniem walcowym (CNC, BAZ).",
        note: "Wariant naturalny (00) — beżowo-transparentny, do obrzeży w kolorach drewna i CPL. Wariant biały (10) — do białych i jasnych obrzeży ABS, PVC i melaminowych. Temperaturę kontrolować bezpośrednio przy systemie nanoszenia termometrem kontaktowym — wskazania termostatu mogą być błędne. Czyściwo: Kleiberit 827.0.",
      },
    },
  },
  {
    categorySlug: "eva-hot-melts",
    product: {
      name: "KLEIBERIT® 743.6",
      code: "743.6",
      description:
        "Kleiberit 743.6 – klej termotopliwy EVA do okleinowania profili, listw i płyt MDF/wiórowych żywicznymi foliami dekoracyjnymi na maszynach profile wrapping. Wysoka wytrzymałość początkowa, czysta obróbka.",
      type: "Termotopliwe EVA",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 743.6 to klej termotopliwy na bazie kopolimerów EVA, przeznaczony do okleinowania profili i listw z drewna, płyt drobnowiórowych i MDF żywicznymi foliami dekoracyjnymi (papierowymi) na maszynach do profile wrapping. Zapewnia wysoką wytrzymałość początkową, co pozwala na natychmiastową dalszą obróbkę okleinowanych elementów. Sprawdza się przy produkcji listw ozdobnych, frontów profilowanych, elementów mebli i wykończeń wnętrz. Temperatura pracy 160–200°C — dobierana wg wymagań maszyny i rodzaju folii.",
        keyFeature: "Wysoka wytrzymałość początkowa — okleinowane profile gotowe do dalszej obróbki natychmiast po wyjściu z maszyny.",
        specs: [
          { label: "Baza", value: "Kopolimery EVA" },
          { label: "Temperatura pracy", value: "160–200°C" },
          { label: "Zastosowanie", value: "Folie dekoracyjne żywicopapierowe" },
          { label: "Metoda nanoszenia", value: "Dysza szczelinowa lub walec" },
        ],
        applications: "Okleinowanie listw profilowanych z drewna, płyt wiórowych i MDF dekoracyjnymi foliami żywicopapierowymi · okleinowanie wstępne płyt przed okleinowaniem powierzchniowym.",
        note: "Kleiberit 743.6 dedykowany jest standardowym foliom dekoracyjnym, podczas gdy 743.7 zoptymalizowany jest pod bardzo cienkie folie papierowe i osiąga wyższe prędkości posuwu (do 50 m/min). Przed zastosowaniem zalecane własne sklejenia próbne z konkretnym rodzajem folii.",
      },
    },
  },
  {
    categorySlug: "eva-hot-melts",
    product: {
      name: "KLEIBERIT® 743.7",
      code: "743.7",
      description:
        "Kleiberit 743.7 – wysoce płynny klej EVA do profile wrapping cienkich folii papierowych i kaszerowania pianek tekstyliami. Posuw do 50 m/min, lepkość 3500 mPa·s (180°C). Op. 20 kg / 750 kg.",
      type: "Termotopliwe EVA",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 743.7 to specjalistyczny klej termotopliwy EVA o wyjątkowo niskiej lepkości i bardzo wysokim współczynniku topnienia (MFI), przeznaczony do okleinowania profili cienkimi foliami papierowymi oraz kaszerowania materiałów piankowych tekstyliami. Doskonała jakość powierzchni nawet przy najcieńszych papierach, brak powstawania nitek na wałku nanoszącym i wysoka dopuszczalna prędkość posuwu do 50 m/min czynią go wyborem numer jeden do szybkich linii profile wrapping.",
        keyFeature: "Lepkość 3 500 mPa·s przy 180°C — najniższa w serii EVA; posuw do 50 m/min; dedykowany do cienkich folii papierowych gdzie grubsze kleje EVA zostawiają ślady.",
        specs: [
          { label: "Baza", value: "Kopolimery EVA" },
          { label: "Temperatura pracy", value: "160–200°C" },
          { label: "Temperatura mięknienia", value: "95 ±5°C" },
          { label: "Lepkość 160°C", value: "5 500 ±800 mPa·s" },
          { label: "Lepkość 180°C", value: "3 500 ±500 mPa·s" },
          { label: "Lepkość 200°C", value: "2 000 ±300 mPa·s" },
          { label: "MFI (120/1,2)", value: "190 ±20 g/10 min" },
          { label: "Gęstość", value: "ok. 1,04 g/cm³" },
          { label: "Barwa", value: "Beżowy" },
          { label: "Trwałość", value: "ok. 2 lata" },
          { label: "Opakowania", value: "20 kg / big bag 750 kg" },
        ],
        applications: "Okleinowanie listw profilowych i płyt MDF żywicznymi foliami papierowymi · okleinowanie wstępne folii papierowych przed okleinowaniem powierzchniowym · kaszerowanie materiałów piankowych tekstyliami.",
        note: "Parametry procesowe: okleinowanie profili 50–100 g/m², posuw 20–50 m/min, temp. wałków 160–200°C · cienkie folie (kaszerowanie) 30–50 g/m², posuw 15–25 m/min · tekstylia na pianki 5–20 g/m², posuw 15–25 m/min. Przy skomplikowanych profilach i długiej drodze nanoszenia (>2 m) zalecana dodatkowa aktywacja promiennikiem. Folie żywicopapierowe wykazują różną charakterystykę — zawsze wykonać sklejenia próbne. Czyściwo: Kleiberit 827.0.",
      },
    },
  },
  // ── PUR (standalone) ──
  {
    categorySlug: "pur",
    product: {
      name: "KLEIBERIT® 501.4",
      code: "501.4",
      description:
        "Kleiberit 501.4 – 1K PUR klasy D4 / WATT 91 z czasem otwarcia ok. 4 min. Przeznaczony do szybkich linii produkcyjnych: okna, drzwi, złącza klinowe, klejenie krótkich elementów drewnianych. Czas docisku od 15 min, wiązanie wtórne ok. 1h.",
      type: "PUR",
      image: "/placeholder.svg",
      badge: "D4",
      details: {
        body: "Kleiberit 501.4 to jednokomponentowy klej poliuretanowy (1K PUR) serii 501 – najkrótszym czasie otwarcia spośród wariantów serii. Przeznaczony do szybkich linii produkcyjnych: klejenia okien, drzwi, elementów złączy klinowych i powierzchniowych. Utwardza się wilgocią zawartą w drewnie i powietrzu. Klasa D4 wg DIN EN 204 (odporność na wilgoć) i WATT 91 (do elementów konstrukcyjnych). Mrozoodporny do –25°C – gotowy klej transportowany w zimnie zachowuje właściwości po powrocie do temperatury roboczej.",
        keyFeature: "Czas otwarty ok. 4 min — najkrótszy w serii 501; czas docisku od 15 min; wiązanie wtórne ok. 1h.",
        specs: [
          { label: "Baza", value: "1K PUR" },
          { label: "Klasa", value: "D4 / WATT 91" },
          { label: "Czas otwarty", value: "ok. 4 min" },
          { label: "Docisk od", value: "ok. 15 min" },
          { label: "Wiązanie wtórne", value: "ok. 1h" },
          { label: "Lepkość", value: "ok. 7000 ±1500 mPa·s" },
          { label: "Gęstość", value: "ok. 1,13 g/cm³" },
          { label: "Nanoszenie", value: "100–200 g/m²" },
          { label: "Siła docisku", value: "min. 0,6 N/mm²" },
          { label: "Min. temp. obróbki", value: "+5°C (substrat min. +18°C)" },
          { label: "Mrozoodporność", value: "do –25°C" },
          { label: "Trwałość", value: "ok. 12 mies." },
        ],
        applications: "Okna, drzwi, tarasy, ogrodzenia · schody, parkiet, sauna, łazienka · elementy ścienne, MDF · mineralne płyty, ceramika, beton.",
      },
    },
  },
  {
    categorySlug: "pur",
    product: {
      name: "KLEIBERIT® 501.8",
      code: "501.8",
      description:
        "Kleiberit 501.8 – 1K PUR klasy D4 / WATT 91 z czasem otwarcia ok. 10 min. Wszechstronny wariant do stolarki okiennej i drzwiowej, parkietu, saun, łazienek. Czas docisku od 30 min, wiązanie wtórne ok. 1h. Mrozoodporny do –25°C.",
      type: "PUR",
      image: "/placeholder.svg",
      badge: "D4",
      details: {
        body: "Kleiberit 501.8 to jednokomponentowy klej poliuretanowy serii 501 z czasem otwarcia ok. 10 minut — wariant uniwersalny o zrównoważonym czasie otwarcia i docisku. Idealny do stolarki okiennej i drzwiowej, elementów schodów, parkietu i elementów narażonych na wilgoć (sauna, łazienka). Klasa D4 wg DIN EN 204 i WATT 91 potwierdza odporność na wilgoć i przydatność do konstrukcji. Mrozoodporny do –25°C.",
        keyFeature: "Czas otwarty ok. 10 min; czas docisku od 30 min; wiązanie wtórne ok. 1h.",
        specs: [
          { label: "Baza", value: "1K PUR" },
          { label: "Klasa", value: "D4 / WATT 91" },
          { label: "Czas otwarty", value: "ok. 10 min" },
          { label: "Docisk od", value: "ok. 30 min" },
          { label: "Wiązanie wtórne", value: "ok. 1h" },
          { label: "Lepkość", value: "ok. 7000 ±2000 mPa·s" },
          { label: "Gęstość", value: "ok. 1,13 g/cm³" },
          { label: "Nanoszenie", value: "100–200 g/m²" },
          { label: "Siła docisku", value: "min. 0,6 N/mm²" },
          { label: "Min. temp. obróbki", value: "+5°C (substrat min. +18°C)" },
          { label: "Mrozoodporność", value: "do –25°C" },
          { label: "Trwałość", value: "ok. 12 mies." },
        ],
        applications: "Okna, drzwi, tarasy, ogrodzenia · schody, parkiet, sauna, łazienka · elementy ścienne, MDF · mineralne płyty, ceramika, beton.",
      },
    },
  },
  {
    categorySlug: "pur",
    product: {
      name: "KLEIBERIT® 501.0",
      code: "501.0",
      description:
        "Kleiberit 501.0 – klasyczny 1K PUR klasy D4 / WATT 91 z czasem otwarcia ok. 20–25 min. Certyfikat IMO dla przemysłu morskiego. Czas docisku od 60 min, wiązanie wtórne 2–3h. Mrozoodporny do –25°C.",
      type: "PUR",
      image: "/products/501.jpg",
      badge: "IMO",
      details: {
        body: "Kleiberit 501.0 to klasyczny wariant serii 501 – jednokomponentowy klej poliuretanowy z najdłuższym (spośród 501.4/501.8/501.0) czasem otwarcia ok. 20–25 minut, przeznaczony do ręcznego klejenia dużych powierzchni i elementów o złożonej geometrii. Posiada certyfikat IMO (International Maritime Organization) do zastosowań morskich i okrętowych. Klasa D4 wg DIN EN 204 i WATT 91. Mrozoodporny do –25°C.",
        keyFeature: "Certyfikat IMO — dopuszczony do stosowania w przemyśle morskim i okrętowym. Czas otwarty ok. 20–25 min; docisk od 60 min.",
        specs: [
          { label: "Baza", value: "1K PUR" },
          { label: "Klasa", value: "D4 / WATT 91" },
          { label: "Certyfikat", value: "IMO" },
          { label: "Czas otwarty", value: "ok. 20–25 min" },
          { label: "Docisk od", value: "ok. 60 min" },
          { label: "Wiązanie wtórne", value: "ok. 2–3h" },
          { label: "Lepkość", value: "ok. 7000 ±1500 mPa·s" },
          { label: "Gęstość", value: "ok. 1,13 g/cm³" },
          { label: "Nanoszenie", value: "100–200 g/m²" },
          { label: "Siła docisku", value: "min. 0,6 N/mm²" },
          { label: "Min. temp. obróbki", value: "+5°C (substrat min. +18°C)" },
          { label: "Mrozoodporność", value: "do –25°C" },
          { label: "Trwałość", value: "ok. 12 mies." },
        ],
        applications: "Okna, drzwi, tarasy, ogrodzenia · schody, parkiet, sauna, łazienka · elementy ścienne, MDF · mineralne płyty, ceramika, beton · przemysł morski i okrętowy.",
      },
    },
  },
  {
    categorySlug: "pur",
    product: {
      name: "KLEIBERIT® 501.6",
      code: "501.6",
      description:
        "Kleiberit 501.6 – 1K PUR klasy D4 / WATT 91 z wydłużonym czasem otwarcia ok. 70 min. Przeznaczony do formowania i gięcia drewna, klejenia dużych powierzchni wymagających długiego czasu montażu. Czas docisku 6–7h, wiązanie wtórne 1 dzień.",
      type: "PUR",
      image: "/placeholder.svg",
      badge: "D4",
      details: {
        body: "Kleiberit 501.6 to jednokomponentowy klej poliuretanowy serii 501 z najdłuższym czasem otwarcia – ok. 70 minut. Przeznaczony do formowania i gięcia drewna na mokro (ang. bent wood), klejenia dużych laminowanych powierzchni lub elementów wymagających długiego czasu montażu przed zamknięciem prasy. Klasa D4 wg DIN EN 204 i WATT 91. Mrozoodporny do –25°C.",
        keyFeature: "Czas otwarty ok. 70 min — najdłuższy w serii 501; umożliwia ręczne klejenie dużych i złożonych elementów bez presji czasowej.",
        specs: [
          { label: "Baza", value: "1K PUR" },
          { label: "Klasa", value: "D4 / WATT 91" },
          { label: "Czas otwarty", value: "ok. 70 min" },
          { label: "Docisk od", value: "ok. 6–7h" },
          { label: "Wiązanie wtórne", value: "ok. 1 dzień" },
          { label: "Lepkość", value: "ok. 7000 ±1500 mPa·s" },
          { label: "Gęstość", value: "ok. 1,13 g/cm³" },
          { label: "Nanoszenie", value: "100–200 g/m²" },
          { label: "Siła docisku", value: "min. 0,6 N/mm²" },
          { label: "Min. temp. obróbki", value: "+5°C (substrat min. +18°C)" },
          { label: "Mrozoodporność", value: "do –25°C" },
          { label: "Trwałość", value: "ok. 12 mies." },
        ],
        applications: "Formowanie i gięcie drewna · klejenie dużych laminowanych powierzchni · okna, drzwi, schody · elementy konstrukcyjne wymagające długiego czasu montażu.",
      },
    },
  },
  {
    categorySlug: "pur",
    product: {
      name: "KLEIBERIT® 508.5",
      code: "508.5",
      description:
        "Kleiberit 508.5 – jednokomponentowy klej izocyjanianowy do paneli sandwich (EPS, XPS, pianka PUR + blacha), materiałów drewnopochodnych i drzwi p-poż. PCS ok. 15 MJ/kg, lepkość 8500 mPa·s, czas docisku od 20 min (60°C). Op. 7–1400 kg.",
      type: "PUR",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 508.5 to jednokomponentowy klej izocyjanianowy (1K) przeznaczony przede wszystkim do przemysłowej produkcji paneli sandwich z rdzeniem EPS, XPS lub pianki PUR okładanych blachą stalową lub aluminiową. Doskonały również do łączenia materiałów drewnopochodnych oraz do produkcji drzwi ognioodpornych (p-poż.). Niska wartość kaloryczna PCS ok. 15 MJ/kg umożliwia stosowanie w systemach paneli z klasyfikacją ogniową. Nanoszony maszynowo na jedną lub obie powierzchnie, utwardza się pod wpływem ciśnienia i ciepła.",
        keyFeature: "PCS ok. 15 MJ/kg — niska wartość kaloryczna umożliwia stosowanie w systemach paneli z klasyfikacją ogniową.",
        specs: [
          { label: "Baza", value: "Izocyjanian 1K" },
          { label: "Lepkość", value: "8500 ±2500 mPa·s" },
          { label: "Gęstość", value: "1,43 g/cm³" },
          { label: "Barwa", value: "beżowy" },
          { label: "Czas otwarty (suchy)", value: "ok. 10 min" },
          { label: "Czas otwarty (zwilżony)", value: "ok. 6 min" },
          { label: "Docisk 20°C", value: "60–70 min" },
          { label: "Docisk 40°C", value: "35–40 min" },
          { label: "Docisk 60°C", value: "20–25 min" },
          { label: "Wiązanie wtórne", value: "1h / pełne 24h" },
          { label: "Siła docisku", value: "min. 0,6 N/mm²" },
          { label: "Nanoszenie", value: "100–200 g/m²" },
          { label: "Mrozoodporność", value: "do –20°C" },
          { label: "Trwałość", value: "6 mies." },
          { label: "Opakowania", value: "7 / 30 / 250 kg, IBC 1400 kg" },
        ],
        applications: "Panele sandwich EPS/XPS/PUR + blacha stalowa lub aluminiowa · materiały drewnopochodne · drzwi ognioodporne (p-poż.) · elementy izolacyjne z klasyfikacją ogniową.",
      },
    },
  },
  {
    categorySlug: "pur",
    product: {
      name: "KLEIBERIT® 510.3.4",
      code: "510.3.4",
      description:
        "Kleiberit 510.3.4 – certyfikowany 1K PUR wg EN 15425:2017 do nośnych elementów z drewna klejonego (BSH), KVH i CLT. Czas otwarty max. 4 min — przeznaczony do szybkich linii i złączy klinowych. D4, WATT 91.",
      type: "PUR",
      image: "/placeholder.svg",
      badge: "EN 15425",
      details: {
        body: "Kleiberit 510.3.4 to jednokomponentowy klej poliuretanowy certyfikowany wg EN 15425:2017 (klasa I-70-GP-0,3-w) do nośnych elementów z drewna klejonego warstwowo (BSH/Brettschichtholz), drewna konstrukcyjnego KVH i elementów CLT (Cross-Laminated Timber). Wariant .4 z maksymalnym czasem otwarcia 4 minut przeznaczony jest do szybkich zautomatyzowanych linii produkcyjnych i złączy klinowych (Keilzinken). Potwierdza klasę D4 i spełnia wymagania WATT 91.",
        keyFeature: "Certyfikat EN 15425:2017-I-70-GP-0,3-w — jedyny wymagany dla nośnych elementów BSH/KVH/CLT wg Eurokod 5. Czas otwarty max. 4 min.",
        warning: "Temperatura pomieszczenia min. 18°C musi być udokumentowana. Różnica wilgotności między lamelami max. 5%. Wymagany system samokontroli zakładowej (FPC).",
        specs: [
          { label: "Baza", value: "1K PUR" },
          { label: "Certyfikat", value: "EN 15425:2017-I-70-GP-0,3-w" },
          { label: "Klasa", value: "D4 / WATT 91" },
          { label: "Czas otwarty", value: "max. 4 min" },
          { label: "Czas docisku", value: "od 10 min" },
          { label: "Lepkość", value: "ok. 18 500 mPa·s" },
          { label: "Gęstość", value: "ok. 1,13 g/cm³" },
          { label: "Maks. grubość fugi", value: "0,3 mm" },
          { label: "Nanoszenie", value: "140–350 g/m²" },
          { label: "Siła docisku", value: "0,6–1,0 N/mm²" },
          { label: "Wilgotność drewna", value: "8–15%" },
          { label: "Min. temp. obróbki", value: "+18°C" },
          { label: "Mrozoodporność", value: "do –20°C" },
        ],
        applications: "Drewno klejone warstwowo BSH · drewno konstrukcyjne KVH · CLT (Cross-Laminated Timber) · złącza klinowe i powierzchniowe na szybkich liniach produkcyjnych.",
      },
    },
  },
  {
    categorySlug: "pur",
    product: {
      name: "KLEIBERIT® 510.3.15",
      code: "510.3.15",
      description:
        "Kleiberit 510.3.15 – certyfikowany 1K PUR wg EN 15425:2017 do nośnych elementów BSH, KVH i CLT. Czas otwarty max. 15 min — wariant do linii o średnim tempie. D4, WATT 91.",
      type: "PUR",
      image: "/placeholder.svg",
      badge: "EN 15425",
      details: {
        body: "Kleiberit 510.3.15 to certyfikowany jednokomponentowy klej poliuretanowy do nośnych elementów z drewna klejonego (BSH), drewna KVH i CLT wg EN 15425:2017. Wariant .15 z maksymalnym czasem otwarcia 15 minut umożliwia pracę na liniach o średnim tempie produkcji, ręczne nakładanie kleju i układanie lamin bez presji czasowej. Spełnia klasę D4 i wymagania WATT 91.",
        keyFeature: "Certyfikat EN 15425:2017-I-70-GP-0,3-w — wymagany dla nośnych elementów BSH/KVH/CLT. Czas otwarty max. 15 min — komfortowy dla linii ręcznych.",
        warning: "Temperatura pomieszczenia min. 18°C musi być udokumentowana. Różnica wilgotności między lamelami max. 5%. Wymagany system samokontroli zakładowej (FPC).",
        specs: [
          { label: "Baza", value: "1K PUR" },
          { label: "Certyfikat", value: "EN 15425:2017-I-70-GP-0,3-w" },
          { label: "Klasa", value: "D4 / WATT 91" },
          { label: "Czas otwarty", value: "max. 15 min" },
          { label: "Czas docisku", value: "od 30 min" },
          { label: "Lepkość", value: "ok. 18 500 mPa·s" },
          { label: "Gęstość", value: "ok. 1,13 g/cm³" },
          { label: "Maks. grubość fugi", value: "0,3 mm" },
          { label: "Nanoszenie", value: "140–350 g/m²" },
          { label: "Siła docisku", value: "0,6–1,0 N/mm²" },
          { label: "Wilgotność drewna", value: "8–15%" },
          { label: "Min. temp. obróbki", value: "+18°C" },
          { label: "Mrozoodporność", value: "do –20°C" },
        ],
        applications: "Drewno klejone warstwowo BSH · drewno konstrukcyjne KVH · CLT · złącza klinowe i powierzchniowe na liniach o średnim tempie.",
      },
    },
  },
  {
    categorySlug: "pur",
    product: {
      name: "KLEIBERIT® 510.3.30",
      code: "510.3.30",
      description:
        "Kleiberit 510.3.30 – certyfikowany 1K PUR wg EN 15425:2017 do nośnych elementów BSH, KVH i CLT. Czas otwarty max. 30 min — wariant do złączy klinowych, CLT i ręcznego układania. Czas docisku 70 min. D4, WATT 91.",
      type: "PUR",
      image: "/placeholder.svg",
      badge: "EN 15425",
      details: {
        body: "Kleiberit 510.3.30 to certyfikowany jednokomponentowy klej poliuretanowy do nośnych elementów drewnianych wg EN 15425:2017 z najdłuższym czasem otwarcia w serii – max. 30 minut. Wariant przeznaczony do złączy klinowych KVH, BSH i CLT o dużym formacie, gdzie konieczne jest ręczne układanie wielu lamin lub elementów. Czas docisku wynosi ok. 70 minut. Spełnia klasę D4 i wymagania WATT 91.",
        keyFeature: "Certyfikat EN 15425:2017-I-70-GP-0,3-w. Czas otwarty max. 30 min — najdłuższy w serii 510.3; idealny do dużych formatów CLT i ręcznego układania.",
        warning: "Temperatura pomieszczenia min. 18°C musi być udokumentowana. Różnica wilgotności między lamelami max. 5%. Wymagany system samokontroli zakładowej (FPC).",
        specs: [
          { label: "Baza", value: "1K PUR" },
          { label: "Certyfikat", value: "EN 15425:2017-I-70-GP-0,3-w" },
          { label: "Klasa", value: "D4 / WATT 91" },
          { label: "Czas otwarty", value: "max. 30 min" },
          { label: "Czas docisku", value: "ok. 70 min" },
          { label: "Lepkość", value: "ok. 18 500 mPa·s" },
          { label: "Gęstość", value: "ok. 1,13 g/cm³" },
          { label: "Maks. grubość fugi", value: "0,3 mm" },
          { label: "Nanoszenie", value: "140–350 g/m²" },
          { label: "Siła docisku", value: "0,6–1,0 N/mm²" },
          { label: "Wilgotność drewna", value: "8–15%" },
          { label: "Min. temp. obróbki", value: "+18°C" },
          { label: "Mrozoodporność", value: "do –20°C" },
        ],
        applications: "Drewno klejone warstwowo BSH · drewno konstrukcyjne KVH · CLT (duże formaty) · złącza klinowe przy ręcznym układaniu lamin.",
      },
    },
  },
  {
    categorySlug: "pur",
    product: {
      name: "KLEIBERIT® 541.6",
      code: "541.6",
      description:
        "Kleiberit 541.6 – 2K PUR do klejenia styropianu/pianki PUR z blachą, laminatem GRP i płytami sandwich. Do elementów izolacyjnych do +90 °C i filtrów olejowych/diesel. Mieszanka A:B = 4:1, żywotność 45 min, Shore D 80. Op. 10–250 kg.",
      type: "PUR",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 541.6 to dwukomponentowy klej poliuretanowy (2K PUR) mieszany z utwardzaczem 870.0 w proporcji wagowej A:B = 4:1. Przeznaczony do klejenia styropianu (EPS), pianki poliuretanowej (PUR/PIR) z blachą stalową, aluminiową, laminatu GRP oraz płytami sandwich. Wyjątkowa odporność na temperatury do +90°C i odporność chemiczna czynią go niezastąpionym w produkcji filtrów przemysłowych (olej, diesel, nafta). Shore D ok. 80 gwarantuje twardą i sztywną spoinę przy zachowaniu szczelności.",
        keyFeature: "Jedyny klej w ofercie Kleiberit dopuszczony do filtrów olejowych, diesel i naftowych — odporność chemiczna i termiczna do +90°C.",
        specs: [
          { label: "Baza", value: "2K PUR (A:B = 4:1 wagowo)" },
          { label: "Utwardzacz", value: "870.0" },
          { label: "Lepkość mieszanki", value: "3000 ±500 mPa·s" },
          { label: "Barwa", value: "beżowa" },
          { label: "Żywotność", value: "ok. 45 min" },
          { label: "Czas użytkowania", value: "ok. 30 min" },
          { label: "Czas docisku", value: "min. 4h (0,5 bar)" },
          { label: "Dalsza obróbka", value: "po 4–6h" },
          { label: "Wtórne twardnienie", value: "5–7 dni" },
          { label: "Twardość", value: "Shore D ok. 80" },
          { label: "Temp. eksploatacji", value: "do +90°C" },
          { label: "Zużycie", value: "200–250 g/m²" },
          { label: "Trwałość", value: "ok. 12 mies." },
          { label: "Opakowania", value: "10 / 250 kg" },
        ],
        applications: "Panele sandwich EPS/XPS/PUR + blacha lub laminat GRP · filtry przemysłowe (olej, diesel, nafta) · elementy izolacyjne odporne na temperaturę do +90°C.",
      },
    },
  },
  // ── Montażowe (standalone) ──
  {
    categorySlug: "montage",
    product: {
      name: "KLEIBERIT® 566.0 Supracraft",
      code: "566.0",
      description:
        "Kleiberit 566.0 Supracraft – trwale elastyczny 1K PUR klej i uszczelniacz do metali, drewna, betonu i ceramiki. Odporny na drgania i odkształcenia termiczne. Certyfikat IMO FTP. Kolor szary. Op. 300/600 ml.",
      type: "Montaż",
      image: "/products/566.jpg",
      badge: "IMO",
      details: {
        body: "Kleiberit 566 Supracraft to jednokomponentowy, trwale elastyczny klej i uszczelniacz na bazie poliuretanu łączący dwie funkcje w jednym produkcie. Utwardza się pod wpływem wilgoci z powietrza, tworząc pastowatą, trwale elastyczną spoinę Shore A 45 z rozciągalnością ponad 600% – nie pęka pod wpływem drgań ani odkształceń termicznych. Posiada certyfikat IMO FTP-Code (cz. 2 i 5) do zastosowań stoczniowych oraz klasę ogniową E wg EN 13501. Klasa emisji VOC A+. Wariant 566.0 szary – do metali, betonu, kamienia i zastosowań neutralnych kolorystycznie.",
        keyFeature: "Shore A 45 + rozciąganie >600% — spoina nie pęka przy drganiach i odkształceniach termicznych. Certyfikat IMO FTP. Klasa VOC A+.",
        warning: "Produkt zawiera izocyjanian — wymaga obowiązkowego oznakowania wg UE. Napoczęty kartusz/worek zużyć tego samego dnia. Utwardzona spoina do usunięcia wyłącznie mechanicznie.",
        specs: [
          { label: "Baza", value: "1K PUR (trwale elastyczny)" },
          { label: "Kolor", value: "Szary (566.0)" },
          { label: "Gęstość (20°C)", value: "1,15–1,16 g/cm³" },
          { label: "Twardość Shore A", value: "ok. 45 (28 dni)" },
          { label: "Wytrzymałość na rozciąganie", value: "ok. 1,8 N/mm²" },
          { label: "Rozciąganie do zerwania", value: ">600%" },
          { label: "Powrót do formy", value: ">70% (ISO 7389)" },
          { label: "Czas naskórkowania", value: "ok. 60 min" },
          { label: "Odporność termiczna", value: "–40°C do +90°C (+120°C krótko)" },
          { label: "Certyfikat IMO", value: "FTP-Code cz. 2 i 5" },
          { label: "Klasa ogniowa", value: "E / EN 13501" },
          { label: "Klasa VOC", value: "A+" },
          { label: "Oznakowanie EU", value: "Wymagane (izocyjanian)" },
          { label: "Opakowania", value: "12×300 ml / 20×600 ml" },
        ],
        applications: "Montaż metalowych wsporników i elementów konstrukcyjnych · klejenie i uszczelnianie połączeń blach, aluminium, stali nierdzewnej · drewno, MDF · ceramika, kamień naturalny · beton, mur · przemysł stoczniowy (IMO).",
        note: "Seria 566 Supracraft w 3 kolorach: 566.0 szary · 566.4 czarny · 566.5 biały. Odporność chemiczna długotrwała: woda, woda morska, ścieki, słabe kwasy i zasady. Krótkotrwała: benzyna, oleje mineralne, tłuszcze. Brak odporności: rozpuszczalniki organiczne, kwasy mineralne, alkohol. Czyściwo przed utwardzeniem: Kleiberit 820.0 lub aceton.",
      },
    },
  },
  {
    categorySlug: "montage",
    product: {
      name: "KLEIBERIT® 566.4 Supracraft",
      code: "566.4",
      description:
        "Kleiberit 566.4 Supracraft – trwale elastyczny 1K PUR klej i uszczelniacz do metali, drewna, betonu i ceramiki. Odporny na drgania i odkształcenia termiczne. Certyfikat IMO FTP. Kolor czarny. Op. 300/600 ml.",
      type: "Montaż",
      image: "/products/566.jpg",
      badge: "IMO",
      details: {
        body: "Kleiberit 566.4 Supracraft to jednokomponentowy, trwale elastyczny klej i uszczelniacz PUR. Wariant czarny (566.4) — do ciemnych substratów, elementów stalowych i profili czarnych. Tworzy pastowatą, trwale elastyczną spoinę Shore A 45 z rozciągalnością >600%. Certyfikat IMO FTP. Klasa VOC A+.",
        keyFeature: "Shore A 45 + rozciąganie >600% — spoina nie pęka przy drganiach i odkształceniach termicznych. Certyfikat IMO FTP. Klasa VOC A+.",
        warning: "Produkt zawiera izocyjanian — wymaga obowiązkowego oznakowania wg UE. Napoczęty kartusz/worek zużyć tego samego dnia.",
        specs: [
          { label: "Baza", value: "1K PUR (trwale elastyczny)" },
          { label: "Kolor", value: "Czarny (566.4)" },
          { label: "Twardość Shore A", value: "ok. 45 (28 dni)" },
          { label: "Rozciąganie do zerwania", value: ">600%" },
          { label: "Czas naskórkowania", value: "ok. 60 min" },
          { label: "Odporność termiczna", value: "–40°C do +90°C" },
          { label: "Certyfikat IMO", value: "FTP-Code cz. 2 i 5" },
          { label: "Klasa VOC", value: "A+" },
          { label: "Opakowania", value: "12×300 ml / 20×600 ml" },
        ],
        applications: "Elementy stalowe, profile czarne · ciemne substraty metalowe · klejenie i uszczelnianie · przemysł stoczniowy.",
        note: "Seria 566 Supracraft w 3 kolorach: 566.0 szary · 566.4 czarny · 566.5 biały.",
      },
    },
  },
  {
    categorySlug: "montage",
    product: {
      name: "KLEIBERIT® 566.5 Supracraft",
      code: "566.5",
      description:
        "Kleiberit 566.5 Supracraft – trwale elastyczny 1K PUR klej i uszczelniacz do metali, drewna, betonu i ceramiki. Odporny na drgania i odkształcenia termiczne. Certyfikat IMO FTP. Kolor biały. Op. 300/600 ml.",
      type: "Montaż",
      image: "/products/566.jpg",
      badge: "IMO",
      details: {
        body: "Kleiberit 566.5 Supracraft to jednokomponentowy, trwale elastyczny klej i uszczelniacz PUR. Wariant biały (566.5) — do białych powierzchni, ceramiki łazienkowej i jasnych oklein. Tworzy pastowatą, trwale elastyczną spoinę Shore A 45 z rozciągalnością >600%. Certyfikat IMO FTP. Klasa VOC A+.",
        keyFeature: "Shore A 45 + rozciąganie >600% — spoina nie pęka przy drganiach i odkształceniach termicznych. Certyfikat IMO FTP. Klasa VOC A+.",
        warning: "Produkt zawiera izocyjanian — wymaga obowiązkowego oznakowania wg UE. Napoczęty kartusz/worek zużyć tego samego dnia.",
        specs: [
          { label: "Baza", value: "1K PUR (trwale elastyczny)" },
          { label: "Kolor", value: "Biały (566.5)" },
          { label: "Twardość Shore A", value: "ok. 45 (28 dni)" },
          { label: "Rozciąganie do zerwania", value: ">600%" },
          { label: "Czas naskórkowania", value: "ok. 60 min" },
          { label: "Odporność termiczna", value: "–40°C do +90°C" },
          { label: "Certyfikat IMO", value: "FTP-Code cz. 2 i 5" },
          { label: "Klasa VOC", value: "A+" },
          { label: "Opakowania", value: "12×300 ml / 20×600 ml" },
        ],
        applications: "Białe powierzchnie, ceramika łazienkowa, jasne okleiny · klejenie i uszczelnianie · elementy wewnętrzne i zewnętrzne.",
        note: "Seria 566 Supracraft w 3 kolorach: 566.0 szary · 566.4 czarny · 566.5 biały.",
      },
    },
  },
  {
    categorySlug: "montage",
    product: {
      name: "KLEIBERIT® 568.1 Supracon",
      code: "568.1",
      description:
        "Kleiberit 568.1 Supracon – 1K PUR klej montażowy D4 i WATT 91 do drewna, metalu, betonu, ceramiki i PVC. Wiąże bez wilgoci z powietrza, obciążalność po 15–30 min, skuteczny od +7°C. Kartusz 400 ml.",
      type: "Montaż",
      image: "/products/568.jpg",
      badge: "D4",
      details: {
        body: "Kleiberit 568.1 Supracon to jednokomponentowy reaktywny klej poliuretanowy sieciujący pod wpływem wilgoci atmosferycznej. Przeznaczony do trwałego klejenia materiałów o różnej nasiąkliwości — drewna, materiałów drewnopochodnych, betonu, murów, ceramiki, metali oraz twardego PVC. Spoina spełnia klasę wodoodporności D4 wg DIN EN 204 i odporności termicznej WATT 91 wg DIN 68602. Dzięki ekstremalnie szybkiemu wiązaniu elementy można obciążać już po 15–30 minutach — bez potrzeby długiego mocowania. Klej nie zawiera rozpuszczalników, nie koroduje i jest praktycznie bezwonny. Aplikacja pistoletem uszczelniaczowym, nanoszenie na jedną lub obie powierzchnie.",
        keyFeature: "D4 + WATT 91 · obciążalność po 15–30 min · skuteczny od +7°C · bez rozpuszczalników · spoina odporna na wilgoć i temperatury do +80°C (+100°C krótkotrwale).",
        specs: [
          { label: "Baza", value: "1K PUR (wilgotnościosieciujący)" },
          { label: "Klasa", value: "D4 (DIN EN 204) + WATT 91 (DIN 68602)" },
          { label: "Barwa", value: "Jasnobeżowy" },
          { label: "Gęstość", value: "ok. 1,48 g/cm³" },
          { label: "Lepkość", value: "Pastowata, tiksotropowa" },
          { label: "Min. temp. pracy", value: "+7°C" },
          { label: "Czas otwarty", value: "ok. 5 min (20°C / 50% RH)" },
          { label: "Czas docisku", value: "15–30 min" },
          { label: "Siła docisku", value: ">1 N/mm²" },
          { label: "Ilość nanoszenia", value: "150–300 g/m²" },
          { label: "Odporność termiczna", value: "–30°C do +80°C (+100°C krótko)" },
          { label: "Opakowanie", value: "Kartusz 400 ml" },
        ],
        applications: "Drewno i materiały drewnopochodne · beton, mur, tynk, cement · ceramika, marmur, kamień · twarde PVC, laminat GRP, styropian, PUR · metale: miedź, stal szlachetna, aluminium, stal ocynkowana.",
        note: "Nie stosować do: polietylenu (PE), polipropylenu (PP), teflonu (PTFE), silikonu. Przy materiałach niechłonnych lub wilgotności drewna <8% — zrosić powierzchnię mgiełką wodną ok. 20 g/m². Czyściwo: Kleiberit 820.0.",
      },
    },
  },
  {
    categorySlug: "montage",
    product: {
      name: "KLEIBERIT® 601.1",
      code: "601.1",
      description:
        "Kleiberit 601.1 – elastyczny klej STP 1K do klejenia luster (DIN EN 1036), szkła, drewna i metali wewnątrz i na zewnątrz. Certyfikat EC1 plus R, klasa VOC A+. Dostępny w 4 kolorach. Op. 12×280 ml.",
      type: "Montaż",
      image: "/placeholder.svg",
      badge: "EC1 plus R",
      details: {
        body: "Kleiberit 601.1 to jednokomponentowy klej na bazie silanowo-terminowanych polimerów (STP), szybko wiążący, twardo-elastyczny, przeznaczony do klejenia luster zgodnie z normą DIN EN 1036 oraz montażu drewna, szkła, metali i tworzyw sztucznych wewnątrz i na zewnątrz. Klej STP nie atakuje srebrzystej powłoki refleksyjnej lustra — w przeciwieństwie do octanowych klejów silikonowych i większości klejów PUR. Certyfikat GEV Emicode EC1 plus R (nr 8781) i klasa VOC A+. Dostępny w 4 kolorach.",
        keyFeature: "Jedyny produkt Kleiberit certyfikowany do klejenia luster wg DIN EN 1036 — STP nie atakuje powłoki srebrnej. Certyfikat EC1 plus R, klasa VOC A+.",
        specs: [
          { label: "Baza", value: "1K STP (neutralnie sieciujący)" },
          { label: "Gęstość (20°C)", value: "ok. 1,60 g/cm³" },
          { label: "Twardość Shore A", value: "ok. 73" },
          { label: "Wytrzymałość na rozciąganie", value: "ok. 2,6 N/mm²" },
          { label: "Rozciąganie do zerwania", value: "ok. 140%" },
          { label: "Czas kożuszenia", value: "ok. 8 min (20°C/50%)" },
          { label: "Szybkość twardnienia", value: "ok. 2–3 mm/dzień" },
          { label: "Temp. pracy", value: "+5°C do +30°C" },
          { label: "Certyfikat DIN EN 1036", value: "Tak — klejenie luster" },
          { label: "Certyfikat EC1 plus R", value: "GEV Emicode nr 8781" },
          { label: "Klasa VOC", value: "A+" },
          { label: "Stabilność UV", value: "Tak" },
          { label: "Opakowania", value: "12×280 ml / 450 g (kartusz PE)" },
        ],
        applications: "Montaż luster (łazienki, szafy przesuwne, sklepy) · szkło · metale szlachetne i aluminium · drewno i MDF · kamień naturalny · większość tworzyw sztucznych.",
        warning: "Nie stosować do metali kolorowych (miedź, mosiądz, brąz). Przy dużych powierzchniach przynajmniej jeden substrat musi być przenikalny (drewno, MDF, EPS). Napoczęty kartusz zużyć tego samego dnia.",
        note: "Dostępne kolory: biały (10) · beżowy (25) · szary (90) · czarny (99). Dobór koloru do substratu eliminuje widoczność fugi.",
      },
    },
  },
  {
    categorySlug: "montage",
    product: {
      name: "KLEIBERIT® 584.0",
      code: "584.0",
      description:
        "Kleiberit 584.0 – elastyczny klej montażowy STP 1K bez izocyjanianów, ftalanów i silikonu. Bez obowiązkowego oznakowania EU. Do listew, paneli, ceramiki i drewna. Biały/czarny. Op. 300/600 ml.",
      type: "Montaż",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 584.0 to jednokomponentowy, trwale elastyczny klej montażowy na bazie polimerów z silanem (STP), wyróżniający się wyjątkowo czystym składem chemicznym — jedyny produkt w kategorii bez obowiązkowego oznakowania EU. Przeznaczony do elastycznego montażu listew przypodłogowych, elementów dekoracyjnych, kanałów klimatyzacyjnych, drewna, płyt izolacyjnych z twardej pianki PUR oraz ceramiki, wewnątrz i na zewnątrz. Twardnienie bezwonne.",
        keyFeature: "Bez izocyjanianów · bez ftalanów · bez silikonu · bez rozpuszczalników · bez dibutylu i cyny — jedyny klej montażowy w tej kategorii bez obowiązkowego oznakowania EU.",
        warning: "Nie stosować do EPS i XPS (styropian).",
        specs: [
          { label: "Baza", value: "1K STP (silanowo-terminowany polimer)" },
          { label: "Gęstość", value: "ok. 1,46 ±0,03 g/cm³" },
          { label: "Twardość Shore A", value: "ok. 50" },
          { label: "Wytrzymałość na rozciąganie", value: "ok. 2,5 N/mm²" },
          { label: "Rozciąganie do zerwania", value: ">200%" },
          { label: "Czas kożuszenia", value: "25 ±10 min (20°C/50%)" },
          { label: "Szybkość twardnienia", value: "ok. 2 mm/24h" },
          { label: "Min. czas mocowania", value: "min. 24h" },
          { label: "Temp. pracy", value: "+5°C do +30°C" },
          { label: "Oznakowanie EU", value: "Niewymagane" },
          { label: "Barwa", value: "Biały / Czarny" },
          { label: "Opakowania", value: "12×300 ml / 20×600 ml" },
        ],
        applications: "Listwy przypodłogowe i dekoracyjne · kanały klimatyzacyjne i kablowe · drewno i materiały drewnopochodne · płyty izolacyjne z twardej pianki PUR · tablice, kasetony · płytki ceramiczne.",
      },
    },
  },
  // ── Pianki montażowe (standalone) ──
  {
    categorySlug: "montage",
    product: {
      name: "KLEIBERIT® 535.0 SupraFoam",
      code: "535.0",
      description:
        "Kleiberit 535.0 SupraFoam – dwukomponentowa pianka PUR do montażu ościeżnic i izolacji okien. Bez naddatku, utwardza się bez wilgoci — rozporki zdejmować już po 20 min. Certyfikat EC1 plus R, klasa B2. Op. 16×250 g.",
      type: "Pianka montażowa",
      badge: "EMICODE EC1",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 535.0 SupraFoam to dwukomponentowa pianka PUR w podwójnej kartuszy, utwardzająca się w ciągu 15–20 minut niezależnie od wilgoci powietrza. To fundamentalna przewaga nad piankami 1K: nie wymaga zwilżania podłoża, działa pewnie nawet w bardzo suchych warunkach i nie wykazuje naddatku po utwardzeniu. Posiada certyfikat GEV Emicode EC1 plus R (bardzo niska emisja LZO) oraz klasę VOC A+.",
        keyFeature: "Kluczowe zalety 2K vs 1K: utwardza się bez wilgoci · brak naddatku · pełne utwardzenie w 15–20 min (vs kilkanaście godzin dla 1K) · można zdejmować rozporki po ok. 20 min · nie wymaga zwilżania muru.",
        specs: [
          { label: "Typ", value: "2K PUR, bez gazu prop." },
          { label: "Brak kleistości", value: "po ok. 1 min" },
          { label: "Tnalność", value: "po ok. 3–5 min" },
          { label: "Zdejmowanie rozporek", value: "po ok. 20 min" },
          { label: "Pełne utwardzenie", value: "15–20 min (20°C)" },
          { label: "Klasa pożarowa", value: "B2 / DIN 4102" },
          { label: "Emisje LZO", value: "EC1 plus R · VOC A+" },
          { label: "Temp. pracy", value: "+10 °C do +30 °C" },
          { label: "Wydajność kartusza", value: "ok. 5,5 litra" },
          { label: "Opakowanie", value: "16 × 250 g / karton" },
          { label: "Trwałość", value: "ok. 9 mies. (20 °C)" },
        ],
        applications: "Montaż ościeżnic drzwi · izolacja okien · różne prace montażowe, wypełnieniowe i izolacyjne. Nie wymaga zwilżania podłoża. Gips i gazobeton wstępnie pokryć primerem KLEIBERIT 473.0.",
        note: "Akcesoria: pistolet Kleiberit 890.1 · czyściwo 820.0 lub 823.0 · primer 473.0 (gips/gazobeton).",
      },
    },
  },
  {
    categorySlug: "montage",
    product: {
      name: "KLEIBERIT® 536.0 StairMaster",
      code: "536.0",
      description:
        "Kleiberit 536.0 StairMaster – ekspansywna 2K pianka klejąca PUR do montażu stopni schodowych, progów i parapetów z drewna, kamienia lub metalu. Obciążalna po 20 min, klasa B2. Op. 125/250 g.",
      type: "Pianka montażowa",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 536.0 StairMaster to dwukomponentowa, ekspansywna pianka klejąca PUR do racjonalnego montażu stopni schodowych, podstopnic, progów drzwiowych i parapetów okiennych z drewna, kamienia i metalu. Ekspansywna formuła wypełnia fugi i nierówności pianką o drobnych porach, tworząc trwałe, szczelne połączenie odporne na ściskanie – bez widocznych śrub czy gwoździ. Klejona powierzchnia obciążalna już po 20 minutach.",
        specs: [
          { label: "Typ", value: "2K PUR, ekspansywny" },
          { label: "Obciążalność", value: "po ok. 20 min" },
          { label: "Naddatek", value: "Brak" },
          { label: "Utwardzanie", value: "Niezależnie od wilgoci" },
          { label: "Klasa pożarowa", value: "B2 / DIN 4102" },
          { label: "Temp. pracy", value: "+10 °C do +30 °C" },
          { label: "Formaldehyd / PCB", value: "Nie zawiera" },
          { label: "Opakowania", value: "Podwójna tuba 125 g / 250 g" },
        ],
        applications: "Stopnie i podstopnice schodów (drewno, kamień, metal) · progi drzwiowe · parapety okienne · renowacja schodów z nakładkami · klejenie bez widocznych połączeń na drewnie, MDF, kamieniu, metalu, linoleum i wykładzinach PCV.",
        note: "Technika: powierzchnie nośne, czyste i wolne od tłuszczu. Optymalna temp. pracy +18–20°C.",
      },
    },
  },
  {
    categorySlug: "montage",
    product: {
      name: "KLEIBERIT® 585.5",
      code: "585.5",
      description:
        "Kleiberit 585.5 – trudnopalna 1K pianka PUR klasy B (EN 13501-1, różowa) do uszczelnień ognioodpornych między materiałem mineralnym lub metalowym. Izoluje termicznie i akustycznie. Op. 12×750 ml.",
      type: "Pianka montażowa",
      badge: "Ognioodporny",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 585.5 to jednokomponentowa pianka PUR o kolorze różowym (identyfikacja warstwy klejowej), posiadająca klasyfikację trudnopalną klasy B wg normy EN 13501-1 – europejskiej normy reagowania na ogień. Przeznaczona wyłącznie do uszczelnień między masywnym materiałem mineralnym lub metalowym (beton, mur, tynk, płyty cementowe, metal). Łączy właściwości ognioodporne z dobrą izolacyjnością cieplną (λ = 0,036 W/mK). Różowy kolor odróżnia ją od standardowych pianek kremowych, minimalizując ryzyko pomyłki w zastosowaniu ognioodpornym.",
        warning: "Właściwości p-poż. są skuteczne WYŁĄCZNIE między masywnym materiałem mineralnym (beton, mur, gips, płyty cementowe) lub metalowym. Klasa B wg EN 13501-1 dotyczy szczelin max. 45 mm szerokości i min. 60 mm głębokości. Nie stosować jako wypełnienie p-poż. między elementami drewnianymi lub lekką zabudową.",
        specs: [
          { label: "Typ / baza", value: "1K PUR (wilgoć)" },
          { label: "Klasa pożarowa", value: "Klasa B / EN 13501-1" },
          { label: "Barwa", value: "Różowa" },
          { label: "Gęstość (wolna)", value: "ok. 16 kg/m³" },
          { label: "Przewodność cieplna", value: "ok. 0,036 W/(mK)" },
          { label: "Brak kleistości", value: "po 5–10 min" },
          { label: "Tnalność", value: "po ok. 15 min (2 cm)" },
          { label: "Pełne utwardzenie", value: "ok. 12 h (2 cm, 20°C)" },
          { label: "Odporność termiczna", value: "–40 do +90 °C" },
          { label: "Temp. pracy", value: "+5 °C do +25 °C" },
          { label: "Wydajność (750 ml)", value: "ok. 40–45 litrów" },
          { label: "Opakowanie", value: "12 × 750 ml / karton" },
        ],
        applications: "Uszczelnienia ognioodporne przepustów instalacyjnych w ścianach mineralnych · szczeliny między betonem, murem, tynkiem a metalowymi elementami budowlanymi · izolacja i wyciszanie w konstrukcjach mineralnych/metalowych.",
        note: "Czyściwo: Kleiberit 823 lub 820.0 (świeża pianka). Primer 835 do gipsu i gazobetonu. Nanoszenie wielowarstwowe: każdą warstwę nanosić w 30 min. odstępach i zwilżać mgiełką wodną.",
      },
    },
  },
  // ── Kontaktowe (standalone) ──
  {
    categorySlug: "contact",
    product: {
      name: "KLEIBERIT® 120.0 Supra-Gel",
      code: "120.0",
      description:
        "Kleiberit 120.0 Supra-Gel – żelowy klej kontaktowy polychloroprenowy do szpachli. Do klejenia fornirów, dekoracyjnych laminatów warstwowych, folii metalowych i korka z płytami drewnopochodnymi. Min. temp. pracy +15 °C. Op. 0,7–25 kg.",
      type: "Klej kontaktowy",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 120.0 Supra-Gel to klej kontaktowy na bazie polichloroprenu (CR) o żelowej, wysokowiskozowej konsystencji, przeznaczony do nanoszenia szpachelką. Gęsty żel nie spływa z pionowych powierzchni, co jest kluczową zaletą przy okleinowaniu krawędzi i elementów o skomplikowanych kształtach. Sprawdza się do łączenia materiałów drewnopochodnych z fornirami, dekoracyjnymi laminatami warstwowymi (HPL), foliami metalowymi oraz korkiem.",
        specs: [
          { label: "Baza", value: "Polichloropren (CR)" },
          { label: "Konsystencja", value: "Żelowa (Supra-Gel)" },
          { label: "Gęstość", value: "ok. 0,914 g/cm³" },
          { label: "Metoda nanoszenia", value: "Szpachelka" },
          { label: "Nanoszenie", value: "Obustronne" },
          { label: "Min. temp. pracy", value: "+15 °C" },
          { label: "Odporność termiczna", value: "do ok. +80 °C" },
          { label: "Obróbka po sklejeniu", value: "Natychmiast" },
          { label: "Wytrzymałość końcowa", value: "po ok. 8 dniach" },
          { label: "Zawiera toluen", value: "Tak – oznakowanie EU" },
          { label: "Czyściwo", value: "Kleiberit 820.0" },
        ],
        applications: "Klejenie płyt drewnopochodnych z fornirami naturalnymi · dekoracyjne laminaty warstwowe (HPL, CPL) · folie metalowe · korek z korkiem i z materiałami drewnopochodnymi · postforming metodą kontaktową.",
        note: "Technika: klej nanosić równomiernie szpachelką na obydwie powierzchnie. Odczekać ok. 10–15 min na odparowanie. Złączyć pod dużym naciskiem – natychmiastowe wiązanie nie pozwala na korektę. Do sklejeń wymagających odporności termicznej powyżej +80°C stosować 114.5 z utwardzaczem H801/F802.",
      },
    },
  },
  {
    categorySlug: "contact",
    product: {
      name: "KLEIBERIT® 114.5",
      code: "114.5",
      description:
        "Kleiberit 114.5 – klej kontaktowy polychloroprenowy bez toluenu, do nanoszenia pędzlem. HPL, laminaty, guma, termoplasty, metale, drewno. Z utwardzaczem H801: odporność do ponad 100 °C, wytrzymałość końcowa po 3 dniach. Op. 0,7–25 kg.",
      type: "Klej kontaktowy",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 114.5 to klej kontaktowy na bazie polichloroprenu o szerokim zakresie zastosowania, przeznaczony do nanoszenia pędzlem. Kluczową cechą odróżniającą go od 120.0 Supra-Gel jest brak toluenu – mniej agresywna mieszanka rozpuszczalnikowa, lepsza do stosowania na powierzchniach wrażliwych tworzyw sztucznych. Dzięki opcjonalnemu dodatkowi utwardzacza H801 lub F802 (3%) produkt osiąga odporność termiczną powyżej +100°C.",
        keyFeature: "Bez toluenu – bezpieczniejszy skład rozpuszczalnikowy vs 120.0 Supra-Gel. Zalecany przy klejeniu tworzyw sztucznych wrażliwych na agresywne rozpuszczalniki oraz w miejscach o ograniczonej wentylacji.",
        specs: [
          { label: "Baza", value: "Polichloropren (CR)" },
          { label: "Toluen", value: "Nie zawiera" },
          { label: "Metoda nanoszenia", value: "Pędzel" },
          { label: "Czas odpowietrzania", value: "10–20 min (bez utw.) / 10–15 min (z utw.)" },
          { label: "Odporność termiczna", value: "do +80 °C / do +100°C+ z utw." },
          { label: "Utwardzacz", value: "H801 lub F802 – 3%" },
          { label: "Obróbka po sklejeniu", value: "Natychmiast" },
          { label: "Wytrzymałość końcowa", value: "3 dni (z utw.) / ok. 8 dni (bez utw.)" },
          { label: "Czyściwo", value: "Kleiberit 820.0" },
          { label: "Oznakowanie EU", value: "Wymagane, łatwopalny" },
        ],
        applications: "Duroplasty (HPL, CPL) z drewnem i metalem · termoplasty z drewnem i metalem (PMMA, PA, PC, ABS, NBR, PS, ceramika, GFK) · wulkanizowana guma z drewnem i metalem · folie ołowiane (z utwardzaczem) · metale: stal ocynkowana, aluminium, miedź, mosiądz. Nie stosować do pianki PS.",
        note: "Utwardzacz H801/F802 (3%): wyraźna poprawa przyczepności z metalami, odporności na chemikalia i wilgoć oraz odporności termicznej (z 80°C do ponad 100°C).",
      },
    },
  },
  {
    categorySlug: "contact",
    product: {
      name: "KLEIBERIT® 152.5",
      code: "152.5",
      description:
        "Kleiberit 152.5 – niskowiskozowy klej kontaktowy CR do natrysku (dysza 1,3–1,7 mm, 3–4 bar). Pianki, tkaniny, wykładziny PVC i linoleum, papier, postforming. Lepkość 600 mPa·s, –30 do +80°C. Z utwardzaczem 801.0: wytrzymałość po 3 dniach. Op. 4,5–170 kg.",
      type: "Klej kontaktowy",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 152.5 (kolor czerwony) i 152.0 (kolor beżowy) to kleje kontaktowe na bazie polichloroprenu o bardzo niskiej lepkości (600 mPa·s), zoptymalizowane do nanoszenia natryskiem pistoletem z dyszą 1,3–1,7 mm przy ciśnieniu 3–4 bar. Przeznaczone głównie do łączenia pianek z tkaninami i drewnem, klejenia wykładzin podłogowych oraz postformingu. Kolor czerwony 152.5 służy jako oznaczenie identyfikacyjne warstwy klejowej – po naniesieniu natychmiast widać, które miejsca zostały pokryte.",
        specs: [
          { label: "Baza", value: "Polichloropren (CR)" },
          { label: "Lepkość (20°C)", value: "600 ± 100 mPa·s" },
          { label: "Gęstość", value: "ok. 0,840 g/cm³" },
          { label: "Metoda nanoszenia", value: "Natrysk / maszynowo" },
          { label: "Dysza natrysku", value: "1,3–1,7 mm" },
          { label: "Ciśnienie robocze", value: "3–4 bar" },
          { label: "Zużycie", value: "100–150 g/m² / pow." },
          { label: "Czas odpowietrzania", value: "4–6 min (bez utw.) / 2–5 min (z utw.)" },
          { label: "Utwardzacz / żywotność", value: "801.0 (5%) · ok. 6 h" },
          { label: "Odporność termiczna", value: "–30 °C do +80 °C" },
          { label: "Wytrzymałość końcowa", value: "3 dni (z utw.) / 8 dni (bez)" },
          { label: "Opakowania", value: "4,5 / 24 / 170 kg" },
        ],
        applications: "Pianki (z wyjątkiem PS) z tkaninami, drewnem i materiałami odpornymi na rozpuszczalniki · papier i karton · wykładziny podłogowe PCV, linoleum i dywanowe w systemach podłóg podniesionych · drewno z materiałami drewnopochodnymi · postforming metodą kontaktową.",
        note: "Docisk: materiały elastyczne min. 0,3 N/mm², materiały sztywne min. 0,5 N/mm². Czyściwo/rozcieńczalnik: Kleiberit 820.0.",
      },
    },
  },
];

export const productCategories: ProductCategory[] = [
  {
    slug: "pur-hot-melts",
    title: "Termotopliwe kleje PUR",
    icon: Zap,
    description:
      "Reaktywne kleje poliuretanowe – idealne do okleinowania krawędzi i laminowania, gwarantujące odporność na temperaturę i wilgoć.",
    matchTypes: ["Termotopliwy PUR"],
  },
  {
    slug: "pvac",
    title: "Kleje PVAc",
    icon: TreePine,
    description:
      "Białe kleje równiez z normą D3/D4 – idealne rozwiązania do montażu mebli i łączenia elementów drewnianych.",
    matchTypes: ["PVAc"],
  },
  {
    slug: "eva-hot-melts",
    title: "Termotopliwe kleje EVA",
    icon: Layers,
    description:
      "Uniwersalne kleje EVA do okleinowania, laminowania i formowania profili.",
    matchTypes: ["Termotopliwe EVA"],
  },
  {
    slug: "montage",
    title: "Kleje i pianki montażowe",
    icon: Hammer,
    description:
      "Kleje oraz pianki do montażu i łączenia elementów w budownictwie i aranżacji wnętrz – trwałość i niezawodność.",
    matchTypes: ["Montaż", "Pianka montażowa"],
    subcategories: [
      {
        title: "Pianki montażowe PUR",
        description: "Dwu- i jednokomponentowe pianki PUR do montażu ościeżnic, schodów oraz uszczelnień ognioodpornych.",
        matchTypes: ["Pianka montażowa"],
      },
      {
        title: "Kleje montażowe",
        description: "Elastyczne kleje STP i PUR do klejenia bez gwoździ – listwy, lustra, panele, ceramika, drewno i metal.",
        matchTypes: ["Montaż"],
      },
    ],
  },
  {
    slug: "pur",
    title: "Kleje poliuretanowe",
    icon: FlaskConical,
    description:
      "Jedno- i dwukomponentowe kleje poliuretanowe do klejenia konstrukcyjnego, łączenia na mikrowczepy i laminowania.",
    matchTypes: ["PUR"],
  },
  {
    slug: "contact",
    title: "Kleje kontaktowe",
    icon: Paintbrush,
    description:
      "Kleje kontaktowe do laminowania HPL/CPL oraz klejenia powierzchniowego w produkcji mebli i paneli.",
    matchTypes: ["Klej kontaktowy"],
  },
  {
    slug: "cleaners",
    title: "Czyściwa",
    icon: SprayCan,
    description:
      "Środki czyszczące i granulaty do konserwacji maszyn klejowych – usuwanie resztek klejów EVA i PUR z systemów hot melt.",
    matchTypes: ["Czyściwo"],
  },
  {
    slug: "primer",
    title: "Primery",
    icon: Shield,
    description:
      "Środki gruntujące do przygotowania powierzchni przed klejeniem – zwiększają przyczepność na trudnych podłożach.",
    matchTypes: ["Primer"],
  },
];

export interface ProductWithSector extends Product {
  sectorName: string;
  sectorSlug: string;
}

export interface ProductSectorOccurrence {
  product: Product;
  sectorName: string;
  sectorSlug: string;
}

export function getProductByCode(code: string): {
  product: Product | undefined;
  sectorOccurrences: ProductSectorOccurrence[];
  standaloneEntry: { categorySlug: string; product: Product } | undefined;
  category: ProductCategory | undefined;
} {
  const sectorOccurrences: ProductSectorOccurrence[] = [];
  for (const sector of sectors) {
    for (const p of sector.products) {
      if (p.code === code) {
        sectorOccurrences.push({ product: p, sectorName: sector.name, sectorSlug: sector.slug });
      }
    }
  }
  const standaloneEntry = standaloneProducts.find((e) => e.product.code === code);
  const product = standaloneEntry?.product ?? sectorOccurrences[0]?.product;
  const category = product
    ? productCategories.find((c) => c.matchTypes.includes(product.type))
    : undefined;
  return { product, sectorOccurrences, standaloneEntry, category };
}

export function getProductsByCategory(slug: string): {
  category: ProductCategory | undefined;
  products: ProductWithSector[];
} {
  const category = productCategories.find((c) => c.slug === slug);
  if (!category) return { category: undefined, products: [] };

  const products: ProductWithSector[] = [];
  const seen = new Set<string>();

  // Products from sectors
  for (const sector of sectors) {
    for (const product of sector.products) {
      if (category.matchTypes.includes(product.type) && !seen.has(product.code)) {
        seen.add(product.code);
        products.push({
          ...product,
          sectorName: sector.name,
          sectorSlug: sector.slug,
        });
      }
    }
  }

  // Standalone products (not tied to any sector)
  for (const entry of standaloneProducts) {
    if (entry.categorySlug === slug && !seen.has(entry.product.code)) {
      seen.add(entry.product.code);
      products.push({
        ...entry.product,
        sectorName: "",
        sectorSlug: "",
      });
    }
  }

  return { category, products };
}
