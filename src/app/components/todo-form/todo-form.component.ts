import { Component, OnInit } from '@angular/core';
import {TodoService} from 'src/app/service/todo.service'

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor(private todoSrv: TodoService) { }

  ngOnInit(): void {
  }

  todoTitle: string = ''
  
  addTodo(){
    this.todoSrv.createTodo(this.todoTitle)
    this.todoTitle = ''
  }

}
