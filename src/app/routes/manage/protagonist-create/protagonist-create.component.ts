import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {ProtagonistService} from '@shared/services/protagonist.service';

@Component({
  selector: 'app-manage-protagonist-create',
  templateUrl: './protagonist-create.component.html',
  styleUrls: ['./protagonist-create.component.css']
})
export class ManageProtagonistCreateComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private protagonistService: ProtagonistService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<ManageProtagonistCreateComponent>,
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
    await this.protagonistService.save(this.formGroup.getRawValue());
    this.dialogRef.close(this.formGroup.getRawValue());
  }

}
