import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css'],
})
export class RechargeComponent implements OnInit {
  rechargeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.rechargeForm = this.fb.group({
      username: ['', Validators.required],
      coins: ['', Validators.required],
    });
  }
}
