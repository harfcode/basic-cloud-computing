// Konfigurasi aplikasi Petualangan Cloud Kedai Senja.
// Kunci "anon" / "publishable" AMAN berada di sini (memang dirancang publik); keamanan dijaga oleh RLS di basis data.
// JANGAN PERNAH menaruh kunci "service_role" di berkas apa pun di folder web/.
window.APP_CONFIG = {
  SUPABASE_URL: 'https://PROYEK-ANDA.supabase.co',
  // Ganti dengan kunci anon/publishable proyek di atas (Supabase > Project Settings > API).
  SUPABASE_ANON_KEY: 'ISI-DENGAN-ANON-KEY',
  // Dua aplikasi sebelumnya, untuk cek kesiapan:
  // SITUS = alamat situs (tautan anjuran). SUPABASE_URL dan SUPABASE_ANON_KEY = proyek Supabase aplikasi itu,
  // dipakai memeriksa kode sertifikatnya. Bila kunci anon kosong, opsi kode sertifikat aplikasi itu disembunyikan.
  JARINGAN: {
    NAMA: 'Petualangan Teknisi Jaringan Kampus',
    SITUS: '',
    SUPABASE_URL: '',
    SUPABASE_ANON_KEY: ''
  },
  KEAMANAN: {
    NAMA: 'Penjaga Data Klinik Sehat Bersama',
    SITUS: '',
    SUPABASE_URL: '',
    SUPABASE_ANON_KEY: ''
  }
};
