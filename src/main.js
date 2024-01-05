import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
// components to register
import Profile from "./components/Profile.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";

// create app object
const app = createApp(App);

// register components globally
// profile
app.component('Profile', Profile);
// projects
app.component('Projects', Projects);
// contact
app.component('Contact', Contact);

// mount app
app.mount('#app')