import { GithubProfilerPage } from './app.po';

describe('github-profiler App', () => {
  let page: GithubProfilerPage;

  beforeEach(() => {
    page = new GithubProfilerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
