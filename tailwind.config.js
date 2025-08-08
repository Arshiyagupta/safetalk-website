module.exports = {
  content: ["./*.html"],
  safelist: [
    'lg:col-start-1',
    'lg:col-start-4', 
    'lg:col-start-7',
    'lg:row-start-1',
    'lg:row-start-2',
    'lg:row-span-2'
  ],
  theme: {
    extend: {
      colors: {
        'sage-green': '#9CAF88',
        'sage-green-soft': '#F0F4ED',
        'ocean-blue': '#6FA8DC',
        'ocean-blue-soft': '#E8F1FA',
        'warm-gray': '#F5F5F5',
        'charcoal': '#333333'
      }
    }
  }
}