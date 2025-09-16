<template> 
  <v-container class="pa-0">
    <!-- Overview -->
    <div class="mb-12">
      <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4">
        Good Friday (ስቅለት – Siklet)
      </h2>
      <p class="text-body-1">
        Good Friday, known as <strong>Siklet</strong> in Ethiopia, is one of the most solemn and 
        sacred days in the Ethiopian Orthodox Tewahedo Church. It commemorates the crucifixion 
        and death of Jesus Christ, marking the culmination of His suffering for the salvation of humanity. 
        It is observed on the Friday before Easter Sunday (Fasika) according to the Ethiopian calendar.
      </p>
    </div>

    <!-- Hero Section -->
    <v-row class="hero-section text-center" align="center" justify="center">
      <v-col>
        <h1 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up">
          ስቅለት (Siklet)
        </h1>
        <h2 class="text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1">
          The Crucifixion and Sacrifice of Jesus Christ
        </h2>
      </v-col>
    </v-row>

    <!-- Main Content -->
    <v-container class="py-12">

      <!-- History & Religious Significance -->
      <div class="mb-12 section-bg">
        <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4">
          History and Religious Significance
        </h2>
        <p class="text-body-2">
          Good Friday commemorates the suffering, crucifixion, and death of Jesus Christ on Mount Calvary. 
          For Ethiopian Orthodox Christians, it is a day of deep mourning, reflection, and prayer. 
          The faithful remember Christ’s sacrifice as the ultimate act of love and redemption.
        </p>
        <p class="text-body-2 mt-4">
          The observance of Good Friday in Ethiopia is rooted in centuries-old liturgical tradition. 
          The faithful participate in long church services filled with prayers, prostrations, and chants 
          that recount the Passion of Christ. The atmosphere is solemn, reminding worshippers of 
          both the sorrow of Christ’s death and the hope of resurrection.
        </p>
      </div>

      <!-- Traditions -->
      <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-6">
        Traditions and Observances
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

      <!-- Key Elements -->
      <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mt-12 mb-6">
        Key Spiritual and Cultural Elements
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
    title: "Day-long Fasting and Prayer",
    image: "https://i.imgur.com/5n0Gk1Q.jpeg",
    description:
      "The faithful observe strict fasting, refraining from food and drink until the conclusion of church services, as an expression of repentance and solidarity with Christ’s suffering.",
  },
  {
    title: "Church Services and Prostrations",
    image: "https://i.imgur.com/kplpOZs.jpeg",
    description:
      "Special liturgies are held in churches, where worshippers perform hundreds of prostrations, chant hymns, and listen to readings from the Gospels recounting the Passion of Christ.",
  },
  {
    title: "Processions and Symbolic Acts",
    image: "https://i.imgur.com/zAMj2Mt.jpeg",
    description:
      "Some communities hold processions symbolizing Christ’s journey to the cross, carrying wooden crosses and chanting hymns of lamentation.",
  },
  {
    title: "Quiet Reflection at Home",
    image: "https://i.imgur.com/LVu3pGo.jpeg",
    description:
      "Families spend the day in solemn reflection, prayer, and reading scripture, preparing spiritually for the joy of the Resurrection on Easter Sunday (Fasika).",
  },
];

const culturalElements = [
  {
    title: "The Cross",
    image: "https://i.imgur.com/hA1w7mH.jpeg",
    description:
      "The cross is the central symbol of Good Friday, representing both Christ’s suffering and the victory of salvation through His sacrifice.",
  },
  {
    title: "Sacred Hymns",
    image: "https://i.imgur.com/7NUs2ut.jpeg",
    description:
      "Traditional hymns and chants, filled with deep emotion, are sung to honor the Passion of Christ and to invite worshippers into reflection and prayer.",
  },
  {
    title: "Fasting Tradition",
    image: "https://i.imgur.com/Z1B3nJ7.jpeg",
    description:
      "Strict fasting on Good Friday reinforces humility, repentance, and spiritual focus, connecting worshippers to the solemnity of the day.",
  },
];
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
    url("https://i.imgur.com/U5WnHcC.jpeg");
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
