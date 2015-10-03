(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
  globals
  ReactLayout FlowRouter
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewsPagesHomeJsx = require('../views/pages/Home.jsx');

var _viewsPagesHomeJsx2 = _interopRequireDefault(_viewsPagesHomeJsx);

exports['default'] = function () {

  FlowRouter.route('/', {
    action: function action() {
      ReactLayout.render(_viewsPagesHomeJsx2['default'], {
        title: 'Tab Master'
      });
    }
  });
};

module.exports = exports['default'];

},{"../views/pages/Home.jsx":6}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libRouter = require('./lib/router');

var _libRouter2 = _interopRequireDefault(_libRouter);

(0, _libRouter2['default'])();

},{"./lib/router":1}],3:[function(require,module,exports){
/* global React Blaze Template */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccountsUIWrapper = (function (_React$Component) {
  _inherits(AccountsUIWrapper, _React$Component);

  function AccountsUIWrapper() {
    _classCallCheck(this, AccountsUIWrapper);

    _get(Object.getPrototypeOf(AccountsUIWrapper.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(AccountsUIWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.view = Blaze.render(Template.loginButtons, React.findDOMNode(this.refs.container));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      Blaze.remove(this.view);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement('span', { ref: 'container' });
    }
  }]);

  return AccountsUIWrapper;
})(React.Component);

exports['default'] = AccountsUIWrapper;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
/* global React */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _AccountsUIWrapperJsx = require('./AccountsUIWrapper.jsx');

var _AccountsUIWrapperJsx2 = _interopRequireDefault(_AccountsUIWrapperJsx);

var Header = (function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'header',
        null,
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        React.createElement(_AccountsUIWrapperJsx2['default'], null)
      );
    }
  }]);

  return Header;
})(React.Component);

Header.propTypes = {
  title: React.PropTypes.string.isRequired
};

exports['default'] = Header;
module.exports = exports['default'];

},{"./AccountsUIWrapper.jsx":3}],5:[function(require,module,exports){
/* globals React Meteor Tracker Package */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MeteorDataManager = (function () {
  function MeteorDataManager(component) {
    _classCallCheck(this, MeteorDataManager);

    this.component = component;
    this.computation = null;
    this.oldData = null;
  }

  _createClass(MeteorDataManager, [{
    key: 'dispose',
    value: function dispose() {
      if (this.computation) {
        this.computation.stop();
        this.computation = null;
      }
    }
  }, {
    key: 'calculateData',
    value: function calculateData() {
      var component = this.component;
      // const {props, state} = component

      if (!component.getMeteorData) {
        return null;
      }

      // don't user Tracker on the server
      if (Meteor.isServer) {
        return component.getMeteorData();
      }

      if (this.computation) {
        this.computation.stop();
        this.computation = null;
      }

      var data = undefined;

      this.computation = Tracker.nonreactive(function () {
        return Tracker.autorun(function (c) {
          if (c.firstRun) {
            var savedSetState = component.setState;
            try {
              component.setState = function () {
                throw new Error('\n                Can\'t call `setState` inside `getMeteorData` as this could cause an endless\n                loop. To respond to Meteor data changing, consider making this component\n                a "wrapper component" that only fetches data and passes it in as props to\n                a child component. Then you can use `componentWillReceiveProps` in that\n                child component.\n              ');
              };

              data = component.getMeteorData();
            } finally {
              component.setState = savedSetState;
            }
          } else {
            c.stop();
            component.forceUpdate();
          }
        });
      });

      if (Package.mongo && Package.mongo.Mongo) {
        Object.keys(data).forEach(function (key) {
          if (data[key] instanceof Package.mongo.Mongo.Cursor) {
            console.warn('\n            Warning: you are returning a Mongo cursor form getMeteorData. This value\n            will not be reactive. You probably want to call `.fetch()` on the cursor\n            before returning it\n          ');
          }
        });
      }

      return data;
    }
  }, {
    key: 'updateData',
    value: function updateData(newData) {
      var component = this.component;
      var oldData = this.oldData;

      if (!(newData && typeof newData === 'object')) {
        throw new Error('Expected object returned from getMeteorData');
      }

      for (var key in newData) {
        component.data[key] = newData[key];
      }

      if (oldData) {
        for (var key in oldData) {
          if (!(key in newData)) {
            delete component.data[key];
          }
        }
      }

      this.oldData = newData;
    }
  }]);

  return MeteorDataManager;
})();

var ReactMeteorData = (function (_React$Component) {
  _inherits(ReactMeteorData, _React$Component);

  function ReactMeteorData() {
    _classCallCheck(this, ReactMeteorData);

    _get(Object.getPrototypeOf(ReactMeteorData.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ReactMeteorData, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.data = {};
      this._meteorDataManager = new MeteorDataManager(this);
      var newData = this._meteorDataManager.calculateData();
      this._meteorDataManager.updateData(newData);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      var saveProps = this.props;
      var saveState = this.state;

      var newData = undefined;

      try {
        this.props = nextProps;
        this.state = nextState;
        newData = this._meteorDataManager.calculateData();
      } finally {
        this.props = saveProps;
        this.state = saveState;
      }

      this._meteorDataManager.updateData(newData);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._meteorDataManager.dispose();
    }
  }]);

  return ReactMeteorData;
})(React.Component);

exports['default'] = ReactMeteorData;
module.exports = exports['default'];

},{}],6:[function(require,module,exports){
/* global React Meteor */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _componentsHeaderJsx = require('../components/Header.jsx');

var _componentsHeaderJsx2 = _interopRequireDefault(_componentsHeaderJsx);

var _mixinsReactMeteorDataJsx = require('../mixins/ReactMeteorData.jsx');

var _mixinsReactMeteorDataJsx2 = _interopRequireDefault(_mixinsReactMeteorDataJsx);

var Home = (function (_ReactMeteorData) {
  _inherits(Home, _ReactMeteorData);

  function Home() {
    _classCallCheck(this, Home);

    _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Home, [{
    key: 'getMeteorData',
    value: function getMeteorData() {
      return {
        user: Meteor.user()
      };
    }
  }, {
    key: 'render',
    value: function render() {

      var userStatus = React.createElement(
        'p',
        null,
        'Not logged in'
      );

      if (this.data.user) {
        userStatus = React.createElement(
          'p',
          null,
          'Logged in as ',
          this.data.user.username
        );
      }

      return React.createElement(
        'div',
        null,
        React.createElement(_componentsHeaderJsx2['default'], { title: this.props.title }),
        userStatus
      );
    }
  }]);

  return Home;
})(_mixinsReactMeteorDataJsx2['default']);

Home.propTypes = {
  title: React.PropTypes.string.isRequired
};

exports['default'] = Home;
module.exports = exports['default'];

},{"../components/Header.jsx":4,"../mixins/ReactMeteorData.jsx":5}]},{},[2]);
