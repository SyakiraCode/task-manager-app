import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})

export class TaskViewComponent implements OnInit {
lists: any[] = [];
tasks: any[] = [];
selectedListId!: string;

  constructor(private taskService: TaskService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params)=>{
      console.log(param['listId'])
      this.selectedListId = param['listId'];
      this.taskService.getTasks(param['listId']).subscribe((tasks: any)=>{
        this.tasks = tasks;
      })
    })

    this.taskService.getLists().subscribe((lists: any) =>{
      this.lists = lists;
    })
  }

  onTaskClick(task: Task){
    this.taskService.complete(task).subscribe(()=>{
      console.log('completed success');
      task.completed = !task.completed;
    })
  }

  onDeleteListClick(){
    this.taskService.deleteList(this.selectedListId).subscribe((res)=>{
      this.router.navigate(['lists'])
      console.log(res);
    })
  }

  onTaskDeleteClick(id:string){
    this.taskService.deleteTask(this.selectedListId, id).subscribe((res)=>{
      this.tasks = this.tasks.filter(val => val._id !== id)
      console.log(res);
    })
  }

}
