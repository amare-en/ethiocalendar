<template> 
  <v-container class="pa-0">
    <!-- Overview -->
    <div class="mb-12">
      <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4">
        Ethiopian Easter (Fasika)
      </h2>
      <p class="text-body-1">
        Ethiopian Easter, known as <strong>Fasika</strong>, is the most significant religious celebration 
        in the Ethiopian Orthodox Tewahedo Church. It commemorates the Resurrection of Jesus Christ 
        from the dead, symbolizing victory over sin and death, and offering hope of eternal life.
      </p>
    </div>

    <!-- Hero Section -->
    <v-row class="hero-section text-center" align="center" justify="center">
      <v-col>
        <h1 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up">
          Fasika (ፋሲካ)
        </h1>
        <h2 class="text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1">
          The Joy of the Resurrection
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
          Easter in Ethiopia follows a 55-day period of fasting known as <strong>Hudade</strong> or the Great Lent, 
          where believers abstain from meat, dairy, and animal products. Fasika marks the end of this fast 
          and the beginning of great rejoicing, as it celebrates the Resurrection of Jesus Christ.
        </p>
        <p class="text-body-2 mt-4">
          For Ethiopian Orthodox Christians, Fasika is the holiest feast of the year, even more important 
          than Christmas. It is the ultimate celebration of life, renewal, and victory over death.
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
    title: "Midnight Vigil",
    image: "https://i.imgur.com/jTgNccS.jpeg",
    description:
      "On Holy Saturday night, worshippers attend an all-night church service filled with prayers, hymns, and scripture readings. At dawn on Easter Sunday, the faithful rejoice in the Resurrection of Christ.",
  },
  {
    title: "Breaking the Fast",
    image: "https://i.imgur.com/Yi1YIMy.jpeg",
    description:
      "After 55 days of strict fasting during the Great Lent, families prepare a grand feast with dishes such as Doro Wat (chicken stew), Injera, and Tella (traditional beer). This meal symbolizes joy, unity, and gratitude.",
  },
  {
    title: "Family and Community Gatherings",
    image: "https://i.imgur.com/BW3TzLm.jpeg",
    description:
      "Fasika is a time for families and neighbors to gather, share meals, and celebrate together. Hospitality and generosity are central to the holiday.",
  },
  {
    title: "Easter Eggs",
    image: "https://i.imgur.com/8zT37sT.jpeg",
    description:
      "Boiled eggs, often decorated, are shared among family and friends. The egg represents new life and the Resurrection of Jesus Christ.",
  },
];

const culturalElements = [
  {
    title: "The Cross",
    image: "https://i.imgur.com/xWlWVGq.jpeg",
    description:
      "A sacred symbol of Christ’s victory over death, central in processions and church services during Fasika.",
  },
  {
    title: "White Traditional Clothing",
    image: "https://i.imgur.com/PpvQ7Th.jpeg",
    description:
      "Worshippers wear white Habesha clothes, such as the shamma or kemis, symbolizing purity and renewal.",
  },
  {
    title: "Sacred Hymns",
    image: "https://i.imgur.com/D2hmz8Y.jpeg",
    description:
      "Special hymns and chants fill churches with joy, replacing the solemn melodies of Holy Week.",
  },
];
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("https://i.imgur.com/2L9i2Mu.jpeg");
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
