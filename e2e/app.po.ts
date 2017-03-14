import { browser, element, by } from 'protractor';

export class MovieCravePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('movcrav-root h1')).getText();
  }
}
