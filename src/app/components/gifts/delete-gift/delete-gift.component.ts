import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-delete-gift',
  templateUrl: './delete-gift.component.html',
  styleUrls: ['./delete-gift.component.css'],
})
export class DeleteGiftComponent implements OnInit {
  constructor(
    private utils: UtilsService,
    private router: Router,
    private dialogRef: MatDialogRef<DeleteGiftComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  deleteGift() {
    this.dialogRef.close(true);
    this.utils.openSnackBar('User Deleted', 'Success');
    this.utils.reloadUrl(this.router);
  }
}
