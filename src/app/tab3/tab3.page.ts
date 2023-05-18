import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { DataTransferService } from '../services/data-transfer.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild(IonModal) modal: any = IonModal;
  // constructor() {}

 

  message = '';
  name: string = '';
 
  service: any;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }


  

 


  arrayData:NgForm[]=[];
  getData(data:NgForm){
    
    this.arrayData.push(data);
    console.log(this.arrayData);
    
  //   this.cnfrm=data;
  // console.log(data);
  }
  constructor(public data2:DataTransferService){
  }
  
    text:any;
    ngOnInit(){
      this.data2.currentMessage.subscribe(res=> this.text=res);
    }

    x:any;
    result:any;
    getValue(name:any){
      this.result= this.arrayData.filter(x => x.name === name);
      console.log(this.result);
       
    }

 

}


