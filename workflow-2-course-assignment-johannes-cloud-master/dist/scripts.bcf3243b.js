// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/question-1/question-1.ts":[function(require,module,exports) {
// Convert the function to TypeScript, making sure to use the
//  User interface as the return type
function createUser(_a) {
  var school = _a.school,
      firstName = _a.firstName,
      lastName = _a.lastName,
      age = _a.age,
      isAdmin = _a.isAdmin;
  return {
    school: school,
    firstName: firstName,
    lastName: lastName,
    age: age,
    isAdmin: isAdmin
  };
}

var newUser = createUser({
  school: 'Noroff',
  firstName: 'Ola',
  lastName: 'Nordmann',
  age: 18,
  isAdmin: false
});
var newAdmin = createUser({
  school: 'Noroff',
  firstName: 'Kari',
  lastName: 'Nordmann',
  age: 36,
  isAdmin: true
});
console.log(newUser);
console.log(newAdmin);
},{}],"scripts/question-2/question-2.ts":[function(require,module,exports) {
// 1. Create an enum (GameGenre):
// Create an enum called GameGenre with the following key/value pairs. The value
//    should be the same as the key:
// - Action
// - Adventure
// - Sport
var GameGenre;

(function (GameGenre) {
  GameGenre["Action"] = "ACTION";
  GameGenre["Adventure"] = "ADVENTURE";
  GameGenre["Sport"] = "SPORT";
})(GameGenre || (GameGenre = {})); // 3. Convert the function to TypeScript. Use your interface from above as the parameter.


function createGame(name, genre, onlinePlay) {
  return {
    name: name,
    genre: genre,
    onlinePlay: onlinePlay
  };
} // 4. Change these function calls to use the enum you created in step 1


createGame('Fun action game', GameGenre.Action);
createGame('Fun adventure game', GameGenre.Adventure, true);
console.log(createGame('Fun action game', GameGenre.Action));
console.log(createGame('Fun adventure game', GameGenre.Adventure, true));
},{}],"scripts/question-3/question-3.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateTax = calculateTax;
exports.convertKrone = convertKrone;
exports.formatDecimalSpaces = formatDecimalSpaces;
exports.getDiscountPercentage = getDiscountPercentage;

/**
 * Calculates the discount percentage from a normal price
 * and a discounted price.
 * @param normalPrice Regular price before discount
 * @param discountedPrice The discounted price
 * @returns The discount percentage
 * @example
 * // Expect 25
 * getDiscountPercentage(100, 75);
 */
function getDiscountPercentage(normalPrice, discountedPrice) {
  return Math.round(100 - discountedPrice / normalPrice * 100);
}
/**
 * Converts a value to 2 decimal spaces
 * @param value The amount that will have the decimal places applied to
 * @param decimalSpaces How many decimal spaces to use, defaults to 2
 * @returns The value with decimal spaces and rounding applied to it
 * @example
 * // Expect 15.56
 * formatDecimalSpaces(15.5555555);
 */


function formatDecimalSpaces(value) {
  var decimalSpaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return +(Math.round(value + "e+".concat(decimalSpaces)) + "e-".concat(decimalSpaces));
}
/**
 * Converts a value to or from Krone
 * @param amount The amount to be converted
 * @param kroneValue The value of Krone when converting e.g. 1 Euro = 10.18 Krone
 * @param toKrone Toggle whether to convert to or from Krone
 * @returns Amount converted
 * @example
 * // Expect 101.80
 * convertToKrone(10)
 */


function convertKrone(amount) {
  var toKrone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var kroneValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10.18;

  if (toKrone) {
    return formatDecimalSpaces(amount * kroneValue);
  }

  return formatDecimalSpaces(amount / kroneValue);
}
/**
 * Calculates the tax for an amount given
 * @param amount Amount to be calculated
 * @param taxRate The tax rate being applied
 * @returns Amount with tax applied
 * // Expect 125
 * calculateTax(100)
 */


function calculateTax(amount) {
  var taxRate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;
  return formatDecimalSpaces(amount + amount * (taxRate / 100));
}
},{}],"scripts/question-4/items.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lettuce = exports.tomato = exports.cheese = exports.bread = exports.milk = void 0; // These are items to use in the shopping cart

var milk = {
  id: 942,
  name: 'Milk',
  price: 19.99
};
exports.milk = milk;
var bread = {
  id: 24,
  name: 'Bread',
  price: 9.25
};
exports.bread = bread;
var cheese = {
  id: 52,
  name: 'Cheese',
  price: 5.95
};
exports.cheese = cheese;
var tomato = {
  id: 84,
  name: 'Tomato',
  price: 3.5
};
exports.tomato = tomato;
var lettuce = {
  id: 663,
  name: 'Lettuce',
  price: 1.95
};
exports.lettuce = lettuce;
},{}],"scripts/question-4/question-4.ts":[function(require,module,exports) {
"use strict";

var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShoppingCart = void 0;

var items_1 = require("./items");

var ShoppingCart =
/** @class */
function () {
  function ShoppingCart() {
    // Add the correct array type to cart
    this.cart = [];
  } // Add the correct return type


  ShoppingCart.prototype.getCostTotal = function () {
    var costTotal = this.cart.reduce(function (total, currentItem) {
      total += currentItem.price;
      return total;
    }, 0);
    return costTotal;
  }; // Add the correct return type


  ShoppingCart.prototype.getNumberOfItems = function () {
    return this.cart.length;
  }; // Add the correct return type


  ShoppingCart.prototype.getCart = function () {
    return __spreadArray([], this.cart, true);
  }; // Set the parameter to be of the Item type and set the return
  //    type to be of the correct type


  ShoppingCart.prototype.addToCart = function (item) {
    var itemExists = this.cart.find(function (currentItem) {
      if (currentItem.id === item.id) {
        return true;
      }
    });

    if (!itemExists) {
      this.cart.push(item);
    }
  }; // Set the parameter to be of the Item type and set the return
  //    type to be of the correct type


  ShoppingCart.prototype.removeFromCart = function (item) {
    var newCart = this.cart.filter(function (currentItem) {
      if (currentItem.id !== item.id) {
        return true;
      }
    });
    this.cart = __spreadArray([], newCart, true);
  };

  return ShoppingCart;
}();

exports.ShoppingCart = ShoppingCart; // Examples, feel free to delete

var myCart = new ShoppingCart();
myCart.addToCart(items_1.bread);
myCart.removeFromCart(items_1.bread);
},{"./items":"scripts/question-4/items.ts"}],"scripts/question-5/question-5.js":[function(require,module,exports) {
// API url: https://graphqlzero.almansi.me/api
fetch("https://graphqlzero.almansi.me/api", {
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "body": JSON.stringify({
    query: "query (\n        $options: PageQueryOptions\n      ) {\n        posts(options: $options) {\n          data {\n            id\n            title\n          }\n          meta {\n            totalCount\n          }\n        }\n      }"
  })
}).then(function (res) {
  return res.json();
}).then(console.log);
},{}],"scripts/index.js":[function(require,module,exports) {
"use strict";

require("./question-1/question-1");

require("./question-2/question-2");

require("./question-3/question-3");

require("./question-4/question-4");

require("./question-5/question-5");
},{"./question-1/question-1":"scripts/question-1/question-1.ts","./question-2/question-2":"scripts/question-2/question-2.ts","./question-3/question-3":"scripts/question-3/question-3.js","./question-4/question-4":"scripts/question-4/question-4.ts","./question-5/question-5":"scripts/question-5/question-5.js"}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63304" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/index.js"], null)
//# sourceMappingURL=/scripts.bcf3243b.js.map