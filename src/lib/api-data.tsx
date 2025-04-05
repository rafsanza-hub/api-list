
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
      description: "API untuk memeriksa Bank Identification Number (BIN) kartu pembayaran di Indonesia",
      url: "https://binchecker.id/api",
      category: "Keuangan",
      provider: "BIN Checker Indonesia",
      isOpenSource: true,
      documentationUrl: "https://binchecker.id/docs",
      tags: ["keuangan", "perbankan", "kartu kredit", "pembayaran"]
    },
    {
      id: "2",
      name: "Raja Ongkir",
      description: "API untuk kalkulasi ongkos kirim berbagai kurir di Indonesia",
      url: "https://rajaongkir.com/api",
      category: "Logistik",
      provider: "Raja Ongkir",
      isOpenSource: false,
      documentationUrl: "https://rajaongkir.com/dokumentasi",
      tags: ["logistik", "pengiriman", "e-commerce"]
    },
    {
      id: "3",
      name: "BMKG API",
      description: "API resmi untuk data cuaca, gempa bumi, dan informasi meteorologi dari BMKG",
      url: "https://data.bmkg.go.id/",
      category: "Cuaca",
      provider: "Badan Meteorologi, Klimatologi, dan Geofisika",
      isOpenSource: true,
      documentationUrl: "https://data.bmkg.go.id/dokumentasi",
      tags: ["cuaca", "gempa", "bencana alam"]
    },
    {
      id: "4",
      name: "Cek Resi API",
      description: "API untuk melacak status pengiriman dari berbagai kurir di Indonesia",
      url: "https://cekresi.co.id/api",
      category: "Logistik",
      provider: "Cek Resi Indonesia",
      isOpenSource: false,
      documentationUrl: "https://cekresi.co.id/docs",
      tags: ["logistik", "pelacakan", "pengiriman"]
    },
    {
      id: "5",
      name: "KawalCOVID19 API",
      description: "API untuk informasi statistik terkini COVID-19 di Indonesia",
      url: "https://kawalcovid19.id/api",
      category: "Kesehatan",
      provider: "KawalCOVID19",
      isOpenSource: true,
      documentationUrl: "https://kawalcovid19.id/dokumentasi",
      tags: ["kesehatan", "covid", "statistik"]
    },
    {
      id: "6",
      name: "BPS Open API",
      description: "API resmi Badan Pusat Statistik untuk data statistik nasional",
      url: "https://webapi.bps.go.id/",
      category: "Statistik",
      provider: "Badan Pusat Statistik",
      isOpenSource: true,
      documentationUrl: "https://webapi.bps.go.id/documentation",
      tags: ["statistik", "demografi", "ekonomi"]
    },
    {
      id: "7",
      name: "Midtrans Payment Gateway",
      description: "API gateway pembayaran untuk integrasi berbagai metode pembayaran di Indonesia",
      url: "https://midtrans.com/id/api",
      category: "Keuangan",
      provider: "Midtrans",
      isOpenSource: false,
      documentationUrl: "https://docs.midtrans.com/",
      tags: ["pembayaran", "fintech", "e-commerce"]
    },
    {
      id: "8",
      name: "Kode Pos Indonesia API",
      description: "API database kode pos seluruh wilayah di Indonesia",
      url: "https://kodepos.api.id/",
      category: "Alamat",
      provider: "Kode Pos API",
      isOpenSource: true,
      documentationUrl: "https://kodepos.api.id/docs",
      tags: ["kode pos", "alamat", "lokasi"]
    },
    {
      id: "9",
      name: "API PDDIKTI",
      description: "API untuk mengakses data pendidikan tinggi dari PDDIKTI",
      url: "https://api-frontend.kemdikbud.go.id/",
      category: "Pendidikan",
      provider: "Kementerian Pendidikan dan Kebudayaan",
      isOpenSource: true,
      documentationUrl: "https://api-frontend.kemdikbud.go.id/docs",
      tags: ["pendidikan", "perguruan tinggi", "mahasiswa"]
    },
    {
      id: "10",
      name: "Fixer.io Indonesia",
      description: "API nilai tukar mata uang dengan fokus pada Rupiah Indonesia",
      url: "https://fixer.io/id",
      category: "Keuangan",
      provider: "Fixer.io",
      isOpenSource: false,
      documentationUrl: "https://fixer.io/documentation",
      tags: ["keuangan", "nilai tukar", "mata uang"]
    },
    {
      id: "11",
      name: "Indonesian News API",
      description: "API untuk mendapatkan berita terbaru dari berbagai sumber berita Indonesia",
      url: "https://newsapi.id/",
      category: "Berita",
      provider: "NewsAPI Indonesia",
      isOpenSource: false,
      documentationUrl: "https://newsapi.id/docs",
      tags: ["berita", "media", "informasi"]
    },
    {
      id: "12",
      name: "Tokopedia Open API",
      description: "API untuk mengintegrasikan layanan dengan marketplace Tokopedia",
      url: "https://developer.tokopedia.com/",
      category: "E-Commerce",
      provider: "Tokopedia",
      isOpenSource: false,
      documentationUrl: "https://developer.tokopedia.com/docs",
      tags: ["e-commerce", "marketplace", "retail"]
    }
  ];
  
  export const categories = Array.from(new Set(apiData.map(api => api.category)));
  