/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import TheRestDbSource from '../../data/therestdb-source';
import { createRestDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
        <div id="detail" class="detail"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await TheRestDbSource.detailRest(url.id);
    const detailContainer = document.querySelector('#detail');
    detailContainer.innerHTML = createRestDetailTemplate(detail);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      detail: {
        id: detail.id,
        name: detail.name,
        description: detail.description,
        pictureId: detail.pictureId,
        rating: detail.rating,
        categories: detail.categories,
        address: detail.address,
        city: detail.city,
      },
    });
  },
};

export default Detail;
