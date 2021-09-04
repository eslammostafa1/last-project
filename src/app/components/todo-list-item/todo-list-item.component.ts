
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { TodoService } from '../../service/todo.service';
import {TODO, todoDefault} from 'src/app/interface/todo.interface';


@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})

export class TodoListItemComponent implements OnInit {

  constructor(private todosSrv:TodoService) { }
  @Input () todo : TODO  = todoDefault;
  // @Output () todoClk = new EventEmitter()

  ngOnInit(): void {
  }
 
  onClick(){
    
    this.todosSrv.deleteTodo(this.todo.id); 

    // this.todoClk.emit(this.todoText)
    // this.todosSrv.delete(this.todoText)


  }

}
