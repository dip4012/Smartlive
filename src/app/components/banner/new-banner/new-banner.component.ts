import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-new-banner',
  templateUrl: './new-banner.component.html',
  styleUrls: ['./new-banner.component.css'],
})
export class NewBannerComponent implements OnInit {
  newBanner!: FormGroup;
  banners = [{ id: '123456', imageSrc: 'https://picsum.photos/id/1/300/200' }];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewBannerComponent>,
    private utils: UtilsService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.newBanner = this.fb.group({
      imageFile: ['', Validators.required],
      imageSrc: ['', Validators.required],
    });

    if (this.data)
      this.newBanner.patchValue(
        this.banners.filter((banner) => banner.id === this.data)
      );
  }

  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.newBanner.patchValue({ imageSrc: reader.result });
      };
    }
  }

  addBanner(): void {
    if (this.data) {
      console.log(this.newBanner.value);

      this.utils.openSnackBar('Banner Update Successfully', 'Success');
      this.dialogRef.close(true);
      this.utils.reloadUrl(this.router);
    } else {
      console.log(this.newBanner.value);

      this.utils.openSnackBar('Banner Created Successfully', 'Success');
      this.dialogRef.close(true);
      this.utils.reloadUrl(this.router);
    }
  }
}
