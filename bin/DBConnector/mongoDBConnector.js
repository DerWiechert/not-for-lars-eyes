const Mongo = require('mongodb');
const debug = require('debug')('not-for-lars-eyes:mongoDBConnector');
const AbstractDBConnector = require('./abstractDBConnector');
const { DWDRAW, OWMRAW } = require('../enum/db_sources')

class MongoDBConnector extends AbstractDBConnector {
    constructor() {
        super();
        this.MongoClient = Mongo.MongoClient;
        this.url = "mongodb://localhost:27017/weather_data";
        debug("MongoDB initialized")
    }

    connect_to_db(cb) {
        super.connect_to_db();
        this.MongoClient.connect(
            this.url,
            function(err, db) {
            if (err) throw err;
            cb(db);
        });
    }

    insert_data(source, data) {
        this.connect_to_db(function (db) {
                const dbo = db.db("mydb");
                dbo.collection(source).insertOne(data, function(err, res) {
                    if (err) throw err;
                    debug("Data added to MongoDB.")
                    db.close();
                });
            }
        )
    }
}

module.exports = MongoDBConnector