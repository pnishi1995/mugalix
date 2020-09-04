import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonPipe, ConvertnamePipe } from './pipes/common.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [HttpClientModule, CommonModule],
  declarations: [CommonPipe, ConvertnamePipe],
  exports: [CommonPipe, ConvertnamePipe],
  providers: [CommonPipe, ConvertnamePipe],
})
export class SharedModule {}
