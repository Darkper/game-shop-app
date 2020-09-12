import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {ProducerService} from '@shared/services/producer.service';

@Component({
  selector: 'app-manage-producer-create',
  templateUrl: './producer-create.component.html',
  styleUrls: ['./producer-create.component.css']
})
export class ManageProducerCreateComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private producerService: ProducerService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<ManageProducerCreateComponent>,
  ) {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  async onCloseClick() {
    this.dialogRef.close();
  }

  async onSubmitClick() {
    await this.producerService.save(this.formGroup.getRawValue());
    this.dialogRef.close(this.formGroup.getRawValue());
  }

}
