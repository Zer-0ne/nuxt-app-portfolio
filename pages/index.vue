<template>
  <div class="bg-[#0a1817] flex flex-col flex-1 z-[4] relative min-h-[100vh] text-white">
    <div class="flex px-4 flex-1 min-h-[100vh] !max-w-[1200px] container mx-auto flex-wrap-reverse gap-5">
      <div
        class="flex flex-1 sm:flex-2 relative top-[-50px] z-[5] md:static flex-col basis-[300px] justify-center gap-4">
        <h2 class="font-bold font-[minecraft] text-3xl ">Hi, There I am
          <span class="text-[#00dfff]">Sahil Khan</span>
        </h2>
        <p class="tracking-[.2rem] font-[pixel] leading-normal text-lg">
          Hi! I'm Sahil Khan, a full-stack developer skilled in building dynamic web applications. I enjoy working on both the front-end and back-end, creating seamless user experiences. Let's collaborate to turn ideas into reality!
        </p>

        <!-- Buttons for linkedin and github -->
        <div class="flex gap-4 mt-4">
          <button
            class="border border-cyan-500 bg-transparent text-cyan-500 py-2 px-4 rounded transition duration-300 hover:bg-cyan-500 hover:text-white">
            <NuxtLink to="https://linkedin.com/in/sahil-khan-7a718a259">Linkedin</NuxtLink>
          </button>
          <button class="bg-cyan-500 text-white py-2 px-4 rounded transition duration-300 hover:bg-cyan-600">
            <NuxtLink to="https://github.com/Zer-0ne/pinterest-android-app">Github</NuxtLink>
          </button>
        </div>
      </div>
      <NuxtImg src="/bg.gif"
        class="bg-blend-luminosity flex-1 mix-blend-luminosity hover:mix-blend-normal md:w-[40rem] w-[10rem] animated-image"
        @mouseover="isHovered = true" @mouseleave="isHovered = false" />
    </div>

    <section id="skills" class="overflow-hidden relative justify-center items-center flex flex-1">
      <div class="absolute w-[72px] md:w-auto">
        <h3 class="uppercase text-center font-black text-xs md:text-3xl">MY skills</h3>
        <p class="text-[7px] w-[70px] md:text-base opacity-75 md:w-[200px] text-gray-300 text-center">
          Here are some of the skills I possess that help me in my projects.
        </p>
      </div>
      <NuxtImg class="md:max-w-[50%] max-w-[70%] absolute transition-transform duration-300 transform-image"
        :style="{ transform: `rotate(${rotation}deg)` }" src="/skills_1.svg" />
      <NuxtImg class="md:max-w-[75%] max-w-[110%] absolute transition-transform duration-300 transform-image"
        :style="{ transform: `rotate(${-rotation}deg)` }" src="/skills_2.svg" />
      <NuxtImg class="md:max-w-[150%] max-w-[220%] transition-transform duration-300 transform-image"
        :style="{ transform: `rotate(${rotation}deg)` }" src="/skills_3.svg" />
    </section>

    <!-- Projects Section -->
    <section id="projects" class="px-4 py-20">
      <h2 class="text-2xl font-bold text-center mb-14">My Projects</h2>
      <div class="flex flex-wrap justify-center gap-6">
        <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
      </div>
    </section>

    <!-- Contact Us Section -->
    <section id="contact" class="px-4 py-10 bg-[#1a2423]">
      <h2 class="text-2xl font-bold text-center mb-6">Contact Us</h2>
      <form @submit="handleSubmit" class="max-w-md mx-auto bg-[#2a353400] p-6 rounded-lg">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-300">Name</label>
          <input type="text" id="name" v-model="name" @input="handleChange" required
            class="mt-1 block w-full text-black p-2 border border-gray-300 rounded-md" />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
          <input type="email" id="email" v-model="email" @input="handleChange" required
            class="mt-1 block w-full text-black p-2 border border-gray-300 rounded-md" />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-sm font-medium text-gray-300">Message</label>
          <textarea id="message" v-model="message" @input="handleChange" rows="4" required
            class="mt-1 block w-full text-black p-2 border border-gray-300 rounded-md"></textarea>
        </div>
        <button type="submit"
          class="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 transition duration-300">
          Send Message
        </button>
      </form>
      <!-- <div class="flex flex-1 max-w-md mx-auto gap-5 justify-center px-6">
        <NuxtImg v-for="c in connect" :key="c" class=" w-8 cursor-pointer" :src='c' />
      </div> -->
    </section>

    <!-- Footer -->
    <footer class="bg-[#1a2423] text-center py-4">
      <p class="text-sm">© 2023 Sahil Khan. All rights reserved.</p>
    </footer>

    <!-- Scroll to Top Button -->
    <NuxtLink to="#" v-if="showScrollToTop" @click="scrollToTop"
      class="fixed bottom-5 right-5 bg-cyan-500 text-white py-2 px-4 rounded transition duration-300 hover:bg-cyan-600">
      ↑
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const connect = [
  "/icons/whatsapp_icon.svg",
  "/icons/linkedin_icon.svg",
  "/icons/mail_icon.svg",
]

