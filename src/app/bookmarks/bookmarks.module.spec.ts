import { BookmarksModule } from './bookmarks.module';

describe('BookmarksModule', () => {
  let bookmarksModule: BookmarksModule;

  beforeEach(() => {
    bookmarksModule = new BookmarksModule();
  });

  it('should create an instance', () => {
    expect(bookmarksModule).toBeTruthy();
  });
});
