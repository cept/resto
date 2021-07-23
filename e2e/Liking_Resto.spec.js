/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked resto', ({ I }) => {
  // I.seeElement('#favorite');
  I.see('Tidak ada resto untuk ditampilkan', '.list-item__not__found');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.list-item__not__found');
  I.amOnPage('/');

  I.seeElement('.list-item_title a');
  const firstFilm = locate('.list-item_title a').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list_item');
  const likedFilmTitle = await I.grabTextFrom('.list-item_title');

  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});
