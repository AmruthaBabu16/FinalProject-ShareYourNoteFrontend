import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoteListComponent} from './note-list/note-list.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { AuthService} from './auth.service';
import { TokenInterceptorService} from './token-interceptor.service'
import { NoteService } from './note.service';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    HeaderComponent,
    NewNoteComponent,
    LoginComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [NoteService,AuthService,
  {
provide:HTTP_INTERCEPTORS,
useClass:TokenInterceptorService,
multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
