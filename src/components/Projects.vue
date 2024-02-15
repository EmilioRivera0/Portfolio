<script>
export default {
    data() {
        return {
            category: "All",
            categories: ["All", "C/C++", "C#", "Python", "JavaScript"],
            projects: [
                //C/C++
                {
                    title: "Kharon Safe Directory",
                    description: "Kharon Safe Directory project consists of a pair of softwares used to protect, manage and log the access to a directory and its entries through a client server architecture.",
                    technologies: ["C/C++", "Bash", "POSIX Threads", "POSIX Semaphores", "POSIX Shared Memory", "Linux FIFOs", "Linux Filesystem API", "Unix C Standard Library"],
                    link: "https://github.com/EmilioRivera0/KharonSafeDirectory",
                    l_check: true,
                },
                {
                    title: "IPC on Linux using Shared Memory & Signals",
                    description: "C++ programs based on the Client-Server architecture that achieve communication between the Server and the multiple Clients through the implementation of Shared Memory, Semaphores, Monitors and Signals.",
                    technologies: ["C/C++", "Bash", "POSIX Signals", "POSIX Shared Memory", "Unix C Standard Library"],
                    link: "https://github.com/EmilioRivera0/Client_Server_IPC_Linux",
                    l_check: true,
                },
                //C#
                {
                    title: "Production and Warehouse Monitoring System",
                    description: "Collaborating on the designing and development of a desktop application for administering the inventory at FISAIR Puebla.",
                    technologies: ["C#", ".NET", "MAUI", "XAML",],
                    link: "",
                    l_check: false,
                },
                {
                    title: "Appointment Management System",
                    description: "Designing and developing an appointment management system for a nutrition clinic using .NET MAUI.",
                    technologies: ["C#", ".NET", "MAUI", "XAML",],
                    link: "",
                    l_check: false,
                },
                // Python
                {
                    title: "Engineering Faculty Repository API",
                    description: "I'm managing, designing and developing an API as the backend of the upcoming engineering repository for the IBERO Puebla community using Python and Django REST Framework.",
                    technologies: ["Python", "Django", "Django REST Framework", "Postman", "SQLite"],
                    link: "",
                    l_check: false
                },
                {
                    title: "Videogame API",
                    description: "Python developed API that has the CRUD functions and a search engine to interact with a PostgreSQL database containing information about videogames.",
                    technologies: ["Python", "Flask", "PostgreSQL"],
                    link: "https://github.com/EmilioRivera0/videogame_api",
                    l_check: true
                },
                {
                    title: "Ecommerce",
                    description: "This repository holds a basic Ecommerce website for selling any type of product.",
                    technologies: ["Python", "Django", "SQLite", "MDB Bootstrap"],
                    link: "https://github.com/EmilioRivera0/ecommerce_backend",
                    l_check: true
                },
                //JavaScript
                {
                    title: "Mobile App",
                    description: "Collaborating on the designing and development of a mobile application for FISAIR Puebla.",
                    technologies: ["JavaScript", "React", "Ionic", "Tailwind"],
                    link: "",
                    l_check: false
                },
                //C/C++
                {
                    title: "Truth Table Generator",
                    description: "Software developed in C that receives a logical expression and generates its respective truth table.",
                    technologies: ["C", "C Standard Library"],
                    link: "https://github.com/EmilioRivera0/TruthTableGenerator",
                    l_check: true
                },
                {
                    title: "Platypus Programming Language Lexical Analyzer",
                    description: "Platypus programming language lexical analyzer developed using vanilla C++.",
                    technologies: ["C++", "Bash", "C++ Standard Template Library"],
                    link: "https://github.com/EmilioRivera0/Platypus",
                    l_check: true
                },
                {
                    title: "Convex Hull",
                    description: "C++ programs able to generate a Convex Hull given the specified amount of random dots to generate. The Graham Scan Algorithm is used to find the smallest perimeter and area possible given the set of points.",
                    technologies: ["C++", "Bash", "C++ Standard Template Library", "Python", "Graphics.py"],
                    link: "https://github.com/EmilioRivera0/Convex_Hull",
                    l_check: true
                },
                {
                    title: "Atmega328P Car",
                    description: "C source code for a bluetooth remotely controlled car using an Atmega328P microcontroller.",
                    technologies: ["C", "Atmega328P"],
                    link: "https://github.com/EmilioRivera0/ATmega328P_Car",
                    l_check: true
                },
                {
                    title: "Atmega328P 8-bit Snake",
                    description: "C source code for an 8-bit snake with four physical direction buttons.",
                    technologies: ["C", "Atmega328P"],
                    link: "https://github.com/EmilioRivera0/ATmega328P_8-bit_Snake",
                    l_check: true
                },
                //Python
                {
                    title: "Sobel Filter",
                    description: "Python program capable of detecting the vertical and horizontal edges of an image by applying the Sobel filters.",
                    technologies: ["Python", "OpenCV", "Matplotlib", "Numpy"],
                    link: "https://github.com/EmilioRivera0/Sobel_Filter",
                    l_check: true
                },
                {
                    title: "Basic Task API",
                    description: "API to manage a to do tasks list.",
                    technologies: ["Python", "Flask"],
                    link: "https://github.com/EmilioRivera0/basic_task_api",
                    l_check: true
                },
                {
                    title: "Basic Task API Client",
                    description: "Web Client to interact with the task management API.",
                    technologies: ["Python", "Flask"],
                    link: "https://github.com/EmilioRivera0/basic_task_api_client",
                    l_check: true
                },
                {
                    title: "Hour Tracker",
                    description: "Python developed software that automates and manages the hours covered by students in their social service.",
                    technologies: ["Python", "SQL", "MySQL"],
                    link: "https://github.com/EmilioRivera0/hour_tracker",
                    l_check: true
                },
                //JavaScript
                {
                    title: "Portfolio",
                    description: "Personal portfolio developed using self taught technologies to expand my software development knowledge and capabilities. This is my first ever project using Vue.",
                    technologies: ["JavaScript", "Vue", "Tailwind"],
                    link: "https://github.com/EmilioRivera0/Portfolio",
                    l_check: true,
                },
            ]
        }
    },
    methods: {
        set_category(c) {
            this.category = c;
            console.log(this.category);
        },
        set_img(image) {
            const view_div = this.$refs.full_view_div;
            const view_img = this.$refs.full_view_img;
            this.img = image;
            view_div.classList.toggle('hidden');
            view_img.classList.toggle('hidden');
        }
    },
    computed: {
        //function that returns the projects to show based on the current selected category
        get_content() {
            // list to return containing the respective projects based on the category
            const list = []
            // return all projects
            if (this.category === "All") {
                return this.projects;
            }
            // iterate through each project 
            this.projects.forEach(element => {
                // return the C, C++ & C/C++ projects
                if (this.category === "C/C++") {
                    if (element.technologies.includes("C")) {
                        list.push(element);
                    }
                    else if (element.technologies.includes("C++")) {
                        list.push(element);
                    }
                    else if (element.technologies.includes("C/C++")) {
                        list.push(element);
                    }
                }
                // return the projects from the specified category
                else if (element.technologies.includes(this.category)) {
                    console.log(element);
                    list.push(element);
                }
            });
            return list;
        }
    },
}
</script>

