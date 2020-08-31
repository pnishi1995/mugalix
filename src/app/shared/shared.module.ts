import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonPipe } from './pipes/common.pipe';

@NgModule({
  imports: [HttpClientModule],
  declarations: [CommonPipe],
  exports: [CommonPipe],
  providers: [],
})
export class SharedModule {}
