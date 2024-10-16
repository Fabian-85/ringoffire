import { inject, Injectable } from '@angular/core';
import { collection, doc, Firestore, onSnapshot,addDoc } from '@angular/fire/firestore';
import { Game } from '../../game';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  games:Game[] =[];
 game:Game|undefined;

  firestore: Firestore = inject(Firestore);

  unsubGames;
  unsubGame :any;

  constructor() {
    this.unsubGames = this.subGames();
   }

   ngOnDestroy(){
    this.unsubGames();
  //  this.unsubGame();
   }

   subGames() {
    return onSnapshot(this.getGamesRef(), (list) => {
      this.games =[];
      list.forEach(element => {
       this.games.push(this.setGameJson(element.data(),element.id));
      });
      console.log(this.games);
    });
  }

  
  subSingleGame(id:string) {
    return onSnapshot(this.getSingleDocRef(id), (game) => {
      this.game = this.setGameJson(game.data(),game.id);
      console.log(this.game);
    });
  }

    loadSingleGame(id:string){
    this.unsubGame = this.subSingleGame(id);
  }
  

  setGameJson(object: any, id: string): any  {
    return {
      id:id ,
      players: object.players,
      stack: object.stack,
      playedCard: object.playedCard,
      currentPlayer: object.currentPlayer,
    }
  }

  async addNewGame(item:{}){
    const docRef = await addDoc( this.getGamesRef(), item );
    console.log("Document written with ID: ", docRef.id);
    
    
  }

  getGamesRef() {
    return collection(this.firestore, 'games');
  }

  getSingleDocRef(docId: string) {
    return doc(collection(this.firestore, 'games'), docId);
  }



  

}
