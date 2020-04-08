Problem: refreshing on routes other than root cause 404
Solution: add `historyApiFallback: true` to webpack dev server config
Update: only using `historyApiFallback: true` was not enough, while it works for path such as /a, it fails for nested routes such as /a/b. New solution is to also add `publicPath: '/'` to webpack config output to specify the base path for all assets.