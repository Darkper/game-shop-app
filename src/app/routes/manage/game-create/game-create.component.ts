import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {GameService} from '@shared/services/game.service';
import {Protagonist} from '@shared/models/protagonist';
import {MtxGridColumn} from '@ng-matero/extensions';
import {ProtagonistService} from '@shared/services/protagonist.service';
import {DirectorService} from '@shared/services/director.service';
import {ProducerService} from '@shared/services/producer.service';
import {TechnologyService} from '@shared/services/technology.service';
import {Director} from '@shared/models/director';
import {Producer} from '@shared/models/producer';
import {Technology} from '@shared/models/technology';

@Component({
  selector: 'app-manage-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class ManageGameCreateComponent implements OnInit {
  formGroup: FormGroup;

  protagonists: Protagonist[] = [];
  directors: Director[] = [];
  producers: Producer[] = [];
  technologies: Technology[] = [];
  isLoading = true;

  columns: MtxGridColumn[] = [
    {header: 'Name', field: 'name'}
  ];

  constructor(private gameService: GameService,
              private protagonistService: ProtagonistService,
              private directorService: DirectorService,
              private producerService: ProducerService,
              private technologyService: TechnologyService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<ManageGameCreateComponent>,
  ) {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      releaseDate: ['', [Validators.required]],
      directorId: ['', [Validators.required]],
      producerId: ['', [Validators.required]],
      technologyId: ['', [Validators.required]],
      protagonists: [[], [Validators.required]],
    });
  }

  ngOnInit() {
    this.loadData().then();
  }

  async onCloseClick() {
    this.dialogRef.close();
  }

  async onSubmitClick() {
    await this.gameService.save(this.formGroup.getRawValue());
    this.dialogRef.close(this.formGroup.getRawValue());
  }

  async loadData() {
    this.protagonistService.getAll().then(async protagonists => {
      this.protagonists = protagonists;
      this.isLoading = false;
    });
    this.directorService.getAll().then(async directors => {
      this.directors = directors;
    });
    this.producerService.getAll().then(async producers => {
      this.producers = producers;
    });
    this.technologyService.getAll().then(async technologies => {
      this.technologies = technologies;
    });
  }

  changeSelect(list: Protagonist[]) {
    this.formGroup.patchValue({protagonists: list});
    console.log(this.formGroup.getRawValue());
  }
}
