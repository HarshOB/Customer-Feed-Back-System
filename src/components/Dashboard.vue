<template>
    <div class="dashboard wrapper">
        <component :is="side" v-on:fromSidebar="getSidebar"></component>
         <div class="main-panel">
        <component :is="nav" v-on:fromNav="getNav"></component>
        <component :is="maindash"></component>
        <component :is="dashfooter"></component>
        </div>
    </div>
</template>

<script>
    import '../assets/js/jquery-3.2.1.js'
    import '../assets/js/material-dashboard.js'
    import '../assets/js/material.min.js'
    import MainDash from './dashMain/MainDash'
    import NewFeedback from './dashMain/NewFeedback'
    import MyFeedback from './dashMain/MyFeedback'
    import Profile from './dashMain/Profile'
    import Nav from './dashMain/Nav'
    import Sidebar from './dashMain/Sidebar'
    import Down from './indexMain/Down'
    export default {
        name: 'Dashboard',
        components: {
            MainDash, Nav, Sidebar, Down, NewFeedback, Profile, MyFeedback
        },
        data() {
            return {
                side: 'Sidebar',
                nav: 'Nav',
                maindash: 'MainDash',
                dashfooter: 'Down'
            }
        },
        methods: {
            getSidebar(option) {
                this.maindash = option;
            },
            getNav(option) {
                this.maindash = option;
            }
        },
    }
</script>

<style scoped>
    @import '../assets/css/material-dashboard.css';
</style>
