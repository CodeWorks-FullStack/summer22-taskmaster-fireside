import { ProxyState } from "../AppState.js"

class ListsService {


    toggleCollapse(listId){

      let list = ProxyState.lists.find(l => l.id == listId)
      // @ts-ignore
      list.collapsed = !list.collapsed

      ProxyState.lists = ProxyState.lists
    }


 }


export const listsService = new ListsService()