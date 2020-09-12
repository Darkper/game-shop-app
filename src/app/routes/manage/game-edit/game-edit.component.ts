import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {GameService} from '@shared/services/game.service';
import {Protagonist} from '@shared/models/protagonist';
import {Director} from '@shared/models/director';
import {Producer} from '@shared/models/producer';
import {Technology} from '@shared/models/technology';
import {ProtagonistService} from '@shared/services/protagonist.service';
import {DirectorService} from '@shared/services/director.service';
import {ProducerService} from '@shared/services/producer.service';
import {TechnologyService} from '@shared/services/technology.service';
import {MtxGridColumn} from '@ng-matero/extensions';
import {Game} from '@shared/models/game';

@Component({
  selector: 'app-manage-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class ManageGameEditComponent implements OnInit {

  formGroup: FormGroup;

  selectedProtagonists: Protagonist[] = [];
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
              public dialogRef: MatDialogRef<ManageGameEditComponent>,
              @Inject(MAT_DIALOG_DATA) public game: Game
  ) {
    this.formGroup = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      releaseDate: ['', [Validators.required]],
      directorId: ['', [Validators.required]],
      producerId: ['', [Validators.required]],
      technologyId: ['', [Validators.required]],
      protagonists: [[], [Validators.required]],
    });
    this.formGroup.setValue(game);
  }

  ngOnInit() {
    this.loadData().then();
  }

  async onCloseClick() {
    this.dialogRef.close();
  }

  async onSubmitClick() {
    await this.gameService.update(this.formGroup.getRawValue());
    this.dialogRef.close(this.formGroup.getRawValue());
  }

  async loadData() {
    this.protagonistService.getAll().then(async protagonists => {
      this.protagonists = protagonists;
      this.selectedProtagonists = protagonists.filter(o => this.game.protagonists.some(({id, name}) => o.id === id && o.name === name));
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
  }

}
