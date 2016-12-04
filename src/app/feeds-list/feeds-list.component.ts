import { Component, OnInit } from '@angular/core';
import { FeedsListService } from './feeds-list.service';
import { Logger } from '../logger.service';
@Component({
  selector: 'app-feeds-list',
  templateUrl: './feeds-list.component.html',
  styleUrls: ['./feeds-list.component.css'],
  providers: [FeedsListService,Logger]
})
export class FeedsListComponent implements OnInit {

  feeds = [];

  constructor(feedsListService: FeedsListService) {
     this.feeds = feedsListService.getFeeds();
   }
  ngOnInit() {
  }

}
