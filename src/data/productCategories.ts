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
      name: "KLEIBERIT® 304.4 EPI",
      code: "304.4",
      description:
        "Specjalistyczny klej EPI D4 do drewna egzotycznego (teak, merbau, bangkirai). Z utwardzaczem 808.0 (15%), D4, WATT 91, BRL 2339, JAIA F****. Do schodów zewnętrznych i tarasów.",
      type: "PVAc",
      image: "/placeholder.svg",
      badge: "EPI · D4",
    },
  },
  {
    categorySlug: "pvac",
    product: {
      name: "KLEIBERIT® 316.0",
      code: "316.0",
      description:
        "Wyspecjalizowany klej PVAc do kołków i miniwczepów. Ultra-niska lepkość 470 mPa·s – dysze nie zatykają się, doskonałe właściwości natryskowe. Do automatów kołkowych, łatarek sęków. Op. 4,5–26 kg.",
      type: "PVAc",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "pvac",
    product: {
      name: "KLEIBERIT® 322.1",
      code: "322.1",
      description:
        "Specjalna dyspersja PVAc do fornirowania płyt wiórowych i stolarskich oraz klejenia HPL, folii papierowych i laminatów. Czas otwarty do 6 min, bez EU oznakowania. Op. 34 / 130 kg.",
      type: "PVAc",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "pvac",
    product: {
      name: "KLEIBERIT® 323.0",
      code: "323.0",
      description:
        "Wielozadaniowy klej PVAc D2 do fug, kołków, obrzeży ręcznych, HPL, korpusów mebli i postformingu. Wysoka wytrzymałość początkowa, fuga bezbarwna. Mrozoodporny do –25°C. Op. 10–130 kg.",
      type: "PVAc",
      image: "/placeholder.svg",
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
        "Kleiberit 761.8 – specjalistyczny proszek do czyszczenia walców w maszynach flat lamination przetwarzających PUR HM. Proszek roztopić w zbiorniku, uruchomić bieg wsteczny walca – resztki kleju usuwane efektywnie. Op. wiadro 20 kg.",
      type: "Czyściwo",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 761.8 to proszek w formie sypkiej, przeznaczony wyłącznie do czyszczenia walców nanoszących w maszynach flat lamination przetwarzających PUR HM. Technika: proszek stopić w urządzeniu, a następnie uruchamiając bieg wsteczny walca usunąć resztki kleju.",
        specs: [
          { label: "Forma", value: "Proszek (unikalna!)" },
          { label: "Technika", value: "Roztopić → bieg wsteczny walca" },
          { label: "Opakowanie", value: "Wiadro 20 kg" },
        ],
        applications: "Czyszczenie walców nanoszących w maszynach flat lamination z klejami PUR HM (706.x, 709.x, 711.x).",
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
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 702.5.50 ME",
      code: "702.5.50",
      description:
        "Mikroemisyjny klej PUR do okleinowania profili wewnętrznych foliami PVC i papierami dekoracyjnymi. MDI <0,1%, bez obowiązkowego oznakowania UE. Odporność do +140 °C i –40 °C. Posuw 20–50 m/min.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "Mikroemisyjny",
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 702.8.49",
      code: "702.8.49",
      description:
        "Reaktywny klej PUR do okleinowania profili z MDF i PVC foliami PVC i papierami dekoracyjnymi, w zastosowaniach wewnętrznych. Odporność do +150 °C i –30 °C, posuw 20–50 m/min, op. 20–190 kg.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 704.0 Supramelt PUR",
      code: "704.0",
      description:
        "Reaktywny klej PUR do opłaszczowywania profili PVC i aluminium foliami PVC, akrylanowymi i fornirem. Odporność od –40 °C do +150 °C, atest RAL GZ 716/1. Temp. pracy 120–140 °C. Do zastosowań zewnętrznych.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "RAL GZ 716/1",
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 704.5",
      code: "704.5",
      description:
        "Reaktywny PUR do opłaszczowywania profili PVC i aluminium foliami PVC, akrylowymi i fornirami. Atest RAL GZ 716, odporność –40 °C do +150 °C, temp. pracy 120–140 °C, posuw 5–40 m/min. Op. 0,3–200 kg.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "RAL GZ 716",
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 707.9.51 ME",
      code: "707.9.51",
      description:
        "Reaktywny klej PUR ME do okleinowania obrzeży ABS, PVC, HPL, CPL i forniru – wariant biały. Odporność do +150 °C i –30 °C, stabilność w stapialniku min. 24 h. Idealny do białych i jasnych obrzeży.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "Mikroemisyjny",
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 707.9.58 ME",
      code: "707.9.58",
      description:
        "Reaktywny klej PUR ME do okleinowania obrzeży ABS, PVC, HPL, CPL i forniru – wariant transparentny. Odporność do +150 °C i –30 °C. Uniwersalny – niewidoczna spoina pasuje do każdego koloru obrzeża.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "Mikroemisyjny",
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 709.3.50 ME",
      code: "709.3.50",
      description:
        "Mikroemisyjny klej PUR do kaszerowania frontów foliami wysokopołyskowymi. Wyjątkowo niska lepkość (8 000 mPa·s), ultra-gładka spoina, czas otwarty <3 min, MDI <0,1%. Do frontów i płyt meblowych.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "Mikroemisyjny",
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 711.0",
      code: "711.0",
      description:
        "Reaktywny klej PUR do kaszerowania płyt meblowych foliami z tworzyw sztucznych ABS, PET i innymi materiałami trudnymi do zwilżenia. Wysoka wytrzymałość, odporność na wilgoć i ciepło. Do maszyn flat lamination.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "pur-hot-melts",
    product: {
      name: "KLEIBERIT® 711.0.02 ME",
      code: "711.0.02",
      description:
        "Reaktywny klej PUR do kaszerowania powierzchni transparentnymi foliami z tworzyw sztucznych. Temp. pracy 110–130 °C (maks.!), stabilność UV, MDI <0,1%. Lepkość 8 000 mPa·s. Op. 20–50 kg.",
      type: "Termotopliwy PUR",
      image: "/placeholder.svg",
      badge: "Mikroemisyjny",
    },
  },
  // ── EVA termotopliwe (standalone) ──
  {
    categorySlug: "eva-hot-melts",
    product: {
      name: "KLEIBERIT® 788.7",
      code: "788.7",
      description:
        "Klej termotopliwy EVA do obrzeży ABS, PVC, poliestru, forniru i papieru. Odporność do +100 °C i –30 °C, długi czas otwarty, prędkość posuwu 5–20 m/min. Granulat 5–25 kg.",
      type: "Termotopliwe EVA",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "eva-hot-melts",
    product: {
      name: "KLEIBERIT® 774.4",
      code: "774.4",
      description:
        "Termotopliwy klej EVA do okleinowania obrzeży. Średnia lepkość, wysoka siła wiązania, granulat kości słoniowej lub biały. Idealny do ręcznych i wolnobieżnych okleiniarek. Opakowanie 25 kg.",
      type: "Termotopliwe EVA",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "eva-hot-melts",
    product: {
      name: "KLEIBERIT® 743.6",
      code: "743.6",
      description:
        "Termotopliwy klej EVA do okleinowania listw, profili i płyt MDF/wiórowych żywicznymi foliami dekoracyjnymi. Do maszyn profile wrapping. Wysoka wytrzymałość początkowa, czysta obróbka.",
      type: "Termotopliwe EVA",
      image: "/placeholder.svg",
    },
  },
  {
    categorySlug: "eva-hot-melts",
    product: {
      name: "KLEIBERIT® 743.7",
      code: "743.7",
      description:
        "Wysoce płynny klej EVA do okleinowania profili cienkimi foliami papierowymi i kaszerowania pianek tekstyliami. Posuw do 50 m/min, lepkość 3500 mPa·s (180 °C). Op. 20 kg / 750 kg.",
      type: "Termotopliwe EVA",
      image: "/placeholder.svg",
    },
  },
  // ── PUR (standalone) ──
  {
    categorySlug: "pur",
    product: {
      name: "KLEIBERIT® 501.4",
      code: "501.4",
      description:
        "Kleiberit seria 501 – jednokomponentowe kleje PUR klasy D4 do drewna, materiałów drewnopochodnych i mineralnych. Cztery warianty: 501.0 (klasyk, 20–25 min), 501.4 (montaż, 4 min), 501.6 (formowanie, 70 min), 501.8 (szybki, 10 min). Zgodne z WATT 91.",
      type: "PUR",
      image: "/placeholder.svg",
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
    },
  },
  {
    categorySlug: "pur",
    product: {
      name: "KLEIBERIT® 510.3.4",
      code: "510.3.4",
      description:
        "Kleiberit seria 510.3 – certyfikowane kleje 1K PUR do nośnych elementów drewnianych: klejonki (BSH), drewna KVH i CLT wg EN 15425:2017. Trzy warianty czasu oczekiwania: .4 (4 min), .15 (15 min), .30 (30 min). D4, WATT 91. Op. 0,8–1100 kg.",
      type: "PUR",
      image: "/placeholder.svg",
      badge: "EN 15425",
    },
  },
  {
    categorySlug: "pur",
    product: {
      name: "KLEIBERIT® 510.3.15",
      code: "510.3.15",
      description:
        "Kleiberit seria 510.3 – certyfikowane kleje 1K PUR do nośnych elementów drewnianych: klejonki (BSH), drewna KVH i CLT wg EN 15425:2017. Trzy warianty czasu oczekiwania: .4 (4 min), .15 (15 min), .30 (30 min). D4, WATT 91. Op. 0,8–1100 kg.",
      type: "PUR",
      image: "/placeholder.svg",
      badge: "EN 15425",
    },
  },
  {
    categorySlug: "pur",
    product: {
      name: "KLEIBERIT® 510.3.30",
      code: "510.3.30",
      description:
        "Kleiberit seria 510.3 – certyfikowane kleje 1K PUR do nośnych elementów drewnianych: klejonki (BSH), drewna KVH i CLT wg EN 15425:2017. Trzy warianty czasu oczekiwania: .4 (4 min), .15 (15 min), .30 (30 min). D4, WATT 91. Op. 0,8–1100 kg.",
      type: "PUR",
      image: "/placeholder.svg",
      badge: "EN 15425",
    },
  },
  {
    categorySlug: "pur",
    product: {
      name: "KLEIBERIT® 541.6",
      code: "541.6",
      description:
        "Kleiberit 541.6 – 2K PUR do klejenia styropianu/pianki PUR z blachą, GRP i płytami sandwich. Do elementów izolacyjnych do +90 °C i filtrów olejowych/diesel. Mieszanka A:B = 4:1, żywotność 45 min, Shore D 80. Op. 10–250 kg.",
      type: "PUR",
      image: "/placeholder.svg",
    },
  },
  // ── Montażowe (standalone) ──
  {
    categorySlug: "montage",
    product: {
      name: "KLEIBERIT® 601.1",
      code: "601.1",
      description:
        "Kleiberit 601.1 – elastyczny klej STP 1K do montażu luster (DIN EN 1036), szkła, drewna i metali wewnątrz i na zewnątrz. Shore A 73, czas kożuszenia ok. 8 min, VOC A+, EC1 plus R. 4 kolory. Op. 12×280 ml.",
      type: "Montaż",
      image: "/placeholder.svg",
      badge: "EC1 plus R",
    },
  },
  {
    categorySlug: "montage",
    product: {
      name: "KLEIBERIT® 584.0",
      code: "584.0",
      description:
        "Kleiberit 584.0 – elastyczny klej montażowy STP 1K bez izocyjanianów, ftalanów, silikonu i rozpuszczalników. Shore A 50, czas kożuszenia 25 min, bez obowiązkowego oznakowania EU. Listwy, panele, ceramika, drewno. Biały/czarny. Op. 300/600 ml.",
      type: "Montaż",
      image: "/placeholder.svg",
    },
  },
  // ── Pianki montażowe (standalone) ──
  {
    categorySlug: "montage",
    product: {
      name: "KLEIBERIT® 535.0 SupraFoam",
      code: "535.0",
      description:
        "Kleiberit 535.0 SupraFoam – dwukomponentowa pianka PUR do montażu ościeżnic drzwi i izolacji okien. Bez gazu napędowego, bez naddatku, utwardza się niezależnie od wilgoci w 15–20 min. Klejowalna po 1 min, tnalna po 3–5 min, rozporki po 20 min. EC1 plus R, B2. Op. 16×250 g.",
      type: "Pianka montażowa",
      badge: "EMICODE EC1",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 535.0 SupraFoam to dwukomponentowa pianka PUR w podwójnej kartuszy, utwardzająca się w ciągu 15–20 minut niezależnie od wilgoci powietrza. To fundamentalna przewaga nad piankami 1K: nie wymaga zwilżania podłoża, działa pewnie nawet w bardzo suchych warunkach i nie wykazuje naddatku po utwardzeniu. Posiada certyfikat GEV Emicode EC1 plus R (bardzo niska emisja LZO) oraz klasę VOC A+.",
        keyFeature: "Kluczowe zalety 2K vs 1K: utwardza się bez wilgoci · brak naddatku (kein Nachtrieb) · pełne utwardzenie w 15–20 min (vs kilkanaście godzin dla 1K) · można zdejmować rozporki po ok. 20 min · nie wymaga zwilżania muru.",
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
        "Kleiberit 536.0 StairMaster – ekspansywna 2K pianka klejąca PUR do montażu stopni schodowych, progów drzwi i parapetów z drewna, kamienia lub metalu. Obciążalna po 20 min, bez gazu napędowego, bez naddatku, B2. Op. 125 g / 250 g.",
      type: "Pianka montażowa",
      image: "/placeholder.svg",
      details: {
        body: "Kleiberit 536.0 StairMaster to dwukomponentowa, ekspansywna pianka klejąca PUR do racjonalnego montażu stopni schodowych, podstopnic, progów drzwiowych i parapetów okiennych z drewna, kamienia i metalu. Ekspansywna formuła wypełnia fugi i nierówności pianką o drobnych porach, tworząc trwałe, szczelne połączenie odporne na ściskanie – bez widocznych śrub czy gwoździ. Klejona powierzchnia obciążalna już po 20 minutach.",
        specs: [
          { label: "Typ", value: "2K PUR, ekspansywny" },
          { label: "Obciążalność", value: "po ok. 20 min" },
          { label: "Naddatek", value: "Brak (kein Nachtrieb)" },
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
        "Kleiberit 585.5 – trudnopalna 1K pianka PUR klasy B wg EN 13501-1 (różowa) do uszczelnień ognioodpornych między masywnym materiałem mineralnym lub metalowym. Gęstość 16 kg/m³, λ=0,036 W/mK, odporność –40 do +90°C, wydajność ok. 40–45 l (750 ml). Op. 12×750 ml.",
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
