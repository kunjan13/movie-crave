import { MovieCravePage } from './app.po';

describe('movie-crave App', function() {
  let page: MovieCravePage;

  beforeEach(() => {
    page = new MovieCravePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('movcrav works!');
  });
});
