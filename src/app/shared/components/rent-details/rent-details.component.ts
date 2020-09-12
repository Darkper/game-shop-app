import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Rent} from '@shared/models/rent';
import {MtxGridColumn} from '@ng-matero/extensions';

@Component({
  selector: 'app-rent-details',
  templateUrl: './rent-details.component.html',
  styleUrls: ['./rent-details.component.css']
})
export class RentDetailsComponent implements OnInit {
  formGroup: FormGroup;
  isLoading = true;
  rentGames: any[] = [];

  columns: MtxGridColumn[] = [
    {header: 'Name', field: 'game.name'},
    {header: 'Price', field: 'price'},
    {header: 'Quantity', field: 'quantity'},
    {header: 'Days Of Rent', field: 'daysOfRent'}
  ];

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<RentDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public rent: Rent
  ) {
    this.formGroup = this.fb.group({
      id: ['', [Validators.required]],
      clientId: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
    this.formGroup.patchValue({id: this.rent.id});
    this.formGroup.patchValue({clientId: this.rent.clientId});
    this.formGroup.patchValue({name: this.rent.client.name});
    this.formGroup.patchValue({lastName: this.rent.client.lastName});
    this.formGroup.patchValue({date: this.rent.date});
  }

  ngOnInit() {
    this.rentGames = this.rent.rentGames;
    console.log(this.rentGames);
    console.log(this.rent);
    this.isLoading = false;
  }

  async onCloseClick() {
    this.dialogRef.close();
  }
}
