const searchIconSrc = 'search-icon.png';

export function SearchBar() {
  return `
          <form
          action="search"
          method="get"
          class="max-w-212.5 w-full flex-1 mx-4 flex h-10 rounded-md"
        >
          <label for="search" class="sr-only">Search Amazon</label>
          <input
            id="search"
            type="search"
            name="k"
            autocomplete="off"
            placeholder="Search Amazon"
            class="h-full min-w-0 flex-1 rounded-l-md bg-white pl-4 pr-2 text-gray-900 outline-none placeholder:text-gray-500"
          />
          <button
            type="submit"
            aria-label="Go"
            class="py-1 px-1 w-11 h-10 flex items-center justify-center cursor-pointer rounded-r-md bg-amz hover:bg-amz-hover transition-colors"
          >
            <img
              src="src/assets/images/icons/${searchIconSrc}"
              alt="search icon"
              class="size-5.5"
            />
          </button>
        </form>

        `;
}
