import { generateId } from "../Utils/generateId.js";


export class Task {
  constructor(data) {

    if (!data.listId) {
      // sanity check aka full stop
      throw new Error("You can't create a task without a listId")
    }

    this.id = data.id || generateId()
    this.name = data.name
    this.listId = data.listId
  }


  get Template() {
    return `
      <li>${this.name}</li>
    `
  }


}
