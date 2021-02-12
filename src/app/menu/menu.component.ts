import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  userName = 'John Doe';
  userLocal;
  loggedIn = false;
  // loggedIn = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getLocal();
    if(this.userLocal && !this.userLocal.loggedIn){
      this.router.navigate(['home']);
    }
  }
  logout(){
    console.log('logout');
    //--set localStorage
    let _tmp = {loggedIn: false, data: {}};
    localStorage.setItem("userLocal", JSON.stringify(_tmp));
    window.location.reload();
  }
  getLocal(){
    console.log('getLocal>>> nenu');
    //--get localStorage
    this.userLocal = JSON.parse(localStorage.getItem("userLocal"));
    if(this.userLocal && this.userLocal.loggedIn){
      this.loggedIn = this.userLocal.loggedIn;
    }else{
      this.loggedIn = false;
    }
  }
}
