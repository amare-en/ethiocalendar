<template>
  <v-container class="pa-0">
    <!-- Hero Section -->
    <v-row class="hero-section text-center" align="center" justify="center">
      <v-col>
        <h1 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up">
          መስቀል (Meskel)
        </h1>
        <h2 class="text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1">
          Finding of the True Cross
        </h2>
      </v-col>
    </v-row>

    <!-- Overview -->
    <v-container class="py-12">
      <v-card elevation="2" class="pa-6 rounded-xl mb-12">
        <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4">
          Overview
        </h2>
        <p class="text-body-1">
          Finding of the True Cross (Meskel) falls on Meskerem 17 in the Ethiopian calendar, which corresponds to September 27 (or September 28 in a Gregorian leap year).
        </p>
      </v-card>

      <!-- History -->
      <v-card elevation="2" class="pa-6 rounded-xl mb-12 section-bg">
        <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4">
          History of Meskel
        </h2>
        <p class="text-body-2">
          The origins of Meskel date back to the 4th century A.D., during the reign of Emperor Constantine of Rome. His mother, Empress Helena (Saint Helena), was a devoted Christian who set out on a mission to find the cross on which Jesus Christ was crucified.
        </p>
        <p class="text-body-2 mt-4">
          According to tradition, after days of prayer, Saint Helena was guided by a dream to build a large fire. The smoke from the fire pointed her to the location where the True Cross was buried in Jerusalem.
        </p>
        <p class="text-body-2 mt-4">
          Ethiopian Orthodox Christians adopted this commemoration centuries ago, and it has since become one of the most important celebrations in the Ethiopian calendar.
        </p>
        <p class="text-body-2 mt-4">
          In 2013, UNESCO recognized Meskel as part of the Intangible Cultural Heritage of Humanity, highlighting its deep spiritual and cultural significance.
        </p>
      </v-card>

      <!-- Religious Significance -->
      <v-card elevation="2" class="pa-6 rounded-xl mb-12">
        <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4">
          Religious Significance
        </h2>
        <v-list lines="two">
          <v-list-item>
            <v-icon start color="primary">mdi-cross</v-icon>
            Meskel marks the finding of the True Cross by Saint Helena.
          </v-list-item>
          <v-list-item>
            <v-icon start color="primary">mdi-lightning-bolt</v-icon>
            The holiday emphasizes the victory of the cross as a symbol of salvation and hope.
          </v-list-item>
          <v-list-item>
            <v-icon start color="primary">mdi-account-group</v-icon>
            It is also a day of unity, bringing together millions of faithful in prayer, hymn, and procession.
          </v-list-item>
        </v-list>
      </v-card>

      <!-- Traditions -->
      <div class="mb-12">
        <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-6">
          Traditions & Celebrations in Ethiopia
        </h2>
        <v-row>
          <v-col
            cols="12"
            v-for="(tradition, i) in traditions"
            :key="tradition.title"
            class="mb-8"
          >
            <v-card
              elevation="2"
              class="pa-4 rounded-xl d-flex flex-column flex-md-row align-center"
              :class="{ 'flex-md-row-reverse': i % 2 }"
            >
              <img
                :src="tradition.image"
                alt="tradition image"
                class="tradition-image mr-md-6 mb-4 mb-md-0"
              />
              <div>
                <h3 class="text-h6 font-weight-bold">{{ tradition.title }}</h3>
                <p class="mt-2 text-body-2">{{ tradition.description }}</p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- Cultural Elements -->
      <div>
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
          >
            <v-card elevation="3" class="pa-4 rounded-xl text-center hover-card">
              <img
                :src="element.image"
                alt="cultural element image"
                class="gallery-image mb-4"
              />
              <h3 class="text-h6 font-weight-bold">{{ element.title }}</h3>
              <p class="mt-2 text-body-2">{{ element.description }}</p>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-container>
</template>

<script setup>
const traditions = [
  {
    title: "Demera (Bonfire)",
    image: "https://i.imgur.com/UffEv0N.jpeg",
    description:
      "On the eve of Meskel, large bonfires called Demera are lit in churches and city squares. The collapse of the fire is believed to foretell the year’s fortunes.",
  },
  {
    title: "Religious Processions",
    image: "https://i.imgur.com/eqtUZ1B.jpeg",
    description:
      "Priests and deacons, dressed in colorful liturgical robes, lead processions carrying crosses, chanting hymns, and offering prayers.",
  },
  {
    title: "Meskel Flowers (Adey Abeba)",
    image: "https://i.imgur.com/8AyoZHw.jpeg",
    description:
      "Yellow daisies that bloom during this season are used to decorate churches, homes, and celebration areas, symbolizing peace and renewal.",
  },
  {
    title: "Feasting and Fellowship",
    image: "https://i.imgur.com/sXg4l8B.jpeg",
    description:
      "Families, friends, and neighbors gather to share traditional meals, coffee, and cultural drinks, strengthening bonds of community.",
  },
  {
    title: "Meskel Square in Addis Ababa",
    image: "https://i.imgur.com/sXg4l8B.jpeg",
    description:
      "The largest and most famous celebration takes place here, attracting thousands of worshippers, choirs, and visitors each year.",
  },
];

const culturalElements = [
  {
    title: "The Adey Abeba Flower",
    image: "https://i.imgur.com/xJ6VEdR.jpeg",
    description:
      "This bright yellow daisy blooms in September and is the most iconic symbol of Meskel. It represents peace, hope, and renewal.",
  },
  {
    title: "Traditional Attire",
    image: "https://i.imgur.com/PpvQ7Th.jpeg",
    description:
      "Many Ethiopians wear white cotton clothes with colorful woven borders, reflecting purity and cultural pride.",
  },
  {
    title: "Meskel Square Gathering",
    image: "https://i.imgur.com/mWwLoV2.jpeg",
    description:
      "The heart of Meskel celebrations in Addis Ababa, drawing thousands for prayers, music, and the lighting of the grand Demera.",
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
  width: 200px;
  height: 140px;
  object-fit: cover;
  border-radius: 12px;
}

.gallery-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 14px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-card:hover .gallery-image {
  transform: scale(1.03);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.section-bg {
  background-color: #fafafa;
  border-radius: 12px;
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
