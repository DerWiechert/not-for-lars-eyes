const debug = require('debug')('not-for-lars-eyes:controller');
const MongoDBConnector = require('../DBConnector/mongoDBConnector')

let controller = {
    main: function () {
        require('dotenv').config({ path: './.env' });
        debug("Controller initialized")
        this.init_dbs()
        this.value = false
    },

    init_dbs: function () {
        this.mongoDBconnector = new MongoDBConnector()
    }
}

controller.main()

module.exports = controller