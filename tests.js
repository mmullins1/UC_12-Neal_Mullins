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
QUnit.test("Test the getLineCode function.", function (assert) {
    var num = "(415) 555-5555";
    var result = getLineCode(num);
    assert.deepEqual(result, "5555", "Valid area code test passed.");
});
QUnit.test("Errors thrown for getLineCode", function (assert) {
    assert.throws(function () {
        getLineCode("(415)444-555");
    }, "Missing digit. An error should have been thrown.");
    assert.throws(function () {
        getLineCode("(415 444-5e55");
    }, "Incorrect input. An error should have been thrown.");
});
QUnit.test("Errors thrown for checkValidation", function (assert) {
    assert.throws(function () {
        checkValid("4(415)444-5555");
    }, "Extra digit. An error should have been thrown.");
});
