import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

 
import {
  
  MatDialogActions,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
 


@Component({
  selector: 'app-add-dialog-player',
  standalone: true,
  imports: [CommonModule,MatDialogTitle,MatDialogContent,MatFormFieldModule,MatInputModule,MatDialogActions,FormsModule,MatDialogModule],
  templateUrl: './add-dialog-player.component.html',
  styleUrl: './add-dialog-player.component.scss'
})
export class AddDialogPlayerComponent {
  
 name:string ="";

 constructor(){

 }

 onNoClick(): void {
  
}
}
