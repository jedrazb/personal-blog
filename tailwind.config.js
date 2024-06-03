/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}',
    './src/utils/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: 'var(--orange)',
        blue: 'var(--blue)',
        bg: 'var(--bg)',
        bgSecondary: 'var(--bg-secondary)',
        bgHeader: 'var(--bg-header)',
        postOutline: 'var(--post-outline)',
        bgGallery: 'var(--bg-gallery)',
        header: 'var(--header)',
        normal: 'var(--textNormal)',
        title: 'var(--textTitle)',
        link: 'var(--textLink)',
        hr: 'var(--hr)',
        inlineCodeBg: 'var(--inlineCode-bg)',
        inlineCodeText: 'var(--inlineCode-text)',
        formShadow: 'var(--form-shadow)',
        swiperPaginationInavtive:
          'var(--swiper-pagination-bullet-inactive-color)',
        mapVisited: 'var(--map-visited)',
        mapNotVisited: 'var(--map-notvisited)',
        secondary: 'var(--textSecondary)',
      },
    },
    maxWidth: {
      'content-md': '52.5rem',
    },
  },
  plugins: [],
};
