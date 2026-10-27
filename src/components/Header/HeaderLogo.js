const headerLogoSrc = 'amazon-logo-white.png';

export function HeaderLogo() {
  return `
  <a
    href="#"
    class="shrink-0 rounded-xs h-12 border border-transparent p-1.5 hover:border-white transition-colors"
  >
    <img src="src/assets/images/${headerLogoSrc}" alt="Amazon Logo" class="w-25" />
  </a>`;
}
