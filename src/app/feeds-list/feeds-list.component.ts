import { Component, OnInit } from '@angular/core';
import { FeedsBaseService } from '../feeds.service';

@Component({
  selector: 'app-feeds-list',
  templateUrl: './feeds-list.component.html',
  styleUrls: ['./feeds-list.component.css'],
})

export class FeedsListComponent {
  feeds = [];
  filter :any;
  constructor(feedsBaseService: FeedsBaseService) {
    this.filter = feedsBaseService.getFilter();
    feedsBaseService.getFeeds().subscribe(feedsData => this.feeds = feedsData)
   }
}
