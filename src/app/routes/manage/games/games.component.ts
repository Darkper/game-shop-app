import {Component, OnInit} from '@angular/core';
import {MtxGridColumn} from '@ng-matero/extensions';
import {MatDialog} from '@angular/material/dialog';
import {Game} from '@shared/models/game';
import {GameService} from '@shared/services/game.service';
import {ManageGameEditComponent} from '../game-edit/game-edit.component';
import {ManageGameCreateComponent} from '../game-create/game-create.component';

@Component({
  selector: 'app-manage-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class ManageGamesComponent implements OnInit {
  games: Game[] = [];
  isLoading = true;

  columns: MtxGridColumn[] = [
    {header: 'Name', field: 'name'},
    {
      header: 'Actions',
      field: 'option',
      pinned: 'right',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          text: 'edit',
          icon: 'edit',
          tooltip: 'Edit',
          click: record => this.editGame(record),
        },
        {
          type: 'icon',
          text: 'delete',
          icon: 'delete',
          tooltip: 'Remove',
          click: record => this.deleteGame(record),
        },
      ],
    },
  ];

  constructor(private gameService: GameService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.gameService.getAll().then(async games => {
      this.games = games;
      this.isLoading = false;
    });
  }

  async editGame(game: Game) {
    this.isLoading = true;
    this.dialog.open(ManageGameEditComponent, {
      width: 'auto',
      data: game,
      disableClose: true,
    }).afterClosed().subscribe((result: Game) => {
      if (!result) {
        this.isLoading = false;
        return;
      }
      this.gameService.getAll().then(async games => {
        this.games = games;
        this.isLoading = false;
      });
    });

  }

  async deleteGame(game: Game) {
    this.isLoading = true;
    await this.gameService.delete(game).then(() => {
      const indexOf = this.games.indexOf(game);
      this.games.splice(indexOf, 1);
    }).catch(reason => {
      alert(reason.error);
      console.log(reason);
    }).finally(() => this.isLoading = false);
  }

  async addGame() {
    this.isLoading = true;
    this.dialog.open(ManageGameCreateComponent, {
      width: 'auto',
      disableClose: true,
    }).afterClosed().subscribe((result: Game) => {
      if (!result) {
        this.isLoading = false;
        return;
      }
      this.gameService.getAll().then(async games => {
        this.games = games;
        this.isLoading = false;
      });
    });
  }
}
