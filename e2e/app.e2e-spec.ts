import { EmanAppPage } from './app.po';

describe('eman-app App', function() {
  let page: EmanAppPage;

  beforeEach(() => {
    page = new EmanAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
