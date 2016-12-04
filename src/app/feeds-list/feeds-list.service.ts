import { Injectable } from '@angular/core';
import { Logger } from '../logger.service';

@Injectable()
export class FeedsListService  {

  constructor(private logger: Logger) {

    }

  getFeeds() {
     return ['a','s','d'];
  }
}
