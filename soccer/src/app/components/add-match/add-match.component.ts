import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  addMatchForm:FormGroup;
  match:any={}
  id:any;
  title:string="";
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id")
    if (this.id) {
      this.title='Edit Match'
      this.getMatchById()
    }
    else{
      this.title='Add Match'
    }
  
  }
  addMatch(){
    let T = JSON.parse(localStorage.getItem("matches") || "[]")
    if (this.id) {
      for (let i = 0; i < T.length; i++) {
        if (T[i].id===Number(this.id)) {
          T[i]=this.match
        }
      }
    }
    else{
      let id= this.generateId(T)
      // this.match.id = T.length===0 ? 1 : T[T.length-1].id +1 
      this.match.id=id;
      T.push(this.match)
    }
    console.log(this.match)
    localStorage.setItem('matches',JSON.stringify(T))
    this.router.navigate(["/table-matches"])

  }
  getMatchById(){
    let matches= JSON.parse(localStorage.getItem("matches")||'[]')
    for (let i = 0; i < matches.length; i++) {
      if (matches[i].id===Number(this.id)) {
        this.match=matches[i]
      }
      
    }
  }
  generateId(matches:any){
    if (matches.length===0) {
      return 1
    }
    else{
      let max =0 
      for (let i = 0; i < matches.length; i++) {
        if (max < matches[i].id){
          max = matches[i].id
        }
      }
      return max + 1
    }
  }

}
