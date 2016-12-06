import { MedicusA2ClientPage } from './app.po';

describe('medicus-a2-client App', function() {
  let page: MedicusA2ClientPage;

  beforeEach(() => {
    page = new MedicusA2ClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
