import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {TechnologyService} from '@shared/services/technology.service';

@Component({
  selector: 'app-manage-technology-create',
  templateUrl: './technology-create.component.html',
  styleUrls: ['./technology-create.component.css']
})
export class ManageTechnologyCreateComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private technologyService: TechnologyService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<ManageTechnologyCreateComponent>,
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
    await this.technologyService.save(this.formGroup.getRawValue());
    this.dialogRef.close(this.formGroup.getRawValue());
  }

}
