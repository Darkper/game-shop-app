import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProducerService} from '@shared/services/producer.service';
import {Producer} from '@shared/models/producer';

@Component({
  selector: 'app-manage-producer-edit',
  templateUrl: './producer-edit.component.html',
  styleUrls: ['./producer-edit.component.css']
})
export class ManageProducerEditComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private producerService: ProducerService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<ManageProducerEditComponent>,
              @Inject(MAT_DIALOG_DATA) public producer: Producer
  ) {
    this.formGroup = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });
    this.formGroup.setValue(producer);
  }

  ngOnInit() {
  }

  async onCloseClick() {
    this.dialogRef.close();
  }

  async onSubmitClick() {
    await this.producerService.update(this.formGroup.getRawValue());
    this.dialogRef.close(this.formGroup.getRawValue());
  }
}
