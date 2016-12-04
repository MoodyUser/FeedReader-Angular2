
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PlatformLocation } from '@angular/common';
import { Logger } from './logger.service';
import 'rxjs/Rx';

@Injectable()
export class FeedsBaseService {
  private feeds = [];
  private feedUrl = 'http://localhost:8080/feeds';

  constructor(private http: Http,private logger: Logger) {
    this.getFeeds().subscribe(feedsData => this.feeds = feedsData)
    // Set the filter
  }

  getFeeds() {
    return this.http.get(this.feedUrl)
                      .map((response:Response) => response.json());
  }

}
