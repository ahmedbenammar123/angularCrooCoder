import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches:any=[]
  constructor() { }

  ngOnInit() {
    this.getAllMatches()
  }
  getAllMatches(){
    this.matches=JSON.parse(localStorage.getItem('matches') || "[]")
  }
  deletMatch(id:any){
    for (let i = 0; i < this.matches.length; i++) {
      if (this.matches[i].id  == id) {
        this.matches.splice(i,1)
        
      }
      
    }
    localStorage.setItem("matches",JSON.stringify(this.matches))
    
  }

}
