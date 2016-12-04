import { Component, OnInit } from '@angular/core';
import { FeedsListService } from './feeds-list.service';
import { Logger } from '../logger.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-feeds-list',
  templateUrl: './feeds-list.component.html',
  styleUrls: ['./feeds-list.component.css'],
  providers: [FeedsListService,Logger]
})
export class FeedsListComponent {

  feeds = [];
  data =  'test';
  constructor(feedsListService: FeedsListService) {
    feedsListService.getFeeds().subscribe(feedsData => this.feeds = feedsData)
   }
}
