import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PlatformLocation } from '@angular/common';
import { AppComponent } from './app.component';
import { SearchFeedPipe } from './search-pipe.pipe';
import { Logger } from './logger.service';
import { FeedsBaseService } from './feeds.service';
import { FeedsListComponent } from './feeds-list/feeds-list.component';
import { FeedsSearchComponent } from './feeds-search/feeds-search.component';

@NgModule({
  declarations: [
    AppComponent,SearchFeedPipe, FeedsListComponent,FeedsSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FeedsBaseService,Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
