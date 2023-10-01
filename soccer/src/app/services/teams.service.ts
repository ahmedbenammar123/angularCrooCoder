import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {
  teamURL: string = "http://localhost:3000/teams";
  constructor(private http:HttpClient) { }
  addTeam(obj: any){
    return this.http.post(this.teamURL,obj);
  }
  editTeam(obj: any){
    return this.http.put<{message:string}>(`${this.teamURL}/${obj.id}`,obj);
  }
  deleteTeam(id: any){
    return this.http.delete<{message:string}>(`${this.teamURL}/${id}`);
  }
  getAllTeams(){
    return this.http.get<{teams:any}>(this.teamURL);
  }
  //`${this.teamURL}/${id}` => http://localhost:3000/8
  getTeamById(id: any){
    return this.http.get<{x:any}>(`${this.teamURL}/${id}`);
  }
}