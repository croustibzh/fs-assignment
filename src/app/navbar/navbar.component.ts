import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, from } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatDialog} from '@angular/material'
import {LoginComponent} from '../login/login.component'
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  loggedIn:false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog, private router: Router) {}
  openLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
    width: '300px',
    height: '40%',

    autoFocus:true,

     });

    dialogRef.afterClosed().subscribe(result => {
      this.loggedIn = result;
      this.router.navigateByUrl('/admin')
    });
  }
  signOut():void {
    this.loggedIn = false;
  }

}
