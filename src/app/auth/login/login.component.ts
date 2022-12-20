import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
hide=true
Loading: boolean= false

constructor(private router:Router){}

ngOnInit(){}

login(){

  setTimeout(()=>{
    this.router.navigate(['/']);
  }, 2000);
  this.Loading= true; 
}

}
