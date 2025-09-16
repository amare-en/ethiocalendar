<template>
  <v-container class="pa-0">
    <!-- Overview -->
    <div class="mb-12">
      <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4">
        International Labor Day
      </h2>
      <p class="text-body-1">
        International Labor Day, celebrated on <strong>May 1st</strong>, honors
        workers and their contributions to society. In Ethiopia, it is a public
        holiday that highlights unity, productivity, and the importance of fair
        labor practices.
      </p>
    </div>

    <!-- Hero Section -->
    <v-row class="hero-section text-center" align="center" justify="center">
      <v-col>
        <h1
          class="text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up"
        >
          International Labor Day
        </h1>
        <h2
          class="text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1"
        >
          Celebrating Workers’ Rights and Contributions
        </h2>
      </v-col>
    </v-row>

    <!-- Main Content -->
    <v-container class="py-12">
      <!-- History -->
      <div class="mb-12 section-bg">
        <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4">
          History and Significance
        </h2>
        <p class="text-body-2">
          International Labor Day originated in the late 19th century, inspired
          by workers’ movements demanding better wages, safer workplaces, and
          fairer working hours. It became a global symbol of solidarity and
          justice.
        </p>
        <p class="text-body-2 mt-4">
          In Ethiopia, May 1st is recognized as a public holiday. The day honors
          workers’ essential role in national development and economic growth,
          while also emphasizing dignity, equality, and unity in the workplace.
        </p>
      </div>

      <!-- Traditions -->
      <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-6">
        Traditions and Celebrations in Ethiopia
      </h2>
      <v-row>
        <v-col
          cols="12"
          v-for="(tradition, i) in traditions"
          :key="tradition.title"
          class="mb-8"
        >
          <div class="d-flex flex-column flex-md-row align-start pa-4">
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
        Key Cultural and Social Elements
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
    title: "Public Gatherings and Rallies",
    image: "https://i.imgur.com/eqtUZ1B.jpeg",
    description:
      "Trade unions, workers’ associations, and officials organize rallies and gatherings, emphasizing workers’ rights, achievements, and solidarity.",
  },
  {
    title: "Day of Rest and Reflection",
    image: "https://i.imgur.com/sXg4l8B.jpeg",
    description:
      "Many Ethiopians take the day off to spend time with family and reflect on their role in building the nation’s future.",
  },
  {
    title: "Cultural Programs",
    image: "https://i.imgur.com/8AyoZHw.jpeg",
    description:
      "In some regions, cultural shows, performances, and public speeches are organized to honor workers and their contributions.",
  },
];

const culturalElements = [
  {
    title: "Unity of Workers",
    image: "https://i.imgur.com/xJ6VEdR.jpeg",
    description:
      "Labor Day reinforces solidarity among workers across all professions and industries.",
  },
  {
    title: "Awareness of Rights",
    image: "https://i.imgur.com/PpvQ7Th.jpeg",
    description:
      "The holiday reminds everyone of the importance of protecting workers’ rights and fair labor standards.",
  },
  {
    title: "Economic Contribution",
    image: "https://i.imgur.com/mWwLoV2.jpeg",
    description:
      "It acknowledges workers as the backbone of Ethiopia’s economic growth and national progress.",
  },
];
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("https://i.imgur.com/ZjD8Q2o.jpeg");
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
