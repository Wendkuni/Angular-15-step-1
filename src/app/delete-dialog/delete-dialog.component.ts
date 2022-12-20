import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {


constructor(public dialogRef: DialogRef <DeleteDialogComponent> ){}


ngOnInit(){}


  close(){
    this.dialogRef.close();
  }
}
