import { DialogRef } from '@angular/cdk/dialog';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleTheme = new EventEmitter<void>();
  @Output() toggleDir = new EventEmitter<void>();

  constructor(private dialog: MatDialog,
              private _snackBar: MatSnackBar,
              private router: Router){

  }

  ngOninit() {

  }

  openAddContactDialog(): void {
    let dialogRef =  this.dialog.open(NewContactDialogComponent, {
      width: '450px'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result)

      if(result) {
        this.openSnackBar("Contact added", "Navigate")
          .onAction().subscribe(() => {
            //navigate
            this.router.navigate(['/contactmanager', result.id]);
          })
      }
    });
  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
function subscribe(arg0: (result: any) => void) {
  throw new Error('Function not implemented.');
}

