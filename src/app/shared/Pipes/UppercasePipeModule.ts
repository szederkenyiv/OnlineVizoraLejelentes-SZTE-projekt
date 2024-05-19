import { NgModule } from '@angular/core';
import { UpperCasePipe } from './Uppercase.pipe';

@NgModule({
  declarations: [
    UpperCasePipe
  ],
  exports: [
    UpperCasePipe
  ]
})
export class UppercasePipeModule {}
