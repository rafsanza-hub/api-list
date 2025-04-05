export interface ApiItem {
  id: string;
  name: string;
  description: string;
  url: string; 
  category: string;
  provider: string; 
  isOpenSource: boolean; 
  documentationUrl: string;
  tags: string[];
}

export const apiData: ApiItem[] = [
  {
    id: "1",
    name: "BIN Checker Indonesia",
    description: "API untuk memeriksa Bank Identification Number (BIN) kartu pembayaran di Indonesia.",
    url: "https://bincheck.io/api/v1/info/{BIN}", // Contoh dari sumber lain, perlu verifikasi
    category: "Keuangan",
    provider: "Berbagai Penyedia (Contoh: bincheck.io)",
    isOpenSource: false, // Tergantung penyedia
    documentationUrl: "https://bincheck.io/developers", // Contoh
    tags: ["keuangan", "perbankan", "kartu kredit", "pembayaran", "bin"]
  },
  {
    id: "2",
    name: "Raja Ongkir",
    description: "API populer untuk kalkulasi ongkos kirim berbagai kurir di Indonesia.",
    url: "https://rajaongkir.com/api",
    category: "Logistik",
    provider: "Raja Ongkir",
    isOpenSource: false,
    documentationUrl: "https://rajaongkir.com/dokumentasi",
    tags: ["logistik", "pengiriman", "e-commerce", "ongkir"]
  },
  {
    id: "3",
    name: "BMKG API (Info Gempa Terkini)",
    description: "Endpoint JSON resmi BMKG untuk data gempa bumi M 5.0+ terkini.",
    url: "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json",
    category: "Cuaca & Bencana",
    provider: "Badan Meteorologi, Klimatologi, dan Geofisika (BMKG)",
    isOpenSource: true, // Data publik
    documentationUrl: "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json", // URL data itu sendiri
    tags: ["cuaca", "gempa", "bencana alam", "pemerintah", "open data", "json", "bmkg"]
  },
  {
    id: "4",
    name: "Cek Resi API (Berbagai Penyedia)",
    description: "API untuk melacak status pengiriman dari berbagai kurir (banyak penyedia komersial & komunitas).",
    url: "https://binderbyte.com/products/cek-resi", // Contoh penyedia: Binderbyte
    category: "Logistik",
    provider: "Berbagai Penyedia (e.g., Binderbyte, Cekresi.co.id)",
    isOpenSource: false, // Tergantung penyedia
    documentationUrl: "https://binderbyte.com/docs/cek-resi/introduction", // Contoh
    tags: ["logistik", "pelacakan", "pengiriman", "resi"]
  },
  {
    id: "5",
    name: "KawalCOVID19 API (Data Historis)",
    description: "API untuk informasi statistik historis COVID-19 di Indonesia (Proyek diarsipkan).",
    url: "https://github.com/kawalcovid19/kawalcovid19.id", // Sumber utama proyek
    category: "Kesehatan",
    provider: "KawalCOVID19 (Komunitas - Diarsipkan)",
    isOpenSource: true, // Kode proyek
    documentationUrl: "https://github.com/kawalcovid19/kawalcovid19.id/blob/master/README.md",
    tags: ["kesehatan", "covid", "statistik", "open data", "historis"]
  },
  {
    id: "6",
    name: "BPS Open API",
    description: "API resmi Badan Pusat Statistik untuk data statistik nasional.",
    url: "https://webapi.bps.go.id/",
    category: "Statistik",
    provider: "Badan Pusat Statistik (BPS)",
    isOpenSource: true, // Data publik
    documentationUrl: "https://webapi.bps.go.id/documentation",
    tags: ["statistik", "demografi", "ekonomi", "pemerintah", "open data", "bps"]
  },
  {
    id: "7",
    name: "Midtrans Payment Gateway",
    description: "API gateway pembayaran untuk integrasi berbagai metode pembayaran.",
    url: "https://api.midtrans.com/", // Base URL API
    category: "Keuangan",
    provider: "Midtrans (GoTo Financial)",
    isOpenSource: false,
    documentationUrl: "https://docs.midtrans.com/",
    tags: ["pembayaran", "fintech", "e-commerce", "gateway"]
  },
  {
    id: "8",
    name: "Kode Pos Indonesia API (Komunitas)",
    description: "API database kode pos seluruh wilayah di Indonesia (dari daftar Farizdotid).",
    url: "https://kodepos.vercel.app/", // Contoh dari daftar
    category: "Alamat",
    provider: "Komunitas (via Farizdotid's List - e.g., `kodepos.vercel.app`)",
    isOpenSource: true, // Biasanya kode sumber scraper/API tersedia
    documentationUrl: "https://github.com/farizdotid/DAFTAR-API-LOKAL-INDONESIA#kode-pos",
    tags: ["kode pos", "alamat", "lokasi", "utilitas", "komunitas", "scraping"]
  },
  {
    id: "9",
    name: "API PDDIKTI (Pendidikan Tinggi)",
    description: "API untuk mengakses data pendidikan tinggi dari PDDIKTI Kemdikbud.",
    url: "https://api-frontend.kemdikbud.go.id/",
    category: "Pendidikan",
    provider: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemdikbudristek)",
    isOpenSource: true, // Data publik
    documentationUrl: "https://api-frontend.kemdikbud.go.id/docs", // Perlu verifikasi/login?
    tags: ["pendidikan", "perguruan tinggi", "mahasiswa", "dosen", "pemerintah", "open data", "pddikti"]
  },
  {
    id: "10",
    name: "API Kurs Bank Indonesia",
    description: "API resmi Bank Indonesia untuk data kurs referensi JISDOR dan kurs transaksi BI.",
    url: "https://api.bi.go.id/",
    category: "Keuangan",
    provider: "Bank Indonesia (BI)",
    isOpenSource: true, // Data publik
    documentationUrl: "https://api.bi.go.id/driver/portal/apis?query=kurs", // Cari API kurs di portal BI
    tags: ["keuangan", "nilai tukar", "mata uang", "forex", "jisdor", "bi", "pemerintah", "open data"]
  },
  {
    id: "11",
    name: "Berita Indonesia API (Komunitas)",
    description: "API agregator berita dari berbagai sumber di Indonesia (dari daftar Farizdotid).",
    url: "https://berita-api.vercel.app/", // Contoh dari daftar
    category: "Berita",
    provider: "Komunitas (via Farizdotid's List - e.g., `berita-api.vercel.app`)",
    isOpenSource: true, // Biasanya kode sumber scraper/API tersedia
    documentationUrl: "https://github.com/farizdotid/DAFTAR-API-LOKAL-INDONESIA#news",
    tags: ["berita", "media", "informasi", "komunitas", "scraping"]
  },
  {
    id: "12",
    name: "Tokopedia Open API",
    description: "API untuk mengintegrasikan layanan dengan marketplace Tokopedia (untuk seller/partner).",
    url: "https://developer.tokopedia.com/",
    category: "E-Commerce",
    provider: "Tokopedia",
    isOpenSource: false,
    documentationUrl: "https://developer.tokopedia.com/openapi/guide",
    tags: ["e-commerce", "marketplace", "retail", "penjualan"]
  },
  // --- Tambahan API Baru & Update Berdasarkan Referensi ---
  {
    id: "13",
    name: "Xendit Payment Gateway",
    description: "API gateway pembayaran populer lainnya di Indonesia dan Asia Tenggara.",
    url: "https://api.xendit.co/",
    category: "Keuangan",
    provider: "Xendit",
    isOpenSource: false,
    documentationUrl: "https://developers.xendit.co/api-reference/",
    tags: ["pembayaran", "fintech", "e-commerce", "gateway"]
  },
  {
    id: "14",
    name: "Wilayah Indonesia API (Komunitas)",
    description: "API untuk data provinsi, kota/kabupaten, kecamatan, dan kelurahan di Indonesia (dari daftar Farizdotid).",
    url: "https://github.com/emsifa/api-wilayah-indonesia", // Referensi Proyek Populer
    category: "Alamat",
    provider: "Komunitas (e.g., emsifa)",
    isOpenSource: true,
    documentationUrl: "https://github.com/emsifa/api-wilayah-indonesia",
    tags: ["alamat", "lokasi", "geografi", "provinsi", "kota", "kecamatan", "kelurahan", "open data"]
  },
  {
    id: "15",
    name: "Al-Quran API (Komunitas)",
    description: "API untuk mengakses teks Al-Quran, terjemahan, tafsir, dan audio (dari daftar Farizdotid).",
    url: "https://api.quran.sutanlab.id", // Contoh dari daftar
    category: "Religi",
    provider: "Komunitas (e.g., sutanlab, Equran.id)",
    isOpenSource: true, // Banyak implementasi open source
    documentationUrl: "https://github.com/farizdotid/DAFTAR-API-LOKAL-INDONESIA#al-quran",
    tags: ["religi", "islam", "quran", "tafsir", "terjemahan", "open data", "komunitas"]
  },
  {
    id: "16",
    name: "Jadwal Sholat API (Komunitas)",
    description: "API untuk mendapatkan jadwal waktu sholat berdasarkan lokasi di Indonesia (dari daftar Farizdotid).",
    url: "https://api.myquran.com/v1/sholat/kota/cari/{nama_kota}", // Contoh dari MyQuran (daftar Farizdotid)
    category: "Religi",
    provider: "Komunitas (e.g., MyQuran, Fathurrahman)",
    isOpenSource: true, // Beberapa implementasi open source
    documentationUrl: "https://github.com/farizdotid/DAFTAR-API-LOKAL-INDONESIA#jadwal-sholat",
    tags: ["religi", "islam", "jadwal sholat", "utilitas", "komunitas"]
  },
  {
    id: "17",
    name: "Shopee Open Platform",
    description: "API untuk developer mengintegrasikan aplikasi dengan ekosistem Shopee.",
    url: "https://open.shopee.com/",
    category: "E-Commerce",
    provider: "Shopee",
    isOpenSource: false,
    documentationUrl: "https://open.shopee.com/documents?module=63&type=2",
    tags: ["e-commerce", "marketplace", "retail", "penjualan"]
  },
  {
    id: "18",
    name: "Lazada Open Platform",
    description: "API untuk developer mengintegrasikan solusi dengan platform Lazada.",
    url: "https://open.lazada.com/",
    category: "E-Commerce",
    provider: "Lazada",
    isOpenSource: false,
    documentationUrl: "https://open.lazada.com/doc/doc.htm",
    tags: ["e-commerce", "marketplace", "retail", "penjualan"]
  },
  {
    id: "19",
    name: "Biteship API (Agregator Logistik)",
    description: "API agregator logistik untuk cek ongkir dan booking pengiriman.",
    url: "https://biteship.com/id/api",
    category: "Logistik",
    provider: "Biteship",
    isOpenSource: false,
    documentationUrl: "https://docs.biteship.com/",
    tags: ["logistik", "pengiriman", "agregator", "e-commerce", "ongkir"]
  },
  {
    id: "20",
    name: "Film Indonesia API (Komunitas)",
    description: "API tidak resmi untuk mendapatkan data film yang sedang tayang atau populer di Indonesia (dari daftar Farizdotid).",
    url: "https://api-lk21.vercel.app/", // Contoh dari daftar (perlu verifikasi stabilitas)
    category: "Hiburan",
    provider: "Komunitas (via Farizdotid's List - Scraping)",
    isOpenSource: true, // Biasanya kode scraper tersedia
    documentationUrl: "https://github.com/farizdotid/DAFTAR-API-LOKAL-INDONESIA#film",
    tags: ["hiburan", "film", "bioskop", "sinema", "scraping", "komunitas", "unofficial"]
  },
  {
    id: "21",
    name: "Chord Lagu API (Komunitas)",
    description: "API tidak resmi untuk mencari chord/kunci gitar lagu Indonesia (dari daftar Farizdotid).",
    url: "https://chordify.net/api/...", // Sumber potensial (perlu reverse engineering/scraping)
    category: "Hiburan",
    provider: "Komunitas (via Farizdotid's List - Scraping)",
    isOpenSource: true, // Biasanya kode scraper tersedia
    documentationUrl: "https://github.com/farizdotid/DAFTAR-API-LOKAL-INDONESIA#chord-lagu",
    tags: ["hiburan", "musik", "chord", "kunci gitar", "scraping", "komunitas", "unofficial"]
  },
  {
    id: "22",
    name: "Resep Makanan API (Komunitas)",
    description: "API tidak resmi untuk mencari resep masakan Indonesia (dari daftar Farizdotid).",
    url: "https://masak-apa-hari-ini-api.vercel.app/", // Contoh dari daftar
    category: "Makanan",
    provider: "Komunitas (via Farizdotid's List - Scraping)",
    isOpenSource: true, // Biasanya kode scraper tersedia
    documentationUrl: "https://github.com/farizdotid/DAFTAR-API-LOKAL-INDONESIA#resep-makanan",
    tags: ["makanan", "resep", "kuliner", "indonesia", "scraping", "komunitas", "unofficial"]
  },
  {
    id: "23",
    name: "KBBI API (Komunitas)",
    description: "API tidak resmi (hasil scraping) untuk mencari definisi kata dalam KBBI (dari daftar Farizdotid).",
    url: "https://kbbi-api-zhirrr.vercel.app/", // Contoh dari daftar
    category: "Bahasa",
    provider: "Komunitas (via Farizdotid's List - Scraping)",
    isOpenSource: true, // Kode scraper
    documentationUrl: "https://github.com/farizdotid/DAFTAR-API-LOKAL-INDONESIA#kbbi",
    tags: ["bahasa", "kamus", "kbbi", "indonesia", "scraping", "unofficial", "komunitas"]
  },
  {
    id: "24",
    name: "Nomor Penting API (Komunitas)",
    description: "API (atau data) berisi daftar nomor telepon penting/darurat di Indonesia (dari daftar Farizdotid).",
    url: "https://gist.githubusercontent.com/...", // Biasanya berupa file data statis
    category: "Utilitas",
    provider: "Komunitas (via Farizdotid's List)",
    isOpenSource: true, // Data publik
    documentationUrl: "https://github.com/farizdotid/DAFTAR-API-LOKAL-INDONESIA#nomor-penting",
    tags: ["utilitas", "darurat", "nomor penting", "keselamatan", "open data", "komunitas"]
  },
  {
    id: "25",
    name: "API Satu Sehat (Kemenkes)",
    description: "Platform API Kementerian Kesehatan untuk integrasi data kesehatan nasional.",
    url: "https://satusehat.kemkes.go.id/platform",
    category: "Kesehatan",
    provider: "Kementerian Kesehatan RI",
    isOpenSource: false,
    documentationUrl: "https://satusehat.kemkes.go.id/platform/docs/api/",
    tags: ["kesehatan", "pemerintah", "rekam medis", "integrasi data", "satusehat"]
  },
  {
    id: "26",
    name: "Data.go.id API (CKAN)",
    description: "API standar CKAN untuk mengakses dataset dari portal Open Data Pemerintah Indonesia.",
    url: "https://data.go.id/api/3/action/package_search", // Contoh endpoint
    category: "Pemerintahan",
    provider: "Satu Data Indonesia",
    isOpenSource: true,
    documentationUrl: "https://docs.ckan.org/en/2.9/api/",
    tags: ["pemerintah", "open data", "statistik", "dataset", "ckan"]
  },
  {
    id: "27",
    name: "Brick Financial Data API",
    description: "API agregasi data finansial (Open Finance) dari berbagai institusi.",
    url: "https://docs.onebrick.io/",
    category: "Keuangan",
    provider: "Brick",
    isOpenSource: false,
    documentationUrl: "https://docs.onebrick.io/reference/introduction",
    tags: ["keuangan", "fintech", "open finance", "agregasi data", "perbankan"]
  },
  {
    id: "28",
    name: "Finantier Open Finance API",
    description: "API Open Finance untuk akses data finansial dan inisiasi pembayaran.",
    url: "https://finantier.co/",
    category: "Keuangan",
    provider: "Finantier",
    isOpenSource: false,
    documentationUrl: "https://docs.finantier.co/",
    tags: ["keuangan", "fintech", "open finance", "agregasi data", "pembayaran"]
  },
  {
    id: "29",
    name: "Ayoconnect Open Finance API",
    description: "API untuk produk finansial digital (pembayaran tagihan, top-up, dll.).",
    url: "https://ayoconnect.id/",
    category: "Keuangan",
    provider: "Ayoconnect",
    isOpenSource: false,
    documentationUrl: "https://docs.ayoconnect.id/",
    tags: ["keuangan", "fintech", "pembayaran tagihan", "ppob", "open finance"]
  },
  {
    id: "30",
    name: "PrivyID Digital Signature API",
    description: "API untuk integrasi tanda tangan digital yang diakui hukum.",
    url: "https://developer.privy.id/",
    category: "Identitas Digital",
    provider: "PrivyID",
    isOpenSource: false,
    documentationUrl: "https://developer.privy.id/docs",
    tags: ["identitas digital", "tanda tangan digital", "esign", "keamanan", "hukum"]
  },
  {
    id: "31",
    name: "Verihubs Verification API",
    description: "API untuk verifikasi identitas (e-KTP, wajah, liveness detection).",
    url: "https://verihubs.com/",
    category: "Identitas Digital",
    provider: "Verihubs",
    isOpenSource: false,
    documentationUrl: "https://docs.verihubs.com/",
    tags: ["identitas digital", "verifikasi", "kyc", "e-ktp", "biometrik", "keamanan"]
  },
  {
    id: "32",
    name: "Nodeflux Vision AI API",
    description: "API kecerdasan buatan untuk analisis video dan gambar.",
    url: "https://nodeflux.io/",
    category: "AI/ML",
    provider: "Nodeflux",
    isOpenSource: false,
    documentationUrl: "https://docs.nodeflux.io/", // Perlu cek akses
    tags: ["ai", "machine learning", "computer vision", "analisis video", "ocr"]
  },
  {
    id: "33",
    name: "Kata.ai Conversational AI API",
    description: "API untuk membangun chatbot dan solusi percakapan AI Bahasa Indonesia.",
    url: "https://kata.ai/",
    category: "AI/ML",
    provider: "Kata.ai",
    isOpenSource: false,
    documentationUrl: "https://docs.kata.ai/",
    tags: ["ai", "machine learning", "nlp", "chatbot", "bahasa indonesia"]
  },
  {
    id: "34",
    name: "Traveloka API (Afiliasi/Partner)",
    description: "API untuk partner atau afiliasi Traveloka (akses terbatas).",
    url: "https://affiliate.traveloka.com/",
    category: "Travel",
    provider: "Traveloka",
    isOpenSource: false,
    documentationUrl: "Diberikan setelah registrasi partner",
    tags: ["travel", "tiket", "hotel", "pemesanan", "afiliasi"]
  },
  {
    id: "35",
    name: "Tiket.com API (Partner)",
    description: "API untuk partner Tiket.com (akses terbatas).",
    url: "https://www.tiket.com/partner",
    category: "Travel",
    provider: "Tiket.com",
    isOpenSource: false,
    documentationUrl: "Diberikan setelah registrasi partner",
    tags: ["travel", "tiket", "hotel", "pemesanan", "partner"]
  },
   {
    id: "36",
    name: "Harga Pangan Nasional API (SP2KP)",
    description: "API Sistem Pemantauan Pasar dan Kebutuhan Pokok Kemendag.",
    url: "https://ews.kemendag.go.id/", // Portal web, API perlu eksplorasi
    category: "Ekonomi",
    provider: "Kementerian Perdagangan RI",
    isOpenSource: true, // Data publik
    documentationUrl: "Perlu eksplorasi di situs Kemendag",
    tags: ["ekonomi", "harga pangan", "inflasi", "pemerintah", "open data"]
  },
  {
    id: "37",
    name: "Lelang Indonesia API (DJKN)",
    description: "Akses data lelang dari Direktorat Jenderal Kekayaan Negara.",
    url: "https://lelang.go.id/", // Portal web, API perlu eksplorasi
    category: "Keuangan",
    provider: "DJKN - Kemenkeu",
    isOpenSource: true, // Data publik
    documentationUrl: "Perlu eksplorasi di situs DJKN",
    tags: ["keuangan", "lelang", "aset", "pemerintah", "open data"]
  },
  {
    id: "38",
    name: "LPSE API (LKPP - ADeP)",
    description: "API Agregasi Data Penyedia untuk data pengadaan barang/jasa pemerintah.",
    url: "https://inaproc.lkpp.go.id/agregasi/adep/login.xhtml", // Portal ADeP
    category: "Pemerintahan",
    provider: "Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah (LKPP)",
    isOpenSource: true, // Data publik
    documentationUrl: "https://inaproc.lkpp.go.id/agregasi/adep/dokumen.xhtml", // Dokumen ADeP
    tags: ["pemerintah", "pengadaan", "tender", "lpse", "lkpp", "open data"]
  },
  {
    id: "39",
    name: "Cek BPOM API (Unofficial Scraper)",
    description: "API tidak resmi (scraping) untuk mengecek status registrasi produk di Badan POM.",
    url: "https://cekbpom.pom.go.id/", // Sumber scraping
    category: "Kesehatan",
    provider: "Komunitas (Scraping)",
    isOpenSource: false, // API BPOM tidak resmi
    documentationUrl: "Search GitHub 'BPOM API Scraper'",
    tags: ["kesehatan", "regulasi", "obat", "makanan", "bpom", "pemerintah", "unofficial", "scraping"]
  },
  {
    id: "40",
    name: "Kurs Pajak (Kemenkeu - Data)",
    description: "Data kurs pajak mingguan dari Kementerian Keuangan (biasanya non-API).",
    url: "https://fiskal.kemenkeu.go.id/informasi-publik/kurs-pajak", // Halaman sumber
    category: "Keuangan",
    provider: "Badan Kebijakan Fiskal - Kemenkeu",
    isOpenSource: true, // Data publik
    documentationUrl: "https://fiskal.kemenkeu.go.id/informasi-publik/kurs-pajak",
    tags: ["keuangan", "pajak", "nilai tukar", "kurs", "pemerintah", "open data"]
  },
  {
    id: "41",
    name: "API Ketersediaan Tempat Tidur RS (SIRANAP)",
    description: "Informasi ketersediaan tempat tidur RS dari Kemenkes.",
    url: "https://yankes.kemkes.go.id/app/siranap/", // Portal web SIRANAP
    category: "Kesehatan",
    provider: "Kementerian Kesehatan RI",
    isOpenSource: true, // Data publik
    documentationUrl: "https://yankes.kemkes.go.id/app/siranap/", // API spesifik mungkin terbatas
    tags: ["kesehatan", "rumah sakit", "rawat inap", "ketersediaan", "pemerintah", "open data"]
  },
  {
    id: "42",
    name: "API Indeks Kualitas Udara (IQAir/Nafas)",
    description: "Data kualitas udara dari penyedia seperti IQAir atau Nafas.",
    url: "https://www.iqair.com/indonesia", // Contoh portal IQAir
    category: "Lingkungan",
    provider: "IQAir / Nafas / Lainnya",
    isOpenSource: false, // Tergantung penyedia
    documentationUrl: "Cari 'IQAir API' atau 'Nafas API'", // Perlu API Key
    tags: ["lingkungan", "kualitas udara", "polusi", "aqi", "kesehatan"]
  },
  {
    id: "43",
    name: "Wikipedia API (ID)",
    description: "API MediaWiki untuk mengakses konten dari Wikipedia Bahasa Indonesia.",
    url: "https://id.wikipedia.org/w/api.php",
    category: "Referensi",
    provider: "Wikimedia Foundation",
    isOpenSource: true,
    documentationUrl: "https://www.mediawiki.org/wiki/API:Main_page/id",
    tags: ["referensi", "ensiklopedia", "wikipedia", "bahasa indonesia", "open data"]
  },
  {
    id: "44",
    name: "BNPB Data Bencana API (GIS)",
    description: "Akses data kejadian bencana melalui portal GIS BNPB.",
    url: "https://gis.bnpb.go.id/", // Portal GIS
    category: "Bencana",
    provider: "Badan Nasional Penanggulangan Bencana (BNPB)",
    isOpenSource: true, // Data publik
    documentationUrl: "Perlu eksplorasi API di portal GIS BNPB",
    tags: ["bencana", "pemerintah", "banjir", "longsor", "gempa", "open data", "gis"]
  },
  {
    id: "45",
    name: "GoPay API (via Midtrans/GoBiz)",
    description: "API pembayaran GoPay, terintegrasi melalui Midtrans atau GoBiz.",
    url: "https://midtrans.com/id/fitur/metode-pembayaran/gopay", // Info produk
    category: "Keuangan",
    provider: "GoPay (GoTo Financial)",
    isOpenSource: false,
    documentationUrl: "https://docs.midtrans.com/en/payments/payment-methods/gopay", // Docs via Midtrans
    tags: ["pembayaran", "fintech", "dompet digital", "e-wallet"]
  },
  {
    id: "46",
    name: "DANA API (Bisnis)",
    description: "API integrasi pembayaran DANA untuk bisnis/merchant.",
    url: "https://developer.dana.id/",
    category: "Keuangan",
    provider: "DANA Indonesia",
    isOpenSource: false,
    documentationUrl: "https://developer.dana.id/docs/",
    tags: ["pembayaran", "fintech", "dompet digital", "e-wallet"]
  },
  {
    id: "47",
    name: "OVO API (Bisnis)",
    description: "API integrasi pembayaran OVO untuk merchant.",
    url: "https://developer.ovo.id/", // URL Portal Developer (cek ketersediaan)
    category: "Keuangan",
    provider: "OVO",
    isOpenSource: false,
    documentationUrl: "Perlu cek portal developer OVO",
    tags: ["pembayaran", "fintech", "dompet digital", "e-wallet"]
  },
  {
    id: "48",
    name: "LinkAja API (Bisnis)",
    description: "API integrasi pembayaran LinkAja untuk merchant (jika tersedia publik).",
    url: "https://www.linkaja.id/bisnis", // Info Bisnis
    category: "Keuangan",
    provider: "LinkAja",
    isOpenSource: false,
    documentationUrl: "Perlu cek ketersediaan API publik/partner",
    tags: ["pembayaran", "fintech", "dompet digital", "e-wallet", "bumn"]
  },
  {
    id: "49",
    name: "Shipper API (Logistik Terintegrasi)",
    description: "API platform logistik terintegrasi (pergudangan, pengiriman).",
    url: "https://shipper.id/",
    category: "Logistik",
    provider: "Shipper",
    isOpenSource: false,
    documentationUrl: "https://developer.shipper.id/",
    tags: ["logistik", "pengiriman", "pergudangan", "fulfillment", "agregator"]
  },
  {
    id: "50",
    name: "Zenziva SMS & WhatsApp Gateway",
    description: "API untuk pengiriman SMS dan pesan WhatsApp Business.",
    url: "https://zenziva.net/",
    category: "Komunikasi",
    provider: "Zenziva",
    isOpenSource: false,
    documentationUrl: "https://console.zenziva.net/api-documentation",
    tags: ["komunikasi", "sms gateway", "whatsapp api", "notifikasi"]
  },
  // --- API Unofficial/Spesifik Lainnya (Berisiko & Perlu Cek) ---
  {
    id: "51",
    name: "KAI Access API (Unofficial)",
    description: "API tidak resmi untuk data jadwal/tiket KAI (risiko tinggi, tidak stabil).",
    url: "N/A - Endpoint Tersembunyi",
    category: "Transportasi",
    provider: "Komunitas Reverse Engineering",
    isOpenSource: false,
    documentationUrl: "Search GitHub/Forum 'KAI API'",
    tags: ["transportasi", "kereta api", "tiket", "jadwal", "unofficial", "scraping", "berisiko"]
  },
  {
    id: "52",
    name: "PLN Mobile API (Unofficial)",
    description: "API tidak resmi untuk interaksi layanan PLN Mobile (risiko tinggi, tidak stabil).",
    url: "N/A - Endpoint Tersembunyi",
    category: "Utilitas",
    provider: "Komunitas Reverse Engineering",
    isOpenSource: false,
    documentationUrl: "Search GitHub/Forum 'PLN API'",
    tags: ["utilitas", "listrik", "pln", "tagihan", "token", "unofficial", "scraping", "berisiko"]
  },
   {
    id: "53",
    name: "Indihome API (Unofficial)",
    description: "API tidak resmi untuk interaksi layanan IndiHome (risiko tinggi, tidak stabil).",
    url: "N/A - Endpoint Tersembunyi",
    category: "Utilitas",
    provider: "Komunitas Reverse Engineering",
    isOpenSource: false,
    documentationUrl: "Search GitHub/Forum 'Indihome API'",
    tags: ["utilitas", "internet", "tv kabel", "indihome", "telkom", "tagihan", "unofficial", "scraping", "berisiko"]
  },
   {
    id: "54",
    name: "MyPertamina API (Unofficial)",
    description: "API tidak resmi untuk interaksi aplikasi MyPertamina (risiko tinggi, tidak stabil).",
    url: "N/A - Endpoint Tersembunyi",
    category: "Energi",
    provider: "Komunitas Reverse Engineering",
    isOpenSource: false,
    documentationUrl: "Search GitHub/Forum 'MyPertamina API'",
    tags: ["energi", "bbm", "pertamina", "pembayaran", "unofficial", "scraping", "berisiko"]
  },
  {
    id: "55",
    name: "Mobile JKN API (Unofficial)",
    description: "API tidak resmi untuk interaksi aplikasi Mobile JKN BPJS Kesehatan (risiko tinggi, tidak stabil).",
    url: "N/A - Endpoint Tersembunyi",
    category: "Kesehatan",
    provider: "Komunitas Reverse Engineering",
    isOpenSource: false,
    documentationUrl: "Search GitHub/Forum 'Mobile JKN API'",
    tags: ["kesehatan", "asuransi", "bpjs", "pemerintah", "unofficial", "scraping", "berisiko"]
  },
   {
    id: "56",
    name: "Dana Pendidikan LPDP (Info)",
    description: "Informasi terkait beasiswa LPDP (sumber data, bukan API khusus).",
    url: "https://lpdp.kemenkeu.go.id/", // Website utama
    category: "Pendidikan",
    provider: "LPDP - Kemenkeu",
    isOpenSource: true, // Informasi publik
    documentationUrl: "https://lpdp.kemenkeu.go.id/",
    tags: ["pendidikan", "beasiswa", "lpdp", "pemerintah", "informasi"]
  },
   {
    id: "57",
    name: "TV Station Schedules API (Unofficial Scraper)",
    description: "API tidak resmi (scraping) jadwal acara TV nasional.",
    url: "N/A - Sumber beragam",
    category: "Hiburan",
    provider: "Komunitas (Scraping)",
    isOpenSource: true, // Kode scraper
    documentationUrl: "Search GitHub 'Jadwal TV API Indonesia'",
    tags: ["hiburan", "televisi", "jadwal acara", "scraping", "unofficial"]
  },
    {
    id: "58",
    name: "BMKG API (Cuaca per Wilayah)",
    description: "Endpoint XML/JSON resmi BMKG untuk data prakiraan cuaca per wilayah.",
    url: "https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-Indonesia.xml", // Contoh XML
    category: "Cuaca & Bencana",
    provider: "Badan Meteorologi, Klimatologi, dan Geofisika (BMKG)",
    isOpenSource: true, // Data publik
    documentationUrl: "https://data.bmkg.go.id/prakiraan-cuaca/", // Halaman terkait
    tags: ["cuaca", "prakiraan cuaca", "pemerintah", "open data", "xml", "json", "bmkg"]
  },
  {
    id: "59",
    name: "Kemendikbud Referensi API",
    description: "API untuk data referensi pendidikan dari Kemdikbud (NPSN, Sekolah, dll).",
    url: "https://referensi.data.kemdikbud.go.id/", // Portal Referensi
    category: "Pendidikan",
    provider: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemdikbudristek)",
    isOpenSource: true, // Data publik
    documentationUrl: "https://referensi.data.kemdikbud.go.id/downloads/", // API/Web Service mungkin perlu eksplorasi
    tags: ["pendidikan", "sekolah", "npsn", "referensi", "pemerintah", "open data"]
  },
  {
    id: "60",
    name: "IndoNLP Models/API (Research)",
    description: "Model atau API dari riset Natural Language Processing Bahasa Indonesia.",
    url: "https://github.com/IndoNLP", // Organisasi GitHub
    category: "AI/ML",
    provider: "Komunitas Riset IndoNLP",
    isOpenSource: true, // Model & kode riset
    documentationUrl: "https://github.com/IndoNLP",
    tags: ["ai", "machine learning", "nlp", "bahasa indonesia", "riset", "open source"]
  },
  {
    id: "61",
    name: "Binderbyte API Suite",
    description: "Menyediakan berbagai API lokal seperti Cek Resi, Cek Ongkir, Bank Account Validator, dll.",
    url: "https://binderbyte.com/products",
    category: "Logistik & Keuangan",
    provider: "Binderbyte",
    isOpenSource: false,
    documentationUrl: "https://binderbyte.com/docs",
    tags: ["logistik", "keuangan", "cek resi", "cek ongkir", "validasi bank", "utilitas"]
  },
  {
    id: "62",
    name: "Peraturan BPK API",
    description: "API untuk mencari dan mengakses data peraturan dari Badan Pemeriksa Keuangan.",
    url: "https://peraturan.bpk.go.id/api/v1/", // Base URL API (perlu cek endpoint)
    category: "Hukum & Pemerintahan",
    provider: "Badan Pemeriksa Keuangan (BPK)",
    isOpenSource: true, // Data peraturan publik
    documentationUrl: "https://peraturan.bpk.go.id/Home/Informasi", 
    tags: ["hukum", "peraturan", "pemerintah", "bpk", "open data", "regulasi"]
  }
];

export const categories = Array.from(new Set(apiData.map(api => api.category)));