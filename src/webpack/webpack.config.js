var mode = process.env.NODE_ENV || 'development';
module.exports = {
    devtool: (mode === 'development') ? 'inline-source-map' : false,
    mode: mode,
}