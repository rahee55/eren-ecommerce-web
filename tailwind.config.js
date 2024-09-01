/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dis/home/index.html","./dis/product/product.html","./dis/product-list/product.html",
    "./dis/product-collection/product.html","./dis/pages/product.html","./dis/page-blog/product.html",
    "./dis/page-check/product.html", "./dis/page-detail/product.html", "./dis/contect-us/product.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'back-home': "url('../images/bg-image.jpg')",
        'back-image': "url('../images/border.png')",
        'back-images': "url('../images/slogan.jpg')",
        'back-fix': "url('../images/newsler.jpg')",
        'back-fixx': "url('../images/pattern.jpg')",
        'back-foot': "url('../images/map-footer.png')",
        'blog-header': "url('../images/blog-header.jpg')",
        'back-collection': "url('../images/collection-bg.jpg')",
        'back-contect': "url('../images/page-header.jpg')",
      }
    },
  },
  plugins: [],
}

