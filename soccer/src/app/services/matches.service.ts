import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchURL: string = "http://localhost:3000/matches";
  constructor(private http: HttpClient) {  }

  addMatch(obj: any){ 
   return this.http.post<{message:any}>(this.matchURL,obj);
  }
  editMatch(obj: any){ 
    return this.http.put<{message:any}>(`${this.matchURL}/${obj.id}`,obj);

  }
  displayMatchById(id: any){
    return this.http.get<{match:any}>(`${this.matchURL}/${id}`);
  }
  deleteMatchByTd(id: any){
    return this.http.delete<{message:any}>(`${this.matchURL}/${id}`);
  }
  getAllMatches(){
   return this.http.get<{matches:any}>(this.matchURL);
  }
}