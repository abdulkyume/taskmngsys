import { HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  attachement: string = '';
  constructor(private ApiService: ApiService, private http: HttpClient) {}
  setattachment(val: any) {
    this.attachement = val;
  }
  getBase64(evt: any) {
    var f = evt.target.files[0];
    var reader = new FileReader();
    reader.onload = (function (theFile) {
      return function (e: any) {
        var binaryData = e.target.result;
        var base64String = window.btoa(binaryData);
        console.log(base64String);
      };
    })(f);
    reader.readAsBinaryString(f);
  }
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
  getformval(e: any) {
    if (this.profileForm.valid) {
      console.log(this.profileForm.valid);
      this.ApiService.addtasks(this.profileForm.value);
      window.location.reload();
    } else {
      console.log(this.profileForm.valid);
    }
  }
}
