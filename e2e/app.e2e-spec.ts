import { LostNFoundPage } from './app.po';

describe('lost-n-found App', () => {
  let page: LostNFoundPage;

  beforeEach(() => {
    page = new LostNFoundPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
