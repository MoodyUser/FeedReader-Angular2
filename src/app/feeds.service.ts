
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PlatformLocation } from '@angular/common';
import { Logger } from './logger.service';
import 'rxjs/Rx';

@Injectable()
export class FeedsBaseService {
  private feeds = null;
  private filter = {
    tag:''
  }
  private feedUrl = 'http://localhost:8080/feeds';

  constructor(private http: Http,private logger: Logger) {
  }

  setFilter(filter:string){
    this.filter.tag = filter;
  }

  getFilter(){
    return this.filter;
  }

  getFeeds() {
    if(this.feeds==null){
      this.feeds = this.http.get(this.feedUrl)
                        .map((response:Response) => response.json());
    }
    return this.feeds
  }

}
