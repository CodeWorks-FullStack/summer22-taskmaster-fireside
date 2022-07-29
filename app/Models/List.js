import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"


function doSOmethingCool() {
  return 'banana'
}

export class List {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color
    this.collapsed = data.collapsed || false
  }


  get Template() {
    return `
      <div class="border bg-white my-3 selectable no-select p-3" onclick="app.listsController.toggleCollapse('${this.id}')" style="border-left: 4px solid ${this.color} !important; border-left-top-radius:0!important; border-left-bottom-radius: 0!important;">

        <h3>
          ${this.name}
        </h3>

        <ul class="${this.collapsed ? 'collapse' : ''}">
        
        ${this.TasksTemplate}

        </ul>

      </div>
    `
  }


  get TasksTemplate() {
    let template = ''
    ProxyState.tasks
      .filter(t => t.listId == this.id)
      .forEach(t => template += t.Template)
      
    return template
  }



}


