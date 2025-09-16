<template> 
  <v-container class="pa-0">
    <!-- Overview -->
    <div class="mb-12">
      <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4">
        Ethiopian Christmas
      </h2>
      <p class="text-body-1">
        Ethiopian Christmas, known as <strong>Genna</strong>, is celebrated on <strong>Tahsas 29</strong> (January 7 in the Gregorian calendar). 
        It commemorates the birth of Jesus Christ and is a time of religious devotion, family gatherings, and joyful festivities.
      </p>
    </div>

    <!-- Hero Section -->
    <v-row class="hero-section text-center" align="center" justify="center">
      <v-col>
        <h1 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up">
          Genna (ገና)
        </h1>
        <h2 class="text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1">
          Ethiopian Christmas
        </h2>
      </v-col>
    </v-row>

    <!-- Main Content -->
    <v-container class="py-12">

      <!-- History -->
      <div class="mb-12 section-bg">
        <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4">
          History of Genna (Ethiopian Christmas)
        </h2>
        <p class="text-body-2">
          Genna celebrates the birth of Jesus Christ and has been observed in Ethiopia for centuries, 
          following the traditions of the Ethiopian Orthodox Church. The holiday is deeply rooted 
          in religious devotion and community celebration.
        </p>
        <p class="text-body-2 mt-4">
          Many Ethiopian communities also associate Genna with traditional games and cultural activities 
          that symbolize unity, joy, and the festive spirit of the season.
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
    title: "Church Services",
    image: "https://i.imgur.com/UffEv0N.jpeg",
    description:
      "Ethiopians attend special church services at dawn, where priests lead prayers and hymns celebrating the birth of Jesus Christ.",
  },
  {
    title: "Traditional Genna Game",
    image: "https://i.imgur.com/eqtUZ1B.jpeg",
    description:
      "Communities play a traditional game called 'Genna', resembling hockey, which is a festive activity during the holiday.",
  },
  {
    title: "Family Feast",
    image: "https://i.imgur.com/8AyoZHw.jpeg",
    description:
      "Families gather for a special meal, typically featuring Doro Wat (spicy chicken stew) served with Injera, symbolizing togetherness and joy.",
  },
  {
    title: "Cultural Singing and Dancing",
    image: "https://i.imgur.com/sXg4l8B.jpeg",
    description:
      "Communities celebrate with traditional music, chants, and dance, enhancing the festive spirit of Genna.",
  },
];

const culturalElements = [
  {
    title: "Liturgical Cross",
    image: "https://i.imgur.com/xJ6VEdR.jpeg",
    description:
      "The cross is central to Genna celebrations, symbolizing faith and devotion within Ethiopian Orthodox Christianity.",
  },
  {
    title: "Habesha Kemis",
    image: "https://i.imgur.com/PpvQ7Th.jpeg",
    description:
      "Traditional white cotton attire worn during church services and celebrations, reflecting purity and cultural pride.",
  },
  {
    title: "Ethiopian Orthodox Church",
    image: "https://i.imgur.com/mWwLoV2.jpeg",
    description:
      "Churches are beautifully decorated for Genna, serving as the spiritual and cultural hub of the celebrations.",
  },
];
</script>

<style scoped>
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
