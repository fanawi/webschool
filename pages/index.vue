  <template>
    <v-carousel class="h-78" show-arrows="hover" hide-delimiters>
      <v-carousel-item
        v-for="(image, index) in images"
        :key="index"
      >
        <NuxtImg
          :src="image"
          alt="Slide Image"
          class=" cover"
        />
      </v-carousel-item>
    </v-carousel>
  </template>

  <script setup>
  const images = [
    'img/pbo.png',
    'img/pplg.png',
    'img/toi.png',
  ];
  </script>

  <style scoped>
  /* Styling opsional */
  </style>
