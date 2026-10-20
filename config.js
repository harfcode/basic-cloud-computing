// Konfigurasi aplikasi Petualangan Cloud Kedai Senja.
// Kunci "anon" / "publishable" AMAN berada di sini (memang dirancang publik); keamanan dijaga oleh RLS di basis data.
// JANGAN PERNAH menaruh kunci "service_role" di berkas apa pun di folder web/.
window.APP_CONFIG = {
  SUPABASE_URL: 'https://ehuvccmwngsygubkqzux.supabase.co',
  // Ganti dengan kunci anon/publishable proyek di atas (Supabase > Project Settings > API).
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVodXZjY213bmdzeWd1YmtxenV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI0NjE2NDksImV4cCI6MjEwODAzNzY0OX0.Kx1FwQrwQ7SQVHlphE9UAZNwESA7FDigB2FG6ldodEQ',
  // Dua aplikasi sebelumnya, untuk cek kesiapan:
  // SITUS = alamat situs (tautan anjuran). SUPABASE_URL dan SUPABASE_ANON_KEY = proyek Supabase aplikasi itu,
  // dipakai memeriksa kode sertifikatnya. Bila kunci anon kosong, opsi kode sertifikat aplikasi itu disembunyikan.
  JARINGAN: {
    NAMA: 'Petualangan Teknisi Jaringan Kampus',
    SITUS: 'https://harfcode.github.io/basic-network-computer',
    SUPABASE_URL: 'https://hddaqrgknwisavnxicul.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkZGFxcmdrbndpc2F2bnhpY3VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE4MDQ5ODEsImV4cCI6MjEwNzM4MDk4MX0.bwB6ybaZ0PF2onSfygUsUgay5fhXcre-h1QEEcHzQkM'
  },
  KEAMANAN: {
    NAMA: 'Penjaga Data Klinik Sehat Bersama',
    SITUS: 'https://harfcode.github.io/basic-network-and-data-security/',
    SUPABASE_URL: 'https://icmkbazlkdhlfbvbvthq.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljbWtiYXpsa2RobGZidmJ2dGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE5NzU5ODgsImV4cCI6MjEwNzU1MTk4OH0.LCjH1fLdH-l1N9kaCA3XhRNp9tMBsf-wd92Vbtc5W1g'
  }
};
