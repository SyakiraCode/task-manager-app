import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {

  listId!: string;

  constructor(private taskService: TaskService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params)=>{
      this.listId = param['listId'];
    })
  }

  updateList(title: string){
    this.taskService.updateList(this.listId, title).subscribe(()=>{
     this.router.navigate(['/lists', this.listId]);
    })
  }

}
