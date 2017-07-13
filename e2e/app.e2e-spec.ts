import { UdemyappPage } from './app.po';

describe('udemyapp App', () => {
  let page: UdemyappPage;

  beforeEach(() => {
    page = new UdemyappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
