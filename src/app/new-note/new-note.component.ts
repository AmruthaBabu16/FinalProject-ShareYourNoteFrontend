import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteModel } from '../note-list/note.model';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  title:String="Add  New Note";


  constructor(private noteService:NoteService, private router:Router) { }
  // noteItem=new NoteModel(null!,null!,null!)
  noteItem={
    TopicName:'',
    Preview:'',
    Details:''
  }
  ngOnInit() {
  }
AddNote(){
  this.noteService.newNote(this.noteItem);
  console.log("called")
  alert("Success")
  this.router.navigate(['/'])
}
}
