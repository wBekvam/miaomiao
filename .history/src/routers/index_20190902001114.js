import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './moive'
import mineRouter from './mine'
import cinamRouter from './cinema'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        movieRouter,
        mineRouter,
        cinamRouter,
        {
            path : '/*',
            redirect : '/movie'
          }
    ]
})