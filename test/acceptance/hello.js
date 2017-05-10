var assert = require('chai').assert,
    Client = require('../../../../test/helpers/client.js'),
    client = null;

describe('Test hello module', function() {
    this.timeout(30000);
    before(function(done) {
        client = new Client();
        client.start(done);
    });

    after(function(done) {
        if (client !== null) {
            client.shutdown(done);
        }
    });

    describe('/helloworld', function() {
        it('should print hello', function(done) {
            client.receiveMessage(function(data, done) {
                assert.include(data.content, 'hello', 'Did not recieve a hello');
                done();
            }, done);
            client.sendMessage('/helloworld');
        });
    });
});
