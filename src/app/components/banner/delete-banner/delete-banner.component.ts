import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-delete-banner',
  templateUrl: './delete-banner.component.html',
  styleUrls: ['./delete-banner.component.css'],
})
export class DeleteBannerComponent implements OnInit {
  constructor(
    private utils: UtilsService,
    private router: Router,
    private dialogRef: MatDialogRef<DeleteBannerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  deleteBanner() {
    this.dialogRef.close(true);
    this.utils.openSnackBar('Banner Deleted', 'Success');
    this.utils.reloadUrl(this.router);
  }
}
