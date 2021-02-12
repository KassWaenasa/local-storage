import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userData;
  userLocal;
  userName;
  passWord;
  isErr = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getLocal();
    if(this.userLocal && this.userLocal.loggedIn){
      this.router.navigate(['myaccount']);
    }
  }
  getLocal(){
    //--get localStorage
    this.userLocal = JSON.parse(localStorage.getItem("userLocal"));
    console.log('this.userLocal->>', this.userLocal);
  }
  login(){
    var user = this.getData();
    console.log('userName->>', this.userName);
    console.log('passWord->>', this.passWord);

    // --this function should come from API
    this.userData = user[user.findIndex(u => u.userName === this.userName && u.passWord === this.passWord)];
    if(!this.userData){
      this.userData = {loggedIn: false, data: {}};
      this.isErr = true;
    }else{
      this.isErr = false;
      //--set localStorage
      let _tmp = {loggedIn: true, data: this.userData};
      localStorage.setItem("userLocal", JSON.stringify(_tmp));
      // console.log('this.userData->>', this.userData);
      // console.log('this.userLocal->>', this.userLocal);
      window.location.reload();
    }
    return false;
  }

  getData(){
    return [{
              id: 1,
              firstName: "Rack",
              lastName: "Jackon",
              userName: "Rack",
              passWord: "Rack@Jackon",
              gender: "man",
              age: 15,
              address: {
                  streetAddress: "111",
                  city: "San Jone",
                  state: "CA",
                  postalCode: "394221"
              },
              phoneNumbers: [
                  { type: "home", number: "738111111" },
                  { type: "mobile", number: "095111111" }
              ]
            },
            {
              id: 2,
              firstName: "John",
              lastName: "Doh",
              userName: "John",
              passWord: "John@Doh",
              gender: "man",
              age: 24,
              address: {
                  streetAddress: "222",
                  city: "San Jone",
                  state: "CA",
                  postalCode: "394221"
              },
              phoneNumbers: [
                  { type: "home", number: "738222222" },
                  { type: "mobile", number: "095222222" }
              ]
            },
            {
              id: 3,
              firstName: "San",
              lastName: "Smith",
              userName: "San",
              passWord: "San@Smith",
              gender: "man",
              age: 30,
              address: {
                  streetAddress: "333",
                  city: "San Jone",
                  state: "CA",
                  postalCode: "394221"
              },
              phoneNumbers: [
                  { type: "home", number: "738333333" },
                  { type: "mobile", number: "095333333" }
              ]
            }
          ];
  }
}
