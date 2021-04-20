import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service'
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private  _router:Router, public _auth:AuthService) { }

title:String="Share Your Notes";
  ngOnInit(): void {
  }
logoutUser(){
  localStorage.removeItem('token')
  this._router.navigate(['/notes'])
}
loggedUser(){
  this._router.navigate(['/add'])
}
}
