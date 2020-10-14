import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CordovaService} from '../cordova.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {

  depositForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private cordovaService: CordovaService) {
  }

  ngOnInit(): void {
    this.depositForm = this.formBuilder.group({
      amount: [0, Validators.compose([Validators.required, Validators.min(1)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  submitForm(event: Event): void {
    event.preventDefault();
    this.cordovaService.saveDataOnFingerAuth(this.depositForm.value);
  }

}
