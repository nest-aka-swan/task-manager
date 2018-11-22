import { NgModule } from '@angular/core';
import {
  MatNativeDateModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
})
export class AppMaterialModule {}
