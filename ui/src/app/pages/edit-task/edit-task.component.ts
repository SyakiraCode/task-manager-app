import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  taskId!: string;
  listId!: string;

  constructor(private taskService: TaskService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params)=>{
      this.taskId = param['taskId'];
      this.listId = param['listId']
    })
  }

  updateTask(title: string){
    this.taskService.updateTask(this.listId, this.taskId,title).subscribe(()=>{
     this.router.navigate(['/lists', this.listId]);
    })
  }

}
