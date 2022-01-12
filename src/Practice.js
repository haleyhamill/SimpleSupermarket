const socialImpact = tweets.reduce((total, current) => {
    console.log(current);
    return total + current.stats.likes + current.stats.retweets;
}, 0);

const socialImpact = tweets.reduce((total, current) => {
    console.log(current);
    return total + current.stats.likes + current.stats.retweets;
}, 0);