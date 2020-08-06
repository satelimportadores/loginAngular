import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.css']
})
export class LoginInComponent implements OnInit {

  constructor(private router:Router) { }
  inicio(){
    this.router.navigate(['']);
  }
  ngOnInit(): void {
  }

}
