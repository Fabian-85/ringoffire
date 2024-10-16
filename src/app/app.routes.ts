import { Routes } from '@angular/router';
import { StarscreenComponent } from './starscreen/starscreen.component';
import { GameComponent } from './game/game.component';

export const routes: Routes = [
    {path:'', component:StarscreenComponent},
    {path:'game/:id', component:GameComponent}
];
