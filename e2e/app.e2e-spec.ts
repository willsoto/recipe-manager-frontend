import { BookmarkManagerFrontendPage } from './app.po';

describe('bookmark-manager-frontend App', () => {
  let page: BookmarkManagerFrontendPage;

  beforeEach(() => {
    page = new BookmarkManagerFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
