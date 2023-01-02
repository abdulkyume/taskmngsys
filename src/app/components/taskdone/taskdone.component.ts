import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from './../../services/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-taskdone',
  templateUrl: './taskdone.component.html',
  styleUrls: ['./taskdone.component.css'],
})
export class TaskdoneComponent {
  taskdone: any;
  constructor(private ApiService: ApiService) {}
  ngOnInit() {
    this.taskdone = this.ApiService.gettasks().filter(
      (task: any) => task.status === 'done'
    );
  }

  item: any;
  profileForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(150),
    ]),
    priority: new FormControl('', [Validators.required]),
    sdate: new FormControl('', [Validators.required]),
    edate: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    assignperson: new FormControl('', [Validators.required]),
    attachment: new FormControl('', [Validators.required]),
    stitle: new FormControl('', [Validators.maxLength(100)]),
    sdescription: new FormControl('', [Validators.maxLength(150)]),
  });
  getformval(val: any) {}
  openitem(items: any) {
    this.item = items;
    console.log(this.profileForm.get('title')?.value);
    this.profileForm.get('title')?.setValue(this.item.title);
    console.log(this.profileForm.get('title')?.value);
    // this.profileForm.setValue({
    //   title: this.item.title,
    //   description: this.item.description,
    //   priority: this.item.priority,
    //   sdate: this.item.sdate,
    //   edate: this.item.edate,
    //   status: this.item.status,
    //   assignperson: this.item.assignperson,
    //   attachment: this.item.attachment,
    //   stitle: this.item.stitle,
    //   sdescription: this.item.stitle,
    // });
  }
}
