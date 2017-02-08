import { CappuccinoClientPage } from './app.po';

describe('cappuccino-client App', function() {
  let page: CappuccinoClientPage;

  beforeEach(() => {
    page = new CappuccinoClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