const projects = [
  { title: 'EtherBlog', img: 'https://media.licdn.com/dms/image/v2/D562DAQHKR6-89QtJbQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1721577644136?e=1727618400&v=beta&t=br9adhaQI9oO9nEExGJKYpqSNPac0eoVY7SUliLcaxs', description: 'EtherBlog is an innovative decentralized blogging platform built on the Solana blockchain. It empowers creators with full ownership and control over their content while ensuring security and transparency through blockchain technology.', link: 'https://solana-helius-blog-master-next.vercel.app/' },
  { title: 'News Wave', img: '/bg.gif', description: 'This project showcases my ability to build dynamic, responsive web applications using modern web development technologies.', link: 'https://newswave-five.vercel.app/' },
  { title: 'CopyCode Student community jamia hamdard', img: 'https://media.licdn.com/dms/image/v2/D562DAQEWbe0AYhA5uQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1705746508355?e=1727618400&v=beta&t=ObV753uLNtKugobmd0Pqv8KRSYzIw8G33kDN28aettI', description: 'Building a portfolio for Copy Code, where every line speaks volumes! 📄💻 Dive into my coding haven, showcasing a collection of meticulously crafted pieces. From elegant snippets to robust solutions, this portfolio is a testament to my coding prowess. Join me on a journey where innovation meets functionality, and where each project is a chapter in the story of my coding adventure',link:'https://copycode.vercel.app/' },
  { title: 'Pinterest Clone', img: 'https://media.licdn.com/dms/image/v2/D562DAQEzAk_D2bPkUg/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1702722504697?e=1727618400&v=beta&t=YSPP-yBrArGf9FHUafHn0ZX7hCoQyucKYW9zMVnkheQ', description: 'Introducing my Pinterest clone, a dynamic web project crafted with TypeScript, Firebase, MongoDB, and Material UI. This visually captivating platform allows users to discover, curate, and share inspiring content seamlessly. Leveraging the power of TypeScript ensures robust and scalable code, while Firebase facilitates real-time data synchronization and user authentication. MongoDB serves as the reliable database backbone, ensuring efficient storage and retrieval of user-generated content. The Material UI design adds a polished touch, offering an intuitive and delightful user experience. Dive into a world of creativity with this Pinterest clone, where pinning and exploring ideas become an engaging and personalized journey.',link:'https://pinterest-phi.vercel.app/' },
  { title: 'Pinterest Clone android', img: 'https://media.licdn.com/dms/image/v2/D562DAQEzAk_D2bPkUg/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1702722504697?e=1727618400&v=beta&t=YSPP-yBrArGf9FHUafHn0ZX7hCoQyucKYW9zMVnkheQ', description: 'Introducing my Pinterest clone, a dynamic web project crafted with TypeScript, Firebase, MongoDB, and Material UI. This visually captivating platform allows users to discover, curate, and share inspiring content seamlessly. Leveraging the power of TypeScript ensures robust and scalable code, while Firebase facilitates real-time data synchronization and user authentication. MongoDB serves as the reliable database backbone, ensuring efficient storage and retrieval of user-generated content. The Material UI design adds a polished touch, offering an intuitive and delightful user experience. Dive into a world of creativity with this Pinterest clone, where pinning and exploring ideas become an engaging and personalized journey.',link:'https://github.com/Zer-0ne/pinterest-android-app' },
];

const blogs = [
  { title: 'Blog Post 1', img: '/bg.gif', description: 'Description of Blog Post 1 goes here. This blog is about...' },
  { title: 'Blog Post 2', img: '/bg.gif', description: 'Description of Blog Post 2 goes here. This blog is about...' },
  { title: 'Blog Post 3', img: '/bg.gif', description: 'Description of Blog Post 3 goes here. This blog is about...' },
];

const showScrollToTop = ref(false);
const rotation = ref(0);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

let lastScrollY = 0; // Track last scroll position

const handleScroll = () => {
  showScrollToTop.value = window.scrollY > 300;

  // Detect scroll direction
  if (window.scrollY > lastScrollY) {
    // Scrolling down, rotate clockwise
    rotation.value += 5;
  } else if (window.scrollY < lastScrollY) {
    // Scrolling up, rotate anti-clockwise
    rotation.value -= 5;
  }

  lastScrollY = window.scrollY; // Update last scroll position
};
let isHovered = false as boolean;

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const name = ref('');
const email = ref('');
const message = ref('');

// Handle input changes
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement;
  if (target.id === 'name') {
    name.value = target.value;
  } else if (target.id === 'email') {
    email.value = target.value;
  } else if (target.id === 'message') {
    message.value = target.value;
  }
};

const handleSubmit = async (event: Event) => {
  event.preventDefault();
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    })
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Message sent:', data);
    // Optionally reset the form or show a success message
  } catch (error) {
    console.error('Error sending message:', error);
  }
};
</script>

<style scoped>
.animated-image {
  animation: float 3s ease-in-out infinite;
  transition: transform .3s ease;
}

.animated-image:hover {
  transform: scale(1.05);
}

.transform-image {
  transition: transform 0.3s ease;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
