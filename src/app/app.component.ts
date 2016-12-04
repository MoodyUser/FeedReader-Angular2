import { Component } from '@angular/core';
import { FeedsBaseService } from './feeds.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FeedsBaseService]
})
export class AppComponent {
  title = 'app works!';
}
