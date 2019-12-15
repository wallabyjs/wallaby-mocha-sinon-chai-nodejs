const sinon = require('sinon');

function hello(name, cb) {
  cb("hello " + name);
}

describe('example of sinon-chai', () => {
  it('should correctly extend chai to work with sinon ', () => {
    var cb = sinon.spy();
    hello("foo", cb);
    expect(cb).to.have.been.calledWith("hello foo");
  });
})