<template>
  <header class="bg-blue-400 shadow-md paddingX shadow-gray-300 text-white">
    <div class="container px-6 mx-auto flex justify-between items-center py-4">
      <!-- Logo -->
      <div class="flex items-center space-x-4">
        <img src="../assets/img/Logo.png" alt="Logo" class="h-[80px]" />
        <h1 class="text-xl font-bold">SMKN 4 TASIKMALAYA</h1>
      </div>
    </div>
  </header>

  <!-- Navigation -->
  <div class="Navbar bg-[#fffeff] flex justify-center text-black z-20 paddingX shadow-md font-titillium flex justify-end gap-7 sticky top-0">
      <NuxtLink to="/">
        <p class="">Beranda</p>
      </NuxtLink>
      <NuxtLink to="/artikel">
        <p class="">Artikel</p>
      </NuxtLink>
      <div class="Profile relative inline-block group cursor-pointer">
        <div class="OnHover group flex items-center">
          <p class="">Profil Sekolah</p>
          <Icon name="material-symbols:keyboard-arrow-down-rounded" class="group-hover:rotate-180" />
        </div>
        <div class="ListHover absolute left-0 z-10 hidden origin-top-right bg-white shadow-md w-[150px] divide-y divide-gray-100 group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
          <ul>
            <li class="hover:bg-slate-100 p-2">Sejarah</li>
            <li class="hover:bg-slate-100 p-2">Visi dan Misi</li>
            <li class="hover:bg-slate-100 p-2">Identitas Sekolah</li>
            <li class="hover:bg-slate-100 p-2">Struktur Organisasi</li>
            <li class="hover:bg-slate-100 p-2">Guru dan Staff</li>
            <li class="hover:bg-slate-100 p-2">Data Statistik</li>
          </ul>
        </div>
      </div>
      <div class="Kurikulum relative inline-block group cursor-pointer">
        <div class="OnHover group flex items-center">
          <p class="">Kurikulum</p>
          <Icon name="material-symbols:keyboard-arrow-down-rounded" class="group-hover:rotate-180" />
        </div>
        <div class="ListHover absolute left-0 z-10 hidden origin-top-right bg-white shadow-md w-[150px] divide-y divide-gray-100 group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
          <ul>
            <li title="Jurusan" class="hover:bg-slate-100 p-2">Kompetensi Keahlian</li>
            <li class="hover:bg-slate-100 p-2">Buku Pembelajaran</li>
            <li class="hover:bg-slate-100 p-2">Pembelajaran dan Jadwal</li>
          </ul>
        </div>
      </div>
      <div class="Siswa relative inline-block group cursor-pointer">
        <div class="OnHover group flex items-center">
          <p class="">Siswa</p>
          <Icon name="material-symbols:keyboard-arrow-down-rounded" class="group-hover:rotate-180" />
        </div>
        <div class="ListHover absolute left-0 z-10 hidden origin-top-right bg-white shadow-md w-[150px] divide-y divide-gray-100 group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
          <ul>
            <li class="hover:bg-slate-100 p-2">Rombongan Belajar</li>
            <li class="hover:bg-slate-100 p-2">Ekstrakurikuler</li>
            <li class="hover:bg-slate-100 p-2">Prestasi</li>
          </ul>
        </div>
      </div>
      <div class="Sapras relative inline-block group cursor-pointer">
        <div class="OnHover group flex items-center">
          <p title="Sarana dan Prasana" class="">Sapras</p>
          <Icon name="material-symbols:keyboard-arrow-down-rounded" class="group-hover:rotate-180" />
        </div>
        <div class="ListHover absolute left-0 z-10 hidden origin-top-right bg-white shadow-md w-[150px] divide-y divide-gray-100 group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
          <ul>
            <li class="hover:bg-slate-100 p-2">Tanah</li>
            <li class="hover:bg-slate-100 p-2">Ruang Kelas</li>
            <li class="hover:bg-slate-100 p-2">Ruang Praktek Siswa</li>
            <li class="hover:bg-slate-100 p-2">Ruang Penunjang</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<style scoped>
/* Menambahkan transisi atau menyesuaikan gaya dropdown jika diperlukan */
</style>
