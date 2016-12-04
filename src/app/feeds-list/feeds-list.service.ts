import { Injectable } from '@angular/core';
import { Logger } from '../logger.service';
import { FeedsBaseService } from '../feeds.service';

@Injectable()
export class FeedsListService  {

  constructor(private feedsBaseService:FeedsBaseService, private logger: Logger) {

    }

  getFeeds() {
        return this.feedsBaseService.getFeeds();
  }
}
