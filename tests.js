QUnit.test("Test the getAreaCode function.", function (assert) {
    var num = "(415) 555-5555";
    var result = getAreaCode(num);
    assert.deepEqual(result, "415", "Valid area code test passed.");
});
QUnit.test("Errors thrown for getAreaCode", function (assert) {
    assert.throws(function () {
        getAreaCode("415)444-5555");
    }, "Missing '('. An error should have been thrown.");
    assert.throws(function () {
        getAreaCode("(415 444-5555");
    }, "Missing ')'. An error should have been thrown.");
});
QUnit.test("Test the getCO function.", function (assert) {
    var num = "(415) 555-5555";
    var result = getCO(num);
    assert.deepEqual(result, "555", "Valid CO code test passed.");
});
QUnit.test("Errors thrown for getCO", function (assert) {
    assert.throws(function () {
        getCO("(415)4445555");
    }, "Missing '-'. An error should have been thrown.");
    assert.throws(function () {
        getCO("(415 444-5555");
    }, "Missing ')'. An error should have been thrown.");
});
