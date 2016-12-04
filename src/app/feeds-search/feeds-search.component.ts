import { Component} from '@angular/core';
import { FeedsBaseService } from '../feeds.service';

@Component({
  selector: 'app-feeds-search',
  templateUrl: './feeds-search.component.html',
  styleUrls: ['./feeds-search.component.css'],
})

export class FeedsSearchComponent {
  filter :any;
  constructor(feedsBaseService: FeedsBaseService) {
    this.filter = feedsBaseService.getFilter();
   }

}
