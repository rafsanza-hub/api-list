import ApiCollection from "../components/ApiCollection";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <Hero />
      <ApiCollection></ApiCollection>

      {/* Footer Section */}
      <footer className="bg-gray-50 border-t border-gray-100 py-12">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                FetchAPI.id
                </span>
                <div className="text-sm font-medium text-muted-foreground">
                  Indonesia
                </div>
              </div>
              <p className="text-sm text-gray-500 max-w-md">
                Direktori sumber terbuka untuk API lokal di Indonesia. Temukan
                dan gunakan API lokal untuk kebutuhan aplikasi Anda.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold mb-4">Navigasi</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#beranda"
                      className="text-sm text-gray-500 transition-all duration-200"
                    >
                      Beranda
                    </a>
                  </li>
                  <li>
                    <a
                      href="#koleksi"
                      className="text-sm text-gray-500 transition-all duration-200"
                    >
                      Koleksi API
                    </a>
                  </li>
                  <li>
                    <a
                      href="#kategori"
                      className="text-sm text-gray-500 transition-all duration-200"
                    >
                      Kategori
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-4">Tentang</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#tentang"
                      className="text-sm text-gray-500 transition-all duration-200"
                    >
                      Tentang Kami
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-500 transition-all duration-200"
                    >
                      Kebijakan Privasi
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-500 transition-all duration-200"
                    >
                      Ketentuan Layanan
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 md:col-span-1">
                <h3 className="text-sm font-semibold mb-4">Kontak</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-400"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span className="text-sm text-gray-500">
                      +62 123 4567 890
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-400"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span className="text-sm text-gray-500">
                      info@fetchapi.id
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} FetchAPI.id. Seluruh hak cipta
              dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
