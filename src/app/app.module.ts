import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ColorBoxComponent } from './color-box/color-box.component';
import { ColorService } from './color.service';

@NgModule({
  declarations: [
    AppComponent,
    ColorBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
