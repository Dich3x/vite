export function assetFileNames({ name }) {
    if (/(\.png$)|(\.jpg$)|(\.jpeg$)|(\.svg$)/i.test(name)) {
      return `assets/images/[name].[ext]`;
    };
    if (/(\.css$)/i.test(name)) {
      return `assets/style/[name].[ext]`;
    };
    if (/(\.woff$)|(\.woff2$)|(\.ttf$)|(\.eot$)/i.test(name)) {
        return `assets/fonts/[name].[ext]`;
    };
    return `${name}[ext]`;
  }