import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-player',
  templateUrl: './table-player.component.html',
  styleUrls: ['./table-player.component.css']
})
export class TablePlayerComponent implements OnInit {
  players: any = []
  constructor(private router: Router) { }

  ngOnInit() {
    this.getAllPlayers()
  }
  getAllPlayers() {
    this.players = JSON.parse(localStorage.getItem('Players') || "[]")
  }
  deletplayer(id: any) {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].id == id) {
        this.players.splice(i, 1)

      }

    }
    localStorage.setItem("Players", JSON.stringify(this.players))
  }
  navigate(id: any) {
    //edit
    this.router.navigate(["/add-player/" + id])
  }
  goToDisplayPlayer(id: any) {
    this.router.navigate(["/display-player/" + id])
  }

}
