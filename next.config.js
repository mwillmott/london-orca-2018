// next.config.js
module.exports = {
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/register': { page: '/register' }
    }
  }
}
