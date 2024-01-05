<script>
export default {
    data() {
        return {
            current_page: "Home",
        }
    },
    methods: {
        toggle_menu(event) {
            const menu = this.$refs.menu;
            const light = this.$refs.light;
            const dark = this.$refs.dark;
            const div_mode = this.$refs.mode;
            //toggle hidden class and dark mode
            if (event.target.id === "mobile") {
                menu.classList.toggle('hidden');
            }
            else if (event.target.id === "mode") {
                light.classList.toggle('hidden');
                dark.classList.toggle('hidden');
                div_mode.classList.toggle('dark');
            }
            else {
                menu.classList.toggle('hidden');
            }
        },
        set_current_page(page) {
            const home = this.$refs.home;
            const projects = this.$refs.projects;
            const cv = this.$refs.cv;

            const profile_view = this.$refs.profile_view;
            const projects_view = this.$refs.projects_view;

            if (page === "Home") {
                home.classList.toggle('bg-blue-700');
                home.classList.toggle('md:text-blue-700');
                home.classList.toggle('text-white');
                home.classList.toggle('text-gray-900');
                home.classList.toggle('dark:text-white');
                home.classList.toggle('md:dark:text-blue-500');
            }
            else if (page === "Projects") {
                projects.classList.toggle('bg-blue-700');
                projects.classList.toggle('md:text-blue-700');
                projects.classList.toggle('text-white');
                projects.classList.toggle('text-gray-900');
                projects.classList.toggle('dark:text-white');
                projects.classList.toggle('md:dark:text-blue-500');
            }
            else if (page === "CV") {
                cv.classList.toggle('bg-blue-700');
                cv.classList.toggle('md:text-blue-700');
                cv.classList.toggle('text-white');
                cv.classList.toggle('text-gray-900');
                cv.classList.toggle('dark:text-white');
                cv.classList.toggle('md:dark:text-blue-500');
            }
            if (this.current_page === "Home") {
                home.classList.toggle('bg-blue-700');
                home.classList.toggle('md:text-blue-700');
                home.classList.toggle('text-white');
                home.classList.toggle('text-gray-900');
                home.classList.toggle('dark:text-white');
                home.classList.toggle('md:dark:text-blue-500');
            }
            else if (this.current_page === "Projects") {
                projects.classList.toggle('bg-blue-700');
                projects.classList.toggle('md:text-blue-700');
                projects.classList.toggle('text-white');
                projects.classList.toggle('text-gray-900');
                projects.classList.toggle('dark:text-white');
                projects.classList.toggle('md:dark:text-blue-500');
            }
            else if (this.current_page === "CV") {
                cv.classList.toggle('bg-blue-700');
                cv.classList.toggle('md:text-blue-700');
                cv.classList.toggle('text-white');
                cv.classList.toggle('text-gray-900');
                cv.classList.toggle('dark:text-white');
                cv.classList.toggle('md:dark:text-blue-500');
            }
            if (page != this.current_page && page != 'CV') {
                console.log(profile_view)
                profile_view.classList.toggle('hidden');
                projects_view.classList.toggle('hidden');
            }
            this.current_page = page;
        },
    },
}
</script>

<template>
    <!-- Div used to enable/disable dark mode-->
    <div ref="mode">
        <!-- Background Div-->
        <div class="h-screen w-screen bg-gradient-to-r from-cyan-500 to-green-800 dark:to-black">
            <!-- Navbar -->
            <nav
                class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b rounded-b-2xl border-gray-200 dark:border-gray-600">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                    <!-- Title -->
                    <div class="flex flex-col justify-start">
                        <div>
                            <p class="self-center text-md md:text-lg font-semibold whitespace-nowrap dark:text-white">Emilio
                                Rivera
                                Macías</p>
                        </div>
                        <div>
                            <p class="self-center text-sm md:text-md font-semibold whitespace-nowrap dark:text-white">
                                Computer
                                Systems
                                Engineering Student</p>
                        </div>
                    </div>
                    <!-- Mobile Menu Toggle Button -->
                    <button type="button"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        @click="toggle_menu">
                        <!-- Menu Button SVG -->
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <!-- Application Pages -->
                    <div ref="menu" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        @click="">
                        <ul
                            class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-400 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li class="md:pt-5">
                                <button ref="home"
                                    class="w-full block text-left py-2 px-3 text-white bg-blue-700 rounded-xl md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                    @click="set_current_page('Home')">
                                    Home</button>
                            </li>
                            <li class="md:pt-5">
                                <button ref="projects"
                                    class="w-full block text-left py-2 px-3 text-gray-900 rounded-xl md:bg-white hover:bg-blue-300 dark:md:bg-gray-900 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    @click="set_current_page('Projects')">
                                    Projects</button>
                            </li>
                            <li class="md:pt-5">
                                <button class="w-full" @click="set_current_page('CV')">
                                    <a ref="cv" href="/CV.pdf" download
                                        class="block text-left py-2 px-3 text-gray-900 rounded-xl md:bg-white hover:bg-blue-300 dark:md:bg-gray-900 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">CV</a></button>
                            </li>
                            <!-- Night Mode Toggle -->
                            <li class="md:pt-5">
                                <div class="flex pl-3 pt-2 md:p-0">
                                    <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                        <input id="mode" type="checkbox" value="" class="sr-only peer" @click="toggle_menu">
                                        <div
                                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                    </label>
                                    <!-- Light Mode SVG -->
                                    <div class="pl-1" ref="light">
                                        <svg class="pl-1 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z" />
                                        </svg>
                                    </div>
                                    <!-- Dark Mode SVG -->
                                    <div class="pl-1 hidden" ref="dark">
                                        <svg class="pl-2 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z" />
                                        </svg>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!-- Empty space to avoid navbar covering the page content -->
            <div class="w-screen h-20 md:h-28"></div>
            <div ref="profile_view">
                <Profile />
            </div>
            <div ref="projects_view" class="hidden">
                <Projects />
            </div>
        </div>
    </div>
</template>