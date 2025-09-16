<template> 
  <v-container class="pa-0">
    <!-- Overview -->
    <div class="mb-12">
      <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4">
        Adwa Victory Day
      </h2>
      <p class="text-body-1">
        Adwa Victory Day is celebrated on <strong>Yekatit 23 (March 2)</strong> 
        to honor Ethiopia’s historic victory over the Italian colonial army in 1896. 
        The Battle of Adwa stands as a symbol of freedom, unity, and resistance against colonialism, 
        making Ethiopia the only African nation to successfully repel European colonization during that era.
      </p>
    </div>

    <!-- Hero Section -->
    <v-row class="hero-section text-center" align="center" justify="center">
      <v-col>
        <h1 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold text-white fade-up">
          Adwa Victory (የአድዋ ጦርነት)
        </h1>
        <h2 class="text-h6 text-sm-h5 text-white mt-2 font-weight-regular fade-up delay-1">
          A Symbol of African Freedom and Resistance
        </h2>
      </v-col>
    </v-row>

    <!-- Main Content -->
    <v-container class="py-12">

      <!-- History -->
      <div class="mb-12 section-bg">
        <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4">
          History of the Battle of Adwa
        </h2>
        <p class="text-body-2">
          On March 2, 1896, Ethiopian forces led by <strong>Emperor Menelik II</strong>, 
          <strong>Empress Taytu Betul</strong>, and other regional leaders decisively defeated 
          the invading Italian army at the Battle of Adwa in northern Ethiopia. 
          This victory preserved Ethiopia’s sovereignty and dealt a significant blow to European colonial ambitions in Africa. 
        </p>
        <p class="text-body-2 mt-4">
          The triumph at Adwa was not only a military success but also a moment of African pride and 
          inspiration for anti-colonial struggles across the continent. It remains a powerful reminder 
          of unity, resilience, and the determination to defend independence.
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

      <!-- African & Global Legacy -->
      <div class="mt-16 section-bg">
        <h2 class="text-h5 text-sm-h4 font-weight-bold primary--text mb-4">
          African & Global Legacy of Adwa
        </h2>
        <p class="text-body-2">
          The Battle of Adwa was more than a victory for Ethiopia — it was a turning point for Africa 
          and the world. It shattered the myth of European invincibility and became a source of pride 
          for oppressed peoples everywhere.
        </p>
        <ul class="mt-4 text-body-2">
          <li class="mb-2">
            ✦ Inspired Pan-African leaders such as W.E.B. Du Bois, Marcus Garvey, and Kwame Nkrumah, 
            who viewed Adwa as a call for unity and resistance.
          </li>
          <li class="mb-2">
            ✦ Strengthened African liberation movements in the 20th century, giving hope that freedom 
            from colonial rule was possible.
          </li>
          <li class="mb-2">
            ✦ Inspired the African diaspora, especially in the Caribbean and the United States, where 
            Adwa became a symbol of Black pride and resilience.
          </li>
          <li>
            ✦ Today, Adwa remains celebrated not just in Ethiopia but across the African continent and 
            by people of African descent worldwide.
          </li>
        </ul>
      </div>

    </v-container>
  </v-container>
</template>

<script setup>
const traditions = [
  {
    title: "Commemorative Parades",
    image: "https://i.imgur.com/kplpOZs.jpeg",
    description:
      "In Addis Ababa and towns across Ethiopia, parades are held featuring the military, students, and community groups. These parades honor the memory of those who fought at Adwa and celebrate Ethiopia’s sovereignty.",
  },
  {
    title: "Public Gatherings and Speeches",
    image: "https://i.imgur.com/5n0Gk1Q.jpeg",
    description:
      "Government leaders, scholars, and community figures deliver speeches reflecting on the significance of Adwa. The day is a moment to honor national heroes and inspire future generations.",
  },
  {
    title: "Cultural Performances",
    image: "https://i.imgur.com/zAMj2Mt.jpeg",
    description:
      "Traditional songs, dances, and theatrical performances reenact the bravery and unity that defined the victory. These performances preserve the history and transmit it to younger Ethiopians.",
  },
  {
    title: "Community Gatherings",
    image: "https://i.imgur.com/LVu3pGo.jpeg",
    description:
      "Families and communities gather to share meals, tell stories of the heroes of Adwa, and reflect on the values of courage, unity, and independence.",
  },
];

const culturalElements = [
  {
    title: "Ethiopian Flag",
    image: "https://i.imgur.com/Z1B3nJ7.jpeg",
    description:
      "The green, yellow, and red colors of the Ethiopian flag are prominently displayed during Adwa celebrations, symbolizing unity, hope, and sacrifice.",
  },
  {
    title: "Heroic Leaders",
    image: "https://i.imgur.com/hA1w7mH.jpeg",
    description:
      "Figures such as Emperor Menelik II, Empress Taytu, and Ras Alula are honored for their leadership and strategic brilliance during the battle.",
  },
  {
    title: "Songs of Victory",
    image: "https://i.imgur.com/7NUs2ut.jpeg",
    description:
      "Patriotic songs celebrating Adwa are performed by choirs and musicians, strengthening national pride and identity.",
  },
];
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
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
