import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-teams',
  templateUrl: './add-teams.component.html',
  styleUrls: ['./add-teams.component.css']
})
export class AddTeamsComponent implements OnInit {

  addTeamForm:FormGroup;
  team:any={}
  id:any;
  title:string="";
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id")
    if (this.id) {
      this.title='Edit team'
      this.getTeamById()
    }
    else{
      this.title='Add team'
    }
  
  }
  addTeam(){
    let T = JSON.parse(localStorage.getItem("teams") || "[]")
    if (this.id) {
      for (let i = 0; i < T.length; i++) {
        if (T[i].id===Number(this.id)) {
          T[i]=this.team
        }
      }
    }
    else{
      let id= this.generateId(T)
      // this.team.id = T.length===0 ? 1 : T[T.length-1].id +1 
      this.team.id=id;
      T.push(this.team)
    }
    console.log(this.team)
    localStorage.setItem('teams',JSON.stringify(T))
    this.router.navigate(["/table-teams"])

  }
  getTeamById(){
    let teams= JSON.parse(localStorage.getItem("teams")||'[]')
    for (let i = 0; i < teams.length; i++) {
      if (teams[i].id===Number(this.id)) {
        this.team=teams[i]
      }
      
    }
  }
  generateId(teams:any){
    if (teams.length===0) {
      return 1
    }
    else{
      let max =0 
      for (let i = 0; i < teams.length; i++) {
        if (max < teams[i].id){
          max = teams[i].id
        }
      }
      return max + 1
    }
  }

}

