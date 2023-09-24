import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-teams',
  templateUrl: './table-teams.component.html',
  styleUrls: ['./table-teams.component.css']
})
export class TableTeamsComponent implements OnInit {
  teams: any = []
  constructor(private router: Router) { }

  ngOnInit() {
    this.getAllTeams()
  }
  getAllTeams() {
    this.teams = JSON.parse(localStorage.getItem('teams') || "[]")
  }
  deletTeam(id: any) {
    for (let i = 0; i < this.teams.length; i++) {
      if (this.teams[i].id == id) {
        this.teams.splice(i, 1)

      }

    }
    localStorage.setItem("teams", JSON.stringify(this.teams))
  }
  navigate(id: any) {
    //edit
    this.router.navigate(["/add-team/" + id])
  }
  goToDisplayTeam(id: any) {
    this.router.navigate(["/display-team/" + id])
  }

}
