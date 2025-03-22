(function() {
  try {
    const hash = window.location.hash;
    if (hash && hash.includes('injectcss=')) {
      const css = decodeURIComponent(hash.split('injectcss=')[1]);
      const style = document.createElement('style');
      style.textContent = css;
      document.head.appendChild(style);
    }
  } catch (error) {
    console.error('Failed to inject styles:', error);
  }
})();