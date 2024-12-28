<template>
   <header class="bg-blue-400 shadow-md shadow-gray-300 text-white">
     <div class="container mx-auto flex justify-between items-center py-4 px-6">
       <!-- Logo -->
       <div class="flex items-center space-x-4">
         <img src="../assets/img/Logo.png" alt="Logo" class="h-[80px]" />
         <h1 class="text-xl font-bold">SMKN 4 TASIKMALAYA</h1>
       </div>
 
       <!-- Navigation -->
       <nav>
         <ul class="flex space-x-6">
           <li><a href="/" class="hover:underline">Beranda</a></li>
           <li class="relative group">
             <button class="focus:outline-none">Profil ▼</button>
             <!-- Dropdown -->
             <ul
               class="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
             >
               <li>
                 <a href="/visi-misi" class="block px-4 py-2 hover:bg-gray-200">Visi & Misi</a>
               </li>
               <li>
                 <a href="/struktur" class="block px-4 py-2 hover:bg-gray-200">Struktur Organisasi</a>
               </li>
             </ul>
           </li>
           <li class="relative group">
             <button class="focus:outline-none">Kurikulum ▼</button>
             <!-- Dropdown -->
             <ul
               class="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
             >
               <li>
                 <a href="/kurikulum" class="block px-4 py-2 hover:bg-gray-200">Kurikulum 2024</a>
               </li>
             </ul>
           </li>
           <li><a href="/gallery" class="hover:underline">Gallery</a></li>
           <li><a href="/ppdb" class="hover:underline">PPDB</a></li>
         </ul>
       </nav>
     </div>
   </header>
 </template> 