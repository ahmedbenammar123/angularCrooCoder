import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-matches',
  templateUrl: './table-matches.component.html',
  styleUrls: ['./table-matches.component.css']
})
export class TableMatchesComponent implements OnInit {
  matches:any=[]
  constructor(private router:Router) { }

  ngOnInit() {
    this.getAllMatches()
  }
  getAllMatches(){
    this.matches=JSON.parse(localStorage.getItem('matches')||"[]")
  }
  deletMatch(id:any){
    for (let i = 0; i < this.matches.length; i++) {
      if (this.matches[i].id==id) {
        this.matches.splice(i,1)
        
      }
      
    }
    localStorage.setItem("matches",JSON.stringify(this.matches))
  }
  navigate(id:any){
    this.router.navigate(["/add-match/"+id])
  }

}
