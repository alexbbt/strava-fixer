module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/strava-fixer/'
        : '/'
};
