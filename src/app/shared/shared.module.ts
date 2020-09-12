import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonPipe, ConvertnamePipe } from './pipes/common.pipe';
import { CommonModule } from '@angular/common';
import { PaginatePipe } from 'src/app/shared/pipes/common.pipe';
@NgModule({
  imports: [HttpClientModule, CommonModule],
  declarations: [CommonPipe, ConvertnamePipe, LoaderComponent,PaginatePipe],
  exports: [CommonPipe, ConvertnamePipe, LoaderComponent,PaginatePipe],
  providers: [CommonPipe, ConvertnamePipe,PaginatePipe],
})
export class SharedModule {}
