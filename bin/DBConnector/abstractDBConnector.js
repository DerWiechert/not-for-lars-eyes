class AbstractDBConnector {
    constructor() {
        if (new.target === AbstractDBConnector) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
    }

    connect_to_db() {}
}

module.exports = AbstractDBConnector;