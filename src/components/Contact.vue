<script>
export default {
    data() {
        return {
            contacts: [
                {
                    title: "Linkedin",
                    link: "https://www.linkedin.com/in/emilio-rivera-macias"
                },
                {
                    title: "Email",
                    link: "emilioriveramacias@gmail.com",
                    mail: true,
                },
                {
                    title: "Github",
                    link: "https://github.com/EmilioRivera0"
                },
                {
                    title: "Phone",
                    link: "522224896954",
                    phone: true,
                },
            ]
        }
    },
    methods: {
    }
}
</script>

<template>
    <!-- Page Content -->
    <div class="flex flex-col w-screen items-center bg-gradient-to-r from-cyan-500 to-green-800 dark:to-black">
        <div class="h-auto w-10/12 md:w-auto rounded-xl shadow-2xl bg-white dark:bg-gray-900 dark:shadow-purple-800/80 border dark:border-gray-700 border-gray-600">
            <div class="w-full text-center font-bold text-xl border-b text-black dark:text-white border-gray-600">
                <h1 class="py-2">Contact</h1>
            </div>
            <ul class="w-full px-3 md:px-5 text-xl text-back dark:text-white">
                <li v-for="it in contacts" class="py-2 border-b dark:border-gray-700 border-gray-600">
                    <h1>{{ it.title }}: </h1>
                    <a :href="it.mail? 'mailto:'+it.link : (it.phone? 'tel:+'+it.link : it.link)" class="text-blue-700">{{ '+'+it.link }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>