module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  // Duyệt tất cả file trong thư mục src
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        // Configure your color palette here
        'title':'#3B5D50',
        'mau_nen_primary':'rgba(163,163,128,1)',
        'mau_desc':'#6A6A6A',
        'mau_den':'#2F2F2F',
        'mau_vang':'#efebce', 
        'mau_vang_nhat':'rgba(239,235,206,0.5)',
        'mau_trang':'#fff',
        'mau_xam':'#E1EBEA',
        'mau_vien_xam':'#c4c4c4',
        'mau_xanh':'rgba(53,115,110,.3)'
      },
  },
  plugins: [],
  }
}

