import { NgModule } from '@angular/core';
import {
  MatNativeDateModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatButtonModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatNativeDateModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatButtonModule],
  exports: [MatNativeDateModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatButtonModule],
})
export class AppMaterialModule {}
