import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from '../player/player.component';
import { Game } from './../../game';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { GameService } from '../firebase-service/game.service';
import {FormsModule} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AddDialogPlayerComponent } from '../add-dialog-player/add-dialog-player.component';
import {MatDialogModule} from '@angular/material/dialog';
import { GameInfoCardComponent } from '../game-info-card/game-info-card.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent,MatButtonModule,MatIconModule,MatDialogModule, GameInfoCardComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  pickCardAnimation = false;
  game: Game |any;
  currentCard: string | undefined;
  unsubGame :any;
  constructor(public dialog: MatDialog,private gameService:GameService, private route:ActivatedRoute) {
   
  }

    ngOnInit() {
    this.newGame();
    this.route.params.subscribe((param)=>{
      this.unsubGame = this.gameService.subSingleGame(this.game,param['id']);
     
    }
    );
     
     
  }

  takeCard() {
    if( this.pickCardAnimation == false){ 
    this.currentCard = this.game?.stack.pop();
    this.pickCardAnimation = true;
    }
    setTimeout(()=>{
      this.pickCardAnimation = false;
      if(this.game!=undefined){ 
      this.game?.playedCard.push(this.currentCard);
      this.game.currentPlayer++;
      this.game.currentPlayer=this.game.currentPlayer%this.game.players.length;
      }
    },1500);
  }

  newGame() {
    this.game = new Game();  
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDialogPlayerComponent, {
      
    });

    dialogRef.afterClosed().subscribe(name => {
      if (name !== undefined && name.length>0) {
        this.game?.players.push(name);
      }
    });
  }

}
