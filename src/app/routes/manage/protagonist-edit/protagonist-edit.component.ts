import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProtagonistService} from '@shared/services/protagonist.service';
import {Protagonist} from '@shared/models/protagonist';

@Component({
  selector: 'app-manage-protagonist-edit',
  templateUrl: './protagonist-edit.component.html',
  styleUrls: ['./protagonist-edit.component.css']
})
export class ManageProtagonistEditComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private protagonistService: ProtagonistService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<ManageProtagonistEditComponent>,
              @Inject(MAT_DIALOG_DATA) public protagonist: Protagonist
  ) {
    this.formGroup = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });
    this.formGroup.setValue(protagonist);
  }

  ngOnInit() {
  }

  async onCloseClick() {
    this.dialogRef.close();
  }

  async onSubmitClick() {
    await this.protagonistService.update(this.formGroup.getRawValue());
    this.dialogRef.close(this.formGroup.getRawValue());
  }
}
