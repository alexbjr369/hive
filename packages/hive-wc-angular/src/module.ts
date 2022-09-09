import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DIRECTIVES } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class HiveWCAngularModule {}
