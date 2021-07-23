/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createRestItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div id="list" class="list">
 
        </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const resto = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#list');

    let html;
    if (resto.length) {
      html = resto.reduce((carry, resto) => carry.concat(createRestItemTemplate(resto)), '');
    } else {
      html = '<div class="list-item__not__found list__not__found">Tidak ada resto untuk ditampilkan</div>';
    }

    restoContainer.innerHTML += html;
  },
};

export default Favorite;
