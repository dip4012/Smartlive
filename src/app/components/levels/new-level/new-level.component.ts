import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-new-level',
  templateUrl: './new-level.component.html',
  styleUrls: ['./new-level.component.css'],
})
export class NewLevelComponent implements OnInit {
  newLevel!: FormGroup;
  levels = [
    {
      id: '564654654',
      image: 'beginner',
      coins: 5,
      category: 'Sunday special',
      isFree: true,
    },
    {
      id: '564654654',
      image: 'advanced',
      coins: 5,
      category: 'Sunday special',
      isFree: true,
    },
    {
      id: '564654654',
      image: 'intermediate',
      coins: 5,
      category: 'Sunday special',
      isFree: true,
    },
  ];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewLevelComponent>,
    private utils: UtilsService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.newLevel = this.fb.group({
      image: ['', Validators.required],
      coins: ['', Validators.required],
      level: ['', Validators.required],
      block: [''],
    });

    if (this.data)
      this.newLevel.patchValue(
        this.levels.filter((level) => level.id === this.data)[0]
      );
  }

  addLevel(): void {
    if (this.data) {
      console.log(this.newLevel.value);
      this.utils.openSnackBar('Level Updated Successfully', 'Success');
      this.dialogRef.close(true);
      this.utils.reloadUrl(this.router);
    } else {
      console.log(this.newLevel.value);
      this.utils.openSnackBar('Level Added Successfully', 'Success');
      this.dialogRef.close(true);
      this.utils.reloadUrl(this.router);
    }
  }
}
