import { FeedReaderAngularPage } from './app.po';

describe('feed-reader-angular App', function() {
  let page: FeedReaderAngularPage;

  beforeEach(() => {
    page = new FeedReaderAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
