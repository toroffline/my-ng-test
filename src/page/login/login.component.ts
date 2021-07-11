import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {
  username = '';
  password = '';
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes: ', changes);
  }

  onSubmit() {
    console.log('username: ', this.username);
    console.log('password: ', this.password);
    console.log(this.username, this.password);
    if (this.username == 'admin' && this.password == 'admin') {
      // ial : is admin logged in
      localStorage.setItem('ial', '555+');
      this.router.navigate(['/home']);
    }
  }

}
