import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-delete-level',
  templateUrl: './delete-level.component.html',
  styleUrls: ['./delete-level.component.css'],
})
export class DeleteLevelComponent implements OnInit {
  constructor(
    private utils: UtilsService,
    private router: Router,
    private dialogRef: MatDialogRef<DeleteLevelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  deleteLevel() {
    this.dialogRef.close(true);
    this.utils.openSnackBar('Level Deleted', 'Success');
    this.utils.reloadUrl(this.router);
  }
}
