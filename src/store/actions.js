import {
    getDeom,
    getShopdata,
    getNavlist
} from '../api'
import {
    SAVE_DEOM,
    SAVE_SHOPDATA,
    SAVE_NAVLIST
}from './mutations-type'
export default {
    async getdemo({commit}){
        let ruselt = await getDeom()
        commit(SAVE_DEOM,ruselt)
    },
    async getShopdata({commit}){
        let ruselt = await getShopdata()
        commit(SAVE_SHOPDATA,ruselt)
    },
    async getNavlist({commit}){
        let ruselt = await getNavlist()
        commit(SAVE_NAVLIST,ruselt)
    }
}