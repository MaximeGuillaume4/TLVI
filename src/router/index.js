import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from "../components/Home.vue";
import Session from '../components/Session/Session.vue'
import Lesson from '../components/Session/Lesson.vue'
import ChangeUser from "@/components/ChangeUser";

export default new Router({
    routes: [
        { path: '/', name: 'Home', component: Home },
        {path: '/Session', name: 'Session', component: Session},
        {path: '/Lesson', name: 'Lesson', component: Lesson},
        {path: '/ChangerUser', name: 'ChangerUser', component: ChangeUser}


    ]
})