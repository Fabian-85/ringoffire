import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../firebase-service/game.service';
import { Game } from '../../game';
@Component({
  selector: 'app-starscreen',
  standalone: true,
  imports: [],
  templateUrl: './starscreen.component.html',
  styleUrl: './starscreen.component.scss'
})
export class StarscreenComponent {

   

  constructor(private router:Router){

  }

  newGame() {  
  this.router.navigateByUrl('/game/');
}
}
