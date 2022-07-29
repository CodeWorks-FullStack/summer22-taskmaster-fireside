import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"

function _draw() {
  let template = ''
  ProxyState.lists.forEach(l => template += l.Template)
  // @ts-ignore
  document.getElementById('lists').innerHTML = template
}

export class ListsController {
  constructor() {
    // things you want to load on page load
    ProxyState.on('lists', _draw)
    _draw()
  }

  toggleCollapse(listId){

    listsService.toggleCollapse(listId)

  }

}