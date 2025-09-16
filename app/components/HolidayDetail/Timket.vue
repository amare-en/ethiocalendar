<template>
  <v-container class="pa-0">
    <v-row class="hero-section text-center" align="center" justify="center">
      <v-col>
        <h1 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up">
          Timket (ጥምቀት)
        </h1>
        <h2 class="text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1">
          Ethiopian Epiphany
        </h2>
      </v-col>
    </v-row>

    <v-container class="py-12">
      <div class="mb-12">
        <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4">
          At-a-Glance Overview
        </h2>
        <p class="text-body-1">
          Ethiopian Epiphany, known as **Timket**, is a vibrant three-day festival celebrating the
          baptism of Jesus Christ in the Jordan River. It officially begins on **Tahsas 11**
          (January 19), with the main celebrations on the second day. It is one of the most sacred
          and colorful festivals in Ethiopia.
        </p>
      </div>

      <div class="mb-12 section-bg">
        <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4">
          History and Significance of Timket
        </h2>
        <p class="text-body-2">
          Timket traces its roots to the early Christian era and celebrates the baptism of Jesus
          Christ by John the Baptist in the Jordan River. The holiday is a powerful reminder of the
          importance of baptism in Christian faith and the renewal of spiritual life.
        </p>
        <p class="text-body-2 mt-4">
          The centerpiece of the celebration is the **Tabot** (ታቦት), a sacred replica of the Ark of
          the Covenant. The Tabot represents the manifestation of Christ at His baptism, and its
          procession is a powerful symbol of His presence among the people.
        </p>
      </div>

      <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-6">
        Main Traditions and Celebrations
      </h2>
      <v-row>
        <v-col
          cols="12"
          v-for="(tradition, i) in traditions"
          :key="`tradition-${i}`"
          class="mb-8"
        >
          <div class="d-flex flex-column flex-md-row pa-4">
            <img
              :src="tradition.image"
              :alt="tradition.title"
              class="tradition-image mr-md-6 mb-4 mb-md-0"
            />
            <div>
              <h3 class="text-h6 font-weight-bold">{{ tradition.title }}</h3>
              <p class="mt-2 text-body-2">{{ tradition.description }}</p>
            </div>
          </div>
          <v-divider class="my-4" />
        </v-col>
      </v-row>

      <div class="mb-12">
        <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4">
          What to Expect During Timket
        </h2>
        <p class="text-body-2">
          As a visitor, you can expect to see grand processions, vibrant colors, and deep spiritual
          devotion. The atmosphere is one of immense joy and unity. The festival is a powerful
          display of faith and culture, with people from all walks of life gathering to celebrate.
        </p>
      </div>

      <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mt-12 mb-6">
        Key Cultural Elements
      </h2>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(element, i) in culturalElements"
          :key="`element-${i}`"
          class="mb-10 text-center"
        >
          <img
            :src="element.image"
            :alt="element.title"
            class="gallery-image mb-4"
          />
          <h3 class="text-h6 font-weight-bold">{{ element.title }}</h3>
          <p class="mt-2 text-body-2">{{ element.description }}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
const traditions = [
  {
    title: "The Procession of the Tabot (Ketera)",
    image: "https://i.imgur.com/UffEv0N.jpeg",
    description:
      "On the eve of Timket (Ketera), replicas of the Ark of the Covenant, known as Tabots, are carried from churches in a grand procession. Priests, deacons, and a massive crowd of believers follow them to a designated Timket Bahir (baptismal pool).",
  },
  {
    title: "The Overnight Vigil",
    image: "https://i.imgur.com/eqtUZ1B.jpeg",
    description:
      "Worshippers spend the night by the water, where the Tabots rest in a large tent. The night is filled with prayers, hymns, and spiritual songs, creating a deeply sacred and expectant atmosphere.",
  },
  {
    title: "Blessing of the Water and Renewal of Vows",
    image: "https://i.imgur.com/8AyoZHw.jpeg",
    description:
      "At dawn, the priests bless the water, commemorating Christ's baptism. Worshippers then immerse themselves or are sprinkled with the blessed water, symbolizing the renewal of their baptismal vows.",
  },
  {
    title: "The Return Procession",
    image: "https://i.imgur.com/sXg4l8B.jpeg",
    description:
      "After the morning ceremonies, the Tabots are carried back to their churches in another joyous procession. This journey is filled with traditional songs, rhythmic drumming, and celebratory dancing.",
  },
];

const culturalElements = [
  {
    title: "The Tabot (ታቦት)",
    image: "https://i.imgur.com/xJ6VEdR.jpeg",
    description:
      "The sacred Tabot, a replica of the Ark of the Covenant, is the most revered object of the festival. It is the centerpiece of Timket and is carried in grand processions.",
  },
  {
    title: "Traditional White Attire",
    image: "https://i.imgur.com/PpvQ7Th.jpeg",
    description:
      "Faithful wear traditional white cotton clothes (Habesha Kemis or Netela), symbolizing purity and devotion during the celebrations.",
  },
  {
    title: "The Timket Bahir",
    image: "https://i.imgur.com/mWwLoV2.jpeg",
    description:
      "The 'Timket Bahir' or baptismal pool is the site of the main water ceremony. It is the spiritual heart of the celebration, representing the Jordan River.",
  },
];
</script>

<style scoped>
.hero-section {
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("https://i.imgur.com/Nr8u6hw.jpeg");
  background-size: cover;
  background-position: center;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tradition-image {
  width: 180px;
  height: 130px;
  object-fit: cover;
  border-radius: 12px;
}

.gallery-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 14px;
  transition: transform 0.3s ease;
}

.gallery-image:hover {
  transform: scale(1.03);
}

.section-bg {
  background-color: #fafafa;
  border-radius: 12px;
  padding: 32px;
}

.fade-up {
  animation: fadeInUp 1s ease;
}

.fade-up.delay-1 {
  animation-delay: 0.3s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

p {
  line-height: 1.7;
}
</style>