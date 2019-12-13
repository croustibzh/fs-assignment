import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatToolbar} from '@angular/material';
import { ModalComponent } from './dialog/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(){}

<<<<<<< HEAD
}
=======
  }


// openDialog(): void {
//   const dialogRef = this.dialog.open(ModalComponent, {
//     width: '40%',
//     height: '30%',
//     direction: "ltr",
//     autoFocus:true,
//   });
//}
}
>>>>>>> 9f575b98aa7ea26d65b118f3cc4d77d055b5bf4e
