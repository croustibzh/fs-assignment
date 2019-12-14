import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerCreateComponent } from './player/player-create/player-create.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './dialog/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { GuestTableComponent } from './guest-table/guest-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { GamesTableComponent } from './games-table/games-table.component';
import { AdminSelectComponent } from './admin-select/admin-select.component';
import { JoinGameComponent } from './join-game/join-game.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { AdminPlayersComponent } from './admin-players/admin-players.component';
import { AdminPlayerListComponent } from './player/admin-player-list/admin-player-list.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
const appRoutes: Routes =[
  {path: '', component: GuestTableComponent},
  {path: 'guest', component: GuestTableComponent},
  {path: 'admin', canActivate: [AuthGuard], component: AdminSelectComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerCreateComponent,
    ModalComponent,
    NavbarComponent,
    LoginComponent,
    GuestTableComponent,
    GamesTableComponent,
    AdminSelectComponent,
    JoinGameComponent,
    EditPlayerComponent,
    AdminPlayersComponent,
    AdminPlayerListComponent
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [AuthGuard,LoginComponent,{
    provide: MatDialogRef,
    useValue: {}
  }],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent,JoinGameComponent,EditPlayerComponent,PlayerCreateComponent]
})
export class AppModule { }
