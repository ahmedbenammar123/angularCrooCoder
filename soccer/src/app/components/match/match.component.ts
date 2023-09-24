import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  @Input() match:any
  @Output() newItemEvent = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }
  passId(){
    console.log("here id match into Child com ",this.match.id)
    this.newItemEvent.emit(this.match.id)
  }
  compare(a:any,b:any){
    if(Number(a) == Number(b))
      return ["Draw",'red'];
    return (Number(a) > Number(b)) ? ["Win","green"] : ["Loss","blue"] ;

  }
  

}
