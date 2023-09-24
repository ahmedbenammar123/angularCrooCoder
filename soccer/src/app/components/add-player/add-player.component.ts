import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  addPlayerForm:FormGroup;
  player:any={}
  teams:[]=JSON.parse(localStorage.getItem("teams") || "[]")
  id:any;
  title:string="";
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id")
    if (this.id) {
      this.title='Edit Player'
      this.getPlayerById()
    }
    else{
      this.title='Add Player'
    }
  
  }
  addPlayer(){
    let T = JSON.parse(localStorage.getItem("Players") || "[]")
    if (this.id) {
      for (let i = 0; i < T.length; i++) {
        if (T[i].id===Number(this.id)) {
          T[i]=this.player
        }
      }
    }
    else{
      let id= this.generateId(T)
      // this.Player.id = T.length===0 ? 1 : T[T.length-1].id +1 
      this.player.id=id;
      T.push(this.player)
    }
    console.log(this.player)
    localStorage.setItem('Players',JSON.stringify(T))
    this.router.navigate(["/table-players"])

  }
  getPlayerById(){
    let Players= JSON.parse(localStorage.getItem("Players")||'[]')
    for (let i = 0; i < Players.length; i++) {
      if (Players[i].id===Number(this.id)) {
        this.player=Players[i]
      }
      
    }
  }
  generateId(Players:any){
    if (Players.length===0) {
      return 1
    }
    else{
      let max =0 
      for (let i = 0; i < Players.length; i++) {
        if (max < Players[i].id){
          max = Players[i].id
        }
      }
      return max + 1
    }
  }

}
