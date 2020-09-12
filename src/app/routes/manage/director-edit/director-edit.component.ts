import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DirectorService} from '@shared/services/director.service';
import {Director} from '@shared/models/director';

@Component({
  selector: 'app-manage-director-edit',
  templateUrl: './director-edit.component.html',
  styleUrls: ['./director-edit.component.css']
})
export class ManageDirectorEditComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private directorService: DirectorService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<ManageDirectorEditComponent>,
              @Inject(MAT_DIALOG_DATA) public director: Director
  ) {
    this.formGroup = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });
    this.formGroup.setValue(director);
  }

  ngOnInit() {
  }

  async onCloseClick() {
    this.dialogRef.close();
  }

  async onSubmitClick() {
    await this.directorService.update(this.formGroup.getRawValue());
    this.dialogRef.close(this.formGroup.getRawValue());
  }

}