<template>
    <!-- Page Content -->
    <div class="flex flex-col w-screen items-center bg-gradient-to-r from-cyan-500 to-green-800 dark:to-black">
        <!-- View Complete Image
        <div ref="full_view_div" class="hidden fixed w-full h-auto md:w-3/4 md:h-3/4 top-36 md:top-28 rounded-xl max-[768px]:hidden">
            <img ref="full_view_img" class="hidden object-cover rounded-xl" :src="'/@fs'+img">
        </div>
        -->
        <div class="flex flex-col md:flex-row w-11/12">
            <!-- PC Tabs -->
            <ul
                class="flex-column max-md:hidden mr-1 space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                <li v-for="it in categories">
                    <button @click="set_category(it)"
                        class="inline-flex items-center px-4 py-3 text-black dark:text-white rounded-lg activehover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                        {{ it }}
                    </button>
                </li>
            </ul>
            <!-- Mobile Tabs -->
            <div class="min-[768px]:hidden mb-3">
                <div class="sm:hidden">
                    <select
                        class="bg-gray-50 text-gray-900 font-bold text-lg rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white">
                        <option class="font-bold text-lg" v-for="it in categories" @click="set_category(it)">{{ it }}
                        </option>
                    </select>
                </div>
            </div>
            <!-- Cards Container -->
            <div class="grid md:grid-cols-3">
                <div v-for="it in get_content" class="flex flex-col items-start min-[1000px]:flex-row md:mx-1 mb-3">
                    <!-- Image Preview
                    <img class="object-cover w-full min-[1000px]:w-1/3 rounded-xl h-96"
                        :src="'/@fs'+it.image" @click="set_img(it.image)">-->
                    <div
                        class="flex-col  w-full p-4 h-auto leading-normal rounded-xl shadow bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                        <h1 class="mb-2 ml-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ it.title }}
                        </h1>
                        <p class="mb-3 ml-1 text-xl text-gray-700 dark:text-gray-400">{{ it.description }}</p>
                        <div class="">
                            <span v-for="tech in it.technologies"
                                class="inline-flex items-center m-1 gap-1 rounded-full px-2 py-1 text-sm font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                                {{ tech }} </span>
                        </div>
                        <div v-if="it.l_check">
                            <a :href="it.link"
                                class="text-white mt-3 bg-[#24292F] hover:bg-[#24292F]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 dark:focus:ring-purple-800 shadow-3xl dark:shadow-lg dark:shadow-purple-800/80">
                                <svg class="w-4 h-4 me-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                        clip-rule="evenodd" />
                                </svg>
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>