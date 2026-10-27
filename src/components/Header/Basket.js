const cartIconSrc = 'cart-icon.png';

export function Basket() {
  return `
            <div class="flex items-center shrink-0">
          <a
            href="#"
            class="flex flex-col h-12 border border-transparent hover:border-white rounded-xs p-1.5 transition-colors"
          >
            <span class="text-sm text-gray-300">Returns</span>
            <span class="font-bold">&amp; Orders</span>
          </a>
          <a
            href="#"
            class="flex items-end h-12 relative border border-transparent hover:border-white rounded-xs p-1.5 transition-colors"
          >
            <img
              src="src/assets/images/icons/${cartIconSrc}"
              alt="basket icon"
              class="w-12.5"
            />
            <span class="font-bold">Cart</span>
            <span class="absolute -top-0.5 left-6 text-amz-orange font-bold"
              >2</span
            >
          </a>
        </div>
        `;
}
