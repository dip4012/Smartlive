import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-new-gift',
  templateUrl: './new-gift.component.html',
  styleUrls: ['./new-gift.component.css'],
})
export class NewGiftComponent implements OnInit {
  newGift!: FormGroup;
  gifts = [
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
    private dialogRef: MatDialogRef<NewGiftComponent>,
    private utils: UtilsService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.newGift = this.fb.group({
      image: ['', Validators.required],
      coins: ['', Validators.required],
      level: ['', Validators.required],
      block: [''],
    });

    if (this.data)
      this.newGift.patchValue(
        this.gifts.filter((gift) => gift.id === this.data)[0]
      );
  }

  addGift(): void {
    if (this.data) {
      console.log(this.newGift.value);
      this.utils.openSnackBar('Gift Update Successfully', 'Success');
      this.dialogRef.close(true);
      this.utils.reloadUrl(this.router);
    } else {
      console.log(this.newGift.value);
      this.utils.openSnackBar('Gift Added Successfully', 'Success');
      this.dialogRef.close(true);
      this.utils.reloadUrl(this.router);
    }
  }
}
