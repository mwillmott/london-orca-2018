// next.config.js
module.exports = {
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/register': { page: '/register' },
      '/party/guests': { page: '/party/guests' },
    }
  }
}
