import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login-out',
  templateUrl: './login-out.component.html',
  styleUrls: ['./login-out.component.css']
})
export class LoginOutComponent implements OnInit {

  constructor(private router:Router) { }

  inicio(){
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
