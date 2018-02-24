// https://www.npmjs.com/package/solr-node

let SolrNode = require('solr-node');

let client = new SolrNode({
    host: '127.0.0.1',
    port: '8983',
    core: 'techproducts',
    protocol: 'http'
});

let search = function(searchString) {
    return new Promise(( resolve, reject ) => {
        client.search(searchString, function (err, result) {
            if (err) {
                console.log(query.sql)
                console.log(err)
                reject( err )
                return
            } else {
                resolve(result)
            }
        });
    })
}

module.exports = {
  search
}