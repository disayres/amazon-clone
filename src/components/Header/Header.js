import { Basket } from './Basket';
import { HeaderLogo } from './HeaderLogo';
import { SearchBar } from './SearchBar';

export function Header() {
  return `<header
              id="header"
              class="bg-header text-white flex items-center justify-between z-50 h-15 px-4 fixed top-0 inset-x-0"
            >
             
       ${HeaderLogo()}
      
    
            ${SearchBar()}
      
       

              <!-- right header section -->
          ${Basket()}
            </header>`;
}
