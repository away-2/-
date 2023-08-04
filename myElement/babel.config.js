module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }], // 让babel知道我们要转换的是node环境
      '@babel/preset-typescript' // 让babel知道我们要转换的是typescript
    ]
  }