import Home from '../pages/Home/Home.vue'
import List from '../pages/List/List.vue'
import Deserve from '../pages/Deserve/Deserve.vue'
import ShopCar from '../pages/ShopCar/ShopCar.vue'
import Person from '../pages/Person/Person.vue'

import Reminder from '../pages/reminder/reminder.vue'
export default [
    {
        path:'/home',
        component: Home,
    },
    {
        path:'/list',
        component: List
    },
    {
        path:'/deserve',
        component: Deserve
    },
    {
        path:'/shopcar',
        component: ShopCar
    },
    {
        path:'/person',
        component: Person
    },
    {
        path :'/reminder',
        component:Reminder
    },
      {
        path: '/',
        redirect: '/list'
      }
]