import {
    SAVE_DEOM,
    SAVE_SHOPDATA,
    SAVE_NAVLIST
} from './mutations-type'

export default {
    [SAVE_DEOM] (state,demo){
        state.demo = demo
    },
    [SAVE_SHOPDATA] (state,shopdatas){
        state.shopdatas = shopdatas
    },
    [SAVE_NAVLIST] (state,navList){
        state.navList = navList
    }
}