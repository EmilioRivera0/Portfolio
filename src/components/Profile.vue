<script>
export default {
    data() {
        return {
            languages: ["English", "Spanish"],
            linux: ["Linux", "Bash", "CLI"],
            c_cpp: ["C/C++", "Linux API", "Threads", "IPC", "System Calls", "GNU C Library", "POSIX Standard", "Standard Template Library"],
            cs: ["C#", ".NET", ".NET MAUI"],
            python: ["Python", "Flask", "Django", "Django REST Framework", "Pandas", "TensorFlow", "SQL Alchemy"],
            js: ["JavaScript", "Vue", "React", "Tailwind"],
            rd: ["Relational Databases", "MySQL", "PostgreSQL", "SQLite"],
            nrd: ["Non Relational Databases", "MongoDB"],
            other: ["Docker", "Java", "Postman", "OOP", "Data Structures", "ORM"],
            strengths: ["Leadership", "Confident", "Social", "Great Communicator", "Responsible", "Initiative", "Inquirer", "Curiosity"]
        }
    },
    methods: {
        toggle_profile(event) {
            const skills = this.$refs.skills;
            const strengths = this.$refs.strengths;
            //toggle indicated hidden div
            if (event.target.id === "skill") {
                skills.classList.toggle('hidden');
            }
            else if (event.target.id === "strength") {
                strengths.classList.toggle('hidden');
            }
        }
    }
}
</script>

<template>
    <!-- Page Content -->
    <div class="flex flex-col w-screen items-center bg-gradient-to-r from-cyan-500 to-green-800 dark:to-black">
        <!-- Profile Div -->
        <div class="flex flex-col items-start w-10/12 md:flex-row">
            <!-- Picture of Me -->
            <img class="object-cover w-full rounded-xl h-96 md:h-full md:w-1/3" src="../assets/Me.jpg" alt="">
            <!-- Description of Me -->
            <div
                class="flex flex-col justify-between mt-3 md:mt-0 md:ml-4 p-4 leading-normal md:w-2/3 opacity-95 border border-gray-200 rounded-xl shadow bg-white dark:border-gray-700 dark:bg-gray-800">
                <h1 class="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About Me
                </h1>
                <p class="mb-3 font-normal text-xl md:text-2xl text-black dark:text-gray-400">
                    I’m a hard-working person who is constantly
                    looking to acquire knowledge and improve my skills to become a high-value professional in the
                    Software
                    Engineering and Development industries.</p>

                <p class="mb-3 font-normal text-xl md:text-2xl text-black dark:text-gray-400">
                    I’m currently seeking to become part of a project or company to contribute and strengthen my
                    knowledge
                    and skills in order to continue constructing my professional profile with work experience.</p>

                <p class="mb-3 font-normal text-xl md:text-2xl text-black dark:text-gray-400">
                    Especially in any area related with Linux, backend and desktop/business software development since I’m
                    very interested in learning more on these topics and working with them because they are developed with
                    programming languages and technologies that I understand quite well and work with comfortably. 
                    I’m also very interested in learning new technologies and programming languages that improve my skill set and
                    professional profile to extend even more my knowledge on the software development industry.</p>

                <div>
                    <!-- Skills -->
                    <h2>
                        <button id="skill" type="button" @click="toggle_profile"
                            class="flex items-center justify-between w-full p-5 font-semibold rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3">
                            <span class="text-lg text-black dark:text-gray-400">Skills</span>
                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div ref="skills" class="hidden">
                        <div class="px-5 pt-5 pb-1 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <span v-for="it in languages"
                                class="inline-flex items-center m-1 gap-1 rounded-full px-2 py-1 text-normal font-semibold bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                                {{ it }} </span>
                        </div>
                        <div
                            class="px-5 py-1 border border-t-0 border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <span v-for="it in linux"
                                class="inline-flex items-center m-1 gap-1 rounded-full px-2 py-1 text-normal font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                                {{ it }} </span>
                        </div>
                        <div
                            class="px-5 py-1 border border-t-0 border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <span v-for="it in c_cpp"
                                class="inline-flex items-center m-1 gap-1 rounded-full px-2 py-1 text-normal font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                                {{ it }} </span>
                        </div>
                        <div
                            class="px-5 py-1 border border-t-0 border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <span v-for="it in cs"
                                class="inline-flex items-center m-1 gap-1 rounded-full px-2 py-1 text-normal font-semibold bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                                {{ it }} </span>
                        </div>
                        <div
                            class="px-5 py-1 border border-t-0 border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <span v-for="it in python"
                                class="inline-flex items-center m-1 gap-1 rounded-full px-2 py-1 text-normal font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                {{ it }} </span>
                        </div>
                        <div
                            class="px-5 py-1 border border-t-0 border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <span v-for="it in js"
                                class="inline-flex items-center m-1 gap-1 rounded-full px-2 py-1 text-normal font-semibold bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
                                {{ it }} </span>
                        </div>
                        <div
                            class="px-5 py-1 border border-t-0 border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <span v-for="it in rd"
                                class="inline-flex items-center m-1 gap-1 rounded-full px-2 py-1 text-normal font-semibold bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300">
                                {{ it }}</span>
                        </div>
                        <div
                            class="px-5 py-1 border border-t-0 border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <span v-for="it in nrd"
                                class="inline-flex items-center m-1 gap-1 rounded-full px-2 py-1 text-normal font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
                                {{ it }}</span>
                        </div>
                        <div
                            class="px-5 pb-5 pt-1 border border-t-0 border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <span v-for="it in other"
                                class="inline-flex items-center m-1 gap-1 rounded-full px-2 py-1 text-normal font-semibold bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-300">
                                {{ it }} </span>
                        </div>
                    </div>
                    <!-- Strengths -->
                    <h2>
                        <button id="strength" type="button" @click="toggle_profile"
                            class="flex items-center justify-between w-full p-5 font-semibold rtl:text-right rounded-b-xl text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3">
                            <span class="text-lg text-black dark:text-gray-400">Strengths</span>
                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div ref="strengths" class="hidden">
                        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <span v-for="it in strengths"
                                class="inline-flex items-center m-1 gap-1 rounded-full px-2 py-1 text-normal font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300">
                                {{ it }} </span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div></template>
