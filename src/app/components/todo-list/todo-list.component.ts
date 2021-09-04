
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todosSrv:TodoService) { }

  ngOnInit(): void {
    this.todosSrv.fetchTodo(); 
  }

  get todos(){
    return this.todosSrv.todos
  }

  // delete(e:string){
  //   this.todos.splice(this.todos.indexOf(e),1)
  // }

}
