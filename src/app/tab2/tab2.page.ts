import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataTransferService } from '../services/data-transfer.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public data1: DataTransferService,public router:Router) {}

login:any;
  loginData(data:NgForm){
    this.login=data.form.value;
    console.log(data);

    this.data1.change(data.form.value);
    if(data.submitted){
      this.router.navigateByUrl('/tabs/tab3');
    }
    

  }

}
