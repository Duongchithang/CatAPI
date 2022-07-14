import { createStore } from 'vuex'
import State from './state'
import Getters from './getter'
import Mutations from './mutations'
import Actions from './action'
export default createStore({
   state: State,
   getters : Getters, 
   mutations : Mutations,
   actions : Actions,
  modules: {
  }
})
