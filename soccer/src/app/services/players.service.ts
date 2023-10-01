import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class  PlayersService {
  matchURL: string = "http://localhost:3000/players";
  constructor(private http: HttpClient) {  }

  addPlayer(obj: any){ 
   return this.http.post<{message:any}>(this.matchURL,obj);
  }
  editPlayer(obj: any){ 
    return this.http.put<{message:any}>(`${this.matchURL}/${obj.id}`,obj);

  }
  displayPlayerById(id: any){
    return this.http.get<{x:any}>(`${this.matchURL}/${id}`);
  }
  deletePlayerByTd(id: any){
    return this.http.delete<{message:any}>(`${this.matchURL}/${id}`);
  }
  getAllPlayer(){
   return this.http.get<{players:any}>(this.matchURL);
  }
}
