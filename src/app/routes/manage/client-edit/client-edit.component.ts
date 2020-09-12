import {Component, Inject, OnInit} from '@angular/core';
import {ClientService} from '@shared/services/client.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Client} from '@shared/models/client';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-manage-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ManageClientEditComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private clientService: ClientService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<ManageClientEditComponent>,
              @Inject(MAT_DIALOG_DATA) public client: Client
  ) {
    this.formGroup = this.fb.group({
      document: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: [''],
      email: ['', [Validators.email]],
    });
    this.formGroup.setValue(client);
  }

  ngOnInit() {
  }

  async onCloseClick() {
    this.dialogRef.close();
  }

  async onSubmitClick() {
    await this.clientService.update(this.formGroup.getRawValue());
    this.dialogRef.close(this.formGroup.getRawValue());
  }

  getErrorMessage(form: FormGroup) {
    return form.get('email').hasError('required')
      ? 'validations.required'
      : form.get('email').hasError('email')
        ? 'validations.invalid_email'
        : '';
  }

}
