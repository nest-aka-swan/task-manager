import { NgModule } from '@angular/core';
import { MatNativeDateModule, MatInputModule, MatFormFieldModule, MatDatepickerModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatNativeDateModule, MatInputModule, MatFormFieldModule, MatDatepickerModule],
  exports: [MatNativeDateModule, MatInputModule, MatFormFieldModule, MatDatepickerModule],
})
export class AppMaterialModule {}
