import { Component, OnInit } from '@angular/core';
import { NoteModel } from './note.model';
import { NoteService} from '../note.service';
import { AuthService} from '../auth.service';
import {  Router} from '@angular/router'
@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})

export class NoteListComponent implements OnInit {
  // note!:NoteModel[];
  
  notes=[
    {
      TopicName:'',
      Preview:'',
      Details:''
    }
  ]
  constructor(private noteService:NoteService,private router:Router,public _auth:AuthService) { }

  ngOnInit(): void {       
    this.noteService.getNotes().subscribe((data)=>{
        
      this.notes=JSON.parse(JSON.stringify(data));
    })}
  editNote(note:any){
    localStorage.setItem('editNoteId',note._id.toString());
    this.router.navigate(['update'])
  };
  deleteNote(note:any)
 {
  this.noteService.deleteNote(note._id)
  .subscribe((data)=>{
    this.notes=this.notes.filter(p=>p!==note);
    
  } )}
}
    
    


