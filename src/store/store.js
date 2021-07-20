import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export const store = new vuex.Store({
    state : {
        image :'',
        name : '',
        surname : '',
        job : '',
        birthday : '',
        city : '',
        details : '',
        eposta : '',
        phone : '',
        linkedin : '',
        github : '',
        youtube : '',
        twitter : '',
        school : {
            name : '',
            depart :'',
            start : '',
            finish : '',
        },
        company : {
            name : '',
            role : '',
            start : '',
            finish : ''
        },
    }
})