const state = {
    nm: window.localStorage.getItem( 'nowNM') || '北京',
    id:  window.localStorage.getItem( 'nowId') || 1

};

const  actions = {

};

const mutations = {
    CITY_INFO(state, payload){
        state.nm = payload.nm
        state.id = payload.id
    }

};

export default {
    // 命名空间，便于区分
    namespaced: 'true',
    state,
    actions,
    mutations
}