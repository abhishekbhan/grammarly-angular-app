import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/services/http-client.service';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  newTodo: string;

  constructor(private httpClient: HttpClientService) { }

  ngOnInit() : void {
    this.todos = [
      {
        content: 'Todo1',
        completed: false
      },
      {
        content: 'Todo2',
        completed: true
      },
      {
        content: 'Todo3',
        completed: false
      }
    ]

    this.httpClient.getTodos().subscribe((res)=> {
      console.log('Fetched todos', res);
    });
  }

  toggleDone(index) {
    this.todos.map((todo,i)=> {
      if(i===index) todo.completed = !todo.completed;
    });
  }

  deleteTodos(index) {
    this.todos = this.todos.filter((todo,i)=> {
      return i != index;
    })
  }

  addTodo() {
    this.todos.push({
      content: this.newTodo,
      completed: false
    })

    this.newTodo = null;
  }

}
