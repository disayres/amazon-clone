import { Header } from './components/Header/Header';
import { renderProducts } from './components/Product/Product';

const app = document.querySelector('#app');

app.innerHTML = `
 <!-- website header -->
   ${Header()}

      <!-- main section -->
      <main id="main">
        <!-- products section -->
        <div class="mt-5">
          <div
            id="products-wrapper"
            class="container mx-auto grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-2"
          >
            <!-- products -->
            ${renderProducts()}
          </div>
        </div>
      </main>`;
// renderProducts();
