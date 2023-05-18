import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataTransferService } from '../services/data-transfer.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public data1:DataTransferService){

  }
  
  rdata: any;
  regData(data: NgForm) {
    this.rdata = data;
    console.log(data);

  }

}
