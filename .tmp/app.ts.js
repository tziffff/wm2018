/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(3);
	__webpack_require__(2);
	__webpack_require__(4);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(19);
	__webpack_require__(20);
	module.exports = __webpack_require__(21);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	mainConfig.$inject = ["$provide", "$compileProvider", "$locationProvider", "$qProvider", "config"];
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Configures the application (before running).
	 */
	function mainConfig($provide, $compileProvider, $locationProvider, $qProvider, config) {
	    // Extend the $exceptionHandler service to output logs.
	    $provide.decorator('$exceptionHandler', ["$delegate", "$injector", function ($delegate, $injector) {
	        return function (exception, cause) {
	            $delegate(exception, cause);
	            var logger = $injector.get('logger').getLogger('exceptionHandler');
	            logger.error(exception + (cause ? ' (' + cause + ')' : ''));
	        };
	    }]);
	    // Disable debug logs in production version
	    $provide.decorator('$log', ["$delegate", function ($delegate) {
	        if (!config.environment.debug) {
	            $delegate.log = angular.noop;
	            $delegate.debug = angular.noop;
	        }
	        return $delegate;
	    }]);
	    // Disable angular debug info in production version
	    $compileProvider.debugInfoEnabled(config.environment.debug);
	    // Use no hash prefix for routing
	    $locationProvider.hashPrefix('');
	    // Disable exception on unhandled rejections (we have our own handler)
	    $qProvider.errorOnUnhandledRejections(false);
	}
	main_module_1.default.config(mainConfig);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	Object.defineProperty(exports, "__esModule", { value: true });
	// Translations are injected at build phase
	angular.module('translations', []);
	exports.default = angular.module('app', [
	    'translations',
	    'gettext',
	    'ngAnimate',
	    'ngSanitize',
	    'ui.router',
	    'ui.bootstrap'
	]);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	// Do not remove the comments below, or change the values. It's the markers used by gulp build task to change the
	// value of the config constant when building the application, while removing the code below for all environments.
	// replace:environment
	var environment = {
	    local: {
	        debug: true,
	        // REST backend configuration, used for all web services using restService
	        server: {
	            url: '',
	            route: 'api'
	        }
	    },
	    production: {
	        debug: false,
	        server: {
	            url: '',
	            route: 'api'
	        }
	    }
	};
	// endreplace
	/**
	 * Defines app-level configuration.
	 */
	var config = {
	    // Do not remove the comments below, or change the values. It's the markers used by gulp build task to inject app
	    // version from package.json and environment values.
	    // replace:constant
	    version: 'dev',
	    environment: environment.local,
	    // endreplace
	    // Supported languages
	    supportedLanguages: [
	        'en-US',
	        'fr-FR'
	    ]
	};
	main_module_1.default.constant('config', config);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	routeConfig.$inject = ["$stateProvider", "$urlRouterProvider", "gettext"];
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Configures the application routes.
	 */
	function routeConfig($stateProvider, $urlRouterProvider, gettext) {
	    // Routes configuration
	    $urlRouterProvider.otherwise('/');
	    $stateProvider
	        .state('app', {
	        template: __webpack_require__(5),
	        controller: 'shellController as shell'
	    })
	        .state('app.home', {
	        url: '/',
	        template: __webpack_require__(6),
	        controller: 'homeController as vm',
	        data: { title: gettext('Home') }
	    })
	        .state('app.about', {
	        url: '/about',
	        template: __webpack_require__(7),
	        controller: 'aboutController as vm',
	        data: { title: gettext('About') }
	    });
	}
	main_module_1.default.config(routeConfig);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = "<section id=\"shell\" class=\"shell\"><!--Header--><header><nav class=\"navbar navbar-static-top navbar-inverse\"><div class=\"container-fluid\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" ng-click=\"shell.toggleMenu()\" aria-expanded=\"{{!shell.menuHidden}}\"><span class=\"sr-only\" translate>Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"https://github.com/angular-starter-kit\"><span translate>APP_NAME</span></a></div><div class=\"navbar-collapse\" uib-collapse=\"shell.menuHidden\"><ul class=\"nav navbar-nav\"><li ng-class=\"{ active: shell.stateContains('app.home') }\"><a class=\"nav-item text-uppercase\" ui-sref=\"app.home\"><i class=\"fa fa-home\"></i> <span translate>Home</span></a></li><li ng-class=\"{ active: shell.stateContains('app.about') }\"><a class=\"nav-item text-uppercase\" ui-sref=\"app.about\"><i class=\"fa fa-question-circle\"></i> <span translate>About</span></a></li></ul><div class=\"navbar-form navbar-right\"><div class=\"form-group\" uib-dropdown><button type=\"button\" class=\"btn btn-default\" uib-dropdown-toggle aria-haspopup=\"true\" aria-expanded=\"false\">{{shell.currentLocale.id}} <span class=\"caret\"></span></button><ul class=\"dropdown-menu\"><li ng-repeat=\"language in ::shell.languages\"><a href ng-click=\"setLanguage(language)\">{{language}}</a></li></ul></div></div></div></div></nav></header><!--View content--><div ui-view></div></section>"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = "<section id=\"home-screen\" class=\"home-screen container-fluid\"><div class=\"jumbotron text-center\"><h1><img class=\"logo\" src=\"images/angularjs-logo.png\" alt=\"angularjs logo\"> <span translate>Hello world !</span></h1><div ui-loading=\"vm.isLoading\"></div><p><em class=\"quote\">{{vm.quote}}</em></p></div></section>"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = "<section id=\"about-screen\" class=\"container-fluid\"><div class=\"jumbotron text-center\"><h1 translate>APP_NAME</h1><p><i class=\"fa fa-bookmark-o\"></i> <span translate>Version</span> {{vm.version}}</p></div></section>"

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	main.$inject = ["$window", "$locale", "$rootScope", "$state", "gettextCatalog", "_", "config", "restService"];
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Entry point of the application.
	 * Initializes application and root controller.
	 */
	function main($window, $locale, $rootScope, $state, gettextCatalog, _, config, restService) {
	    /*
	     * Root view model
	     */
	    var vm = $rootScope;
	    vm.pageTitle = '';
	    /**
	     * Utility method to set the language in the tools requiring it.
	     * The current language is saved to the local storage.
	     * If no parameter is specified, the language is loaded from local storage (if possible).
	     * @param {string=} language The IETF language tag.
	     */
	    vm.setLanguage = function (language) {
	        language = language || $window.localStorage.getItem('language');
	        var isSupportedLanguage = _.includes(config.supportedLanguages, language);
	        // Fallback if language is not supported
	        if (!isSupportedLanguage) {
	            language = 'en-US';
	        }
	        // Configure translation with gettext
	        gettextCatalog.setCurrentLanguage(language);
	        $locale.id = language;
	        $window.localStorage.setItem('language', language);
	    };
	    /**
	     * Updates title on view change.
	     */
	    vm.$on('$stateChangeSuccess', function (event, toState) {
	        updateTitle(toState.data ? toState.data.title : null);
	    });
	    /**
	     * Updates title on language change.
	     */
	    vm.$on('gettextLanguageChanged', function () {
	        updateTitle($state.current.data ? $state.current.data.title : null);
	    });
	    init();
	    /*
	     * Internal
	     */
	    /**
	     * Initializes the root controller.
	     */
	    function init() {
	        // Enable debug mode for translations
	        gettextCatalog.debug = config.environment.debug;
	        vm.setLanguage();
	        // Set REST server configuration
	        restService.setServer(config.environment.server);
	    }
	    /**
	     * Updates the title.
	     * @param {?string=} stateTitle Title of current state, to be translated.
	     */
	    function updateTitle(stateTitle) {
	        vm.pageTitle = gettextCatalog.getString('APP_NAME');
	        if (stateTitle) {
	            vm.pageTitle += ' | ' + gettextCatalog.getString(stateTitle);
	        }
	    }
	}
	main_module_1.default.run(main);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Wraps external global libraries into AngularJS injection system.
	 * global window: false
	 */
	main_module_1.default.constant('_', _); // Lodash


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Displays the SPA shell.
	 * The shell contains the shared parts of the application: header, footer, navigation...
	 */
	var ShellController = (function () {
	    ShellController.$inject = ["$state", "$locale", "_", "config", "logger"];
	    function ShellController($state, $locale, _, config, logger) {
	        this.$state = $state;
	        this._ = _;
	        this.currentLocale = $locale;
	        this.logger = logger.getLogger('shell');
	        this.languages = config.supportedLanguages;
	        this.menuHidden = true;
	        this.logger.log('init');
	    }
	    /**
	     * Toggles navigation menu visibility on mobile platforms.
	     */
	    ShellController.prototype.toggleMenu = function () {
	        this.menuHidden = !this.menuHidden;
	    };
	    /**
	     * Checks if the specified name is contained in the current navigation state.
	     * @param {string} name The state name to check.
	     * @return {boolean} True if the specified name is contained in the current navigation state.
	     */
	    ShellController.prototype.stateContains = function (name) {
	        return this._.startsWith(this.$state.current.name, name);
	    };
	    return ShellController;
	}());
	exports.ShellController = ShellController;
	main_module_1.default.controller('shellController', ShellController);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Cache service: manages cached data for GET requests.
	 * By default, the cache is only persisted in memory, but you can change this behavior using the setPersistence()
	 * method.
	 */
	var CacheService = (function () {
	    CacheService.$inject = ["$window", "logger"];
	    function CacheService($window, logger) {
	        this.$window = $window;
	        this.cachedData = {};
	        this.storage = null;
	        this.logger = logger.getLogger('cacheService');
	        /**
	         * Initializes service.
	         */
	        this.loadCacheData();
	    }
	    /**
	     * Sets the cache data for the specified request.
	     * @param {!string} url URL of the REST service call.
	     * @param {map=} params Map of strings or objects which will be turned to ?key1=value1&key2=value2 after the url. If the value is not a string, it will be
	     *   JSONified.
	     * @param {Object} data The received data.
	     * @param {Date=} date The cache date, now date is used if not specified.
	     */
	    CacheService.prototype.setCacheData = function (url, params, data, date) {
	        var cacheKey = this.getCacheKey(url, params);
	        this.cachedData[cacheKey] = {
	            date: date || new Date(),
	            data: data
	        };
	        this.logger.log('Cache set for key: "' + cacheKey + '"');
	        this.saveCacheData();
	    };
	    /**
	     * Gets the cached data (if possible) for the specified request.
	     * @param {!string} url URL of the REST service call.
	     * @param {?map=} params Map of strings or objects which will be turned to ?key1=value1&key2=value2 after the url. If the value is not a string, it will be
	     *   JSONified.
	     * @return {?Object} The cached data or null if no cached data exists for this request.
	     */
	    CacheService.prototype.getCacheData = function (url, params) {
	        var cacheKey = this.getCacheKey(url, params);
	        var cacheEntry = this.cachedData[cacheKey];
	        if (cacheEntry) {
	            this.logger.log('Cache hit for key: "' + cacheKey + '"');
	            return cacheEntry.data;
	        }
	        return null;
	    };
	    /**
	     * Gets the cached data date (if possible) for the specified request.
	     * @param {!string} url URL of the REST service call.
	     * @param {?map=} params Map of strings or objects which will be turned to ?key1=value1&key2=value2 after the url. If the value is not a string, it will be
	     *   JSONified.
	     * @return {?Object} The cached data date or null if no cached data exists for this request.
	     */
	    CacheService.prototype.getCacheDate = function (url, params) {
	        var cacheKey = this.getCacheKey(url, params);
	        var cacheEntry = this.cachedData[cacheKey];
	        return cacheEntry ? cacheEntry.date : null;
	    };
	    /**
	     * Clears the cached data (if exists) for the specified request.
	     * @param {!string} url URL of the REST service call.
	     * @param {?map=} params Map of strings or objects which will be turned to ?key1=value1&key2=value2 after the url. If the value is not a string, it will be
	     *   JSONified.
	     */
	    CacheService.prototype.clearCacheData = function (url, params) {
	        var cacheKey = this.getCacheKey(url, params);
	        this.cachedData[cacheKey] = undefined;
	        this.logger.log('Cache cleared for key: "' + cacheKey + '"');
	        this.saveCacheData();
	    };
	    /**
	     * Cleans cache entries older than the specified date.
	     * @param {date=} expirationDate The cache expiration date. If no date is specified, all cache is cleared.
	     */
	    CacheService.prototype.cleanCache = function (expirationDate) {
	        var _this = this;
	        if (expirationDate) {
	            angular.forEach(this.cachedData, function (value, key) {
	                if (expirationDate >= value.date) {
	                    _this.cachedData[key] = undefined;
	                }
	            });
	        }
	        else {
	            this.cachedData = {};
	        }
	        this.saveCacheData();
	    };
	    /**
	     * Sets the cache persistence.
	     * Note that changing the cache persistence will also clear the cache from its previous storage.
	     * @param {'local'|'session'=} persistence How the cache should be persisted, it can be either
	     *   in the local or session storage, or if no parameters is provided it will be only in-memory (default).
	     */
	    CacheService.prototype.setPersistence = function (persistence) {
	        this.cleanCache();
	        this.storage = persistence === 'local' || persistence === 'session' ?
	            this.$window[persistence + 'Storage'] : null;
	        this.loadCacheData();
	    };
	    ;
	    /**
	     * Gets the cache key for the specified url and parameters.
	     * @param {!string} url The request URL.
	     * @param {?map=} params Map of strings or objects which will be turned to ?key1=value1&key2=value2 after the url. If the value is not a string, it will be
	     *   JSONified.
	     * @return {string} The corresponding cache key.
	     */
	    CacheService.prototype.getCacheKey = function (url, params) {
	        return url + (params ? angular.toJson(params) : '');
	    };
	    /**
	     * Saves the current cached data into persisted storage.
	     */
	    CacheService.prototype.saveCacheData = function () {
	        if (this.storage) {
	            this.storage.cachedData = angular.toJson(this.cachedData);
	        }
	    };
	    /**
	     * Loads cached data from persisted storage.
	     */
	    CacheService.prototype.loadCacheData = function () {
	        var data = this.storage ? this.storage.cachedData : null;
	        this.cachedData = data ? angular.fromJson(data) : {};
	    };
	    return CacheService;
	}());
	exports.CacheService = CacheService;
	main_module_1.default.service('cacheService', CacheService);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Context service: provides URL context injection based on specified context.
	 */
	var ContextService = (function () {
	    ContextService.$inject = ["logger"];
	    function ContextService(logger) {
	        this.logger = logger.getLogger('contextService');
	    }
	    /**
	     * Injects the specified context into the given REST API.
	     * The REST API should be formatted like "/api/users/:userId".
	     * Any fragment from the REST API starting with ":" will then be replaced by a property from the context with
	     * the same name, i.e. for "/api/users/:userId" and a context object "{ userId: 123 }", the resulting URL will
	     * be "/api/users/123".
	     * @param {!string} restApi The REST API to fill will context values.
	     * @param {Object} context The context to use.
	     * @return {string} The ready-to-use REST API to call.
	     */
	    ContextService.prototype.inject = function (restApi, context) {
	        var _this = this;
	        this.logger.log('Injecting context in: ' + restApi);
	        if (!context) {
	            throw 'inject: context must be defined';
	        }
	        // Search for context properties to inject
	        var properties = restApi.match(/(:\w+)/g);
	        angular.forEach(properties, function (property) {
	            var contextVar = property.substring(1);
	            var contextValue = context[contextVar];
	            if (contextValue !== undefined) {
	                contextValue = encodeURIComponent(contextValue);
	                restApi = restApi.replace(property, contextValue);
	                _this.logger.log('Injected ' + contextValue + ' for ' + property);
	            }
	            else {
	                throw 'inject: context.' + contextVar + ' expected but undefined';
	            }
	        });
	        this.logger.log('Resulting REST API: ' + restApi);
	        return restApi;
	    };
	    return ContextService;
	}());
	exports.ContextService = ContextService;
	main_module_1.default.service('contextService', ContextService);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Provides a simple logging system with the possibility of registering log observers.
	 * In order to track the source module of message logs,
	 * a customized logger should be instanciated using the getLogger() method just after its injection.
	 *
	 * 4 different log levels are provided, via corresponding methods:
	 * - log: for debug information
	 * - info: for informative status of the application (success, ...)
	 * - warning: for non-critical errors that do not prevent normal application behavior
	 * - error: for critical errors that prevent normal application behavior
	 *
	 * Example usage:
	 * angular.module('myService', ['logger']).factory('myService', function (logger) {
	 *   logger = logger.getLogger('myService');
	 *   ...
	 *   logger.log('something happened');
	 * }
	 *
	 * If you want to disable debug logs in production, add this snippet to your app configuration:
	 * angular.module('app').config(function ($provide) {
	 *   // Disable debug logs in production version
	 *   $provide.decorator('$log', ['$delegate', function($delegate) {
	 *     if (!debug) {
	 *       $delegate.log = function() {};
	 *     }
	 *     return $delegate;
	 *   }]);
	 * });
	 *
	 * If you want additional tasks to be performed on log entry (show toast, for example),
	 * you can register observers using the addObserver() method.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	var observers = [];
	/**
	 * Logs a message from the specified source.
	 * @param {string} message The message to be logged.
	 * @param {?string=} source The source of the log.
	 * @param {function} logFunc The base log function to use.
	 * @param {'log'|'info'|'warning'|'error'} level The log level.
	 * @param {Object?} options Additional log options.
	 */
	function log(message, source, logFunc, level, options) {
	    logFunc(source ? '[' + source + ']' : '', message, '');
	    angular.forEach(observers, function (observerFunc) {
	        observerFunc(message, source, level, options);
	    });
	}
	var Logger = (function () {
	    function Logger($log, moduleName, logFunc) {
	        this.$log = $log;
	        this.moduleName = moduleName;
	        this.logFunc = logFunc;
	    }
	    Logger.prototype.log = function (message, options) {
	        this.logFunc(message, this.moduleName, this.$log.log, 'log', options);
	    };
	    Logger.prototype.info = function (message, options) {
	        this.logFunc(message, this.moduleName, this.$log.info, 'info', options);
	    };
	    Logger.prototype.warning = function (message, options) {
	        this.logFunc(message, this.moduleName, this.$log.warn, 'warning', options);
	    };
	    Logger.prototype.error = function (message, options) {
	        this.logFunc(message, this.moduleName, this.$log.error, 'error', options);
	    };
	    return Logger;
	}());
	var LoggerService = (function () {
	    LoggerService.$inject = ["$log"];
	    function LoggerService($log) {
	        this.$log = $log;
	    }
	    /**
	     * Gets a customized logger based on the given module name.
	     * @param {string} moduleName The module name.
	     * @return {Logger} A logger object.
	     */
	    LoggerService.prototype.getLogger = function (moduleName) {
	        return new Logger(this.$log, moduleName, log);
	    };
	    /**
	     * Adds a new observer function that will be called for each new log entry.
	     * These parameters are passed to the observer function, in order:
	     * - message {string} message The message to be logged.
	     * - source {?string=} source The source of the log.
	     * - level {'log'|'info'|'warning'|'error'} level The log level.
	     * - options {Object?} options Additional log options.
	     * @param {!function} observerFunc The observer function.
	     */
	    LoggerService.prototype.addObserver = function (observerFunc) {
	        observers.push(observerFunc);
	    };
	    return LoggerService;
	}());
	exports.LoggerService = LoggerService;
	main_module_1.default.service('logger', LoggerService);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * REST service: provides methods to perform REST requests.
	 */
	var RestService = (function () {
	    RestService.$inject = ["$q", "$http", "cacheService", "logger"];
	    function RestService($q, $http, cacheService, logger) {
	        this.$q = $q;
	        this.$http = $http;
	        this.cacheService = cacheService;
	        this.server = null;
	        this.baseUrl = '';
	        this.defaultConfig = {
	            headers: {
	                'content-type': 'application/json',
	                'Access-Control-Allow-Headers': 'content-type'
	            }
	        };
	        /**
	         * Defaults cache handler.
	         * This handler just return the specified cache data and does nothing.
	         * @type {Function}
	         */
	        this.cacheHandler = angular.identity;
	        this.logger = logger.getLogger('restService');
	    }
	    /**
	     * Executes a GET request.
	     * @param {!String} url URL of the REST service call.
	     * @param {?Object.<string|Object>=} params Map of strings or objects which will be turned to ?key1=value1&key2=value2 after the url. If the value is not a string, it will be
	     *   JSONified.
	     * @param {?boolean|'force'} cache If set to true, the first request will be cached, and next request with cache set to true will use the cached response.
	     *   If set to 'force', the request will always be made and cache will be updated.
	     *   If set to false or omitted, no cache will be set or used.
	     * @param {?Object=} options Additional options for request/error handlers.
	     * @return {Object} The promise.
	     */
	    RestService.prototype.get = function (url, params, cache, options) {
	        var _this = this;
	        var apiUrl = this.baseUrl + url;
	        var promiseBuilder = function () { return _this.$http.get(apiUrl, { params: params }); };
	        if (!cache) {
	            // Do not use cache
	            return this.createRequest(promiseBuilder, options);
	        }
	        else {
	            var cachedData = cache === 'force' ? null : this.cacheService.getCacheData(url, params);
	            if (cachedData !== null) {
	                cachedData = this.cacheHandler(cachedData);
	            }
	            if (cachedData === null) {
	                this.logger.log('GET request: ' + url);
	                // Update cache entry
	                return this.createRequest(promiseBuilder, options).then(function (response) {
	                    _this.cacheService.setCacheData(url, params, response, null);
	                    return angular.copy(response);
	                });
	            }
	            else {
	                // Use cached version
	                var deferred = this.$q.defer();
	                deferred.resolve(angular.copy(cachedData));
	                return this.errorHandler(deferred.promise, options);
	            }
	        }
	    };
	    /**
	     * Executes a PUT request.
	     * @param {!String} url URL of the REST service call.
	     * @param {String|Object} data Data to be sent as the request message data.
	     * @param {?Object=} options Additional options for request/error handlers.
	     * @return {Object} The promise.
	     */
	    RestService.prototype.put = function (url, data, options) {
	        var _this = this;
	        this.logger.log('PUT request: ' + url, null);
	        var promise = function () { return _this.$http.put(_this.baseUrl + url, data, _this.defaultConfig); };
	        return this.createRequest(promise, options);
	    };
	    /**
	     * Executes a POST request.
	     * @param {!String} url URL of the REST service call.
	     * @param {String|Object} data Data to be sent as the request message data.
	     * @param {?Object=} options Additional options for request/error handlers.
	     * @return {Object} The promise.
	     */
	    RestService.prototype.post = function (url, data, options) {
	        var _this = this;
	        this.logger.log('POST request: ' + url, null);
	        var promiseBuilder = function () { return _this.$http.post(_this.baseUrl + url, data, _this.defaultConfig); };
	        return this.createRequest(promiseBuilder, options);
	    };
	    /**
	     * Executes a DELETE request.
	     * @param {!String} url URL of the REST service call.
	     * @param {?Object=} options Additional options for request/error handlers.
	     * @return {Object} The promise.
	     */
	    RestService.prototype.delete = function (url, options) {
	        var _this = this;
	        this.logger.log('DELETE request: ' + url, null);
	        var promise = function () { return _this.$http.delete(_this.baseUrl + url, _this.defaultConfig); };
	        return this.createRequest(promise, options);
	    };
	    /**
	     * Sets the current server configuration.
	     * A server parameter must contains at least these two strings:
	     * - url: The base URL of the server
	     * - route: The base route of the REST API
	     * @param {!Object} server The server configuration.
	     */
	    RestService.prototype.setServer = function (server) {
	        this.server = server;
	        this.baseUrl = server.url + server.route;
	    };
	    /**
	     * Returns the current server configuration.
	     * @return {String} The server base URL.
	     */
	    RestService.prototype.getServer = function () {
	        return this.server;
	    };
	    /**
	     * Returns the base URI.
	     * @return {String} The computed base URI.
	     */
	    RestService.prototype.getBaseUrl = function () {
	        return this.baseUrl;
	    };
	    /**
	     * Sets a customized request handler function for all requests.
	     * The function should have the following signature, and return a promise:
	     * function requestHandler(requestBuilder, options) {
	     *   return requestBuilder();
	     * }
	     * The requestBuilder parameter is a function that returns the request promise.
	     * The options parameter is an optional object containing whatever options your handler may needs.
	     * @param {!function} requestHandlerFunc The request handler.
	     */
	    RestService.prototype.setRequestHandler = function (requestHandlerFunc) {
	        this.requestHandler = requestHandlerFunc;
	    };
	    /**
	     * Gets the current request handler function.
	     * @return {function} The request handler.
	     */
	    RestService.prototype.getRequestHandler = function () {
	        return this.requestHandler;
	    };
	    /**
	     * Sets a customized default error handler function for all requests.
	     * The function should have the following signature, and return a promise:
	     * function errorHandler(promise, options) {
	     *   return promise.catch(response, function() {
	     *      ...
	     *      return $q.reject(response);
	     *   });
	     * }
	     * The promise parameter is the request promise.
	     * The options parameter is an optional object containing whatever options your handler may needs.
	     * @param {!function} errorHandlerFunc The error handler.
	     */
	    RestService.prototype.setErrorHandler = function (errorHandlerFunc) {
	        this.errorHandler = errorHandlerFunc;
	    };
	    /**
	     * Gets the current error handler function.
	     * @return {function} The error handler.
	     */
	    RestService.prototype.getErrorHandler = function () {
	        return this.errorHandler;
	    };
	    /**
	     * Sets a customized default cache handler function for all cached requests.
	     * The function should have the following signature, and return an object:
	     * function cacheHandler(cachedData) {
	     *    return isValid(cachedData) ? cachedData : null;
	     * }
	     * This handler is only called before for requests that would return cached data otherwise.
	     * @param {!function} cacheHandlerFunc The cache handler.
	     */
	    RestService.prototype.setCacheHandler = function (cacheHandlerFunc) {
	        this.cacheHandler = cacheHandlerFunc;
	    };
	    /**
	     * Gets the current cache handler function.
	     * @return {function} The cache handler.
	     */
	    RestService.prototype.getCacheHandler = function () {
	        return this.cacheHandler;
	    };
	    /**
	     * Default request handler, that just builds the promise.
	     * @param {!function} requestBuilder A function that return the request's promise.
	     * @param {?Object=} options Options that will be passed to the request builder function.
	     * @return {Object} The promise.
	     * @type {function}
	     */
	    RestService.prototype.requestHandler = function (requestBuilder, options) {
	        // Default request handler just builds the request
	        return requestBuilder(options);
	    };
	    /**
	     * Default error handler.
	     * This handler tries to extract a description of the error and logs and error with it.
	     * @param {!Object} promise The promise to handle errors.
	     * @param {?Object=} options Additional options: if 'skipErrors' property is set to true, errors will not be handled.
	     * @return {Object} The promise.
	     */
	    RestService.prototype.errorHandler = function (promise, options) {
	        var _this = this;
	        if (!options || !options.skipErrors) {
	            promise.catch(function (response) {
	                var error;
	                if (response.status === 404) {
	                    error = 'Server unavailable or URL does not exist';
	                }
	                else if (response.data) {
	                    var message = response.data.message ? response.data.message : null;
	                    var code = response.data.error ? response.data.error : null;
	                    error = message || code || angular.toJson(response.data);
	                }
	                if (error) {
	                    _this.logger.error(error, null);
	                }
	                return _this.$q.reject(response);
	            });
	        }
	        return promise;
	    };
	    /**
	     * Creates the request.
	     * @param {!function} requestBuilder A function that return the request's promise.
	     * @param {?Object=} options Additional options for request/error handlers.
	     * @return {Object} The promise.
	     */
	    RestService.prototype.createRequest = function (requestBuilder, options) {
	        return this.errorHandler(this.requestHandler(requestBuilder, options), options);
	    };
	    return RestService;
	}());
	exports.RestService = RestService;
	main_module_1.default.service('restService', RestService);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Displays the about screen.
	 */
	var AboutController = (function () {
	    AboutController.$inject = ["logger", "config"];
	    function AboutController(logger, config) {
	        this.logger = logger.getLogger('about');
	        this.version = config.version;
	        this.logger.log('init');
	    }
	    return AboutController;
	}());
	exports.AboutController = AboutController;
	main_module_1.default.controller('aboutController', AboutController);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Displays the home screen.
	 */
	var HomeController = (function () {
	    HomeController.$inject = ["logger", "quoteService"];
	    function HomeController(logger, quoteService) {
	        var _this = this;
	        this.isLoading = true;
	        this.quote = null;
	        this.logger = logger.getLogger('home');
	        this.quoteService = quoteService;
	        this.logger.log('init');
	        this.quoteService
	            .getRandomJoke({ category: 'nerdy' })
	            .then(function (quote) {
	            _this.quote = quote;
	        })
	            .finally(function () {
	            _this.isLoading = false;
	        });
	    }
	    return HomeController;
	}());
	exports.HomeController = HomeController;
	main_module_1.default.controller('homeController', HomeController);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Loading directive: displays a loading indicator while data is being loaded.
	 *
	 * Example usage: <div ui-loading="isLoading"></div>
	 * The expected value of the directive attribute is a boolean indicating whether the content
	 * is still loading or not.
	 *
	 * Additional parameter attributes:
	 * - message: the loading message to display (none by default)
	 *
	 * Example: <div ui-loading="isLoading" message="Loading..."></div>
	 */
	var LoadingDirective = (function () {
	    function LoadingDirective() {
	        this.restrict = 'A';
	        this.template = __webpack_require__(18);
	        this.scope = {
	            message: '<',
	            isLoading: '<uiLoading'
	        };
	    }
	    return LoadingDirective;
	}());
	exports.LoadingDirective = LoadingDirective;
	main_module_1.default.directive('uiLoading', function () { return new LoadingDirective(); });


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = "<div ng-show=\"isLoading\" class=\"text-center\"><i class=\"fa fa-cog fa-spin fa-3x\"></i> <span>{{message}}</span></div>"

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var main_module_1 = __webpack_require__(2);
	/**
	 * Quote service: allows to get quote of the day.
	 */
	var QuoteService = (function () {
	    QuoteService.$inject = ["$q", "restService", "contextService"];
	    function QuoteService($q, restService, contextService) {
	        this.$q = $q;
	        this.restService = restService;
	        this.contextService = contextService;
	        this.ROUTES = {
	            randomJoke: '/jokes/random?escape=javascript&limitTo=[:category]'
	        };
	    }
	    /**
	     * Get a random Chuck Norris joke.
	     * Used context properties:
	     * - category: the joke's category: 'nerdy', 'explicit'...
	     * @param {!Object} context The context to use.
	     * @return {Object} The promise.
	     */
	    QuoteService.prototype.getRandomJoke = function (context) {
	        var _this = this;
	        return this.restService
	            .get(this.contextService.inject(this.ROUTES.randomJoke, context), null, true)
	            .then(function (response) {
	            if (response.data && response.data.value) {
	                return response.data.value.joke;
	            }
	            return _this.$q.reject();
	        })
	            .catch(function () {
	            return 'Error, could not load joke :-(';
	        });
	    };
	    return QuoteService;
	}());
	exports.QuoteService = QuoteService;
	main_module_1.default.service('quoteService', QuoteService);


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	angular.module('translations').run(['gettextCatalog', function (gettextCatalog) {
	/* jshint -W100 */
	    gettextCatalog.setStrings('en-US', {"About":"About","APP_NAME":"WM 2018","Hello world !":"Hello world !","Home":"Home","Toggle navigation":"Toggle navigation","Version":"Version"});
	/* jshint +W100 */
	}]);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	angular.module('translations').run(['gettextCatalog', function (gettextCatalog) {
	/* jshint -W100 */
	    gettextCatalog.setStrings('fr-FR', {"About":"A propos","APP_NAME":"WM 2018","Hello world !":"Bonjour le monde !","Home":"Accueil","Toggle navigation":"Basculer la navigation","Version":"Version"});
	/* jshint +W100 */
	}]);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2svYm9vdHN0cmFwIGY5YTZlMDU2YzczMTYyY2YzNmM3IiwiLi9zb3VyY2VzL21haW4vbWFpbi5jb25maWcudHMiLCIuL3NvdXJjZXMvbWFpbi9tYWluLm1vZHVsZS50cyIsIi4vc291cmNlcy9tYWluL21haW4uY29uc3RhbnRzLnRzIiwiLi9zb3VyY2VzL21haW4vbWFpbi5yb3V0ZXMudHMiLCIuL3NvdXJjZXMvbWFpbi9zaGVsbC9zaGVsbC5odG1sIiwiLi9zb3VyY2VzL21haW4vc2NyZWVucy9ob21lL2hvbWUuaHRtbCIsIi4vc291cmNlcy9tYWluL3NjcmVlbnMvYWJvdXQvYWJvdXQuaHRtbCIsIi4vc291cmNlcy9tYWluL21haW4ucnVuLnRzIiwiLi9zb3VyY2VzL21haW4vbWFpbi53cmFwcGVycy50cyIsIi4vc291cmNlcy9tYWluL3NoZWxsL3NoZWxsLmNvbnRyb2xsZXIudHMiLCIuL3NvdXJjZXMvbWFpbi9oZWxwZXJzL2NhY2hlL2NhY2hlLnNlcnZpY2UudHMiLCIuL3NvdXJjZXMvbWFpbi9oZWxwZXJzL2NvbnRleHQvY29udGV4dC5zZXJ2aWNlLnRzIiwiLi9zb3VyY2VzL21haW4vaGVscGVycy9sb2dnZXIvbG9nZ2VyLnRzIiwiLi9zb3VyY2VzL21haW4vaGVscGVycy9yZXN0L3Jlc3Quc2VydmljZS50cyIsIi4vc291cmNlcy9tYWluL3NjcmVlbnMvYWJvdXQvYWJvdXQuY29udHJvbGxlci50cyIsIi4vc291cmNlcy9tYWluL3NjcmVlbnMvaG9tZS9ob21lLmNvbnRyb2xsZXIudHMiLCIuL3NvdXJjZXMvbWFpbi91aS1jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5kaXJlY3RpdmUudHMiLCIuL3NvdXJjZXMvbWFpbi91aS1jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5odG1sIiwiLi9zb3VyY2VzL21haW4vd2ViLXNlcnZpY2VzL3F1b3RlL3F1b3RlLnNlcnZpY2UudHMiLCIuL3NvdXJjZXMvdHJhbnNsYXRpb25zL2VuLVVT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QUc7O2NBRWhCLE1BQU07YUFDTCxPQUFPOzs7S0FJZjs7QUFoQ2E7QUFrQ2IsdUJBQUksUUFBUSxnQkFBZ0I7Ozs7Ozs7QUN6QzVCO0FBQ0E7QUFDQSx5Q0FBd0MsK0lBQStJO0FBQ3ZMO0FBQ0EsRUFBQyxHOzs7Ozs7QUNKRDtBQUNBO0FBQ0EseUNBQXdDLCtKQUErSjtBQUN2TTtBQUNBLEVBQUMsRyIsImZpbGUiOiJhcHAudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmOWE2ZTA1NmM3MzE2MmNmMzZjNyIsImltcG9ydCBhcHAgZnJvbSAnbWFpbi5tb2R1bGUnO1xuaW1wb3J0IHtJQXBwbGljYXRpb25Db25maWd9IGZyb20gJ21haW4uY29uc3RhbnRzJztcbmltcG9ydCB7SUxvZ2dlcn0gZnJvbSAnaGVscGVycy9sb2dnZXIvbG9nZ2VyJztcblxuLyoqXG4gKiBDb25maWd1cmVzIHRoZSBhcHBsaWNhdGlvbiAoYmVmb3JlIHJ1bm5pbmcpLlxuICovXG5mdW5jdGlvbiBtYWluQ29uZmlnKCRwcm92aWRlOiBuZy5hdXRvLklQcm92aWRlU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgJGNvbXBpbGVQcm92aWRlcjogbmcuSUNvbXBpbGVQcm92aWRlcixcbiAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uUHJvdmlkZXI6IG5nLklMb2NhdGlvblByb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgICAkcVByb3ZpZGVyOiBhbnksXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZzogSUFwcGxpY2F0aW9uQ29uZmlnKSB7XG5cbiAgLy8gRXh0ZW5kIHRoZSAkZXhjZXB0aW9uSGFuZGxlciBzZXJ2aWNlIHRvIG91dHB1dCBsb2dzLlxuICAkcHJvdmlkZS5kZWNvcmF0b3IoJyRleGNlcHRpb25IYW5kbGVyJywgKCRkZWxlZ2F0ZTogYW55LCAkaW5qZWN0b3I6IGFueSkgPT4ge1xuICAgIHJldHVybiAoZXhjZXB0aW9uOiBhbnksIGNhdXNlOiBhbnkpID0+IHtcbiAgICAgICRkZWxlZ2F0ZShleGNlcHRpb24sIGNhdXNlKTtcblxuICAgICAgbGV0IGxvZ2dlcjogSUxvZ2dlciA9ICRpbmplY3Rvci5nZXQoJ2xvZ2dlcicpLmdldExvZ2dlcignZXhjZXB0aW9uSGFuZGxlcicpO1xuICAgICAgbG9nZ2VyLmVycm9yKGV4Y2VwdGlvbiArIChjYXVzZSA/ICcgKCcgKyBjYXVzZSArICcpJyA6ICcnKSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gRGlzYWJsZSBkZWJ1ZyBsb2dzIGluIHByb2R1Y3Rpb24gdmVyc2lvblxuICAkcHJvdmlkZS5kZWNvcmF0b3IoJyRsb2cnLCAoJGRlbGVnYXRlOiBhbnkpID0+IHtcbiAgICBpZiAoIWNvbmZpZy5lbnZpcm9ubWVudC5kZWJ1Zykge1xuICAgICAgJGRlbGVnYXRlLmxvZyA9IGFuZ3VsYXIubm9vcDtcbiAgICAgICRkZWxlZ2F0ZS5kZWJ1ZyA9IGFuZ3VsYXIubm9vcDtcbiAgICB9XG4gICAgcmV0dXJuICRkZWxlZ2F0ZTtcbiAgfSk7XG5cbiAgLy8gRGlzYWJsZSBhbmd1bGFyIGRlYnVnIGluZm8gaW4gcHJvZHVjdGlvbiB2ZXJzaW9uXG4gICRjb21waWxlUHJvdmlkZXIuZGVidWdJbmZvRW5hYmxlZChjb25maWcuZW52aXJvbm1lbnQuZGVidWcpO1xuXG4gIC8vIFVzZSBubyBoYXNoIHByZWZpeCBmb3Igcm91dGluZ1xuICAkbG9jYXRpb25Qcm92aWRlci5oYXNoUHJlZml4KCcnKTtcblxuICAvLyBEaXNhYmxlIGV4Y2VwdGlvbiBvbiB1bmhhbmRsZWQgcmVqZWN0aW9ucyAod2UgaGF2ZSBvdXIgb3duIGhhbmRsZXIpXG4gICRxUHJvdmlkZXIuZXJyb3JPblVuaGFuZGxlZFJlamVjdGlvbnMoZmFsc2UpO1xufVxuXG5hcHAuY29uZmlnKG1haW5Db25maWcpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL21haW4vbWFpbi5jb25maWcudHMiLCIndXNlIHN0cmljdCc7XG5cbi8vIFRyYW5zbGF0aW9ucyBhcmUgaW5qZWN0ZWQgYXQgYnVpbGQgcGhhc2VcbmFuZ3VsYXIubW9kdWxlKCd0cmFuc2xhdGlvbnMnLCBbXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXG4gICd0cmFuc2xhdGlvbnMnLFxuICAnZ2V0dGV4dCcsXG4gICduZ0FuaW1hdGUnLFxuICAnbmdTYW5pdGl6ZScsXG4gICd1aS5yb3V0ZXInLFxuICAndWkuYm9vdHN0cmFwJ1xuXSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zb3VyY2VzL21haW4vbWFpbi5tb2R1bGUudHMiLCJpbXBvcnQgYXBwIGZyb20gJ21haW4ubW9kdWxlJztcbmltcG9ydCB7SVNlcnZlckNvbmZpZ30gZnJvbSAnaGVscGVycy9yZXN0L3Jlc3Quc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcGxpY2F0aW9uQ29uZmlnIHtcbiAgdmVyc2lvbjogc3RyaW5nO1xuICBlbnZpcm9ubWVudDogSUFwcGxpY2F0aW9uRW52aXJvbm1lbnQ7XG4gIHN1cHBvcnRlZExhbmd1YWdlczogQXJyYXk8c3RyaW5nPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQXBwbGljYXRpb25FbnZpcm9ubWVudCB7XG4gIGRlYnVnOiBib29sZWFuO1xuICBzZXJ2ZXI6IElTZXJ2ZXJDb25maWc7XG59XG5cbi8vIERvIG5vdCByZW1vdmUgdGhlIGNvbW1lbnRzIGJlbG93LCBvciBjaGFuZ2UgdGhlIHZhbHVlcy4gSXQncyB0aGUgbWFya2VycyB1c2VkIGJ5IGd1bHAgYnVpbGQgdGFzayB0byBjaGFuZ2UgdGhlXG4vLyB2YWx1ZSBvZiB0aGUgY29uZmlnIGNvbnN0YW50IHdoZW4gYnVpbGRpbmcgdGhlIGFwcGxpY2F0aW9uLCB3aGlsZSByZW1vdmluZyB0aGUgY29kZSBiZWxvdyBmb3IgYWxsIGVudmlyb25tZW50cy5cbi8vIHJlcGxhY2U6ZW52aXJvbm1lbnRcbmxldCBlbnZpcm9ubWVudCA9IHtcbiAgbG9jYWw6IHtcbiAgICBkZWJ1ZzogdHJ1ZSxcblxuICAgIC8vIFJFU1QgYmFja2VuZCBjb25maWd1cmF0aW9uLCB1c2VkIGZvciBhbGwgd2ViIHNlcnZpY2VzIHVzaW5nIHJlc3RTZXJ2aWNlXG4gICAgc2VydmVyOiB7XG4gICAgICB1cmw6ICcnLFxuICAgICAgcm91dGU6ICdhcGknXG4gICAgfVxuICB9LFxuICBwcm9kdWN0aW9uOiB7XG4gICAgZGVidWc6IGZhbHNlLFxuICAgIHNlcnZlcjoge1xuICAgICAgdXJsOiAnJyxcbiAgICAgIHJvdXRlOiAnYXBpJ1xuICAgIH1cbiAgfVxufTtcbi8vIGVuZHJlcGxhY2VcblxuLyoqXG4gKiBEZWZpbmVzIGFwcC1sZXZlbCBjb25maWd1cmF0aW9uLlxuICovXG5sZXQgY29uZmlnOiBJQXBwbGljYXRpb25Db25maWcgPSB7XG5cbiAgLy8gRG8gbm90IHJlbW92ZSB0aGUgY29tbWVudHMgYmVsb3csIG9yIGNoYW5nZSB0aGUgdmFsdWVzLiBJdCdzIHRoZSBtYXJrZXJzIHVzZWQgYnkgZ3VscCBidWlsZCB0YXNrIHRvIGluamVjdCBhcHBcbiAgLy8gdmVyc2lvbiBmcm9tIHBhY2thZ2UuanNvbiBhbmQgZW52aXJvbm1lbnQgdmFsdWVzLlxuICAvLyByZXBsYWNlOmNvbnN0YW50XG4gIHZlcnNpb246ICdkZXYnLFxuICBlbnZpcm9ubWVudDogZW52aXJvbm1lbnQubG9jYWwsXG4gIC8vIGVuZHJlcGxhY2VcblxuICAvLyBTdXBwb3J0ZWQgbGFuZ3VhZ2VzXG4gIHN1cHBvcnRlZExhbmd1YWdlczogW1xuICAgICdlbi1VUycsXG4gICAgJ2ZyLUZSJ1xuICBdXG5cbn07XG5cbmFwcC5jb25zdGFudCgnY29uZmlnJywgY29uZmlnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NvdXJjZXMvbWFpbi9tYWluLmNvbnN0YW50cy50cyIsImltcG9ydCBhcHAgZnJvbSAnbWFpbi5tb2R1bGUnO1xuXG4vKipcbiAqIENvbmZpZ3VyZXMgdGhlIGFwcGxpY2F0aW9uIHJvdXRlcy5cbiAqL1xuZnVuY3Rpb24gcm91dGVDb25maWcoJHN0YXRlUHJvdmlkZXI6IGFuZ3VsYXIudWkuSVN0YXRlUHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXI6IGFuZ3VsYXIudWkuSVVybFJvdXRlclByb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgICAgZ2V0dGV4dDogYW5ndWxhci5nZXR0ZXh0LmdldHRleHRGdW5jdGlvbikge1xuXG4gIC8vIFJvdXRlcyBjb25maWd1cmF0aW9uXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcblxuICAkc3RhdGVQcm92aWRlclxuICAgIC5zdGF0ZSgnYXBwJywge1xuICAgICAgdGVtcGxhdGU6IDxzdHJpbmc+cmVxdWlyZSgnc2hlbGwvc2hlbGwuaHRtbCcpLFxuICAgICAgY29udHJvbGxlcjogJ3NoZWxsQ29udHJvbGxlciBhcyBzaGVsbCdcbiAgICB9KVxuICAgIC5zdGF0ZSgnYXBwLmhvbWUnLCB7XG4gICAgICB1cmw6ICcvJyxcbiAgICAgIHRlbXBsYXRlOiA8c3RyaW5nPnJlcXVpcmUoJ3NjcmVlbnMvaG9tZS9ob21lLmh0bWwnKSxcbiAgICAgIGNvbnRyb2xsZXI6ICdob21lQ29udHJvbGxlciBhcyB2bScsXG4gICAgICBkYXRhOiB7dGl0bGU6IGdldHRleHQoJ0hvbWUnKX1cbiAgICB9KVxuICAgIC5zdGF0ZSgnYXBwLmFib3V0Jywge1xuICAgICAgdXJsOiAnL2Fib3V0JyxcbiAgICAgIHRlbXBsYXRlOiA8c3RyaW5nPnJlcXVpcmUoJ3NjcmVlbnMvYWJvdXQvYWJvdXQuaHRtbCcpLFxuICAgICAgY29udHJvbGxlcjogJ2Fib3V0Q29udHJvbGxlciBhcyB2bScsXG4gICAgICBkYXRhOiB7dGl0bGU6IGdldHRleHQoJ0Fib3V0Jyl9XG4gICAgfSk7XG5cbn1cblxuYXBwLmNvbmZpZyhyb3V0ZUNvbmZpZyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL21haW4vbWFpbi5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNlY3Rpb24gaWQ9XFxcInNoZWxsXFxcIiBjbGFzcz1cXFwic2hlbGxcXFwiPjwhLS1IZWFkZXItLT48aGVhZGVyPjxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItc3RhdGljLXRvcCBuYXZiYXItaW52ZXJzZVxcXCI+PGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj48ZGl2IGNsYXNzPVxcXCJuYXZiYXItaGVhZGVyXFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIm5hdmJhci10b2dnbGVcXFwiIG5nLWNsaWNrPVxcXCJzaGVsbC50b2dnbGVNZW51KClcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcInt7IXNoZWxsLm1lbnVIaWRkZW59fVxcXCI+PHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiIHRyYW5zbGF0ZT5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj48L2J1dHRvbj4gPGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCIgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItc3RhcnRlci1raXRcXFwiPjxzcGFuIHRyYW5zbGF0ZT5BUFBfTkFNRTwvc3Bhbj48L2E+PC9kaXY+PGRpdiBjbGFzcz1cXFwibmF2YmFyLWNvbGxhcHNlXFxcIiB1aWItY29sbGFwc2U9XFxcInNoZWxsLm1lbnVIaWRkZW5cXFwiPjx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXZcXFwiPjxsaSBuZy1jbGFzcz1cXFwieyBhY3RpdmU6IHNoZWxsLnN0YXRlQ29udGFpbnMoJ2FwcC5ob21lJykgfVxcXCI+PGEgY2xhc3M9XFxcIm5hdi1pdGVtIHRleHQtdXBwZXJjYXNlXFxcIiB1aS1zcmVmPVxcXCJhcHAuaG9tZVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWhvbWVcXFwiPjwvaT4gPHNwYW4gdHJhbnNsYXRlPkhvbWU8L3NwYW4+PC9hPjwvbGk+PGxpIG5nLWNsYXNzPVxcXCJ7IGFjdGl2ZTogc2hlbGwuc3RhdGVDb250YWlucygnYXBwLmFib3V0JykgfVxcXCI+PGEgY2xhc3M9XFxcIm5hdi1pdGVtIHRleHQtdXBwZXJjYXNlXFxcIiB1aS1zcmVmPVxcXCJhcHAuYWJvdXRcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1xdWVzdGlvbi1jaXJjbGVcXFwiPjwvaT4gPHNwYW4gdHJhbnNsYXRlPkFib3V0PC9zcGFuPjwvYT48L2xpPjwvdWw+PGRpdiBjbGFzcz1cXFwibmF2YmFyLWZvcm0gbmF2YmFyLXJpZ2h0XFxcIj48ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiB1aWItZHJvcGRvd24+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHVpYi1kcm9wZG93bi10b2dnbGUgYXJpYS1oYXNwb3B1cD1cXFwidHJ1ZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPnt7c2hlbGwuY3VycmVudExvY2FsZS5pZH19IDxzcGFuIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9zcGFuPjwvYnV0dG9uPjx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+PGxpIG5nLXJlcGVhdD1cXFwibGFuZ3VhZ2UgaW4gOjpzaGVsbC5sYW5ndWFnZXNcXFwiPjxhIGhyZWYgbmctY2xpY2s9XFxcInNldExhbmd1YWdlKGxhbmd1YWdlKVxcXCI+e3tsYW5ndWFnZX19PC9hPjwvbGk+PC91bD48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L25hdj48L2hlYWRlcj48IS0tVmlldyBjb250ZW50LS0+PGRpdiB1aS12aWV3PjwvZGl2Pjwvc2VjdGlvbj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy9tYWluL3NoZWxsL3NoZWxsLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzZWN0aW9uIGlkPVxcXCJob21lLXNjcmVlblxcXCIgY2xhc3M9XFxcImhvbWUtc2NyZWVuIGNvbnRhaW5lci1mbHVpZFxcXCI+PGRpdiBjbGFzcz1cXFwianVtYm90cm9uIHRleHQtY2VudGVyXFxcIj48aDE+PGltZyBjbGFzcz1cXFwibG9nb1xcXCIgc3JjPVxcXCJpbWFnZXMvYW5ndWxhcmpzLWxvZ28ucG5nXFxcIiBhbHQ9XFxcImFuZ3VsYXJqcyBsb2dvXFxcIj4gPHNwYW4gdHJhbnNsYXRlPkhlbGxvIHdvcmxkICE8L3NwYW4+PC9oMT48ZGl2IHVpLWxvYWRpbmc9XFxcInZtLmlzTG9hZGluZ1xcXCI+PC9kaXY+PHA+PGVtIGNsYXNzPVxcXCJxdW90ZVxcXCI+e3t2bS5xdW90ZX19PC9lbT48L3A+PC9kaXY+PC9zZWN0aW9uPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL21haW4vc2NyZWVucy9ob21lL2hvbWUuaHRtbFxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNlY3Rpb24gaWQ9XFxcImFib3V0LXNjcmVlblxcXCIgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+PGRpdiBjbGFzcz1cXFwianVtYm90cm9uIHRleHQtY2VudGVyXFxcIj48aDEgdHJhbnNsYXRlPkFQUF9OQU1FPC9oMT48cD48aSBjbGFzcz1cXFwiZmEgZmEtYm9va21hcmstb1xcXCI+PC9pPiA8c3BhbiB0cmFuc2xhdGU+VmVyc2lvbjwvc3Bhbj4ge3t2bS52ZXJzaW9ufX08L3A+PC9kaXY+PC9zZWN0aW9uPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL21haW4vc2NyZWVucy9hYm91dC9hYm91dC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBhcHAgZnJvbSAnbWFpbi5tb2R1bGUnO1xuaW1wb3J0IHtJQXBwbGljYXRpb25Db25maWd9IGZyb20gJ21haW4uY29uc3RhbnRzJztcbmltcG9ydCB7UmVzdFNlcnZpY2V9IGZyb20gJ2hlbHBlcnMvcmVzdC9yZXN0LnNlcnZpY2UnO1xuXG4vKipcbiAqIEVudHJ5IHBvaW50IG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAqIEluaXRpYWxpemVzIGFwcGxpY2F0aW9uIGFuZCByb290IGNvbnRyb2xsZXIuXG4gKi9cbmZ1bmN0aW9uIG1haW4oJHdpbmRvdzogbmcuSVdpbmRvd1NlcnZpY2UsXG4gICAgICAgICAgICAgICRsb2NhbGU6IG5nLklMb2NhbGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAkcm9vdFNjb3BlOiBhbnksXG4gICAgICAgICAgICAgICRzdGF0ZTogYW5ndWxhci51aS5JU3RhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBnZXR0ZXh0Q2F0YWxvZzogYW5ndWxhci5nZXR0ZXh0LmdldHRleHRDYXRhbG9nLFxuICAgICAgICAgICAgICBfOiBfLkxvRGFzaFN0YXRpYyxcbiAgICAgICAgICAgICAgY29uZmlnOiBJQXBwbGljYXRpb25Db25maWcsXG4gICAgICAgICAgICAgIHJlc3RTZXJ2aWNlOiBSZXN0U2VydmljZSkge1xuXG4gIC8qXG4gICAqIFJvb3QgdmlldyBtb2RlbFxuICAgKi9cblxuICBsZXQgdm0gPSAkcm9vdFNjb3BlO1xuXG4gIHZtLnBhZ2VUaXRsZSA9ICcnO1xuXG4gIC8qKlxuICAgKiBVdGlsaXR5IG1ldGhvZCB0byBzZXQgdGhlIGxhbmd1YWdlIGluIHRoZSB0b29scyByZXF1aXJpbmcgaXQuXG4gICAqIFRoZSBjdXJyZW50IGxhbmd1YWdlIGlzIHNhdmVkIHRvIHRoZSBsb2NhbCBzdG9yYWdlLlxuICAgKiBJZiBubyBwYXJhbWV0ZXIgaXMgc3BlY2lmaWVkLCB0aGUgbGFuZ3VhZ2UgaXMgbG9hZGVkIGZyb20gbG9jYWwgc3RvcmFnZSAoaWYgcG9zc2libGUpLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IGxhbmd1YWdlIFRoZSBJRVRGIGxhbmd1YWdlIHRhZy5cbiAgICovXG4gIHZtLnNldExhbmd1YWdlID0gZnVuY3Rpb24obGFuZ3VhZ2U/OiBzdHJpbmcpIHtcbiAgICBsYW5ndWFnZSA9IGxhbmd1YWdlIHx8ICR3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmd1YWdlJyk7XG4gICAgbGV0IGlzU3VwcG9ydGVkTGFuZ3VhZ2UgPSBfLmluY2x1ZGVzKGNvbmZpZy5zdXBwb3J0ZWRMYW5ndWFnZXMsIGxhbmd1YWdlKTtcblxuICAgIC8vIEZhbGxiYWNrIGlmIGxhbmd1YWdlIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICBpZiAoIWlzU3VwcG9ydGVkTGFuZ3VhZ2UpIHtcbiAgICAgIGxhbmd1YWdlID0gJ2VuLVVTJztcbiAgICB9XG5cbiAgICAvLyBDb25maWd1cmUgdHJhbnNsYXRpb24gd2l0aCBnZXR0ZXh0XG4gICAgZ2V0dGV4dENhdGFsb2cuc2V0Q3VycmVudExhbmd1YWdlKGxhbmd1YWdlKTtcbiAgICAkbG9jYWxlLmlkID0gbGFuZ3VhZ2U7XG4gICAgJHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZ3VhZ2UnLCBsYW5ndWFnZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGl0bGUgb24gdmlldyBjaGFuZ2UuXG4gICAqL1xuICB2bS4kb24oJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCAoZXZlbnQ6IGFueSwgdG9TdGF0ZTogYW5ndWxhci51aS5JU3RhdGUpID0+IHtcbiAgICB1cGRhdGVUaXRsZSh0b1N0YXRlLmRhdGEgPyB0b1N0YXRlLmRhdGEudGl0bGUgOiBudWxsKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGl0bGUgb24gbGFuZ3VhZ2UgY2hhbmdlLlxuICAgKi9cbiAgdm0uJG9uKCdnZXR0ZXh0TGFuZ3VhZ2VDaGFuZ2VkJywgKCkgPT4ge1xuICAgIHVwZGF0ZVRpdGxlKCRzdGF0ZS5jdXJyZW50LmRhdGEgPyAkc3RhdGUuY3VycmVudC5kYXRhLnRpdGxlIDogbnVsbCk7XG4gIH0pO1xuXG4gIGluaXQoKTtcblxuICAvKlxuICAgKiBJbnRlcm5hbFxuICAgKi9cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHJvb3QgY29udHJvbGxlci5cbiAgICovXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgLy8gRW5hYmxlIGRlYnVnIG1vZGUgZm9yIHRyYW5zbGF0aW9uc1xuICAgIGdldHRleHRDYXRhbG9nLmRlYnVnID0gY29uZmlnLmVudmlyb25tZW50LmRlYnVnO1xuXG4gICAgdm0uc2V0TGFuZ3VhZ2UoKTtcblxuICAgIC8vIFNldCBSRVNUIHNlcnZlciBjb25maWd1cmF0aW9uXG4gICAgcmVzdFNlcnZpY2Uuc2V0U2VydmVyKGNvbmZpZy5lbnZpcm9ubWVudC5zZXJ2ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHRpdGxlLlxuICAgKiBAcGFyYW0gez9zdHJpbmc9fSBzdGF0ZVRpdGxlIFRpdGxlIG9mIGN1cnJlbnQgc3RhdGUsIHRvIGJlIHRyYW5zbGF0ZWQuXG4gICAqL1xuICBmdW5jdGlvbiB1cGRhdGVUaXRsZShzdGF0ZVRpdGxlPzogc3RyaW5nKSB7XG4gICAgdm0ucGFnZVRpdGxlID0gZ2V0dGV4dENhdGFsb2cuZ2V0U3RyaW5nKCdBUFBfTkFNRScpO1xuXG4gICAgaWYgKHN0YXRlVGl0bGUpIHtcbiAgICAgIHZtLnBhZ2VUaXRsZSArPSAnIHwgJyArIGdldHRleHRDYXRhbG9nLmdldFN0cmluZyhzdGF0ZVRpdGxlKTtcbiAgICB9XG4gIH1cblxufVxuXG5hcHAucnVuKG1haW4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9tYWluL21haW4ucnVuLnRzIiwiaW1wb3J0IGFwcCBmcm9tICdtYWluLm1vZHVsZSc7XG5cbi8qKlxuICogV3JhcHMgZXh0ZXJuYWwgZ2xvYmFsIGxpYnJhcmllcyBpbnRvIEFuZ3VsYXJKUyBpbmplY3Rpb24gc3lzdGVtLlxuICogZ2xvYmFsIHdpbmRvdzogZmFsc2VcbiAqL1xuYXBwLmNvbnN0YW50KCdfJywgXyk7IC8vIExvZGFzaFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc291cmNlcy9tYWluL21haW4ud3JhcHBlcnMudHMiLCJpbXBvcnQgYXBwIGZyb20gJ21haW4ubW9kdWxlJztcbmltcG9ydCB7SUFwcGxpY2F0aW9uQ29uZmlnfSBmcm9tICdtYWluLmNvbnN0YW50cyc7XG5pbXBvcnQge0lMb2dnZXIsIExvZ2dlclNlcnZpY2V9IGZyb20gJ2hlbHBlcnMvbG9nZ2VyL2xvZ2dlcic7XG5cbi8qKlxuICogRGlzcGxheXMgdGhlIFNQQSBzaGVsbC5cbiAqIFRoZSBzaGVsbCBjb250YWlucyB0aGUgc2hhcmVkIHBhcnRzIG9mIHRoZSBhcHBsaWNhdGlvbjogaGVhZGVyLCBmb290ZXIsIG5hdmlnYXRpb24uLi5cbiAqL1xuZXhwb3J0IGNsYXNzIFNoZWxsQ29udHJvbGxlciB7XG5cbiAgY3VycmVudExvY2FsZTogbmcuSUxvY2FsZVNlcnZpY2U7XG4gIGxhbmd1YWdlczogc3RyaW5nW107XG4gIG1lbnVIaWRkZW46IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBsb2dnZXI6IElMb2dnZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSAkc3RhdGU6IG5nLnVpLklTdGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgICRsb2NhbGU6IG5nLklMb2NhbGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF86IF8uTG9EYXNoU3RhdGljLFxuICAgICAgICAgICAgICBjb25maWc6IElBcHBsaWNhdGlvbkNvbmZpZyxcbiAgICAgICAgICAgICAgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLmN1cnJlbnRMb2NhbGUgPSAkbG9jYWxlO1xuICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyLmdldExvZ2dlcignc2hlbGwnKTtcbiAgICB0aGlzLmxhbmd1YWdlcyA9IGNvbmZpZy5zdXBwb3J0ZWRMYW5ndWFnZXM7XG4gICAgdGhpcy5tZW51SGlkZGVuID0gdHJ1ZTtcblxuICAgIHRoaXMubG9nZ2VyLmxvZygnaW5pdCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgbmF2aWdhdGlvbiBtZW51IHZpc2liaWxpdHkgb24gbW9iaWxlIHBsYXRmb3Jtcy5cbiAgICovXG4gIHRvZ2dsZU1lbnUoKSB7XG4gICAgdGhpcy5tZW51SGlkZGVuID0gIXRoaXMubWVudUhpZGRlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHNwZWNpZmllZCBuYW1lIGlzIGNvbnRhaW5lZCBpbiB0aGUgY3VycmVudCBuYXZpZ2F0aW9uIHN0YXRlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgc3RhdGUgbmFtZSB0byBjaGVjay5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIG5hbWUgaXMgY29udGFpbmVkIGluIHRoZSBjdXJyZW50IG5hdmlnYXRpb24gc3RhdGUuXG4gICAqL1xuICBzdGF0ZUNvbnRhaW5zKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl8uc3RhcnRzV2l0aCh0aGlzLiRzdGF0ZS5jdXJyZW50Lm5hbWUsIG5hbWUpO1xuICB9XG5cbn1cblxuYXBwLmNvbnRyb2xsZXIoJ3NoZWxsQ29udHJvbGxlcicsIFNoZWxsQ29udHJvbGxlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL21haW4vc2hlbGwvc2hlbGwuY29udHJvbGxlci50cyIsImltcG9ydCBhcHAgZnJvbSAnbWFpbi5tb2R1bGUnO1xuaW1wb3J0IHtJTG9nZ2VyLCBMb2dnZXJTZXJ2aWNlfSBmcm9tICdoZWxwZXJzL2xvZ2dlci9sb2dnZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDYWNoZURhdGEge1xuICBkYXRlOiBEYXRlO1xuICBkYXRhOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhY2hlIHtcbiAgW25hbWU6IHN0cmluZ106IElDYWNoZURhdGE7XG59XG5cbi8qKlxuICogQ2FjaGUgc2VydmljZTogbWFuYWdlcyBjYWNoZWQgZGF0YSBmb3IgR0VUIHJlcXVlc3RzLlxuICogQnkgZGVmYXVsdCwgdGhlIGNhY2hlIGlzIG9ubHkgcGVyc2lzdGVkIGluIG1lbW9yeSwgYnV0IHlvdSBjYW4gY2hhbmdlIHRoaXMgYmVoYXZpb3IgdXNpbmcgdGhlIHNldFBlcnNpc3RlbmNlKClcbiAqIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGNsYXNzIENhY2hlU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBsb2dnZXI6IElMb2dnZXI7XG4gIHByaXZhdGUgY2FjaGVkRGF0YTogSUNhY2hlID0ge307XG4gIHByaXZhdGUgc3RvcmFnZTogYW55ID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlICR3aW5kb3c6IG5nLklXaW5kb3dTZXJ2aWNlLFxuICAgICAgICAgICAgICBsb2dnZXI6IExvZ2dlclNlcnZpY2UpIHtcblxuICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyLmdldExvZ2dlcignY2FjaGVTZXJ2aWNlJyk7XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBzZXJ2aWNlLlxuICAgICAqL1xuICAgIHRoaXMubG9hZENhY2hlRGF0YSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGNhY2hlIGRhdGEgZm9yIHRoZSBzcGVjaWZpZWQgcmVxdWVzdC5cbiAgICogQHBhcmFtIHshc3RyaW5nfSB1cmwgVVJMIG9mIHRoZSBSRVNUIHNlcnZpY2UgY2FsbC5cbiAgICogQHBhcmFtIHttYXA9fSBwYXJhbXMgTWFwIG9mIHN0cmluZ3Mgb3Igb2JqZWN0cyB3aGljaCB3aWxsIGJlIHR1cm5lZCB0byA/a2V5MT12YWx1ZTEma2V5Mj12YWx1ZTIgYWZ0ZXIgdGhlIHVybC4gSWYgdGhlIHZhbHVlIGlzIG5vdCBhIHN0cmluZywgaXQgd2lsbCBiZVxuICAgKiAgIEpTT05pZmllZC5cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIHJlY2VpdmVkIGRhdGEuXG4gICAqIEBwYXJhbSB7RGF0ZT19IGRhdGUgVGhlIGNhY2hlIGRhdGUsIG5vdyBkYXRlIGlzIHVzZWQgaWYgbm90IHNwZWNpZmllZC5cbiAgICovXG4gIHNldENhY2hlRGF0YSh1cmw6IHN0cmluZywgcGFyYW1zOiBhbnksIGRhdGE6IGFueSwgZGF0ZT86IERhdGUpOiB2b2lkIHtcbiAgICBsZXQgY2FjaGVLZXkgPSB0aGlzLmdldENhY2hlS2V5KHVybCwgcGFyYW1zKTtcblxuICAgIHRoaXMuY2FjaGVkRGF0YVtjYWNoZUtleV0gPSB7XG4gICAgICBkYXRlOiBkYXRlIHx8IG5ldyBEYXRlKCksXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfTtcblxuICAgIHRoaXMubG9nZ2VyLmxvZygnQ2FjaGUgc2V0IGZvciBrZXk6IFwiJyArIGNhY2hlS2V5ICsgJ1wiJyk7XG5cbiAgICB0aGlzLnNhdmVDYWNoZURhdGEoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjYWNoZWQgZGF0YSAoaWYgcG9zc2libGUpIGZvciB0aGUgc3BlY2lmaWVkIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7IXN0cmluZ30gdXJsIFVSTCBvZiB0aGUgUkVTVCBzZXJ2aWNlIGNhbGwuXG4gICAqIEBwYXJhbSB7P21hcD19IHBhcmFtcyBNYXAgb2Ygc3RyaW5ncyBvciBvYmplY3RzIHdoaWNoIHdpbGwgYmUgdHVybmVkIHRvID9rZXkxPXZhbHVlMSZrZXkyPXZhbHVlMiBhZnRlciB0aGUgdXJsLiBJZiB0aGUgdmFsdWUgaXMgbm90IGEgc3RyaW5nLCBpdCB3aWxsIGJlXG4gICAqICAgSlNPTmlmaWVkLlxuICAgKiBAcmV0dXJuIHs/T2JqZWN0fSBUaGUgY2FjaGVkIGRhdGEgb3IgbnVsbCBpZiBubyBjYWNoZWQgZGF0YSBleGlzdHMgZm9yIHRoaXMgcmVxdWVzdC5cbiAgICovXG4gIGdldENhY2hlRGF0YSh1cmw6IHN0cmluZywgcGFyYW1zPzogYW55KTogYW55IHtcbiAgICBsZXQgY2FjaGVLZXkgPSB0aGlzLmdldENhY2hlS2V5KHVybCwgcGFyYW1zKTtcbiAgICBsZXQgY2FjaGVFbnRyeSA9IHRoaXMuY2FjaGVkRGF0YVtjYWNoZUtleV07XG5cbiAgICBpZiAoY2FjaGVFbnRyeSkge1xuICAgICAgdGhpcy5sb2dnZXIubG9nKCdDYWNoZSBoaXQgZm9yIGtleTogXCInICsgY2FjaGVLZXkgKyAnXCInKTtcbiAgICAgIHJldHVybiBjYWNoZUVudHJ5LmRhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY2FjaGVkIGRhdGEgZGF0ZSAoaWYgcG9zc2libGUpIGZvciB0aGUgc3BlY2lmaWVkIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7IXN0cmluZ30gdXJsIFVSTCBvZiB0aGUgUkVTVCBzZXJ2aWNlIGNhbGwuXG4gICAqIEBwYXJhbSB7P21hcD19IHBhcmFtcyBNYXAgb2Ygc3RyaW5ncyBvciBvYmplY3RzIHdoaWNoIHdpbGwgYmUgdHVybmVkIHRvID9rZXkxPXZhbHVlMSZrZXkyPXZhbHVlMiBhZnRlciB0aGUgdXJsLiBJZiB0aGUgdmFsdWUgaXMgbm90IGEgc3RyaW5nLCBpdCB3aWxsIGJlXG4gICAqICAgSlNPTmlmaWVkLlxuICAgKiBAcmV0dXJuIHs/T2JqZWN0fSBUaGUgY2FjaGVkIGRhdGEgZGF0ZSBvciBudWxsIGlmIG5vIGNhY2hlZCBkYXRhIGV4aXN0cyBmb3IgdGhpcyByZXF1ZXN0LlxuICAgKi9cbiAgZ2V0Q2FjaGVEYXRlKHVybDogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBEYXRlIHtcbiAgICBsZXQgY2FjaGVLZXkgPSB0aGlzLmdldENhY2hlS2V5KHVybCwgcGFyYW1zKTtcbiAgICBsZXQgY2FjaGVFbnRyeSA9IHRoaXMuY2FjaGVkRGF0YVtjYWNoZUtleV07XG4gICAgcmV0dXJuIGNhY2hlRW50cnkgPyBjYWNoZUVudHJ5LmRhdGUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyB0aGUgY2FjaGVkIGRhdGEgKGlmIGV4aXN0cykgZm9yIHRoZSBzcGVjaWZpZWQgcmVxdWVzdC5cbiAgICogQHBhcmFtIHshc3RyaW5nfSB1cmwgVVJMIG9mIHRoZSBSRVNUIHNlcnZpY2UgY2FsbC5cbiAgICogQHBhcmFtIHs/bWFwPX0gcGFyYW1zIE1hcCBvZiBzdHJpbmdzIG9yIG9iamVjdHMgd2hpY2ggd2lsbCBiZSB0dXJuZWQgdG8gP2tleTE9dmFsdWUxJmtleTI9dmFsdWUyIGFmdGVyIHRoZSB1cmwuIElmIHRoZSB2YWx1ZSBpcyBub3QgYSBzdHJpbmcsIGl0IHdpbGwgYmVcbiAgICogICBKU09OaWZpZWQuXG4gICAqL1xuICBjbGVhckNhY2hlRGF0YSh1cmw6IHN0cmluZywgcGFyYW1zPzogYW55KTogdm9pZCB7XG4gICAgbGV0IGNhY2hlS2V5ID0gdGhpcy5nZXRDYWNoZUtleSh1cmwsIHBhcmFtcyk7XG4gICAgdGhpcy5jYWNoZWREYXRhW2NhY2hlS2V5XSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvZ2dlci5sb2coJ0NhY2hlIGNsZWFyZWQgZm9yIGtleTogXCInICsgY2FjaGVLZXkgKyAnXCInKTtcbiAgICB0aGlzLnNhdmVDYWNoZURhdGEoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbnMgY2FjaGUgZW50cmllcyBvbGRlciB0aGFuIHRoZSBzcGVjaWZpZWQgZGF0ZS5cbiAgICogQHBhcmFtIHtkYXRlPX0gZXhwaXJhdGlvbkRhdGUgVGhlIGNhY2hlIGV4cGlyYXRpb24gZGF0ZS4gSWYgbm8gZGF0ZSBpcyBzcGVjaWZpZWQsIGFsbCBjYWNoZSBpcyBjbGVhcmVkLlxuICAgKi9cbiAgY2xlYW5DYWNoZShleHBpcmF0aW9uRGF0ZT86IERhdGUpOiB2b2lkIHtcbiAgICBpZiAoZXhwaXJhdGlvbkRhdGUpIHtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCh0aGlzLmNhY2hlZERhdGEsICh2YWx1ZTogYW55LCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoZXhwaXJhdGlvbkRhdGUgPj0gdmFsdWUuZGF0ZSkge1xuICAgICAgICAgIHRoaXMuY2FjaGVkRGF0YVtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYWNoZWREYXRhID0ge307XG4gICAgfVxuICAgIHRoaXMuc2F2ZUNhY2hlRGF0YSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGNhY2hlIHBlcnNpc3RlbmNlLlxuICAgKiBOb3RlIHRoYXQgY2hhbmdpbmcgdGhlIGNhY2hlIHBlcnNpc3RlbmNlIHdpbGwgYWxzbyBjbGVhciB0aGUgY2FjaGUgZnJvbSBpdHMgcHJldmlvdXMgc3RvcmFnZS5cbiAgICogQHBhcmFtIHsnbG9jYWwnfCdzZXNzaW9uJz19IHBlcnNpc3RlbmNlIEhvdyB0aGUgY2FjaGUgc2hvdWxkIGJlIHBlcnNpc3RlZCwgaXQgY2FuIGJlIGVpdGhlclxuICAgKiAgIGluIHRoZSBsb2NhbCBvciBzZXNzaW9uIHN0b3JhZ2UsIG9yIGlmIG5vIHBhcmFtZXRlcnMgaXMgcHJvdmlkZWQgaXQgd2lsbCBiZSBvbmx5IGluLW1lbW9yeSAoZGVmYXVsdCkuXG4gICAqL1xuICBzZXRQZXJzaXN0ZW5jZShwZXJzaXN0ZW5jZT86IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5DYWNoZSgpO1xuICAgIHRoaXMuc3RvcmFnZSA9IHBlcnNpc3RlbmNlID09PSAnbG9jYWwnIHx8IHBlcnNpc3RlbmNlID09PSAnc2Vzc2lvbicgP1xuICAgICAgdGhpcy4kd2luZG93W3BlcnNpc3RlbmNlICsgJ1N0b3JhZ2UnXSA6IG51bGw7XG5cbiAgICB0aGlzLmxvYWRDYWNoZURhdGEoKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0cyB0aGUgY2FjaGUga2V5IGZvciB0aGUgc3BlY2lmaWVkIHVybCBhbmQgcGFyYW1ldGVycy5cbiAgICogQHBhcmFtIHshc3RyaW5nfSB1cmwgVGhlIHJlcXVlc3QgVVJMLlxuICAgKiBAcGFyYW0gez9tYXA9fSBwYXJhbXMgTWFwIG9mIHN0cmluZ3Mgb3Igb2JqZWN0cyB3aGljaCB3aWxsIGJlIHR1cm5lZCB0byA/a2V5MT12YWx1ZTEma2V5Mj12YWx1ZTIgYWZ0ZXIgdGhlIHVybC4gSWYgdGhlIHZhbHVlIGlzIG5vdCBhIHN0cmluZywgaXQgd2lsbCBiZVxuICAgKiAgIEpTT05pZmllZC5cbiAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgY29ycmVzcG9uZGluZyBjYWNoZSBrZXkuXG4gICAqL1xuICBwcml2YXRlIGdldENhY2hlS2V5KHVybDogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiB1cmwgKyAocGFyYW1zID8gYW5ndWxhci50b0pzb24ocGFyYW1zKSA6ICcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlcyB0aGUgY3VycmVudCBjYWNoZWQgZGF0YSBpbnRvIHBlcnNpc3RlZCBzdG9yYWdlLlxuICAgKi9cbiAgcHJpdmF0ZSBzYXZlQ2FjaGVEYXRhKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0b3JhZ2UpIHtcbiAgICAgIHRoaXMuc3RvcmFnZS5jYWNoZWREYXRhID0gYW5ndWxhci50b0pzb24odGhpcy5jYWNoZWREYXRhKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgY2FjaGVkIGRhdGEgZnJvbSBwZXJzaXN0ZWQgc3RvcmFnZS5cbiAgICovXG4gIHByaXZhdGUgbG9hZENhY2hlRGF0YSgpOiB2b2lkIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuc3RvcmFnZSA/IHRoaXMuc3RvcmFnZS5jYWNoZWREYXRhIDogbnVsbDtcbiAgICB0aGlzLmNhY2hlZERhdGEgPSBkYXRhID8gYW5ndWxhci5mcm9tSnNvbihkYXRhKSA6IHt9O1xuICB9XG5cbn1cblxuYXBwLnNlcnZpY2UoJ2NhY2hlU2VydmljZScsIENhY2hlU2VydmljZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL21haW4vaGVscGVycy9jYWNoZS9jYWNoZS5zZXJ2aWNlLnRzIiwiaW1wb3J0IGFwcCBmcm9tICdtYWluLm1vZHVsZSc7XG5pbXBvcnQge0lMb2dnZXIsIExvZ2dlclNlcnZpY2V9IGZyb20gJ2hlbHBlcnMvbG9nZ2VyL2xvZ2dlcic7XG5cbi8qKlxuICogQ29udGV4dCBzZXJ2aWNlOiBwcm92aWRlcyBVUkwgY29udGV4dCBpbmplY3Rpb24gYmFzZWQgb24gc3BlY2lmaWVkIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250ZXh0U2VydmljZSB7XG5cbiAgcHJpdmF0ZSBsb2dnZXI6IElMb2dnZXI7XG5cbiAgY29uc3RydWN0b3IobG9nZ2VyOiBMb2dnZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXIuZ2V0TG9nZ2VyKCdjb250ZXh0U2VydmljZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluamVjdHMgdGhlIHNwZWNpZmllZCBjb250ZXh0IGludG8gdGhlIGdpdmVuIFJFU1QgQVBJLlxuICAgKiBUaGUgUkVTVCBBUEkgc2hvdWxkIGJlIGZvcm1hdHRlZCBsaWtlIFwiL2FwaS91c2Vycy86dXNlcklkXCIuXG4gICAqIEFueSBmcmFnbWVudCBmcm9tIHRoZSBSRVNUIEFQSSBzdGFydGluZyB3aXRoIFwiOlwiIHdpbGwgdGhlbiBiZSByZXBsYWNlZCBieSBhIHByb3BlcnR5IGZyb20gdGhlIGNvbnRleHQgd2l0aFxuICAgKiB0aGUgc2FtZSBuYW1lLCBpLmUuIGZvciBcIi9hcGkvdXNlcnMvOnVzZXJJZFwiIGFuZCBhIGNvbnRleHQgb2JqZWN0IFwieyB1c2VySWQ6IDEyMyB9XCIsIHRoZSByZXN1bHRpbmcgVVJMIHdpbGxcbiAgICogYmUgXCIvYXBpL3VzZXJzLzEyM1wiLlxuICAgKiBAcGFyYW0geyFzdHJpbmd9IHJlc3RBcGkgVGhlIFJFU1QgQVBJIHRvIGZpbGwgd2lsbCBjb250ZXh0IHZhbHVlcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gdXNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSByZWFkeS10by11c2UgUkVTVCBBUEkgdG8gY2FsbC5cbiAgICovXG4gIGluamVjdChyZXN0QXBpOiBzdHJpbmcsIGNvbnRleHQ/OiBhbnkpOiBzdHJpbmcge1xuICAgIHRoaXMubG9nZ2VyLmxvZygnSW5qZWN0aW5nIGNvbnRleHQgaW46ICcgKyByZXN0QXBpKTtcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgdGhyb3cgJ2luamVjdDogY29udGV4dCBtdXN0IGJlIGRlZmluZWQnO1xuICAgIH1cblxuICAgIC8vIFNlYXJjaCBmb3IgY29udGV4dCBwcm9wZXJ0aWVzIHRvIGluamVjdFxuICAgIGxldCBwcm9wZXJ0aWVzID0gcmVzdEFwaS5tYXRjaCgvKDpcXHcrKS9nKTtcblxuICAgIGFuZ3VsYXIuZm9yRWFjaChwcm9wZXJ0aWVzLCAocHJvcGVydHk6IHN0cmluZykgPT4ge1xuICAgICAgbGV0IGNvbnRleHRWYXIgPSBwcm9wZXJ0eS5zdWJzdHJpbmcoMSk7XG4gICAgICBsZXQgY29udGV4dFZhbHVlID0gY29udGV4dFtjb250ZXh0VmFyXTtcblxuICAgICAgaWYgKGNvbnRleHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRleHRWYWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudChjb250ZXh0VmFsdWUpO1xuICAgICAgICByZXN0QXBpID0gcmVzdEFwaS5yZXBsYWNlKHByb3BlcnR5LCBjb250ZXh0VmFsdWUpO1xuICAgICAgICB0aGlzLmxvZ2dlci5sb2coJ0luamVjdGVkICcgKyBjb250ZXh0VmFsdWUgKyAnIGZvciAnICsgcHJvcGVydHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgJ2luamVjdDogY29udGV4dC4nICsgY29udGV4dFZhciArICcgZXhwZWN0ZWQgYnV0IHVuZGVmaW5lZCc7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvZ2dlci5sb2coJ1Jlc3VsdGluZyBSRVNUIEFQSTogJyArIHJlc3RBcGkpO1xuXG4gICAgcmV0dXJuIHJlc3RBcGk7XG4gIH1cblxufVxuXG5hcHAuc2VydmljZSgnY29udGV4dFNlcnZpY2UnLCBDb250ZXh0U2VydmljZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL21haW4vaGVscGVycy9jb250ZXh0L2NvbnRleHQuc2VydmljZS50cyIsIi8qKlxuICogUHJvdmlkZXMgYSBzaW1wbGUgbG9nZ2luZyBzeXN0ZW0gd2l0aCB0aGUgcG9zc2liaWxpdHkgb2YgcmVnaXN0ZXJpbmcgbG9nIG9ic2VydmVycy5cbiAqIEluIG9yZGVyIHRvIHRyYWNrIHRoZSBzb3VyY2UgbW9kdWxlIG9mIG1lc3NhZ2UgbG9ncyxcbiAqIGEgY3VzdG9taXplZCBsb2dnZXIgc2hvdWxkIGJlIGluc3RhbmNpYXRlZCB1c2luZyB0aGUgZ2V0TG9nZ2VyKCkgbWV0aG9kIGp1c3QgYWZ0ZXIgaXRzIGluamVjdGlvbi5cbiAqXG4gKiA0IGRpZmZlcmVudCBsb2cgbGV2ZWxzIGFyZSBwcm92aWRlZCwgdmlhIGNvcnJlc3BvbmRpbmcgbWV0aG9kczpcbiAqIC0gbG9nOiBmb3IgZGVidWcgaW5mb3JtYXRpb25cbiAqIC0gaW5mbzogZm9yIGluZm9ybWF0aXZlIHN0YXR1cyBvZiB0aGUgYXBwbGljYXRpb24gKHN1Y2Nlc3MsIC4uLilcbiAqIC0gd2FybmluZzogZm9yIG5vbi1jcml0aWNhbCBlcnJvcnMgdGhhdCBkbyBub3QgcHJldmVudCBub3JtYWwgYXBwbGljYXRpb24gYmVoYXZpb3JcbiAqIC0gZXJyb3I6IGZvciBjcml0aWNhbCBlcnJvcnMgdGhhdCBwcmV2ZW50IG5vcm1hbCBhcHBsaWNhdGlvbiBiZWhhdmlvclxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiBhbmd1bGFyLm1vZHVsZSgnbXlTZXJ2aWNlJywgWydsb2dnZXInXSkuZmFjdG9yeSgnbXlTZXJ2aWNlJywgZnVuY3Rpb24gKGxvZ2dlcikge1xuICogICBsb2dnZXIgPSBsb2dnZXIuZ2V0TG9nZ2VyKCdteVNlcnZpY2UnKTtcbiAqICAgLi4uXG4gKiAgIGxvZ2dlci5sb2coJ3NvbWV0aGluZyBoYXBwZW5lZCcpO1xuICogfVxuICpcbiAqIElmIHlvdSB3YW50IHRvIGRpc2FibGUgZGVidWcgbG9ncyBpbiBwcm9kdWN0aW9uLCBhZGQgdGhpcyBzbmlwcGV0IHRvIHlvdXIgYXBwIGNvbmZpZ3VyYXRpb246XG4gKiBhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29uZmlnKGZ1bmN0aW9uICgkcHJvdmlkZSkge1xuICogICAvLyBEaXNhYmxlIGRlYnVnIGxvZ3MgaW4gcHJvZHVjdGlvbiB2ZXJzaW9uXG4gKiAgICRwcm92aWRlLmRlY29yYXRvcignJGxvZycsIFsnJGRlbGVnYXRlJywgZnVuY3Rpb24oJGRlbGVnYXRlKSB7XG4gKiAgICAgaWYgKCFkZWJ1Zykge1xuICogICAgICAgJGRlbGVnYXRlLmxvZyA9IGZ1bmN0aW9uKCkge307XG4gKiAgICAgfVxuICogICAgIHJldHVybiAkZGVsZWdhdGU7XG4gKiAgIH1dKTtcbiAqIH0pO1xuICpcbiAqIElmIHlvdSB3YW50IGFkZGl0aW9uYWwgdGFza3MgdG8gYmUgcGVyZm9ybWVkIG9uIGxvZyBlbnRyeSAoc2hvdyB0b2FzdCwgZm9yIGV4YW1wbGUpLFxuICogeW91IGNhbiByZWdpc3RlciBvYnNlcnZlcnMgdXNpbmcgdGhlIGFkZE9ic2VydmVyKCkgbWV0aG9kLlxuICovXG5cbmltcG9ydCBhcHAgZnJvbSAnbWFpbi5tb2R1bGUnO1xuXG5sZXQgb2JzZXJ2ZXJzOiBBcnJheTxGdW5jdGlvbj4gPSBbXTtcblxuLyoqXG4gKiBMb2dzIGEgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgc291cmNlLlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gYmUgbG9nZ2VkLlxuICogQHBhcmFtIHs/c3RyaW5nPX0gc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIGxvZy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGxvZ0Z1bmMgVGhlIGJhc2UgbG9nIGZ1bmN0aW9uIHRvIHVzZS5cbiAqIEBwYXJhbSB7J2xvZyd8J2luZm8nfCd3YXJuaW5nJ3wnZXJyb3InfSBsZXZlbCBUaGUgbG9nIGxldmVsLlxuICogQHBhcmFtIHtPYmplY3Q/fSBvcHRpb25zIEFkZGl0aW9uYWwgbG9nIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGxvZyhtZXNzYWdlOiBzdHJpbmcsIHNvdXJjZTogc3RyaW5nLCBsb2dGdW5jOiBGdW5jdGlvbiwgbGV2ZWw6IHN0cmluZywgb3B0aW9uczogYW55KTogdm9pZCB7XG4gIGxvZ0Z1bmMoc291cmNlID8gJ1snICsgc291cmNlICsgJ10nIDogJycsIG1lc3NhZ2UsICcnKTtcbiAgYW5ndWxhci5mb3JFYWNoKG9ic2VydmVycywgKG9ic2VydmVyRnVuYzogYW55KSA9PiB7XG4gICAgb2JzZXJ2ZXJGdW5jKG1lc3NhZ2UsIHNvdXJjZSwgbGV2ZWwsIG9wdGlvbnMpO1xuICB9KTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTG9nZ2VyIHtcblxuICAvKipcbiAgICogTG9ncyBhIG1lc3NhZ2Ugd2l0aCB0aGUgbG9nIGxldmVsLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBiZSBsb2dnZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0P30gb3B0aW9ucyBBZGRpdGlvbmFsIGxvZyBvcHRpb25zLlxuICAgKi9cbiAgbG9nKG1lc3NhZ2U6IHN0cmluZywgb3B0aW9ucz86IE9iamVjdCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIExvZ3MgYSBtZXNzYWdlIHdpdGggdGhlIGluZm8gbGV2ZWwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGJlIGxvZ2dlZC5cbiAgICogQHBhcmFtIHtPYmplY3Q/fSBvcHRpb25zIEFkZGl0aW9uYWwgbG9nIG9wdGlvbnMuXG4gICAqL1xuXG4gIGluZm8obWVzc2FnZTogc3RyaW5nLCBvcHRpb25zPzogT2JqZWN0KTogdm9pZDtcblxuICAvKipcbiAgICogTG9ncyBhIG1lc3NhZ2Ugd2l0aCB0aGUgd2FybmluZyBsZXZlbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gYmUgbG9nZ2VkLlxuICAgKiBAcGFyYW0ge09iamVjdD99IG9wdGlvbnMgQWRkaXRpb25hbCBsb2cgb3B0aW9ucy5cbiAgICovXG4gIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nLCBvcHRpb25zPzogT2JqZWN0KTogdm9pZDtcblxuICAvKipcbiAgICogTG9ncyBhIG1lc3NhZ2Ugd2l0aCB0aGUgZXJyb3IgbGV2ZWwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGJlIGxvZ2dlZC5cbiAgICogQHBhcmFtIHtPYmplY3Q/fSBvcHRpb25zIEFkZGl0aW9uYWwgbG9nIG9wdGlvbnMuXG4gICAqL1xuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIG9wdGlvbnM/OiBPYmplY3QpOiB2b2lkO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmVyRnVuY3Rpb24ge1xuICAobWVzc2FnZTogc3RyaW5nLCBzb3VyY2U6IHN0cmluZywgbGV2ZWw6IHN0cmluZywgb3B0aW9ucz86IGFueSk6IHZvaWQ7XG59XG5cbmNsYXNzIExvZ2dlciBpbXBsZW1lbnRzIElMb2dnZXIge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgJGxvZzogbmcuSUxvZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbW9kdWxlTmFtZTogc3RyaW5nLFxuICAgICAgICAgICAgICBwcml2YXRlIGxvZ0Z1bmM6IGFueSkge31cblxuICBsb2cobWVzc2FnZTogc3RyaW5nLCBvcHRpb25zOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ0Z1bmMobWVzc2FnZSwgdGhpcy5tb2R1bGVOYW1lLCB0aGlzLiRsb2cubG9nLCAnbG9nJywgb3B0aW9ucyk7XG4gIH1cblxuICBpbmZvKG1lc3NhZ2U6IHN0cmluZywgb3B0aW9uczogYW55KTogdm9pZCB7XG4gICAgdGhpcy5sb2dGdW5jKG1lc3NhZ2UsIHRoaXMubW9kdWxlTmFtZSwgdGhpcy4kbG9nLmluZm8sICdpbmZvJywgb3B0aW9ucyk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2U6IHN0cmluZywgb3B0aW9uczogYW55KTogdm9pZCB7XG4gICAgdGhpcy5sb2dGdW5jKG1lc3NhZ2UsIHRoaXMubW9kdWxlTmFtZSwgdGhpcy4kbG9nLndhcm4sICd3YXJuaW5nJywgb3B0aW9ucyk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIG9wdGlvbnM6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubG9nRnVuYyhtZXNzYWdlLCB0aGlzLm1vZHVsZU5hbWUsIHRoaXMuJGxvZy5lcnJvciwgJ2Vycm9yJywgb3B0aW9ucyk7XG4gIH1cblxufVxuXG5leHBvcnQgY2xhc3MgTG9nZ2VyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSAkbG9nOiBuZy5JTG9nU2VydmljZSkge31cblxuICAvKipcbiAgICogR2V0cyBhIGN1c3RvbWl6ZWQgbG9nZ2VyIGJhc2VkIG9uIHRoZSBnaXZlbiBtb2R1bGUgbmFtZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZU5hbWUgVGhlIG1vZHVsZSBuYW1lLlxuICAgKiBAcmV0dXJuIHtMb2dnZXJ9IEEgbG9nZ2VyIG9iamVjdC5cbiAgICovXG4gIGdldExvZ2dlcihtb2R1bGVOYW1lOiBzdHJpbmcpOiBJTG9nZ2VyIHtcbiAgICByZXR1cm4gbmV3IExvZ2dlcih0aGlzLiRsb2csIG1vZHVsZU5hbWUsIGxvZyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG5ldyBvYnNlcnZlciBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIG5ldyBsb2cgZW50cnkuXG4gICAqIFRoZXNlIHBhcmFtZXRlcnMgYXJlIHBhc3NlZCB0byB0aGUgb2JzZXJ2ZXIgZnVuY3Rpb24sIGluIG9yZGVyOlxuICAgKiAtIG1lc3NhZ2Uge3N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBiZSBsb2dnZWQuXG4gICAqIC0gc291cmNlIHs/c3RyaW5nPX0gc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIGxvZy5cbiAgICogLSBsZXZlbCB7J2xvZyd8J2luZm8nfCd3YXJuaW5nJ3wnZXJyb3InfSBsZXZlbCBUaGUgbG9nIGxldmVsLlxuICAgKiAtIG9wdGlvbnMge09iamVjdD99IG9wdGlvbnMgQWRkaXRpb25hbCBsb2cgb3B0aW9ucy5cbiAgICogQHBhcmFtIHshZnVuY3Rpb259IG9ic2VydmVyRnVuYyBUaGUgb2JzZXJ2ZXIgZnVuY3Rpb24uXG4gICAqL1xuICBhZGRPYnNlcnZlcihvYnNlcnZlckZ1bmM6IElPYnNlcnZlckZ1bmN0aW9uKTogdm9pZCB7XG4gICAgb2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXJGdW5jKTtcbiAgfVxuXG59XG5cbmFwcC5zZXJ2aWNlKCdsb2dnZXInLCBMb2dnZXJTZXJ2aWNlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvbWFpbi9oZWxwZXJzL2xvZ2dlci9sb2dnZXIudHMiLCJpbXBvcnQgYXBwIGZyb20gJ21haW4ubW9kdWxlJztcbmltcG9ydCB7Q2FjaGVTZXJ2aWNlfSBmcm9tICdoZWxwZXJzL2NhY2hlL2NhY2hlLnNlcnZpY2UnO1xuaW1wb3J0IHtJTG9nZ2VyLCBMb2dnZXJTZXJ2aWNlfSBmcm9tICdoZWxwZXJzL2xvZ2dlci9sb2dnZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2ZXJDb25maWcge1xuICB1cmw6IHN0cmluZztcbiAgcm91dGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ2FjaGVIYW5kbGVyRnVuY3Rpb24ge1xuICAoY2FjaGVkRGF0YTogYW55KTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSZXF1ZXN0QnVpbGRlckZ1bmN0aW9uIHtcbiAgKG9wdGlvbnM/OiBhbnkpOiBuZy5JUHJvbWlzZTxhbnk+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSZXF1ZXN0SGFuZGxlckZ1bmN0aW9uIHtcbiAgKHJlcXVlc3RCdWlsZGVyOiBJUmVxdWVzdEJ1aWxkZXJGdW5jdGlvbiwgb3B0aW9ucz86IGFueSk6IG5nLklQcm9taXNlPGFueT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUVycm9ySGFuZGxlckZ1bmN0aW9uIHtcbiAgKHByb21pc2U6IG5nLklQcm9taXNlPGFueT4sIG9wdGlvbnM/OiBhbnkpOiBuZy5JUHJvbWlzZTxhbnk+O1xufVxuXG4vKipcbiAqIFJFU1Qgc2VydmljZTogcHJvdmlkZXMgbWV0aG9kcyB0byBwZXJmb3JtIFJFU1QgcmVxdWVzdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXN0U2VydmljZSB7XG5cbiAgcHJpdmF0ZSBzZXJ2ZXI6IElTZXJ2ZXJDb25maWcgPSBudWxsO1xuICBwcml2YXRlIGJhc2VVcmw6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIGRlZmF1bHRDb25maWc6IG5nLklSZXF1ZXN0U2hvcnRjdXRDb25maWcgPSB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJzogJ2NvbnRlbnQtdHlwZSdcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERlZmF1bHRzIGNhY2hlIGhhbmRsZXIuXG4gICAqIFRoaXMgaGFuZGxlciBqdXN0IHJldHVybiB0aGUgc3BlY2lmaWVkIGNhY2hlIGRhdGEgYW5kIGRvZXMgbm90aGluZy5cbiAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgKi9cbiAgcHJpdmF0ZSBjYWNoZUhhbmRsZXI6IElDYWNoZUhhbmRsZXJGdW5jdGlvbiA9IGFuZ3VsYXIuaWRlbnRpdHk7XG4gIHByaXZhdGUgbG9nZ2VyOiBJTG9nZ2VyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgJHE6IG5nLklRU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSAkaHR0cDogbmcuSUh0dHBTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGNhY2hlU2VydmljZTogQ2FjaGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBsb2dnZXI6IExvZ2dlclNlcnZpY2UpIHtcblxuICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyLmdldExvZ2dlcigncmVzdFNlcnZpY2UnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyBhIEdFVCByZXF1ZXN0LlxuICAgKiBAcGFyYW0geyFTdHJpbmd9IHVybCBVUkwgb2YgdGhlIFJFU1Qgc2VydmljZSBjYWxsLlxuICAgKiBAcGFyYW0gez9PYmplY3QuPHN0cmluZ3xPYmplY3Q+PX0gcGFyYW1zIE1hcCBvZiBzdHJpbmdzIG9yIG9iamVjdHMgd2hpY2ggd2lsbCBiZSB0dXJuZWQgdG8gP2tleTE9dmFsdWUxJmtleTI9dmFsdWUyIGFmdGVyIHRoZSB1cmwuIElmIHRoZSB2YWx1ZSBpcyBub3QgYSBzdHJpbmcsIGl0IHdpbGwgYmVcbiAgICogICBKU09OaWZpZWQuXG4gICAqIEBwYXJhbSB7P2Jvb2xlYW58J2ZvcmNlJ30gY2FjaGUgSWYgc2V0IHRvIHRydWUsIHRoZSBmaXJzdCByZXF1ZXN0IHdpbGwgYmUgY2FjaGVkLCBhbmQgbmV4dCByZXF1ZXN0IHdpdGggY2FjaGUgc2V0IHRvIHRydWUgd2lsbCB1c2UgdGhlIGNhY2hlZCByZXNwb25zZS5cbiAgICogICBJZiBzZXQgdG8gJ2ZvcmNlJywgdGhlIHJlcXVlc3Qgd2lsbCBhbHdheXMgYmUgbWFkZSBhbmQgY2FjaGUgd2lsbCBiZSB1cGRhdGVkLlxuICAgKiAgIElmIHNldCB0byBmYWxzZSBvciBvbWl0dGVkLCBubyBjYWNoZSB3aWxsIGJlIHNldCBvciB1c2VkLlxuICAgKiBAcGFyYW0gez9PYmplY3Q9fSBvcHRpb25zIEFkZGl0aW9uYWwgb3B0aW9ucyBmb3IgcmVxdWVzdC9lcnJvciBoYW5kbGVycy5cbiAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgcHJvbWlzZS5cbiAgICovXG4gIGdldCh1cmw6IHN0cmluZywgcGFyYW1zPzogYW55LCBjYWNoZT86IGJvb2xlYW58c3RyaW5nLCBvcHRpb25zPzogYW55KTogbmcuSVByb21pc2U8YW55PiB7XG4gICAgbGV0IGFwaVVybCA9IHRoaXMuYmFzZVVybCArIHVybDtcbiAgICBsZXQgcHJvbWlzZUJ1aWxkZXIgPSAoKSA9PiB0aGlzLiRodHRwLmdldChhcGlVcmwsIHtwYXJhbXM6IHBhcmFtc30pO1xuXG4gICAgaWYgKCFjYWNoZSkge1xuICAgICAgLy8gRG8gbm90IHVzZSBjYWNoZVxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVxdWVzdChwcm9taXNlQnVpbGRlciwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjYWNoZWREYXRhID0gY2FjaGUgPT09ICdmb3JjZScgPyBudWxsIDogdGhpcy5jYWNoZVNlcnZpY2UuZ2V0Q2FjaGVEYXRhKHVybCwgcGFyYW1zKTtcblxuICAgICAgaWYgKGNhY2hlZERhdGEgIT09IG51bGwpIHtcbiAgICAgICAgY2FjaGVkRGF0YSA9IHRoaXMuY2FjaGVIYW5kbGVyKGNhY2hlZERhdGEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FjaGVkRGF0YSA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLmxvZ2dlci5sb2coJ0dFVCByZXF1ZXN0OiAnICsgdXJsKTtcblxuICAgICAgICAvLyBVcGRhdGUgY2FjaGUgZW50cnlcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVxdWVzdChwcm9taXNlQnVpbGRlciwgb3B0aW9ucykudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuY2FjaGVTZXJ2aWNlLnNldENhY2hlRGF0YSh1cmwsIHBhcmFtcywgcmVzcG9uc2UsIG51bGwpO1xuICAgICAgICAgIHJldHVybiBhbmd1bGFyLmNvcHkocmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVzZSBjYWNoZWQgdmVyc2lvblxuICAgICAgICBsZXQgZGVmZXJyZWQgPSB0aGlzLiRxLmRlZmVyKCk7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoYW5ndWxhci5jb3B5KGNhY2hlZERhdGEpKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lcnJvckhhbmRsZXIoZGVmZXJyZWQucHJvbWlzZSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIGEgUFVUIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7IVN0cmluZ30gdXJsIFVSTCBvZiB0aGUgUkVTVCBzZXJ2aWNlIGNhbGwuXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZGF0YSBEYXRhIHRvIGJlIHNlbnQgYXMgdGhlIHJlcXVlc3QgbWVzc2FnZSBkYXRhLlxuICAgKiBAcGFyYW0gez9PYmplY3Q9fSBvcHRpb25zIEFkZGl0aW9uYWwgb3B0aW9ucyBmb3IgcmVxdWVzdC9lcnJvciBoYW5kbGVycy5cbiAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgcHJvbWlzZS5cbiAgICovXG4gIHB1dCh1cmw6IHN0cmluZywgZGF0YTogYW55LCBvcHRpb25zPzogYW55KTogbmcuSVByb21pc2U8YW55PiB7XG4gICAgdGhpcy5sb2dnZXIubG9nKCdQVVQgcmVxdWVzdDogJyArIHVybCwgbnVsbCk7XG4gICAgbGV0IHByb21pc2UgPSAoKSA9PiB0aGlzLiRodHRwLnB1dCh0aGlzLmJhc2VVcmwgKyB1cmwsIGRhdGEsIHRoaXMuZGVmYXVsdENvbmZpZyk7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVxdWVzdChwcm9taXNlLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyBhIFBPU1QgcmVxdWVzdC5cbiAgICogQHBhcmFtIHshU3RyaW5nfSB1cmwgVVJMIG9mIHRoZSBSRVNUIHNlcnZpY2UgY2FsbC5cbiAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBkYXRhIERhdGEgdG8gYmUgc2VudCBhcyB0aGUgcmVxdWVzdCBtZXNzYWdlIGRhdGEuXG4gICAqIEBwYXJhbSB7P09iamVjdD19IG9wdGlvbnMgQWRkaXRpb25hbCBvcHRpb25zIGZvciByZXF1ZXN0L2Vycm9yIGhhbmRsZXJzLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBwcm9taXNlLlxuICAgKi9cbiAgcG9zdCh1cmw6IHN0cmluZywgZGF0YTogYW55LCBvcHRpb25zPzogYW55KTogbmcuSVByb21pc2U8YW55PiB7XG4gICAgdGhpcy5sb2dnZXIubG9nKCdQT1NUIHJlcXVlc3Q6ICcgKyB1cmwsIG51bGwpO1xuICAgIGxldCBwcm9taXNlQnVpbGRlciA9ICgpID0+IHRoaXMuJGh0dHAucG9zdCh0aGlzLmJhc2VVcmwgKyB1cmwsIGRhdGEsIHRoaXMuZGVmYXVsdENvbmZpZyk7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVxdWVzdChwcm9taXNlQnVpbGRlciwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgYSBERUxFVEUgcmVxdWVzdC5cbiAgICogQHBhcmFtIHshU3RyaW5nfSB1cmwgVVJMIG9mIHRoZSBSRVNUIHNlcnZpY2UgY2FsbC5cbiAgICogQHBhcmFtIHs/T2JqZWN0PX0gb3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHJlcXVlc3QvZXJyb3IgaGFuZGxlcnMuXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGhlIHByb21pc2UuXG4gICAqL1xuICBkZWxldGUodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiBuZy5JUHJvbWlzZTxhbnk+IHtcbiAgICB0aGlzLmxvZ2dlci5sb2coJ0RFTEVURSByZXF1ZXN0OiAnICsgdXJsLCBudWxsKTtcbiAgICBsZXQgcHJvbWlzZSA9ICgpID0+IHRoaXMuJGh0dHAuZGVsZXRlKHRoaXMuYmFzZVVybCArIHVybCwgdGhpcy5kZWZhdWx0Q29uZmlnKTtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSZXF1ZXN0KHByb21pc2UsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgc2VydmVyIGNvbmZpZ3VyYXRpb24uXG4gICAqIEEgc2VydmVyIHBhcmFtZXRlciBtdXN0IGNvbnRhaW5zIGF0IGxlYXN0IHRoZXNlIHR3byBzdHJpbmdzOlxuICAgKiAtIHVybDogVGhlIGJhc2UgVVJMIG9mIHRoZSBzZXJ2ZXJcbiAgICogLSByb3V0ZTogVGhlIGJhc2Ugcm91dGUgb2YgdGhlIFJFU1QgQVBJXG4gICAqIEBwYXJhbSB7IU9iamVjdH0gc2VydmVyIFRoZSBzZXJ2ZXIgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIHNldFNlcnZlcihzZXJ2ZXI6IElTZXJ2ZXJDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLnNlcnZlciA9IHNlcnZlcjtcbiAgICB0aGlzLmJhc2VVcmwgPSBzZXJ2ZXIudXJsICsgc2VydmVyLnJvdXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgc2VydmVyIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4ge1N0cmluZ30gVGhlIHNlcnZlciBiYXNlIFVSTC5cbiAgICovXG4gIGdldFNlcnZlcigpOiBJU2VydmVyQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2ZXI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYmFzZSBVUkkuXG4gICAqIEByZXR1cm4ge1N0cmluZ30gVGhlIGNvbXB1dGVkIGJhc2UgVVJJLlxuICAgKi9cbiAgZ2V0QmFzZVVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmJhc2VVcmw7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIGN1c3RvbWl6ZWQgcmVxdWVzdCBoYW5kbGVyIGZ1bmN0aW9uIGZvciBhbGwgcmVxdWVzdHMuXG4gICAqIFRoZSBmdW5jdGlvbiBzaG91bGQgaGF2ZSB0aGUgZm9sbG93aW5nIHNpZ25hdHVyZSwgYW5kIHJldHVybiBhIHByb21pc2U6XG4gICAqIGZ1bmN0aW9uIHJlcXVlc3RIYW5kbGVyKHJlcXVlc3RCdWlsZGVyLCBvcHRpb25zKSB7XG4gICAqICAgcmV0dXJuIHJlcXVlc3RCdWlsZGVyKCk7XG4gICAqIH1cbiAgICogVGhlIHJlcXVlc3RCdWlsZGVyIHBhcmFtZXRlciBpcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgcmVxdWVzdCBwcm9taXNlLlxuICAgKiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb3B0aW9uYWwgb2JqZWN0IGNvbnRhaW5pbmcgd2hhdGV2ZXIgb3B0aW9ucyB5b3VyIGhhbmRsZXIgbWF5IG5lZWRzLlxuICAgKiBAcGFyYW0geyFmdW5jdGlvbn0gcmVxdWVzdEhhbmRsZXJGdW5jIFRoZSByZXF1ZXN0IGhhbmRsZXIuXG4gICAqL1xuICBzZXRSZXF1ZXN0SGFuZGxlcihyZXF1ZXN0SGFuZGxlckZ1bmM6IElSZXF1ZXN0SGFuZGxlckZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5yZXF1ZXN0SGFuZGxlciA9IHJlcXVlc3RIYW5kbGVyRnVuYztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjdXJyZW50IHJlcXVlc3QgaGFuZGxlciBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSByZXF1ZXN0IGhhbmRsZXIuXG4gICAqL1xuICBnZXRSZXF1ZXN0SGFuZGxlcigpOiBJUmVxdWVzdEhhbmRsZXJGdW5jdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdEhhbmRsZXI7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIGN1c3RvbWl6ZWQgZGVmYXVsdCBlcnJvciBoYW5kbGVyIGZ1bmN0aW9uIGZvciBhbGwgcmVxdWVzdHMuXG4gICAqIFRoZSBmdW5jdGlvbiBzaG91bGQgaGF2ZSB0aGUgZm9sbG93aW5nIHNpZ25hdHVyZSwgYW5kIHJldHVybiBhIHByb21pc2U6XG4gICAqIGZ1bmN0aW9uIGVycm9ySGFuZGxlcihwcm9taXNlLCBvcHRpb25zKSB7XG4gICAqICAgcmV0dXJuIHByb21pc2UuY2F0Y2gocmVzcG9uc2UsIGZ1bmN0aW9uKCkge1xuICAgKiAgICAgIC4uLlxuICAgKiAgICAgIHJldHVybiAkcS5yZWplY3QocmVzcG9uc2UpO1xuICAgKiAgIH0pO1xuICAgKiB9XG4gICAqIFRoZSBwcm9taXNlIHBhcmFtZXRlciBpcyB0aGUgcmVxdWVzdCBwcm9taXNlLlxuICAgKiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb3B0aW9uYWwgb2JqZWN0IGNvbnRhaW5pbmcgd2hhdGV2ZXIgb3B0aW9ucyB5b3VyIGhhbmRsZXIgbWF5IG5lZWRzLlxuICAgKiBAcGFyYW0geyFmdW5jdGlvbn0gZXJyb3JIYW5kbGVyRnVuYyBUaGUgZXJyb3IgaGFuZGxlci5cbiAgICovXG4gIHNldEVycm9ySGFuZGxlcihlcnJvckhhbmRsZXJGdW5jOiBJRXJyb3JIYW5kbGVyRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLmVycm9ySGFuZGxlciA9IGVycm9ySGFuZGxlckZ1bmM7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCBlcnJvciBoYW5kbGVyIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gVGhlIGVycm9yIGhhbmRsZXIuXG4gICAqL1xuICBnZXRFcnJvckhhbmRsZXIoKTogSUVycm9ySGFuZGxlckZ1bmN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvckhhbmRsZXI7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIGN1c3RvbWl6ZWQgZGVmYXVsdCBjYWNoZSBoYW5kbGVyIGZ1bmN0aW9uIGZvciBhbGwgY2FjaGVkIHJlcXVlc3RzLlxuICAgKiBUaGUgZnVuY3Rpb24gc2hvdWxkIGhhdmUgdGhlIGZvbGxvd2luZyBzaWduYXR1cmUsIGFuZCByZXR1cm4gYW4gb2JqZWN0OlxuICAgKiBmdW5jdGlvbiBjYWNoZUhhbmRsZXIoY2FjaGVkRGF0YSkge1xuICAgKiAgICByZXR1cm4gaXNWYWxpZChjYWNoZWREYXRhKSA/IGNhY2hlZERhdGEgOiBudWxsO1xuICAgKiB9XG4gICAqIFRoaXMgaGFuZGxlciBpcyBvbmx5IGNhbGxlZCBiZWZvcmUgZm9yIHJlcXVlc3RzIHRoYXQgd291bGQgcmV0dXJuIGNhY2hlZCBkYXRhIG90aGVyd2lzZS5cbiAgICogQHBhcmFtIHshZnVuY3Rpb259IGNhY2hlSGFuZGxlckZ1bmMgVGhlIGNhY2hlIGhhbmRsZXIuXG4gICAqL1xuICBzZXRDYWNoZUhhbmRsZXIoY2FjaGVIYW5kbGVyRnVuYzogSUNhY2hlSGFuZGxlckZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5jYWNoZUhhbmRsZXIgPSBjYWNoZUhhbmRsZXJGdW5jO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgY2FjaGUgaGFuZGxlciBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBjYWNoZSBoYW5kbGVyLlxuICAgKi9cbiAgZ2V0Q2FjaGVIYW5kbGVyKCk6IElDYWNoZUhhbmRsZXJGdW5jdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVIYW5kbGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgcmVxdWVzdCBoYW5kbGVyLCB0aGF0IGp1c3QgYnVpbGRzIHRoZSBwcm9taXNlLlxuICAgKiBAcGFyYW0geyFmdW5jdGlvbn0gcmVxdWVzdEJ1aWxkZXIgQSBmdW5jdGlvbiB0aGF0IHJldHVybiB0aGUgcmVxdWVzdCdzIHByb21pc2UuXG4gICAqIEBwYXJhbSB7P09iamVjdD19IG9wdGlvbnMgT3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSByZXF1ZXN0IGJ1aWxkZXIgZnVuY3Rpb24uXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGhlIHByb21pc2UuXG4gICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICovXG4gIHByaXZhdGUgcmVxdWVzdEhhbmRsZXIocmVxdWVzdEJ1aWxkZXI6IElSZXF1ZXN0QnVpbGRlckZ1bmN0aW9uLCBvcHRpb25zPzogYW55KTogbmcuSVByb21pc2U8YW55PiB7XG4gICAgLy8gRGVmYXVsdCByZXF1ZXN0IGhhbmRsZXIganVzdCBidWlsZHMgdGhlIHJlcXVlc3RcbiAgICByZXR1cm4gcmVxdWVzdEJ1aWxkZXIob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCBlcnJvciBoYW5kbGVyLlxuICAgKiBUaGlzIGhhbmRsZXIgdHJpZXMgdG8gZXh0cmFjdCBhIGRlc2NyaXB0aW9uIG9mIHRoZSBlcnJvciBhbmQgbG9ncyBhbmQgZXJyb3Igd2l0aCBpdC5cbiAgICogQHBhcmFtIHshT2JqZWN0fSBwcm9taXNlIFRoZSBwcm9taXNlIHRvIGhhbmRsZSBlcnJvcnMuXG4gICAqIEBwYXJhbSB7P09iamVjdD19IG9wdGlvbnMgQWRkaXRpb25hbCBvcHRpb25zOiBpZiAnc2tpcEVycm9ycycgcHJvcGVydHkgaXMgc2V0IHRvIHRydWUsIGVycm9ycyB3aWxsIG5vdCBiZSBoYW5kbGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBwcm9taXNlLlxuICAgKi9cbiAgcHJpdmF0ZSBlcnJvckhhbmRsZXIocHJvbWlzZTogbmcuSVByb21pc2U8YW55Piwgb3B0aW9ucz86IGFueSk6IG5nLklQcm9taXNlPGFueT4ge1xuICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5za2lwRXJyb3JzKSB7XG4gICAgICBwcm9taXNlLmNhdGNoKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGxldCBlcnJvcjtcblxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICBlcnJvciA9ICdTZXJ2ZXIgdW5hdmFpbGFibGUgb3IgVVJMIGRvZXMgbm90IGV4aXN0JztcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgbGV0IG1lc3NhZ2UgPSByZXNwb25zZS5kYXRhLm1lc3NhZ2UgPyByZXNwb25zZS5kYXRhLm1lc3NhZ2UgOiBudWxsO1xuICAgICAgICAgIGxldCBjb2RlID0gcmVzcG9uc2UuZGF0YS5lcnJvciA/IHJlc3BvbnNlLmRhdGEuZXJyb3IgOiBudWxsO1xuICAgICAgICAgIGVycm9yID0gbWVzc2FnZSB8fCBjb2RlIHx8IGFuZ3VsYXIudG9Kc29uKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IsIG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuJHEucmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSByZXF1ZXN0LlxuICAgKiBAcGFyYW0geyFmdW5jdGlvbn0gcmVxdWVzdEJ1aWxkZXIgQSBmdW5jdGlvbiB0aGF0IHJldHVybiB0aGUgcmVxdWVzdCdzIHByb21pc2UuXG4gICAqIEBwYXJhbSB7P09iamVjdD19IG9wdGlvbnMgQWRkaXRpb25hbCBvcHRpb25zIGZvciByZXF1ZXN0L2Vycm9yIGhhbmRsZXJzLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBwcm9taXNlLlxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0KHJlcXVlc3RCdWlsZGVyOiBJUmVxdWVzdEJ1aWxkZXJGdW5jdGlvbiwgb3B0aW9ucz86IGFueSk6IG5nLklQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmVycm9ySGFuZGxlcih0aGlzLnJlcXVlc3RIYW5kbGVyKHJlcXVlc3RCdWlsZGVyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG4gIH1cbn1cblxuYXBwLnNlcnZpY2UoJ3Jlc3RTZXJ2aWNlJywgUmVzdFNlcnZpY2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9tYWluL2hlbHBlcnMvcmVzdC9yZXN0LnNlcnZpY2UudHMiLCJpbXBvcnQgYXBwIGZyb20gJ21haW4ubW9kdWxlJztcbmltcG9ydCB7SUFwcGxpY2F0aW9uQ29uZmlnfSBmcm9tICdtYWluLmNvbnN0YW50cyc7XG5pbXBvcnQge0lMb2dnZXIsIExvZ2dlclNlcnZpY2V9IGZyb20gJ2hlbHBlcnMvbG9nZ2VyL2xvZ2dlcic7XG5cbi8qKlxuICogRGlzcGxheXMgdGhlIGFib3V0IHNjcmVlbi5cbiAqL1xuZXhwb3J0IGNsYXNzIEFib3V0Q29udHJvbGxlciB7XG5cbiAgdmVyc2lvbjogc3RyaW5nO1xuXG4gIHByaXZhdGUgbG9nZ2VyOiBJTG9nZ2VyO1xuXG4gIGNvbnN0cnVjdG9yKGxvZ2dlcjogTG9nZ2VyU2VydmljZSxcbiAgICAgICAgICAgICAgY29uZmlnOiBJQXBwbGljYXRpb25Db25maWcpIHtcblxuICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyLmdldExvZ2dlcignYWJvdXQnKTtcbiAgICB0aGlzLnZlcnNpb24gPSBjb25maWcudmVyc2lvbjtcblxuICAgIHRoaXMubG9nZ2VyLmxvZygnaW5pdCcpO1xuICB9XG5cbn1cblxuYXBwLmNvbnRyb2xsZXIoJ2Fib3V0Q29udHJvbGxlcicsIEFib3V0Q29udHJvbGxlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL21haW4vc2NyZWVucy9hYm91dC9hYm91dC5jb250cm9sbGVyLnRzIiwiaW1wb3J0IGFwcCBmcm9tICdtYWluLm1vZHVsZSc7XG5pbXBvcnQge0lMb2dnZXIsIExvZ2dlclNlcnZpY2V9IGZyb20gJ2hlbHBlcnMvbG9nZ2VyL2xvZ2dlcic7XG5pbXBvcnQge1F1b3RlU2VydmljZX0gZnJvbSAnd2ViLXNlcnZpY2VzL3F1b3RlL3F1b3RlLnNlcnZpY2UnO1xuXG4vKipcbiAqIERpc3BsYXlzIHRoZSBob21lIHNjcmVlbi5cbiAqL1xuZXhwb3J0IGNsYXNzIEhvbWVDb250cm9sbGVyIHtcblxuICBpc0xvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBxdW90ZTogc3RyaW5nID0gbnVsbDtcblxuICBwcml2YXRlIGxvZ2dlcjogSUxvZ2dlcjtcbiAgcHJpdmF0ZSBxdW90ZVNlcnZpY2U6IFF1b3RlU2VydmljZTtcblxuICBjb25zdHJ1Y3Rvcihsb2dnZXI6IExvZ2dlclNlcnZpY2UsXG4gICAgICAgICAgICAgIHF1b3RlU2VydmljZTogUXVvdGVTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlci5nZXRMb2dnZXIoJ2hvbWUnKTtcbiAgICB0aGlzLnF1b3RlU2VydmljZSA9IHF1b3RlU2VydmljZTtcblxuICAgIHRoaXMubG9nZ2VyLmxvZygnaW5pdCcpO1xuXG4gICAgdGhpcy5xdW90ZVNlcnZpY2VcbiAgICAgIC5nZXRSYW5kb21Kb2tlKHtjYXRlZ29yeTogJ25lcmR5J30pXG4gICAgICAudGhlbigocXVvdGU6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnF1b3RlID0gcXVvdGU7XG4gICAgICB9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxufVxuXG5hcHAuY29udHJvbGxlcignaG9tZUNvbnRyb2xsZXInLCBIb21lQ29udHJvbGxlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL21haW4vc2NyZWVucy9ob21lL2hvbWUuY29udHJvbGxlci50cyIsImltcG9ydCBhcHAgZnJvbSAnbWFpbi5tb2R1bGUnO1xuXG4vKipcbiAqIExvYWRpbmcgZGlyZWN0aXZlOiBkaXNwbGF5cyBhIGxvYWRpbmcgaW5kaWNhdG9yIHdoaWxlIGRhdGEgaXMgYmVpbmcgbG9hZGVkLlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6IDxkaXYgdWktbG9hZGluZz1cImlzTG9hZGluZ1wiPjwvZGl2PlxuICogVGhlIGV4cGVjdGVkIHZhbHVlIG9mIHRoZSBkaXJlY3RpdmUgYXR0cmlidXRlIGlzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGNvbnRlbnRcbiAqIGlzIHN0aWxsIGxvYWRpbmcgb3Igbm90LlxuICpcbiAqIEFkZGl0aW9uYWwgcGFyYW1ldGVyIGF0dHJpYnV0ZXM6XG4gKiAtIG1lc3NhZ2U6IHRoZSBsb2FkaW5nIG1lc3NhZ2UgdG8gZGlzcGxheSAobm9uZSBieSBkZWZhdWx0KVxuICpcbiAqIEV4YW1wbGU6IDxkaXYgdWktbG9hZGluZz1cImlzTG9hZGluZ1wiIG1lc3NhZ2U9XCJMb2FkaW5nLi4uXCI+PC9kaXY+XG4gKi9cbmV4cG9ydCBjbGFzcyBMb2FkaW5nRGlyZWN0aXZlIGltcGxlbWVudHMgbmcuSURpcmVjdGl2ZSB7XG4gIHJlc3RyaWN0ID0gJ0EnO1xuICB0ZW1wbGF0ZSA9IDxzdHJpbmc+cmVxdWlyZSgnbG9hZGluZy5odG1sJyk7XG4gIHNjb3BlID0ge1xuICAgIG1lc3NhZ2U6ICc8JyxcbiAgICBpc0xvYWRpbmc6ICc8dWlMb2FkaW5nJ1xuICB9O1xufVxuXG5hcHAuZGlyZWN0aXZlKCd1aUxvYWRpbmcnLCAoKSA9PiBuZXcgTG9hZGluZ0RpcmVjdGl2ZSgpKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc291cmNlcy9tYWluL3VpLWNvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmRpcmVjdGl2ZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IG5nLXNob3c9XFxcImlzTG9hZGluZ1xcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtY29nIGZhLXNwaW4gZmEtM3hcXFwiPjwvaT4gPHNwYW4+e3ttZXNzYWdlfX08L3NwYW4+PC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvbWFpbi91aS1jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5odG1sXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYXBwIGZyb20gJ21haW4ubW9kdWxlJztcbmltcG9ydCB7UmVzdFNlcnZpY2V9IGZyb20gJ2hlbHBlcnMvcmVzdC9yZXN0LnNlcnZpY2UnO1xuaW1wb3J0IHtDb250ZXh0U2VydmljZX0gZnJvbSAnaGVscGVycy9jb250ZXh0L2NvbnRleHQuc2VydmljZSc7XG5cbi8qKlxuICogUXVvdGUgc2VydmljZTogYWxsb3dzIHRvIGdldCBxdW90ZSBvZiB0aGUgZGF5LlxuICovXG5leHBvcnQgY2xhc3MgUXVvdGVTZXJ2aWNlIHtcblxuICBwcml2YXRlIFJPVVRFUyA9IHtcbiAgICByYW5kb21Kb2tlOiAnL2pva2VzL3JhbmRvbT9lc2NhcGU9amF2YXNjcmlwdCZsaW1pdFRvPVs6Y2F0ZWdvcnldJ1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgJHE6IG5nLklRU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZXN0U2VydmljZTogUmVzdFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY29udGV4dFNlcnZpY2U6IENvbnRleHRTZXJ2aWNlKSB7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcmFuZG9tIENodWNrIE5vcnJpcyBqb2tlLlxuICAgKiBVc2VkIGNvbnRleHQgcHJvcGVydGllczpcbiAgICogLSBjYXRlZ29yeTogdGhlIGpva2UncyBjYXRlZ29yeTogJ25lcmR5JywgJ2V4cGxpY2l0Jy4uLlxuICAgKiBAcGFyYW0geyFPYmplY3R9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gdXNlLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBwcm9taXNlLlxuICAgKi9cbiAgZ2V0UmFuZG9tSm9rZShjb250ZXh0OiBhbnkpOiBuZy5JUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5yZXN0U2VydmljZVxuICAgICAgLmdldCh0aGlzLmNvbnRleHRTZXJ2aWNlLmluamVjdCh0aGlzLlJPVVRFUy5yYW5kb21Kb2tlLCBjb250ZXh0KSwgbnVsbCwgdHJ1ZSlcbiAgICAgIC50aGVuKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS52YWx1ZS5qb2tlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLiRxLnJlamVjdCgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHJldHVybiAnRXJyb3IsIGNvdWxkIG5vdCBsb2FkIGpva2UgOi0oJztcbiAgICAgIH0pO1xuICB9XG5cbn1cblxuYXBwLnNlcnZpY2UoJ3F1b3RlU2VydmljZScsIFF1b3RlU2VydmljZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL21haW4vd2ViLXNlcnZpY2VzL3F1b3RlL3F1b3RlLnNlcnZpY2UudHMiLCJhbmd1bGFyLm1vZHVsZSgndHJhbnNsYXRpb25zJykucnVuKFsnZ2V0dGV4dENhdGFsb2cnLCBmdW5jdGlvbiAoZ2V0dGV4dENhdGFsb2cpIHtcbi8qIGpzaGludCAtVzEwMCAqL1xuICAgIGdldHRleHRDYXRhbG9nLnNldFN0cmluZ3MoJ2VuLVVTJywge1wiQWJvdXRcIjpcIkFib3V0XCIsXCJBUFBfTkFNRVwiOlwiV00gMjAxOFwiLFwiSGVsbG8gd29ybGQgIVwiOlwiSGVsbG8gd29ybGQgIVwiLFwiSG9tZVwiOlwiSG9tZVwiLFwiVG9nZ2xlIG5hdmlnYXRpb25cIjpcIlRvZ2dsZSBuYXZpZ2F0aW9uXCIsXCJWZXJzaW9uXCI6XCJWZXJzaW9uXCJ9KTtcbi8qIGpzaGludCArVzEwMCAqL1xufV0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy90cmFuc2xhdGlvbnMvZW4tVVMucG9cbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImFuZ3VsYXIubW9kdWxlKCd0cmFuc2xhdGlvbnMnKS5ydW4oWydnZXR0ZXh0Q2F0YWxvZycsIGZ1bmN0aW9uIChnZXR0ZXh0Q2F0YWxvZykge1xuLyoganNoaW50IC1XMTAwICovXG4gICAgZ2V0dGV4dENhdGFsb2cuc2V0U3RyaW5ncygnZnItRlInLCB7XCJBYm91dFwiOlwiQSBwcm9wb3NcIixcIkFQUF9OQU1FXCI6XCJXTSAyMDE4XCIsXCJIZWxsbyB3b3JsZCAhXCI6XCJCb25qb3VyIGxlIG1vbmRlICFcIixcIkhvbWVcIjpcIkFjY3VlaWxcIixcIlRvZ2dsZSBuYXZpZ2F0aW9uXCI6XCJCYXNjdWxlciBsYSBuYXZpZ2F0aW9uXCIsXCJWZXJzaW9uXCI6XCJWZXJzaW9uXCJ9KTtcbi8qIGpzaGludCArVzEwMCAqL1xufV0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy90cmFuc2xhdGlvbnMvZnItRlIucG9cbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=