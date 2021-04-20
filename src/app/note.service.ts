import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { }
  getNotes(){
    return this.http.get("http://localhost:3000/notes");
    
  }
  newNote(item){
    return this.http.post("http://localhost:3000/insert",{"note":item})
    .subscribe(data=>{console.log(data)})
  }
  getNote(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
 

  
  deleteNote(id:any)
  {

    return this.http.delete("http://localhost:3000/remove/"+id)
     
  }
  editNote(notes:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/update",notes)
    .subscribe(data =>{console.log(data)})
  }
}
