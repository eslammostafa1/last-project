import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TODO } from '../interface/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // [x: string]: { userId: number; id: number; title: string; completed: boolean; };

  constructor(private http : HttpClient) { }
  
  todos:TODO[] = [];

//   todos = [
// {
//   userId: 1,
//   id: 1,
//   title: "delectus aut autem",
//   completed: false
//   },
//   {
//   userId: 1,
//   id: 2,
//   title: "quis ut nam facilis et officia qui",
//   completed: false
//   },
//   {
//   userId: 1,
//   id: 3,
//   title: "fugiat veniam minus",
//   completed: false
//   },
//   {
//   userId: 1,
//   id: 4,
//   title: "et porro tempora",
//   completed: true
//   }
//   ];

  createTodo(title:string){
    const todo : TODO = {
      title,
      id:new Date().getTime(),
      userId:1,
      completed:false,
    }
    this.todos.push(todo)
  }

deleteTodo(todoId :number){
  const  todoIndex = this.todos.findIndex(t => t.id == todoId)
  if(todoIndex == -1) return;
  this.todos.splice(todoIndex,1);
}


  // delete(todo:string){
  //   this.todos.splice(this.todos.indexOf(todo),1 )
  // }


  fetchTodo(){
    if(this.todos.length > 0) return
    this.http.get<TODO []>('https://jsonplaceholder.typicode.com/todos').subscribe(
      (list) => {
        // this.todos = this.todos.concat(list)
        this.todos = list.slice(0,10)
      },
      (error) => {
        console.log(error)
      }
      );
        
      }
    
}
