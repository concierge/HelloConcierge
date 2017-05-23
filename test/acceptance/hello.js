'use strict';

const assert = require('chai').assert,
    mockApi = new MockApi();

describe('Test hello module', () => {
    describe('/helloworld', () => {
        it('should print hello', done => {
            mockApi.waitForResponse((data, complete) => {
                assert.include(data[0], 'hello', 'Did not recieve a hello');
                complete();
            }, done);
            mockApi.mockSendToModules('/helloworld');
        });
    });
});
