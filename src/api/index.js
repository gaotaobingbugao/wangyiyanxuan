import ajax from './ajax'

export const getDeom = ()=>ajax({
    url:'/demo'
})

export const getShopdata= ()=>ajax({
    url:'/shopData'
})


export const getNavlist= ()=>ajax({
    url:'/navlist'
})