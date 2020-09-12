import {Component, OnInit} from '@angular/core';
import {ClientService} from '@shared/services/client.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-manage-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ManageClientCreateComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private clientService: ClientService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<ManageClientCreateComponent>
  ) {
    this.formGroup = this.fb.group({
      document: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: [''],
      email: ['', [Validators.email]],
    });
  }

  ngOnInit() {
  }

  async onCloseClick() {
    this.dialogRef.close();
  }

  async onSubmitClick() {
    await this.clientService.save(this.formGroup.getRawValue());
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
