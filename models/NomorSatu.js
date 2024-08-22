class NomorSatu {
  static showPrimitiveTypes() {
    const booleanValue = true;
    var numberValue = 42;
    let stringValue = "Hello World";
    const undefinedValue = undefined;
    const nullValue = null;
    const symbolValue = Symbol("symbol");
    const bigIntValue = 9007199254740991n;

    console.log("=== Primitive Types ===");
    console.log("Boolean:", booleanValue);
    console.log("Number:", numberValue);
    console.log("String:", stringValue);
    console.log("Undefined:", undefinedValue);
    console.log("Null:", nullValue);
    console.log("Symbol:", symbolValue);
    console.log("BigInt:", bigIntValue);
    console.log("");
  }

  static showNonPrimitiveTypes() {
    const objectValue = { name: "Alice", age: 25 };
    const arrayValue = [1, 2, 3, 4, 5];
    const functionValue = function () {
      return "I am a function";
    };

    console.log("=== Non-Primitive Types ===");
    console.log("Object:", objectValue);
    console.log("Array:", arrayValue);
    console.log("Function:", functionValue());
    console.log("");
  }

  static demoOperators() {
    const a = 10;
    const b = 5;

    console.log("=== Operator Aritmamtika ===");
    console.log("a + b =", a + b);
    console.log("a - b =", a - b);
    console.log("a * b =", a * b);
    console.log("a / b =", a / b);
    console.log("a % b =", a % b);
    console.log("");

    console.log("=== Operator Perbandingan ===");
    console.log("a > b  =", a > b);
    console.log("a < b  =", a < b);
    console.log("a >= b =", a >= b);
    console.log("a <= b =", a <= b);
    console.log("a === b =", a === b);
    console.log("a !== b =", a !== b);
    console.log("");
  }
}

module.exports = NomorSatu;
