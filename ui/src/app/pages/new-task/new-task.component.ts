import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  listId!: string;

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params)=>{
      this.listId = param['listId'];
    })
  }

  createTask(title:string){
   this.taskService.createTask(title, this.listId).subscribe((newTask)=>{
     this.router.navigate(['../'], {relativeTo: this.route});
   })
  }

}
