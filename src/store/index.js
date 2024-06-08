/* eslint-disable */ 
import { createStore } from 'vuex'

export default createStore({
  state: {
    workers : []
  },
  getters: {
    getAllJob(state){
        console.log('getAllJob')
      return state.workers
    },
    getCatbyId: state =>(id) =>{
      return state.workers.find(a=> a.id == id);
    }
  },
  mutations: {
    addWorker(state, par){
      this.state.workers.push(par);
      //console.log([...this.state.workers])
    },
    editWorker(state, par){
      state.workers = state.workers.filter(a => a.id != par.id)
      this.state.workers.push(par)
    },
    deleteCatName(state, par){
      state.workers = state.workers.filter(a => a.id != par)
    }
  },
  actions: {
    download(store){
        let url='https://jsonplaceholder.typicode.com/users';
        fetch(url).then(resusult=> resusult.json())
        .then(res => res.map(a=> {
        store.commit('addWorker',   { id: a.id, iname: a.iname, street: a.address.street})
    })).catch(a => alert("Что то пошло не так!! "));
    }

  },
})