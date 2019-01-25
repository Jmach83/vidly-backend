
function log(re, res, next){
    console.log('Logging...');
    next();
}

module.exports = log;