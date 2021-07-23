/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestDetailTemplate = (rest) => `
  <h2 class="detail_title">${rest.name}</h2>
  <img class="detail_poster" src="${CONFIG.BASE_IMAGE_URL + rest.pictureId}" alt="${rest.name}" />
  <p class="detail_rating">⭐️ ${rest.rating}</p>
  <div class="detail_info">
  <h3>Information</h3>
    <h4>Categories</h4>
    <p>${rest.categories.map((categories) => categories.name).join(', ')}</p>
    <h4>Menu</h4>
    <p>Foods : ${rest.menus.foods.map((foods) => foods.name).join(', ')}.</p>
    <p>Drinks : ${rest.menus.drinks.map((drinks) => drinks.name).join(', ')}.</p>
    <h4>Address</h4>
    <p>${rest.address}, ${rest.city}.</p>
  </div>
  <div class="detail_overview">
    <h3>Description</h3>
    <p>${rest.description}</p>
  </div>
  <div class="detail_review">
    <h3>Customer Reviews</h3>
    <div class="content_review">
      ${rest.customerReviews.map((customerReview) => `<div class="box_review">
            <i class="fa fa-user-circle fa-2x"></i>
            <div class="comment_review">
              <h5>${customerReview.name}</h5>
              <p>${customerReview.review}</p>
            </div>
          </div>
        `).join('\n')}
    </div>
  </div>
`;

const createRestItemTemplate = (rest) => `
  <div class="list_item">
    <div class="list-item_header">
      <h3 class="list_kota">${rest.city || '-'}</h3>
      <img class="lazyload list-item_thumbnail" data-src="${rest.pictureId ? CONFIG.BASE_IMAGE_URL + rest.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
          alt="${rest.name || '-'}">
      <div class="list-item_content">
          <p class="list-item_rate">⭐️ ${rest.rating || '-'}</p>
          <h3 class="list-item_title"><a href="${`/#/detail/${rest.id}`}">${rest.name || '-'}</a></h3>
          <p class="list-item_description">${rest.description || '-'}</p>
      </div>
    </div>
  </div>
  
  `;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestItemTemplate,
  createRestDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
