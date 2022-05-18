import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  newUser!: FormGroup;
  users = [
    {
      image: '',
      id: '123456789',
      name: 'John Doe',
      balance: 15914,
      received: 756757,
      block: '',
    },
    {
      image: '',
      id: '98798798797',
      name: 'John Doe',
      balance: 123456,
      received: 65464,
      block: '',
    },
    {
      image: '',
      id: '5646454645',
      name: 'John Doe',
      balance: 123456,
      received: 856456,
      block: '',
    },
    {
      image: '',
      id: '2331313213',
      name: 'John Doe',
      balance: 123456,
      received: 878789,
      block: '',
    },
    {
      image: '',
      id: '59519519519',
      name: 'John Doe',
      balance: 123456,
      received: 654654,
      block: '',
    },
    {
      image: '',
      id: '573573573575',
      name: 'John Doe',
      balance: 123456,
      received: 456456,
      block: '',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewUserComponent>,
    private utils: UtilsService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.newUser = this.fb.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
      phone: ['', Validators.required],
      balance: ['', Validators.required],
      received: ['', Validators.required],
      email: ['', Validators.required],
      facebook: ['', Validators.required],
      block: ['', Validators.required],
      image: ['', Validators.required],
    });

    if (this.data) {
      this.newUser.patchValue(
        this.users.filter((user) => user.id === this.data)[0]
      );
    }
  }

  addUser(): void {
    if (this.data) {
      console.log(this.newUser.value);
      this.utils.openSnackBar('User Update Successfully', 'Success');
      this.dialogRef.close(true);
      this.utils.reloadUrl(this.router);
    } else {
      console.log(this.newUser.value);
      this.utils.openSnackBar('User Created Successfully', 'Success');
      this.dialogRef.close(true);
      this.utils.reloadUrl(this.router);
    }
  }
}
