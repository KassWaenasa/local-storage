import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {
  userLocal;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getLocal();
    if(this.userLocal && !this.userLocal.loggedIn){
      this.router.navigate(['home']);
    }
  }
  getLocal(){
    //--get localStorage
    this.userLocal = JSON.parse(localStorage.getItem("userLocal"));
    console.log('this.userLocal->>', this.userLocal);
  }
}
