import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DirectorService} from '@shared/services/director.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-manage-director-create',
  templateUrl: './director-create.component.html',
  styleUrls: ['./director-create.component.css']
})
export class ManageDirectorCreateComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private directorService: DirectorService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<ManageDirectorCreateComponent>,
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
    await this.directorService.save(this.formGroup.getRawValue());
    this.dialogRef.close(this.formGroup.getRawValue());
  }

}
