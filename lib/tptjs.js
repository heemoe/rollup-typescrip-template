var TPTJS = (function (exports) {
    'use strict';

    class Cat {
        constructor(a, b) {
            this.a = a;
            this.b = b;
        }
        /**
         * test get A
         */
        getA() {
            return this.a;
        }
        /**
         * test get B
         */
        getB() {
            return this.b;
        }
    }
    class Animals extends Object {
        /**
         * show
         */
        showName() {
            const obj = new Cat("aaa", "bbb");
            console.log(obj);
            console.log(obj.getA());
            console.log(obj.getB());
        }
    }

    exports.Animals = Animals;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
