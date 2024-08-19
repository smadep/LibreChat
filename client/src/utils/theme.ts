export const applyFontSize = (val: string) => {
  const root = document.documentElement;
  const size = val.split('-')[1]; // This will be 'xs', 'sm', 'base', 'lg', or 'xl'

  switch (size) {
    case 'xs':
      root.style.setProperty('--markdown-font-size', '0.75rem'); // 12px
      break;
    case 'sm':
      root.style.setProperty('--markdown-font-size', '0.875rem'); // 14px
      break;
    case 'base':
      root.style.setProperty('--markdown-font-size', '1rem'); // 16px
      break;
    case 'lg':
      root.style.setProperty('--markdown-font-size', '1.125rem'); // 18px
      break;
    case 'xl':
      root.style.setProperty('--markdown-font-size', '1.25rem'); // 20px
      break;
  }
};

export const applyChatWidth = (val: string) => {
  const root = document.documentElement;
  const size = val.split('-')[2]; // This will be 'narrower', ''base', or 'wider'

  switch (size) {
    case 'narrower':
      root.style.setProperty('--markdown-chat-width', '36rem');
      break;
    case 'base':
      root.style.setProperty('--markdown-chat-width', '48rem');
      break;
    case 'wider':
      root.style.setProperty('--markdown-chat-width', '78rem');
      break;
  }
};

export const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  return 'light'; // light theme as the default;
};
