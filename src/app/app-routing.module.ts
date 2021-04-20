import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard} from './auth.guard'
import { NoteListComponent } from './note-list/note-list.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { LoginComponent}from './login/login.component';
import { UpdateComponent}from './update/update.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:'',component:NoteListComponent},
  {path:'add',
  canActivate:[AuthGuard],
  component:NewNoteComponent},
  {path:'login',component:LoginComponent},
  {path:'update',component:UpdateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
