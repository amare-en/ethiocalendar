<template>
  <v-container class="pa-0">
    <!-- Overview -->
    <div class="mb-12">
      <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4">
        Ethiopian New Year's Day
      </h2>
      <p class="text-body-1">
        Ethiopian New Year falls on Meskerem 1 (September 11th), or September 12th in a leap year. 
        It marks the beginning of the Ethiopian calendar year and is a time of joy, renewal, and cultural pride.
      </p>
    </div>

    <!-- Hero Section -->
    <v-row class="hero-section text-center" align="center" justify="center">
      <v-col>
        <h1 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up">
          Enkutatash (እንቁጣጣሽ)
        </h1>
        <h2 class="text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1">
          The Ethiopian New Year
        </h2>
      </v-col>
    </v-row>

    <!-- Main Content -->
    <v-container class="py-12">

      <!-- History -->
      <div class="mb-12 section-bg">
        <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4">
          History of Enkutatash (እንቁጣጣሽ)
        </h2>
        <p class="text-body-2">
          The name <strong>"Enkutatash"</strong> translates to "gift of jewels" in Amharic. 
          According to Ethiopian tradition, the holiday originates from the Queen of Sheba’s return 
          from King Solomon, when her chiefs welcomed her with jewels. This story symbolizes 
          prosperity and renewal for the coming year.
        </p>
        <p class="text-body-2 mt-4">
          Enkutatash also falls at the end of the rainy season, when the Ethiopian highlands 
          are lush, green, and filled with vibrant yellow <strong>Adey Abeba</strong> flowers. 
          It is a celebration of nature’s renewal and the beginning of the harvest season.
        </p>
      </div>

      <!-- Traditions -->
      <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-6">
        Traditions and Celebrations
      </h2>
      <v-row>
        <v-col
          cols="12"
          v-for="(tradition, i) in traditions"
          :key="tradition.title"
          class="mb-8"
        >
          <div
            class="d-flex flex-column flex-md-row align-start pa-4"
            
          >
           <div>
              <h3 class="text-h6 font-weight-bold">{{ tradition.title }}</h3>
              <p class="mt-2 text-body-2">{{ tradition.description }}</p>
            </div>
            <img
              :src="tradition.image"
              alt="tradition image"
              class="tradition-image mr-md-6 mb-4 mb-md-0"
            />
           
          </div>
          <v-divider class="my-4" />
        </v-col>
      </v-row>

      <!-- Cultural Elements Gallery -->
      <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mt-12 mb-6">
        Key Cultural Elements
      </h2>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="element in culturalElements"
          :key="element.title"
          class="mb-10 text-center"
        >
          <img
            :src="element.image"
            alt="cultural element image"
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
    title: "The Bonfire (Chibo)",
    image: "https://i.imgur.com/UffEv0N.jpeg",
    description:
      "On New Year's Eve, communities gather to light a large bonfire called Chibo. The flames represent burning away the hardships of the past year. Families sing, dance, and celebrate late into the night, while some people leap over the glowing embers to symbolize crossing into a brighter future.",
  },
  {
    title: "The Abebayosh Tradition",
    image: "https://i.imgur.com/eqtUZ1B.jpeg",
    description:
      "Young girls dressed in traditional white Habesha Kemis carry bunches of Adey Abeba flowers, symbolizing hope and renewal. They go door to door singing the famous song 'Abebayosh,' wishing blessings for the New Year. In return, they receive small gifts or money as a gesture of goodwill.",
  },
  {
    title: "The Family Feast",
    image: "https://i.imgur.com/8AyoZHw.jpeg",
    description:
      "Families unite for a grand feast, a moment of joy and sharing. The centerpiece is Doro Wat, a rich and spicy chicken stew, served with Injera. This meal is more than food — it’s a symbol of family bonds, hospitality, and cultural pride.",
  },
  {
    title: "The Coffee Ceremony",
    image: "https://i.imgur.com/sXg4l8B.jpeg",
    description:
      "The Ethiopian coffee ceremony is at the heart of Enkutatash. Fresh green coffee beans are roasted, ground, and brewed in a traditional clay pot (jebena). The ceremony is accompanied by popcorn or roasted barley and serves as a social ritual of togetherness, reflection, and hospitality.",
  },
];

const culturalElements = [
  {
    title: "The Adey Abeba Flower",
    image: "https://i.imgur.com/xJ6VEdR.jpeg",
    description:
      "This bright yellow daisy blooms in September and is the most iconic symbol of Enkutatash. It represents joy, prosperity, and the beauty of a fresh start.",
  },
  {
    title: "Traditional Attire",
    image: "https://i.imgur.com/PpvQ7Th.jpeg",
    description:
      "During the holiday, Ethiopians wear new white cotton clothes with colorful handwoven borders. This attire, called Habesha Kemis, reflects purity and cultural pride.",
  },
  {
    title: "The Ethiopian Calendar",
    image: "https://i.imgur.com/mWwLoV2.jpeg",
    description:
      "Unlike the Gregorian calendar, the Ethiopian calendar is 7–8 years behind. Enkutatash marks its first day and is celebrated with cultural uniqueness that sets Ethiopia apart.",
  },
];
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("https://i.imgur.com/kS5Y2wI.jpeg");
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-image:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* Section Background */
.section-bg {
  background-color: #fafafa;
  border-radius: 12px;
  padding: 32px;
}

/* Text Animations */
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

/* Improve readability */
p {
  line-height: 1.7;
}
</style>
<!--:class="{ 'flex-md-row-reverse': i % 2 }"-->