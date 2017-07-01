import { NextGenDriverPage } from './app.po';

describe('next-gen-driver App', function() {
  let page: NextGenDriverPage;

  beforeEach(() => {
    page = new NextGenDriverPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
