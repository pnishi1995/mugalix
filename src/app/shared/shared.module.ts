import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonPipe, ConvertnamePipe } from './pipes/common.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [HttpClientModule, CommonModule],
  declarations: [CommonPipe, ConvertnamePipe, LoaderComponent],
  exports: [CommonPipe, ConvertnamePipe, LoaderComponent],
  providers: [CommonPipe, ConvertnamePipe],
})
export class SharedModule {}
