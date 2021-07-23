/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
import TheRestDbSource from '../../data/therestdb-source';
import { createRestItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="hero">
            <div class="hero_inner">
                <h2 class="hero_title">Pamper not just your taste buds</h2>
                <p class="hero_tagline">The new concept of our restaurant will enhance your dining experience</p>

            </div>
        </div>
        <main id="maincontent">
            <section class="content">
                <h2 class="latest_label">Explore Restaurant</h2>
                <div id="list" class="list">

                </div>
            </section>

        </main>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const list = await TheRestDbSource.home();
    const listContainer = document.querySelector('#list');
    list.forEach((list) => {
      listContainer.innerHTML += createRestItemTemplate(list);
    });
  },
};

export default Home;
