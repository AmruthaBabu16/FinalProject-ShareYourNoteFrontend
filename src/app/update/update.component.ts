import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../note.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  noteItem= {
   
    TopicName:'',
    Preview:"",
    Details:''
  }
  
    constructor(private router:Router,private noteService:NoteService) { }

    ngOnInit(): void {
      let noteId = localStorage.getItem("editNoteId");
      this.noteService.getNote(noteId).subscribe((data)=>{
        this.noteItem=JSON.parse(JSON.stringify(data));
    })
    }
    editNote()
    {    
      this.noteService.editNote(this.noteItem);   
      alert("Success");
      this.router.navigate(['/']);
    }
  
  }
  








 
 
 




