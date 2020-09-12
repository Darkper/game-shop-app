import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TechnologyService} from '@shared/services/technology.service';
import {Technology} from '@shared/models/technology';

@Component({
  selector: 'app-manage-technology-edit',
  templateUrl: './technology-edit.component.html',
  styleUrls: ['./technology-edit.component.css']
})
export class ManageTechnologyEditComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private technologyService: TechnologyService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<ManageTechnologyEditComponent>,
              @Inject(MAT_DIALOG_DATA) public technology: Technology
  ) {
    this.formGroup = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });
    this.formGroup.setValue(technology);
  }

  ngOnInit() {
  }

  async onCloseClick() {
    this.dialogRef.close();
  }

  async onSubmitClick() {
    await this.technologyService.update(this.formGroup.getRawValue());
    this.dialogRef.close(this.formGroup.getRawValue());
  }

}
