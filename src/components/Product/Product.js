import { productsArray } from '../../product-list';

export function renderProducts() {
  return productsArray
    .map(
      (product) =>
        `
     <div
              class="bg-white flex flex-col gap-4 shadow-main hover:shadow-lg transition-shadow p-6 rounded-md"
            >
              <div>
                <img
                  src="src/assets/images/products/${product.imgSrc}"
                  alt="${product.name}"
                  class="h-52 w-full object-contain"
                />
              </div>
              <div class="space-y-2">
                <p class="line-clamp-2 min-h-10 text-sm">
               ${product.name}
                </p>
                <div class="flex items-center gap-1.5">
                  <img
                    src="src/assets/images/rating/${product.rating.stars}"
                    alt="rating ${product.rating.count} rate"
                    class="w-25"
                  />
                  <a href="#" class="text-secondary">${product.rating.count}</a>
                </div>
                <div class="flex items-center justify-between">
                  <span class="font-bold text-lg">$${product.price}</span>
                  <select
                    aria-label="Quantity"
                    name="quantity"
                    class="cursor-pointer shadow-main py-0.5 px-1.5 rounded-md bg-gray-200 border-none outline-none"
                  >
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </div>
                <button
                  type="button"
                  class="bg-primary hover:bg-primary-hover transition-colors cursor-pointer w-full p-2 rounded-md shadow-main"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            `,
    )
    .join('');
}
