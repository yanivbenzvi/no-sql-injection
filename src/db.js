let mongo_port = process.env.MONGO_PORT || 27017;
let mongo_host = process.env.MONGO_HOST || "192.168.44.15";

module.exports = {
	DB: 'mongodb://' + mongo_host + ':' + mongo_port + '/myapp'
};