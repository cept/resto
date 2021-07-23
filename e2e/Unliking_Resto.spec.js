/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked resto', ({ I }) => {
  // I.seeElement('#query');
  I.see('Tidak ada resto untuk ditampilkan', '.list-item__not__found');
  // pause();
});

Scenario('unliking one resto', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.list-item__not__found');
  I.amOnPage('/');

  I.seeElement('.list-item_title a');
  const firstFilm = locate('.list-item_title a').first();

  I.click(firstFilm);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list_item');
  I.click(firstFilm);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list');
  const firstCondition = 'Tidak ada resto untuk ditampilkan';
  const noFavResto = await I.grabTextFrom('.list');
  assert.strictEqual(noFavResto, firstCondition);
});
