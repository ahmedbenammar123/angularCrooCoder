import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  count:number=0;
  
  constructor() { }

  ngOnInit() {

  }
  test(){
    this.count=this.count+1;
    console.log(this.count)
  }

}
