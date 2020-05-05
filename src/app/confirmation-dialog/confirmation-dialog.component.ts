import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  message
  btn1
  btn2

  constructor(
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.message = data.message;
    this.btn1 = data.btn1;
    this.btn2 = data.btn2;
  }

  ngOnInit() { }

  option1() {
    this.dialogRef.close(true)
  }

  option2() {
    this.dialogRef.close(false)
  }
}