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
	        .state('app.einstellungen', {
	        url: '/einstellungen',
	        template: __webpack_require__(22),
	        controller: 'einstellungenController as vm',
	        data: { title: gettext('Einstellungen') }
	    })
	        .state('app.gruppen', {
	        url: '/gruppen',
	        template: __webpack_require__(26),
	        controller: 'gruppeController as vm',
	        data: { title: gettext('Gruppenphase') }
	    })
	        .state('app.ko', {
	        url: '/ko',
	        template: __webpack_require__(24),
	        controller: 'koController as vm',
	        data: { title: gettext('KO-Phase') }
	    })
	        .state('app.finale', {
	        url: '/finale',
	        template: __webpack_require__(25),
	        controller: 'finaleController as vm',
	        data: { title: gettext('Finale') }
	    });
	}
	main_module_1.default.config(routeConfig);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = "<section id=\"shell\" class=\"shell\"><!--Header--><header><nav class=\"navbar navbar-static-top navbar-inverse\"><div class=\"container-fluid\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" ng-click=\"shell.toggleMenu()\" aria-expanded=\"{{!shell.menuHidden}}\"><span class=\"sr-only\" translate>Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"https://github.com/angular-starter-kit\"><span translate>APP_NAME</span></a></div><div class=\"navbar-collapse\" uib-collapse=\"shell.menuHidden\"><ul class=\"nav navbar-nav\"><li ng-class=\"{ active: shell.stateContains('app.home') }\"><a class=\"nav-item text-uppercase\" ui-sref=\"app.home\"><i class=\"fa fa-home\"></i> <span translate>Home</span></a></li><li ng-class=\"{ active: shell.stateContains('app.einstellungen') }\"><a class=\"nav-item text-uppercase\" ui-sref=\"app.einstellungen\"><i class=\"fa fa-question-circle\"></i> <span translate>Einstellungen</span></a></li><li ng-class=\"{ active: shell.stateContains('app.gruppen') }\"><a class=\"nav-item text-uppercase\" ui-sref=\"app.gruppen\"><i class=\"fa fa-question-circle\"></i> <span translate>Gruppenphase</span></a></li><li ng-class=\"{ active: shell.stateContains('app.ko') }\"><a class=\"nav-item text-uppercase\" ui-sref=\"app.ko\"><i class=\"fa fa-question-circle\"></i> <span translate>Ko-Phase</span></a></li><li ng-class=\"{ active: shell.stateContains('app.finale') }\"><a class=\"nav-item text-uppercase\" ui-sref=\"app.finale\"><i class=\"fa fa-question-circle\"></i> <span translate>Finale</span></a></li></ul><div class=\"navbar-form navbar-right\"><div class=\"form-group\" uib-dropdown><button type=\"button\" class=\"btn btn-default\" uib-dropdown-toggle aria-haspopup=\"true\" aria-expanded=\"false\">{{shell.currentLocale.id}} <span class=\"caret\"></span></button><ul class=\"dropdown-menu\"><li ng-repeat=\"language in ::shell.languages\"><a href ng-click=\"setLanguage(language)\">{{language}}</a></li></ul></div></div></div></div></nav></header><!--View content--><div ui-view></div></section>"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = "<section id=\"home-screen\" class=\"home-screen container-fluid\"><div class=\"jumbotron text-center\"><h1><img class=\"logo\" src=\"images/angularjs-logo.png\" alt=\"angularjs logo\"> <span translate>Hello world !</span></h1><div ui-loading=\"vm.isLoading\"></div><p><em class=\"quote\">{{vm.quote}}</em></p></div></section>"

/***/ }),
/* 7 */,
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

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = "<section id=\"home-screen\" class=\"home-screen container-fluid\"><div class=\"jumbotron text-center\"><h1><img class=\"logo\" src=\"images/angularjs-logo.png\" alt=\"angularjs logo\"> <span translate>Hello world !</span></h1><div ui-loading=\"vm.isLoading\"></div><p><em class=\"quote\">{{vm.quote}}</em></p></div></section>"

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

	module.exports = "<section id=\"home-screen\" class=\"home-screen container-fluid\"><div class=\"jumbotron text-center\"><h1><img class=\"logo\" src=\"images/angularjs-logo.png\" alt=\"angularjs logo\"> <span translate>Hello world !</span></h1><div ui-loading=\"vm.isLoading\"></div><p><em class=\"quote\">{{vm.quote}}</em></p></div></section>"

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = "<section id=\"home-screen\" class=\"home-screen container-fluid\"><div class=\"jumbotron text-center\"><h1><img class=\"logo\" src=\"images/angularjs-logo.png\" alt=\"angularjs logo\"> <span translate>Hello world !</span></h1><div ui-loading=\"vm.isLoading\"></div><p><em class=\"quote\">{{vm.quote}}</em></p></div></section>"

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = "<section id=\"home-screen\" class=\"home-screen container-fluid\"><div class=\"jumbotron text-center\"><h1><img class=\"logo\" src=\"images/angularjs-logo.png\" alt=\"angularjs logo\"> <span translate>Hello world !</span></h1><div ui-loading=\"vm.isLoading\"></div><p><em class=\"quote\">{{vm.quote}}</em></p></div></section>"

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2svYm9vdHN0cmFwIGI3NWY1MDczZjcyOGU2N2NjMDI5IiwiLi9zb3VyY2VzL21haW4vbWFpbi5jb25maWcudHMiLCIuL3NvdXJjZXMvbWFpbi9tYWluLm1vZHVsZS50cyIsIi4vc291cmNlcy9tYWluL21haW4uY29uc3RhbnRzLnRzIiwiLi9zb3VyY2VzL21haW4vbWFpbi5yb3V0ZXMudHMiLCIuL3NvdXJjZXMvbWFpbi9zaGVsbC9zaGVsbC5odG1sIiwiLi9zb3VyY2VzL21haW4vc2NyZWVucy9ob21lL2hvbWUuaHRtbCIsIi4vc291cmNlcy9tYWluL21haW4ucnVuLnRzIiwiLi9zb3VyY2VzL21haW4vbWFpbi53cmFwcGVycy50cyIsIi4vc291cmNlcy9tYWluL3NoZWxsL3NoZWxsLmNvbnRyb2xsZXIudHMiLCIuL3NvdXJjZXMvbWFpbi9oZWxwZXJzL2NhY2hlL2NhY2hlLnNlcnZpY2UudHMiLCIuL3NvdXJjZXMvbWFpbi9oZWxwZXJzL2NvbnRleHQvY29udGV4dC5zZXJ2aWNlLnRzIiwiLi9zb3VyY2VzL21haW4vaGVscGVycy9sb2dnZXIvbG9nZ2VyLnRzIiwiLi9zb3VyY2VzL21haW4vaGVscGVycy9yZXN0L3Jlc3Quc2VydmljZS50cyIsIi4vc291cmNlcy9tYWluL3NjcmVlbnMvYWJvdXQvYWJvdXQuY29udHJvbGxlci50cyIsIi4vc291cmNlcy9tYWluL3NjcmVlbnMvaG9tZS9ob21lLmNvbnRyb2xsZXIudHMiLCIuL3NvdXJjZXMvbWFpbi91aS1jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5kaXJlY3RpdmUudHMiLCIuL3NvdXJjZXMvbWFpbi91aS1jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5odG1sIiwiLi9zb3VyY2VzL21haW4vd2ViLXNlcnZpY2VzL3F1b3RlL3F1b3RlLnNlcnZpY2UudHMiLCIuL3NvdXJjZXMvdHJhbnNsYXRpb25zL2VuLVVTLnBvIiwiLi9zb3VyY2VzL3RyYW5zbGF0aW9ucy9mci1GUi5wbyIsIi4vc291cmNlcy9tYWluL3NjcmVlbnMvZWluc3RlbGx1bmdlbi9laW5zdGVsbHVuZ2VuLmh0bWwiLCIuL3NvdXJjZXMvbWFpbi9zY3JlZW5zL2tvL2tvLmh0bWwiLCIuL3NvdXJjZXMvbWFpbi9zY3JlZW5zL2ZpbmFsZS9maW5hbGUuaHRtbCIsIi4vc291cmNlcy9tYWluL3NjcmVlbnMvZ3J1cHBlbi9ncnVwcGVuLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0dDdENBO0FBQ0EsUUFBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFEdEQ7Ozs7QUFPQSxxQkFBb0IsVUFDQSxrQkFDQSxtQkFDQSxZQUNBLFFBQTBCOztLQUc1QyxTQUFTLFVBQVUsZ0RBQXFCLFVBQUMsV0FBZ0IsV0FBYztTQUNyRSxPQUFPLFVBQUMsV0FBZ0IsT0FBVTthQUNoQyxVQUFVLFdBQVc7YUFFckIsSUFBSSxTQUFrQixVQUFVLElBQUksVUFBVSxVQUFVO2FBQ3hELE9BQU8sTUFBTSxhQUFhLFFBQVEsT0FBTyxRQUFRLE1BQU07Ozs7S0FLM0QsU0FBUyxVQUFVLHNCQUFRLFVBQUMsV0FBYztTQUN4QyxJQUFJLENBQUMsT0FBTyxZQUFZLE9BQU87YUFDN0IsVUFBVSxNQUFNLFFBQVE7YUFDeEIsVUFBVSxRQUFRLFFBQVE7O1NBRTVCLE9BQU87OztLQUlULGlCQUFpQixpQkFBaUIsT0FBTyxZQUFZOztLQUdyRCxrQkFBa0IsV0FBVzs7S0FHN0IsV0FBVywyQkFBMkI7O0FBR3hDLHVCQUFJLE9BQU87Ozs7Ozs7QUMxQ1gsYUFBWSxDQUFDOztBQUViLDRDQUEyQztBQUMzQyxRQUFPLENB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LEVBQUUsY0FBTSxXQUFJLGdCQUFnQixFQUFFLEVBQXRCLENBQXNCLENBQUMsQ0FBQzs7Ozs7OztBQ3ZCekQsc0hBQXFILFNBQVMsYzs7Ozs7O0FDQTlIO0FBQ0EsUUFBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFEdEQ7Ozs7O29FQU9BO0tBTUUsc0JBQW9CLElBQ0EsYUFDQSxnQkFBOEI7U0FGOUI7U0FDQTtTQUNBO1NBTlosY0FBUzthQUNmLFlBQVk7Ozs7Ozs7Ozs7S0FlZCxpREFBYyxTQUFZO1NBQTFCO1NBQ0UsT0FBTyxLQUFLO2NBQ1QsSUFBSSxLQUFLLGVBQWUsT0FBTyxLQUFLLE9BQU8sWUFBWSxVQUFVLE1BQU07Y0FDdkUsS0FBSyxVQUFDLFVBQWE7YUFDbEIsSUFBSSxTQUFTLFFBQVEsU0FBUyxLQUFLLE9BQU87aUJBQ3hDLE9BQU8sU0FBUyxLQUFLLE1BQU07O2FBRTdCLE9BQU8sTUFBSyxHQUFHOztjQUVoQixNQUFNO2FBQ0wsT0FBTzs7O0tBSWY7O0FBaENhO0FBa0NiLHVCQUFJLFFBQVEsZ0JBQWdCOzs7Ozs7O0FDekM1QjtBQUNBO0FBQ0EseUNBQXdDLCtJQUErSTtBQUN2TDtBQUNBLEVBQUMsRzs7Ozs7O0FDSkQ7QUFDQTtBQUNBLHlDQUF3QywrSkFBK0o7QUFDdk07QUFDQSxFQUFDLEc7Ozs7OztBQ0pELHFUQUFvVCxVQUFVLDBCOzs7Ozs7O0FDQTlULHFUQUFvVCxVQUFVLDBCOzs7Ozs7QUNBOVQscVRBQW9ULFVBQVUsMEI7Ozs7OztBQ0E5VCxxVEFBb1QsVUFBVSwwQiIsImZpbGUiOiJhcHAudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiNzVmNTA3M2Y3MjhlNjdjYzAyOSIsImltcG9ydCBhcHAgZnJvbSAnbWFpbi5tb2R1bGUnO1xuaW1wb3J0IHtJQXBwbGljYXRpb25Db25maWd9IGZyb20gJ21haW4uY29uc3RhbnRzJztcbmltcG9ydCB7SUxvZ2dlcn0gZnJvbSAnaGVscGVycy9sb2dnZXIvbG9nZ2VyJztcblxuLyoqXG4gKiBDb25maWd1cmVzIHRoZSBhcHBsaWNhdGlvbiAoYmVmb3JlIHJ1bm5pbmcpLlxuICovXG5mdW5jdGlvbiBtYWluQ29uZmlnKCRwcm92aWRlOiBuZy5hdXRvLklQcm92aWRlU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICAgJGNvbXBpbGVQcm92aWRlcjogbmcuSUNvbXBpbGVQcm92aWRlcixcbiAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uUHJvdmlkZXI6IG5nLklMb2NhdGlvblByb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgICAkcVByb3ZpZGVyOiBhbnksXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZzogSUFwcGxpY2F0aW9uQ29uZmlnKSB7XG5cbiAgLy8gRXh0ZW5kIHRoZSAkZXhjZXB0aW9uSGFuZGxlciBzZXJ2aWNlIHRvIG91dHB1dCBsb2dzLlxuICAkcHJvdmlkZS5kZWNvcmF0b3IoJyRleGNlcHRpb25IYW5kbGVyJywgKCRkZWxlZ2F0ZTogYW55LCAkaW5qZWN0b3I6IGFueSkgPT4ge1xuICAgIHJldHVybiAoZXhjZXB0aW9uOiBhbnksIGNhdXNlOiBhbnkpID0+IHtcbiAgICAgICRkZWxlZ2F0ZShleGNlcHRpb24sIGNhdXNlKTtcblxuICAgICAgbGV0IGxvZ2dlcjogSUxvZ2dlciA9ICRpbmplY3Rvci5nZXQoJ2xvZ2dlcicpLmdldExvZ2dlcignZXhjZXB0aW9uSGFuZGxlcicpO1xuICAgICAgbG9nZ2VyLmVycm9yKGV4Y2VwdGlvbiArIChjYXVzZSA/ICcgKCcgKyBjYXVzZSArICcpJyA6ICcnKSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gRGlzYWJsZSBkZWJ1ZyBsb2dzIGluIHByb2R1Y3Rpb24gdmVyc2lvblxuICAkcHJvdmlkZS5kZWNvcmF0b3IoJyRsb2cnLCAoJGRlbGVnYXRlOiBhbnkpID0+IHtcbiAgICBpZiAoIWNvbmZpZy5lbnZpcm9ubWVudC5kZWJ1Zykge1xuICAgICAgJGRlbGVnYXRlLmxvZyA9IGFuZ3VsYXIubm9vcDtcbiAgICAgICRkZWxlZ2F0ZS5kZWJ1ZyA9IGFuZ3VsYXIubm9vcDtcbiAgICB9XG4gICAgcmV0dXJuICRkZWxlZ2F0ZTtcbiAgfSk7XG5cbiAgLy8gRGlzYWJsZSBhbmd1bGFyIGRlYnVnIGluZm8gaW4gcHJvZHVjdGlvbiB2ZXJzaW9uXG4gICRjb21waWxlUHJvdmlkZXIuZGVidWdJbmZvRW5hYmxlZChjb25maWcuZW52aXJvbm1lbnQuZGVidWcpO1xuXG4gIC8vIFVzZSBubyBoYXNoIHByZWZpeCBmb3Igcm91dGluZ1xuICAkbG9jYXRpb25Qcm92aWRlci5oYXNoUHJlZml4KCcnKTtcblxuICAvLyBEaXNhYmxlIGV4Y2VwdGlvbiBvbiB1bmhhbmRsZWQgcmVqZWN0aW9ucyAod2UgaGF2ZSBvdXIgb3duIGhhbmRsZXIpXG4gICRxUHJvdmlkZXIuZXJyb3JPblVuaGFuZGxlZFJlamVjdGlvbnMoZmFsc2UpO1xufVxuXG5hcHAuY29uZmlnKG1haW5Db25maWcpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL21haW4vbWFpbi5jb25maWcudHMiLCIndXNlIHN0cmljdCc7XG5cbi8vIFRyYW5zbGF0aW9ucyBhcmUgaW5qZWN0ZWQgYXQgYnVpbGQgcGhhc2VcbmFuZ3VsYXIubW9kdWxlKCd0cmFuc2xhdGlvbnMnLCBbXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXG4gICd0cmFuc2xhdGlvbnMnLFxuICAnZ2V0dGV4dCcsXG4gICduZ0FuaW1hdGUnLFxuICAnbmdTYW5pdGl6ZScsXG4gICd1aS5yb3V0ZXInLFxuICAndWkuYm9vdHN0cmFwJ1xuXSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zb3VyY2VzL21haW4vbWFpbi5tb2R1bGUudHMiLCJpbXBvcnQgYXBwIGZyb20gJ21haW4ubW9kdWxlJztcbmltcG9ydCB7SVNlcnZlckNvbmZpZ30gZnJvbSAnaGVscGVycy9yZXN0L3Jlc3Quc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcGxpY2F0aW9uQ29uZmlnIHtcbiAgdmVyc2lvbjogc3RyaW5nO1xuICBlbnZpcm9ubWVudDogSUFwcGxpY2F0aW9uRW52aXJvbm1lbnQ7XG4gIHN1cHBvcnRlZExhbmd1YWdlczogQXJyYXk8c3RyaW5nPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQXBwbGljYXRpb25FbnZpcm9ubWVudCB7XG4gIGRlYnVnOiBib29sZWFuO1xuICBzZXJ2ZXI6IElTZXJ2ZXJDb25maWc7XG59XG5cbi8vIERvIG5vdCByZW1vdmUgdGhlIGNvbW1lbnRzIGJlbG93LCBvciBjaGFuZ2UgdGhlIHZhbHVlcy4gSXQncyB0aGUgbWFya2VycyB1c2VkIGJ5IGd1bHAgYnVpbGQgdGFzayB0byBjaGFuZ2UgdGhlXG4vLyB2YWx1ZSBvZiB0aGUgY29uZmlnIGNvbnN0YW50IHdoZW4gYnVpbGRpbmcgdGhlIGFwcGxpY2F0aW9uLCB3aGlsZSByZW1vdmluZyB0aGUgY29kZSBiZWxvdyBmb3IgYWxsIGVudmlyb25tZW50cy5cbi8vIHJlcGxhY2U6ZW52aXJvbm1lbnRcbmxldCBlbnZpcm9ubWVudCA9IHtcbiAgbG9jYWw6IHtcbiAgICBkZWJ1ZzogdHJ1ZSxcblxuICAgIC8vIFJFU1QgYmFja2VuZCBjb25maWd1cmF0aW9uLCB1c2VkIGZvciBhbGwgd2ViIHNlcnZpY2VzIHVzaW5nIHJlc3RTZXJ2aWNlXG4gICAgc2VydmVyOiB7XG4gICAgICB1cmw6ICcnLFxuICAgICAgcm91dGU6ICdhcGknXG4gICAgfVxuICB9LFxuICBwcm9kdWN0aW9uOiB7XG4gICAgZGVidWc6IGZhbHNlLFxuICAgIHNlcnZlcjoge1xuICAgICAgdXJsOiAnJyxcbiAgICAgIHJvdXRlOiAnYXBpJ1xuICAgIH1cbiAgfVxufTtcbi8vIGVuZHJlcGxhY2VcblxuLyoqXG4gKiBEZWZpbmVzIGFwcC1sZXZlbCBjb25maWd1cmF0aW9uLlxuICovXG5sZXQgY29uZmlnOiBJQXBwbGljYXRpb25Db25maWcgPSB7XG5cbiAgLy8gRG8gbm90IHJlbW92ZSB0aGUgY29tbWVudHMgYmVsb3csIG9yIGNoYW5nZSB0aGUgdmFsdWVzLiBJdCdzIHRoZSBtYXJrZXJzIHVzZWQgYnkgZ3VscCBidWlsZCB0YXNrIHRvIGluamVjdCBhcHBcbiAgLy8gdmVyc2lvbiBmcm9tIHBhY2thZ2UuanNvbiBhbmQgZW52aXJvbm1lbnQgdmFsdWVzLlxuICAvLyByZXBsYWNlOmNvbnN0YW50XG4gIHZlcnNpb246ICdkZXYnLFxuICBlbnZpcm9ubWVudDogZW52aXJvbm1lbnQubG9jYWwsXG4gIC8vIGVuZHJlcGxhY2VcblxuICAvLyBTdXBwb3J0ZWQgbGFuZ3VhZ2VzXG4gIHN1cHBvcnRlZExhbmd1YWdlczogW1xuICAgICdlbi1VUycsXG4gICAgJ2ZyLUZSJ1xuICBdXG5cbn07XG5cbmFwcC5jb25zdGFudCgnY29uZmlnJywgY29uZmlnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NvdXJjZXMvbWFpbi9tYWluLmNvbnN0YW50cy50cyIsImltcG9ydCBhcHAgZnJvbSAnbWFpbi5tb2R1bGUnO1xuXG4vKipcbiAqIENvbmZpZ3VyZXMgdGhlIGFwcGxpY2F0aW9uIHJvdXRlcy5cbiAqL1xuZnVuY3Rpb24gcm91dGVDb25maWcoJHN0YXRlUHJvdmlkZXI6IGFuZ3VsYXIudWkuSVN0YXRlUHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXI6IGFuZ3VsYXIudWkuSVVybFJvdXRlclByb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgICAgZ2V0dGV4dDogYW5ndWxhci5nZXR0ZXh0LmdldHRleHRGdW5jdGlvbikge1xuXG4gIC8vIFJvdXRlcyBjb25maWd1cmF0aW9uXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcblxuICAkc3RhdGVQcm92aWRlclxuICAgIC5zdGF0ZSgnYXBwJywge1xuICAgICAgdGVtcGxhdGU6IDxzdHJpbmc+cmVxdWlyZSgnc2hlbGwvc2hlbGwuaHRtbCcpLFxuICAgICAgY29udHJvbGxlcjogJ3NoZWxsQ29udHJvbGxlciBhcyBzaGVsbCdcbiAgICB9KVxuICAgICAgLnN0YXRlKCdhcHAuaG9tZScsIHtcbiAgICAgIHVybDogJy8nLFxuICAgICAgdGVtcGxhdGU6IDxzdHJpbmc+cmVxdWlyZSgnc2NyZWVucy9ob21lL2hvbWUuaHRtbCcpLFxuICAgICAgY29udHJvbGxlcjogJ2hvbWVDb250cm9sbGVyIGFzIHZtJyxcbiAgICAgIGRhdGE6IHt0aXRsZTogZ2V0dGV4dCgnSG9tZScpfVxuICAgIH0pXG4gICAgLnN0YXRlKCdhcHAuZWluc3RlbGx1bmdlbicsIHtcbiAgICAgIHVybDogJy9laW5zdGVsbHVuZ2VuJyxcbiAgICAgIHRlbXBsYXRlOiA8c3RyaW5nPnJlcXVpcmUoJ3NjcmVlbnMvZWluc3RlbGx1bmdlbi9laW5zdGVsbHVuZ2VuLmh0bWwnKSxcbiAgICAgIGNvbnRyb2xsZXI6ICdlaW5zdGVsbHVuZ2VuQ29udHJvbGxlciBhcyB2bScsXG4gICAgICBkYXRhOiB7dGl0bGU6IGdldHRleHQoJ0VpbnN0ZWxsdW5nZW4nKX1cbiAgICB9KVxuICAgIC5zdGF0ZSgnYXBwLmdydXBwZW4nLCB7XG4gICAgICB1cmw6ICcvZ3J1cHBlbicsXG4gICAgICB0ZW1wbGF0ZTogPHN0cmluZz5yZXF1aXJlKCdzY3JlZW5zL2dydXBwZW4vZ3J1cHBlbi5odG1sJyksXG4gICAgICBjb250cm9sbGVyOiAnZ3J1cHBlQ29udHJvbGxlciBhcyB2bScsXG4gICAgICBkYXRhOiB7dGl0bGU6IGdldHRleHQoJ0dydXBwZW5waGFzZScpfVxuICAgIH0pXG4gICAgLnN0YXRlKCdhcHAua28nLCB7XG4gICAgICB1cmw6ICcva28nLFxuICAgICAgdGVtcGxhdGU6IDxzdHJpbmc+cmVxdWlyZSgnc2NyZWVucy9rby9rby5odG1sJyksXG4gICAgICBjb250cm9sbGVyOiAna29Db250cm9sbGVyIGFzIHZtJyxcbiAgICAgIGRhdGE6IHt0aXRsZTogZ2V0dGV4dCgnS08tUGhhc2UnKX1cbiAgICB9KVxuICAgICAuc3RhdGUoJ2FwcC5maW5hbGUnLCB7XG4gICAgICB1cmw6ICcvZmluYWxlJyxcbiAgICAgIHRlbXBsYXRlOiA8c3RyaW5nPnJlcXVpcmUoJ3NjcmVlbnMvZmluYWxlL2ZpbmFsZS5odG1sJyksXG4gICAgICBjb250cm9sbGVyOiAnZmluYWxlQ29udHJvbGxlciBhcyB2bScsXG4gICAgICBkYXRhOiB7dGl0bGU6IGdldHRleHQoJ0ZpbmFsZScpfVxuICAgIH0pO1xuXG59XG5cbmFwcC5jb25maWcocm91dGVDb25maWcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9tYWluL21haW4ucm91dGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzZWN0aW9uIGlkPVxcXCJzaGVsbFxcXCIgY2xhc3M9XFxcInNoZWxsXFxcIj48IS0tSGVhZGVyLS0+PGhlYWRlcj48bmF2IGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLXN0YXRpYy10b3AgbmF2YmFyLWludmVyc2VcXFwiPjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+PGRpdiBjbGFzcz1cXFwibmF2YmFyLWhlYWRlclxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlXFxcIiBuZy1jbGljaz1cXFwic2hlbGwudG9nZ2xlTWVudSgpXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJ7eyFzaGVsbC5tZW51SGlkZGVufX1cXFwiPjxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIiB0cmFuc2xhdGU+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+PC9idXR0b24+IDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXN0YXJ0ZXIta2l0XFxcIj48c3BhbiB0cmFuc2xhdGU+QVBQX05BTUU8L3NwYW4+PC9hPjwvZGl2PjxkaXYgY2xhc3M9XFxcIm5hdmJhci1jb2xsYXBzZVxcXCIgdWliLWNvbGxhcHNlPVxcXCJzaGVsbC5tZW51SGlkZGVuXFxcIj48dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2XFxcIj48bGkgbmctY2xhc3M9XFxcInsgYWN0aXZlOiBzaGVsbC5zdGF0ZUNvbnRhaW5zKCdhcHAuaG9tZScpIH1cXFwiPjxhIGNsYXNzPVxcXCJuYXYtaXRlbSB0ZXh0LXVwcGVyY2FzZVxcXCIgdWktc3JlZj1cXFwiYXBwLmhvbWVcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1ob21lXFxcIj48L2k+IDxzcGFuIHRyYW5zbGF0ZT5Ib21lPC9zcGFuPjwvYT48L2xpPjxsaSBuZy1jbGFzcz1cXFwieyBhY3RpdmU6IHNoZWxsLnN0YXRlQ29udGFpbnMoJ2FwcC5laW5zdGVsbHVuZ2VuJykgfVxcXCI+PGEgY2xhc3M9XFxcIm5hdi1pdGVtIHRleHQtdXBwZXJjYXNlXFxcIiB1aS1zcmVmPVxcXCJhcHAuZWluc3RlbGx1bmdlblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXF1ZXN0aW9uLWNpcmNsZVxcXCI+PC9pPiA8c3BhbiB0cmFuc2xhdGU+RWluc3RlbGx1bmdlbjwvc3Bhbj48L2E+PC9saT48bGkgbmctY2xhc3M9XFxcInsgYWN0aXZlOiBzaGVsbC5zdGF0ZUNvbnRhaW5zKCdhcHAuZ3J1cHBlbicpIH1cXFwiPjxhIGNsYXNzPVxcXCJuYXYtaXRlbSB0ZXh0LXVwcGVyY2FzZVxcXCIgdWktc3JlZj1cXFwiYXBwLmdydXBwZW5cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1xdWVzdGlvbi1jaXJjbGVcXFwiPjwvaT4gPHNwYW4gdHJhbnNsYXRlPkdydXBwZW5waGFzZTwvc3Bhbj48L2E+PC9saT48bGkgbmctY2xhc3M9XFxcInsgYWN0aXZlOiBzaGVsbC5zdGF0ZUNvbnRhaW5zKCdhcHAua28nKSB9XFxcIj48YSBjbGFzcz1cXFwibmF2LWl0ZW0gdGV4dC11cHBlcmNhc2VcXFwiIHVpLXNyZWY9XFxcImFwcC5rb1xcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXF1ZXN0aW9uLWNpcmNsZVxcXCI+PC9pPiA8c3BhbiB0cmFuc2xhdGU+S28tUGhhc2U8L3NwYW4+PC9hPjwvbGk+PGxpIG5nLWNsYXNzPVxcXCJ7IGFjdGl2ZTogc2hlbGwuc3RhdGVDb250YWlucygnYXBwLmZpbmFsZScpIH1cXFwiPjxhIGNsYXNzPVxcXCJuYXYtaXRlbSB0ZXh0LXVwcGVyY2FzZVxcXCIgdWktc3JlZj1cXFwiYXBwLmZpbmFsZVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXF1ZXN0aW9uLWNpcmNsZVxcXCI+PC9pPiA8c3BhbiB0cmFuc2xhdGU+RmluYWxlPC9zcGFuPjwvYT48L2xpPjwvdWw+PGRpdiBjbGFzcz1cXFwibmF2YmFyLWZvcm0gbmF2YmFyLXJpZ2h0XFxcIj48ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiB1aWItZHJvcGRvd24+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHVpYi1kcm9wZG93bi10b2dnbGUgYXJpYS1oYXNwb3B1cD1cXFwidHJ1ZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPnt7c2hlbGwuY3VycmVudExvY2FsZS5pZH19IDxzcGFuIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9zcGFuPjwvYnV0dG9uPjx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+PGxpIG5nLXJlcGVhdD1cXFwibGFuZ3VhZ2UgaW4gOjpzaGVsbC5sYW5ndWFnZXNcXFwiPjxhIGhyZWYgbmctY2xpY2s9XFxcInNldExhbmd1YWdlKGxhbmd1YWdlKVxcXCI+e3tsYW5ndWFnZX19PC9hPjwvbGk+PC91bD48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L25hdj48L2hlYWRlcj48IS0tVmlldyBjb250ZW50LS0+PGRpdiB1aS12aWV3PjwvZGl2Pjwvc2VjdGlvbj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy9tYWluL3NoZWxsL3NoZWxsLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzZWN0aW9uIGlkPVxcXCJob21lLXNjcmVlblxcXCIgY2xhc3M9XFxcImhvbWUtc2NyZWVuIGNvbnRhaW5lci1mbHVpZFxcXCI+PGRpdiBjbGFzcz1cXFwianVtYm90cm9uIHRleHQtY2VudGVyXFxcIj48aDE+PGltZyBjbGFzcz1cXFwibG9nb1xcXCIgc3JjPVxcXCJpbWFnZXMvYW5ndWxhcmpzLWxvZ28ucG5nXFxcIiBhbHQ9XFxcImFuZ3VsYXJqcyBsb2dvXFxcIj4gPHNwYW4gdHJhbnNsYXRlPkhlbGxvIHdvcmxkICE8L3NwYW4+PC9oMT48ZGl2IHVpLWxvYWRpbmc9XFxcInZtLmlzTG9hZGluZ1xcXCI+PC9kaXY+PHA+PGVtIGNsYXNzPVxcXCJxdW90ZVxcXCI+e3t2bS5xdW90ZX19PC9lbT48L3A+PC9kaXY+PC9zZWN0aW9uPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL21haW4vc2NyZWVucy9ob21lL2hvbWUuaHRtbFxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYXBwIGZyb20gJ21haW4ubW9kdWxlJztcbmltcG9ydCB7SUFwcGxpY2F0aW9uQ29uZmlnfSBmcm9tICdtYWluLmNvbnN0YW50cyc7XG5pbXBvcnQge1Jlc3RTZXJ2aWNlfSBmcm9tICdoZWxwZXJzL3Jlc3QvcmVzdC5zZXJ2aWNlJztcblxuLyoqXG4gKiBFbnRyeSBwb2ludCBvZiB0aGUgYXBwbGljYXRpb24uXG4gKiBJbml0aWFsaXplcyBhcHBsaWNhdGlvbiBhbmQgcm9vdCBjb250cm9sbGVyLlxuICovXG5mdW5jdGlvbiBtYWluKCR3aW5kb3c6IG5nLklXaW5kb3dTZXJ2aWNlLFxuICAgICAgICAgICAgICAkbG9jYWxlOiBuZy5JTG9jYWxlU2VydmljZSxcbiAgICAgICAgICAgICAgJHJvb3RTY29wZTogYW55LFxuICAgICAgICAgICAgICAkc3RhdGU6IGFuZ3VsYXIudWkuSVN0YXRlU2VydmljZSxcbiAgICAgICAgICAgICAgZ2V0dGV4dENhdGFsb2c6IGFuZ3VsYXIuZ2V0dGV4dC5nZXR0ZXh0Q2F0YWxvZyxcbiAgICAgICAgICAgICAgXzogXy5Mb0Rhc2hTdGF0aWMsXG4gICAgICAgICAgICAgIGNvbmZpZzogSUFwcGxpY2F0aW9uQ29uZmlnLFxuICAgICAgICAgICAgICByZXN0U2VydmljZTogUmVzdFNlcnZpY2UpIHtcblxuICAvKlxuICAgKiBSb290IHZpZXcgbW9kZWxcbiAgICovXG5cbiAgbGV0IHZtID0gJHJvb3RTY29wZTtcblxuICB2bS5wYWdlVGl0bGUgPSAnJztcblxuICAvKipcbiAgICogVXRpbGl0eSBtZXRob2QgdG8gc2V0IHRoZSBsYW5ndWFnZSBpbiB0aGUgdG9vbHMgcmVxdWlyaW5nIGl0LlxuICAgKiBUaGUgY3VycmVudCBsYW5ndWFnZSBpcyBzYXZlZCB0byB0aGUgbG9jYWwgc3RvcmFnZS5cbiAgICogSWYgbm8gcGFyYW1ldGVyIGlzIHNwZWNpZmllZCwgdGhlIGxhbmd1YWdlIGlzIGxvYWRlZCBmcm9tIGxvY2FsIHN0b3JhZ2UgKGlmIHBvc3NpYmxlKS5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBsYW5ndWFnZSBUaGUgSUVURiBsYW5ndWFnZSB0YWcuXG4gICAqL1xuICB2bS5zZXRMYW5ndWFnZSA9IGZ1bmN0aW9uKGxhbmd1YWdlPzogc3RyaW5nKSB7XG4gICAgbGFuZ3VhZ2UgPSBsYW5ndWFnZSB8fCAkd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5ndWFnZScpO1xuICAgIGxldCBpc1N1cHBvcnRlZExhbmd1YWdlID0gXy5pbmNsdWRlcyhjb25maWcuc3VwcG9ydGVkTGFuZ3VhZ2VzLCBsYW5ndWFnZSk7XG5cbiAgICAvLyBGYWxsYmFjayBpZiBsYW5ndWFnZSBpcyBub3Qgc3VwcG9ydGVkXG4gICAgaWYgKCFpc1N1cHBvcnRlZExhbmd1YWdlKSB7XG4gICAgICBsYW5ndWFnZSA9ICdlbi1VUyc7XG4gICAgfVxuXG4gICAgLy8gQ29uZmlndXJlIHRyYW5zbGF0aW9uIHdpdGggZ2V0dGV4dFxuICAgIGdldHRleHRDYXRhbG9nLnNldEN1cnJlbnRMYW5ndWFnZShsYW5ndWFnZSk7XG4gICAgJGxvY2FsZS5pZCA9IGxhbmd1YWdlO1xuICAgICR3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmd1YWdlJywgbGFuZ3VhZ2UpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRpdGxlIG9uIHZpZXcgY2hhbmdlLlxuICAgKi9cbiAgdm0uJG9uKCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgKGV2ZW50OiBhbnksIHRvU3RhdGU6IGFuZ3VsYXIudWkuSVN0YXRlKSA9PiB7XG4gICAgdXBkYXRlVGl0bGUodG9TdGF0ZS5kYXRhID8gdG9TdGF0ZS5kYXRhLnRpdGxlIDogbnVsbCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRpdGxlIG9uIGxhbmd1YWdlIGNoYW5nZS5cbiAgICovXG4gIHZtLiRvbignZ2V0dGV4dExhbmd1YWdlQ2hhbmdlZCcsICgpID0+IHtcbiAgICB1cGRhdGVUaXRsZSgkc3RhdGUuY3VycmVudC5kYXRhID8gJHN0YXRlLmN1cnJlbnQuZGF0YS50aXRsZSA6IG51bGwpO1xuICB9KTtcblxuICBpbml0KCk7XG5cbiAgLypcbiAgICogSW50ZXJuYWxcbiAgICovXG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSByb290IGNvbnRyb2xsZXIuXG4gICAqL1xuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIC8vIEVuYWJsZSBkZWJ1ZyBtb2RlIGZvciB0cmFuc2xhdGlvbnNcbiAgICBnZXR0ZXh0Q2F0YWxvZy5kZWJ1ZyA9IGNvbmZpZy5lbnZpcm9ubWVudC5kZWJ1ZztcblxuICAgIHZtLnNldExhbmd1YWdlKCk7XG5cbiAgICAvLyBTZXQgUkVTVCBzZXJ2ZXIgY29uZmlndXJhdGlvblxuICAgIHJlc3RTZXJ2aWNlLnNldFNlcnZlcihjb25maWcuZW52aXJvbm1lbnQuc2VydmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSB0aXRsZS5cbiAgICogQHBhcmFtIHs/c3RyaW5nPX0gc3RhdGVUaXRsZSBUaXRsZSBvZiBjdXJyZW50IHN0YXRlLCB0byBiZSB0cmFuc2xhdGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlVGl0bGUoc3RhdGVUaXRsZT86IHN0cmluZykge1xuICAgIHZtLnBhZ2VUaXRsZSA9IGdldHRleHRDYXRhbG9nLmdldFN0cmluZygnQVBQX05BTUUnKTtcblxuICAgIGlmIChzdGF0ZVRpdGxlKSB7XG4gICAgICB2bS5wYWdlVGl0bGUgKz0gJyB8ICcgKyBnZXR0ZXh0Q2F0YWxvZy5nZXRTdHJpbmcoc3RhdGVUaXRsZSk7XG4gICAgfVxuICB9XG5cbn1cblxuYXBwLnJ1bihtYWluKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvbWFpbi9tYWluLnJ1bi50cyIsImltcG9ydCBhcHAgZnJvbSAnbWFpbi5tb2R1bGUnO1xuXG4vKipcbiAqIFdyYXBzIGV4dGVybmFsIGdsb2JhbCBsaWJyYXJpZXMgaW50byBBbmd1bGFySlMgaW5qZWN0aW9uIHN5c3RlbS5cbiAqIGdsb2JhbCB3aW5kb3c6IGZhbHNlXG4gKi9cbmFwcC5jb25zdGFudCgnXycsIF8pOyAvLyBMb2Rhc2hcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NvdXJjZXMvbWFpbi9tYWluLndyYXBwZXJzLnRzIiwiaW1wb3J0IGFwcCBmcm9tICdtYWluLm1vZHVsZSc7XG5pbXBvcnQge0lBcHBsaWNhdGlvbkNvbmZpZ30gZnJvbSAnbWFpbi5jb25zdGFudHMnO1xuaW1wb3J0IHtJTG9nZ2VyLCBMb2dnZXJTZXJ2aWNlfSBmcm9tICdoZWxwZXJzL2xvZ2dlci9sb2dnZXInO1xuXG4vKipcbiAqIERpc3BsYXlzIHRoZSBTUEEgc2hlbGwuXG4gKiBUaGUgc2hlbGwgY29udGFpbnMgdGhlIHNoYXJlZCBwYXJ0cyBvZiB0aGUgYXBwbGljYXRpb246IGhlYWRlciwgZm9vdGVyLCBuYXZpZ2F0aW9uLi4uXG4gKi9cbmV4cG9ydCBjbGFzcyBTaGVsbENvbnRyb2xsZXIge1xuXG4gIGN1cnJlbnRMb2NhbGU6IG5nLklMb2NhbGVTZXJ2aWNlO1xuICBsYW5ndWFnZXM6IHN0cmluZ1tdO1xuICBtZW51SGlkZGVuOiBib29sZWFuO1xuXG4gIHByaXZhdGUgbG9nZ2VyOiBJTG9nZ2VyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgJHN0YXRlOiBuZy51aS5JU3RhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAkbG9jYWxlOiBuZy5JTG9jYWxlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfOiBfLkxvRGFzaFN0YXRpYyxcbiAgICAgICAgICAgICAgY29uZmlnOiBJQXBwbGljYXRpb25Db25maWcsXG4gICAgICAgICAgICAgIGxvZ2dlcjogTG9nZ2VyU2VydmljZSkge1xuXG4gICAgdGhpcy5jdXJyZW50TG9jYWxlID0gJGxvY2FsZTtcbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlci5nZXRMb2dnZXIoJ3NoZWxsJyk7XG4gICAgdGhpcy5sYW5ndWFnZXMgPSBjb25maWcuc3VwcG9ydGVkTGFuZ3VhZ2VzO1xuICAgIHRoaXMubWVudUhpZGRlbiA9IHRydWU7XG5cbiAgICB0aGlzLmxvZ2dlci5sb2coJ2luaXQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIG5hdmlnYXRpb24gbWVudSB2aXNpYmlsaXR5IG9uIG1vYmlsZSBwbGF0Zm9ybXMuXG4gICAqL1xuICB0b2dnbGVNZW51KCkge1xuICAgIHRoaXMubWVudUhpZGRlbiA9ICF0aGlzLm1lbnVIaWRkZW47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBzcGVjaWZpZWQgbmFtZSBpcyBjb250YWluZWQgaW4gdGhlIGN1cnJlbnQgbmF2aWdhdGlvbiBzdGF0ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIHN0YXRlIG5hbWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBuYW1lIGlzIGNvbnRhaW5lZCBpbiB0aGUgY3VycmVudCBuYXZpZ2F0aW9uIHN0YXRlLlxuICAgKi9cbiAgc3RhdGVDb250YWlucyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fLnN0YXJ0c1dpdGgodGhpcy4kc3RhdGUuY3VycmVudC5uYW1lLCBuYW1lKTtcbiAgfVxuXG59XG5cbmFwcC5jb250cm9sbGVyKCdzaGVsbENvbnRyb2xsZXInLCBTaGVsbENvbnRyb2xsZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9tYWluL3NoZWxsL3NoZWxsLmNvbnRyb2xsZXIudHMiLCJpbXBvcnQgYXBwIGZyb20gJ21haW4ubW9kdWxlJztcbmltcG9ydCB7SUxvZ2dlciwgTG9nZ2VyU2VydmljZX0gZnJvbSAnaGVscGVycy9sb2dnZXIvbG9nZ2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ2FjaGVEYXRhIHtcbiAgZGF0ZTogRGF0ZTtcbiAgZGF0YTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDYWNoZSB7XG4gIFtuYW1lOiBzdHJpbmddOiBJQ2FjaGVEYXRhO1xufVxuXG4vKipcbiAqIENhY2hlIHNlcnZpY2U6IG1hbmFnZXMgY2FjaGVkIGRhdGEgZm9yIEdFVCByZXF1ZXN0cy5cbiAqIEJ5IGRlZmF1bHQsIHRoZSBjYWNoZSBpcyBvbmx5IHBlcnNpc3RlZCBpbiBtZW1vcnksIGJ1dCB5b3UgY2FuIGNoYW5nZSB0aGlzIGJlaGF2aW9yIHVzaW5nIHRoZSBzZXRQZXJzaXN0ZW5jZSgpXG4gKiBtZXRob2QuXG4gKi9cbmV4cG9ydCBjbGFzcyBDYWNoZVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgbG9nZ2VyOiBJTG9nZ2VyO1xuICBwcml2YXRlIGNhY2hlZERhdGE6IElDYWNoZSA9IHt9O1xuICBwcml2YXRlIHN0b3JhZ2U6IGFueSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSAkd2luZG93OiBuZy5JV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlci5nZXRMb2dnZXIoJ2NhY2hlU2VydmljZScpO1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgc2VydmljZS5cbiAgICAgKi9cbiAgICB0aGlzLmxvYWRDYWNoZURhdGEoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjYWNoZSBkYXRhIGZvciB0aGUgc3BlY2lmaWVkIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7IXN0cmluZ30gdXJsIFVSTCBvZiB0aGUgUkVTVCBzZXJ2aWNlIGNhbGwuXG4gICAqIEBwYXJhbSB7bWFwPX0gcGFyYW1zIE1hcCBvZiBzdHJpbmdzIG9yIG9iamVjdHMgd2hpY2ggd2lsbCBiZSB0dXJuZWQgdG8gP2tleTE9dmFsdWUxJmtleTI9dmFsdWUyIGFmdGVyIHRoZSB1cmwuIElmIHRoZSB2YWx1ZSBpcyBub3QgYSBzdHJpbmcsIGl0IHdpbGwgYmVcbiAgICogICBKU09OaWZpZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSByZWNlaXZlZCBkYXRhLlxuICAgKiBAcGFyYW0ge0RhdGU9fSBkYXRlIFRoZSBjYWNoZSBkYXRlLCBub3cgZGF0ZSBpcyB1c2VkIGlmIG5vdCBzcGVjaWZpZWQuXG4gICAqL1xuICBzZXRDYWNoZURhdGEodXJsOiBzdHJpbmcsIHBhcmFtczogYW55LCBkYXRhOiBhbnksIGRhdGU/OiBEYXRlKTogdm9pZCB7XG4gICAgbGV0IGNhY2hlS2V5ID0gdGhpcy5nZXRDYWNoZUtleSh1cmwsIHBhcmFtcyk7XG5cbiAgICB0aGlzLmNhY2hlZERhdGFbY2FjaGVLZXldID0ge1xuICAgICAgZGF0ZTogZGF0ZSB8fCBuZXcgRGF0ZSgpLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH07XG5cbiAgICB0aGlzLmxvZ2dlci5sb2coJ0NhY2hlIHNldCBmb3Iga2V5OiBcIicgKyBjYWNoZUtleSArICdcIicpO1xuXG4gICAgdGhpcy5zYXZlQ2FjaGVEYXRhKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY2FjaGVkIGRhdGEgKGlmIHBvc3NpYmxlKSBmb3IgdGhlIHNwZWNpZmllZCByZXF1ZXN0LlxuICAgKiBAcGFyYW0geyFzdHJpbmd9IHVybCBVUkwgb2YgdGhlIFJFU1Qgc2VydmljZSBjYWxsLlxuICAgKiBAcGFyYW0gez9tYXA9fSBwYXJhbXMgTWFwIG9mIHN0cmluZ3Mgb3Igb2JqZWN0cyB3aGljaCB3aWxsIGJlIHR1cm5lZCB0byA/a2V5MT12YWx1ZTEma2V5Mj12YWx1ZTIgYWZ0ZXIgdGhlIHVybC4gSWYgdGhlIHZhbHVlIGlzIG5vdCBhIHN0cmluZywgaXQgd2lsbCBiZVxuICAgKiAgIEpTT05pZmllZC5cbiAgICogQHJldHVybiB7P09iamVjdH0gVGhlIGNhY2hlZCBkYXRhIG9yIG51bGwgaWYgbm8gY2FjaGVkIGRhdGEgZXhpc3RzIGZvciB0aGlzIHJlcXVlc3QuXG4gICAqL1xuICBnZXRDYWNoZURhdGEodXJsOiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IGFueSB7XG4gICAgbGV0IGNhY2hlS2V5ID0gdGhpcy5nZXRDYWNoZUtleSh1cmwsIHBhcmFtcyk7XG4gICAgbGV0IGNhY2hlRW50cnkgPSB0aGlzLmNhY2hlZERhdGFbY2FjaGVLZXldO1xuXG4gICAgaWYgKGNhY2hlRW50cnkpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmxvZygnQ2FjaGUgaGl0IGZvciBrZXk6IFwiJyArIGNhY2hlS2V5ICsgJ1wiJyk7XG4gICAgICByZXR1cm4gY2FjaGVFbnRyeS5kYXRhO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGNhY2hlZCBkYXRhIGRhdGUgKGlmIHBvc3NpYmxlKSBmb3IgdGhlIHNwZWNpZmllZCByZXF1ZXN0LlxuICAgKiBAcGFyYW0geyFzdHJpbmd9IHVybCBVUkwgb2YgdGhlIFJFU1Qgc2VydmljZSBjYWxsLlxuICAgKiBAcGFyYW0gez9tYXA9fSBwYXJhbXMgTWFwIG9mIHN0cmluZ3Mgb3Igb2JqZWN0cyB3aGljaCB3aWxsIGJlIHR1cm5lZCB0byA/a2V5MT12YWx1ZTEma2V5Mj12YWx1ZTIgYWZ0ZXIgdGhlIHVybC4gSWYgdGhlIHZhbHVlIGlzIG5vdCBhIHN0cmluZywgaXQgd2lsbCBiZVxuICAgKiAgIEpTT05pZmllZC5cbiAgICogQHJldHVybiB7P09iamVjdH0gVGhlIGNhY2hlZCBkYXRhIGRhdGUgb3IgbnVsbCBpZiBubyBjYWNoZWQgZGF0YSBleGlzdHMgZm9yIHRoaXMgcmVxdWVzdC5cbiAgICovXG4gIGdldENhY2hlRGF0ZSh1cmw6IHN0cmluZywgcGFyYW1zPzogYW55KTogRGF0ZSB7XG4gICAgbGV0IGNhY2hlS2V5ID0gdGhpcy5nZXRDYWNoZUtleSh1cmwsIHBhcmFtcyk7XG4gICAgbGV0IGNhY2hlRW50cnkgPSB0aGlzLmNhY2hlZERhdGFbY2FjaGVLZXldO1xuICAgIHJldHVybiBjYWNoZUVudHJ5ID8gY2FjaGVFbnRyeS5kYXRlIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIGNhY2hlZCBkYXRhIChpZiBleGlzdHMpIGZvciB0aGUgc3BlY2lmaWVkIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7IXN0cmluZ30gdXJsIFVSTCBvZiB0aGUgUkVTVCBzZXJ2aWNlIGNhbGwuXG4gICAqIEBwYXJhbSB7P21hcD19IHBhcmFtcyBNYXAgb2Ygc3RyaW5ncyBvciBvYmplY3RzIHdoaWNoIHdpbGwgYmUgdHVybmVkIHRvID9rZXkxPXZhbHVlMSZrZXkyPXZhbHVlMiBhZnRlciB0aGUgdXJsLiBJZiB0aGUgdmFsdWUgaXMgbm90IGEgc3RyaW5nLCBpdCB3aWxsIGJlXG4gICAqICAgSlNPTmlmaWVkLlxuICAgKi9cbiAgY2xlYXJDYWNoZURhdGEodXJsOiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IHZvaWQge1xuICAgIGxldCBjYWNoZUtleSA9IHRoaXMuZ2V0Q2FjaGVLZXkodXJsLCBwYXJhbXMpO1xuICAgIHRoaXMuY2FjaGVkRGF0YVtjYWNoZUtleV0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2dnZXIubG9nKCdDYWNoZSBjbGVhcmVkIGZvciBrZXk6IFwiJyArIGNhY2hlS2V5ICsgJ1wiJyk7XG4gICAgdGhpcy5zYXZlQ2FjaGVEYXRhKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYW5zIGNhY2hlIGVudHJpZXMgb2xkZXIgdGhhbiB0aGUgc3BlY2lmaWVkIGRhdGUuXG4gICAqIEBwYXJhbSB7ZGF0ZT19IGV4cGlyYXRpb25EYXRlIFRoZSBjYWNoZSBleHBpcmF0aW9uIGRhdGUuIElmIG5vIGRhdGUgaXMgc3BlY2lmaWVkLCBhbGwgY2FjaGUgaXMgY2xlYXJlZC5cbiAgICovXG4gIGNsZWFuQ2FjaGUoZXhwaXJhdGlvbkRhdGU/OiBEYXRlKTogdm9pZCB7XG4gICAgaWYgKGV4cGlyYXRpb25EYXRlKSB7XG4gICAgICBhbmd1bGFyLmZvckVhY2godGhpcy5jYWNoZWREYXRhLCAodmFsdWU6IGFueSwga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKGV4cGlyYXRpb25EYXRlID49IHZhbHVlLmRhdGUpIHtcbiAgICAgICAgICB0aGlzLmNhY2hlZERhdGFba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FjaGVkRGF0YSA9IHt9O1xuICAgIH1cbiAgICB0aGlzLnNhdmVDYWNoZURhdGEoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjYWNoZSBwZXJzaXN0ZW5jZS5cbiAgICogTm90ZSB0aGF0IGNoYW5naW5nIHRoZSBjYWNoZSBwZXJzaXN0ZW5jZSB3aWxsIGFsc28gY2xlYXIgdGhlIGNhY2hlIGZyb20gaXRzIHByZXZpb3VzIHN0b3JhZ2UuXG4gICAqIEBwYXJhbSB7J2xvY2FsJ3wnc2Vzc2lvbic9fSBwZXJzaXN0ZW5jZSBIb3cgdGhlIGNhY2hlIHNob3VsZCBiZSBwZXJzaXN0ZWQsIGl0IGNhbiBiZSBlaXRoZXJcbiAgICogICBpbiB0aGUgbG9jYWwgb3Igc2Vzc2lvbiBzdG9yYWdlLCBvciBpZiBubyBwYXJhbWV0ZXJzIGlzIHByb3ZpZGVkIGl0IHdpbGwgYmUgb25seSBpbi1tZW1vcnkgKGRlZmF1bHQpLlxuICAgKi9cbiAgc2V0UGVyc2lzdGVuY2UocGVyc2lzdGVuY2U/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuQ2FjaGUoKTtcbiAgICB0aGlzLnN0b3JhZ2UgPSBwZXJzaXN0ZW5jZSA9PT0gJ2xvY2FsJyB8fCBwZXJzaXN0ZW5jZSA9PT0gJ3Nlc3Npb24nID9cbiAgICAgIHRoaXMuJHdpbmRvd1twZXJzaXN0ZW5jZSArICdTdG9yYWdlJ10gOiBudWxsO1xuXG4gICAgdGhpcy5sb2FkQ2FjaGVEYXRhKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGNhY2hlIGtleSBmb3IgdGhlIHNwZWNpZmllZCB1cmwgYW5kIHBhcmFtZXRlcnMuXG4gICAqIEBwYXJhbSB7IXN0cmluZ30gdXJsIFRoZSByZXF1ZXN0IFVSTC5cbiAgICogQHBhcmFtIHs/bWFwPX0gcGFyYW1zIE1hcCBvZiBzdHJpbmdzIG9yIG9iamVjdHMgd2hpY2ggd2lsbCBiZSB0dXJuZWQgdG8gP2tleTE9dmFsdWUxJmtleTI9dmFsdWUyIGFmdGVyIHRoZSB1cmwuIElmIHRoZSB2YWx1ZSBpcyBub3QgYSBzdHJpbmcsIGl0IHdpbGwgYmVcbiAgICogICBKU09OaWZpZWQuXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGNvcnJlc3BvbmRpbmcgY2FjaGUga2V5LlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRDYWNoZUtleSh1cmw6IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gdXJsICsgKHBhcmFtcyA/IGFuZ3VsYXIudG9Kc29uKHBhcmFtcykgOiAnJyk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgdGhlIGN1cnJlbnQgY2FjaGVkIGRhdGEgaW50byBwZXJzaXN0ZWQgc3RvcmFnZS5cbiAgICovXG4gIHByaXZhdGUgc2F2ZUNhY2hlRGF0YSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdG9yYWdlKSB7XG4gICAgICB0aGlzLnN0b3JhZ2UuY2FjaGVkRGF0YSA9IGFuZ3VsYXIudG9Kc29uKHRoaXMuY2FjaGVkRGF0YSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIGNhY2hlZCBkYXRhIGZyb20gcGVyc2lzdGVkIHN0b3JhZ2UuXG4gICAqL1xuICBwcml2YXRlIGxvYWRDYWNoZURhdGEoKTogdm9pZCB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLnN0b3JhZ2UgPyB0aGlzLnN0b3JhZ2UuY2FjaGVkRGF0YSA6IG51bGw7XG4gICAgdGhpcy5jYWNoZWREYXRhID0gZGF0YSA/IGFuZ3VsYXIuZnJvbUpzb24oZGF0YSkgOiB7fTtcbiAgfVxuXG59XG5cbmFwcC5zZXJ2aWNlKCdjYWNoZVNlcnZpY2UnLCBDYWNoZVNlcnZpY2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9tYWluL2hlbHBlcnMvY2FjaGUvY2FjaGUuc2VydmljZS50cyIsImltcG9ydCBhcHAgZnJvbSAnbWFpbi5tb2R1bGUnO1xuaW1wb3J0IHtJTG9nZ2VyLCBMb2dnZXJTZXJ2aWNlfSBmcm9tICdoZWxwZXJzL2xvZ2dlci9sb2dnZXInO1xuXG4vKipcbiAqIENvbnRleHQgc2VydmljZTogcHJvdmlkZXMgVVJMIGNvbnRleHQgaW5qZWN0aW9uIGJhc2VkIG9uIHNwZWNpZmllZCBjb250ZXh0LlxuICovXG5leHBvcnQgY2xhc3MgQ29udGV4dFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgbG9nZ2VyOiBJTG9nZ2VyO1xuXG4gIGNvbnN0cnVjdG9yKGxvZ2dlcjogTG9nZ2VyU2VydmljZSkge1xuICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyLmdldExvZ2dlcignY29udGV4dFNlcnZpY2UnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmplY3RzIHRoZSBzcGVjaWZpZWQgY29udGV4dCBpbnRvIHRoZSBnaXZlbiBSRVNUIEFQSS5cbiAgICogVGhlIFJFU1QgQVBJIHNob3VsZCBiZSBmb3JtYXR0ZWQgbGlrZSBcIi9hcGkvdXNlcnMvOnVzZXJJZFwiLlxuICAgKiBBbnkgZnJhZ21lbnQgZnJvbSB0aGUgUkVTVCBBUEkgc3RhcnRpbmcgd2l0aCBcIjpcIiB3aWxsIHRoZW4gYmUgcmVwbGFjZWQgYnkgYSBwcm9wZXJ0eSBmcm9tIHRoZSBjb250ZXh0IHdpdGhcbiAgICogdGhlIHNhbWUgbmFtZSwgaS5lLiBmb3IgXCIvYXBpL3VzZXJzLzp1c2VySWRcIiBhbmQgYSBjb250ZXh0IG9iamVjdCBcInsgdXNlcklkOiAxMjMgfVwiLCB0aGUgcmVzdWx0aW5nIFVSTCB3aWxsXG4gICAqIGJlIFwiL2FwaS91c2Vycy8xMjNcIi5cbiAgICogQHBhcmFtIHshc3RyaW5nfSByZXN0QXBpIFRoZSBSRVNUIEFQSSB0byBmaWxsIHdpbGwgY29udGV4dCB2YWx1ZXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIHVzZS5cbiAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgcmVhZHktdG8tdXNlIFJFU1QgQVBJIHRvIGNhbGwuXG4gICAqL1xuICBpbmplY3QocmVzdEFwaTogc3RyaW5nLCBjb250ZXh0PzogYW55KTogc3RyaW5nIHtcbiAgICB0aGlzLmxvZ2dlci5sb2coJ0luamVjdGluZyBjb250ZXh0IGluOiAnICsgcmVzdEFwaSk7XG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIHRocm93ICdpbmplY3Q6IGNvbnRleHQgbXVzdCBiZSBkZWZpbmVkJztcbiAgICB9XG5cbiAgICAvLyBTZWFyY2ggZm9yIGNvbnRleHQgcHJvcGVydGllcyB0byBpbmplY3RcbiAgICBsZXQgcHJvcGVydGllcyA9IHJlc3RBcGkubWF0Y2goLyg6XFx3KykvZyk7XG5cbiAgICBhbmd1bGFyLmZvckVhY2gocHJvcGVydGllcywgKHByb3BlcnR5OiBzdHJpbmcpID0+IHtcbiAgICAgIGxldCBjb250ZXh0VmFyID0gcHJvcGVydHkuc3Vic3RyaW5nKDEpO1xuICAgICAgbGV0IGNvbnRleHRWYWx1ZSA9IGNvbnRleHRbY29udGV4dFZhcl07XG5cbiAgICAgIGlmIChjb250ZXh0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0VmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQoY29udGV4dFZhbHVlKTtcbiAgICAgICAgcmVzdEFwaSA9IHJlc3RBcGkucmVwbGFjZShwcm9wZXJ0eSwgY29udGV4dFZhbHVlKTtcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKCdJbmplY3RlZCAnICsgY29udGV4dFZhbHVlICsgJyBmb3IgJyArIHByb3BlcnR5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93ICdpbmplY3Q6IGNvbnRleHQuJyArIGNvbnRleHRWYXIgKyAnIGV4cGVjdGVkIGJ1dCB1bmRlZmluZWQnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5sb2dnZXIubG9nKCdSZXN1bHRpbmcgUkVTVCBBUEk6ICcgKyByZXN0QXBpKTtcblxuICAgIHJldHVybiByZXN0QXBpO1xuICB9XG5cbn1cblxuYXBwLnNlcnZpY2UoJ2NvbnRleHRTZXJ2aWNlJywgQ29udGV4dFNlcnZpY2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9tYWluL2hlbHBlcnMvY29udGV4dC9jb250ZXh0LnNlcnZpY2UudHMiLCIvKipcbiAqIFByb3ZpZGVzIGEgc2ltcGxlIGxvZ2dpbmcgc3lzdGVtIHdpdGggdGhlIHBvc3NpYmlsaXR5IG9mIHJlZ2lzdGVyaW5nIGxvZyBvYnNlcnZlcnMuXG4gKiBJbiBvcmRlciB0byB0cmFjayB0aGUgc291cmNlIG1vZHVsZSBvZiBtZXNzYWdlIGxvZ3MsXG4gKiBhIGN1c3RvbWl6ZWQgbG9nZ2VyIHNob3VsZCBiZSBpbnN0YW5jaWF0ZWQgdXNpbmcgdGhlIGdldExvZ2dlcigpIG1ldGhvZCBqdXN0IGFmdGVyIGl0cyBpbmplY3Rpb24uXG4gKlxuICogNCBkaWZmZXJlbnQgbG9nIGxldmVscyBhcmUgcHJvdmlkZWQsIHZpYSBjb3JyZXNwb25kaW5nIG1ldGhvZHM6XG4gKiAtIGxvZzogZm9yIGRlYnVnIGluZm9ybWF0aW9uXG4gKiAtIGluZm86IGZvciBpbmZvcm1hdGl2ZSBzdGF0dXMgb2YgdGhlIGFwcGxpY2F0aW9uIChzdWNjZXNzLCAuLi4pXG4gKiAtIHdhcm5pbmc6IGZvciBub24tY3JpdGljYWwgZXJyb3JzIHRoYXQgZG8gbm90IHByZXZlbnQgbm9ybWFsIGFwcGxpY2F0aW9uIGJlaGF2aW9yXG4gKiAtIGVycm9yOiBmb3IgY3JpdGljYWwgZXJyb3JzIHRoYXQgcHJldmVudCBub3JtYWwgYXBwbGljYXRpb24gYmVoYXZpb3JcbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogYW5ndWxhci5tb2R1bGUoJ215U2VydmljZScsIFsnbG9nZ2VyJ10pLmZhY3RvcnkoJ215U2VydmljZScsIGZ1bmN0aW9uIChsb2dnZXIpIHtcbiAqICAgbG9nZ2VyID0gbG9nZ2VyLmdldExvZ2dlcignbXlTZXJ2aWNlJyk7XG4gKiAgIC4uLlxuICogICBsb2dnZXIubG9nKCdzb21ldGhpbmcgaGFwcGVuZWQnKTtcbiAqIH1cbiAqXG4gKiBJZiB5b3Ugd2FudCB0byBkaXNhYmxlIGRlYnVnIGxvZ3MgaW4gcHJvZHVjdGlvbiwgYWRkIHRoaXMgc25pcHBldCB0byB5b3VyIGFwcCBjb25maWd1cmF0aW9uOlxuICogYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbmZpZyhmdW5jdGlvbiAoJHByb3ZpZGUpIHtcbiAqICAgLy8gRGlzYWJsZSBkZWJ1ZyBsb2dzIGluIHByb2R1Y3Rpb24gdmVyc2lvblxuICogICAkcHJvdmlkZS5kZWNvcmF0b3IoJyRsb2cnLCBbJyRkZWxlZ2F0ZScsIGZ1bmN0aW9uKCRkZWxlZ2F0ZSkge1xuICogICAgIGlmICghZGVidWcpIHtcbiAqICAgICAgICRkZWxlZ2F0ZS5sb2cgPSBmdW5jdGlvbigpIHt9O1xuICogICAgIH1cbiAqICAgICByZXR1cm4gJGRlbGVnYXRlO1xuICogICB9XSk7XG4gKiB9KTtcbiAqXG4gKiBJZiB5b3Ugd2FudCBhZGRpdGlvbmFsIHRhc2tzIHRvIGJlIHBlcmZvcm1lZCBvbiBsb2cgZW50cnkgKHNob3cgdG9hc3QsIGZvciBleGFtcGxlKSxcbiAqIHlvdSBjYW4gcmVnaXN0ZXIgb2JzZXJ2ZXJzIHVzaW5nIHRoZSBhZGRPYnNlcnZlcigpIG1ldGhvZC5cbiAqL1xuXG5pbXBvcnQgYXBwIGZyb20gJ21haW4ubW9kdWxlJztcblxubGV0IG9ic2VydmVyczogQXJyYXk8RnVuY3Rpb24+ID0gW107XG5cbi8qKlxuICogTG9ncyBhIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHNvdXJjZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGJlIGxvZ2dlZC5cbiAqIEBwYXJhbSB7P3N0cmluZz19IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBsb2cuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBsb2dGdW5jIFRoZSBiYXNlIGxvZyBmdW5jdGlvbiB0byB1c2UuXG4gKiBAcGFyYW0geydsb2cnfCdpbmZvJ3wnd2FybmluZyd8J2Vycm9yJ30gbGV2ZWwgVGhlIGxvZyBsZXZlbC5cbiAqIEBwYXJhbSB7T2JqZWN0P30gb3B0aW9ucyBBZGRpdGlvbmFsIGxvZyBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBsb2cobWVzc2FnZTogc3RyaW5nLCBzb3VyY2U6IHN0cmluZywgbG9nRnVuYzogRnVuY3Rpb24sIGxldmVsOiBzdHJpbmcsIG9wdGlvbnM6IGFueSk6IHZvaWQge1xuICBsb2dGdW5jKHNvdXJjZSA/ICdbJyArIHNvdXJjZSArICddJyA6ICcnLCBtZXNzYWdlLCAnJyk7XG4gIGFuZ3VsYXIuZm9yRWFjaChvYnNlcnZlcnMsIChvYnNlcnZlckZ1bmM6IGFueSkgPT4ge1xuICAgIG9ic2VydmVyRnVuYyhtZXNzYWdlLCBzb3VyY2UsIGxldmVsLCBvcHRpb25zKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxvZ2dlciB7XG5cbiAgLyoqXG4gICAqIExvZ3MgYSBtZXNzYWdlIHdpdGggdGhlIGxvZyBsZXZlbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gYmUgbG9nZ2VkLlxuICAgKiBAcGFyYW0ge09iamVjdD99IG9wdGlvbnMgQWRkaXRpb25hbCBsb2cgb3B0aW9ucy5cbiAgICovXG4gIGxvZyhtZXNzYWdlOiBzdHJpbmcsIG9wdGlvbnM/OiBPYmplY3QpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBMb2dzIGEgbWVzc2FnZSB3aXRoIHRoZSBpbmZvIGxldmVsLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBiZSBsb2dnZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0P30gb3B0aW9ucyBBZGRpdGlvbmFsIGxvZyBvcHRpb25zLlxuICAgKi9cblxuICBpbmZvKG1lc3NhZ2U6IHN0cmluZywgb3B0aW9ucz86IE9iamVjdCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIExvZ3MgYSBtZXNzYWdlIHdpdGggdGhlIHdhcm5pbmcgbGV2ZWwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGJlIGxvZ2dlZC5cbiAgICogQHBhcmFtIHtPYmplY3Q/fSBvcHRpb25zIEFkZGl0aW9uYWwgbG9nIG9wdGlvbnMuXG4gICAqL1xuICB3YXJuaW5nKG1lc3NhZ2U6IHN0cmluZywgb3B0aW9ucz86IE9iamVjdCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIExvZ3MgYSBtZXNzYWdlIHdpdGggdGhlIGVycm9yIGxldmVsLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBiZSBsb2dnZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0P30gb3B0aW9ucyBBZGRpdGlvbmFsIGxvZyBvcHRpb25zLlxuICAgKi9cbiAgZXJyb3IobWVzc2FnZTogc3RyaW5nLCBvcHRpb25zPzogT2JqZWN0KTogdm9pZDtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZlckZ1bmN0aW9uIHtcbiAgKG1lc3NhZ2U6IHN0cmluZywgc291cmNlOiBzdHJpbmcsIGxldmVsOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiB2b2lkO1xufVxuXG5jbGFzcyBMb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlICRsb2c6IG5nLklMb2dTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIG1vZHVsZU5hbWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsb2dGdW5jOiBhbnkpIHt9XG5cbiAgbG9nKG1lc3NhZ2U6IHN0cmluZywgb3B0aW9uczogYW55KTogdm9pZCB7XG4gICAgdGhpcy5sb2dGdW5jKG1lc3NhZ2UsIHRoaXMubW9kdWxlTmFtZSwgdGhpcy4kbG9nLmxvZywgJ2xvZycsIG9wdGlvbnMpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlOiBzdHJpbmcsIG9wdGlvbnM6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubG9nRnVuYyhtZXNzYWdlLCB0aGlzLm1vZHVsZU5hbWUsIHRoaXMuJGxvZy5pbmZvLCAnaW5mbycsIG9wdGlvbnMpO1xuICB9XG5cbiAgd2FybmluZyhtZXNzYWdlOiBzdHJpbmcsIG9wdGlvbnM6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubG9nRnVuYyhtZXNzYWdlLCB0aGlzLm1vZHVsZU5hbWUsIHRoaXMuJGxvZy53YXJuLCAnd2FybmluZycsIG9wdGlvbnMpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZTogc3RyaW5nLCBvcHRpb25zOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ0Z1bmMobWVzc2FnZSwgdGhpcy5tb2R1bGVOYW1lLCB0aGlzLiRsb2cuZXJyb3IsICdlcnJvcicsIG9wdGlvbnMpO1xuICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIExvZ2dlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgJGxvZzogbmcuSUxvZ1NlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBjdXN0b21pemVkIGxvZ2dlciBiYXNlZCBvbiB0aGUgZ2l2ZW4gbW9kdWxlIG5hbWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGVOYW1lIFRoZSBtb2R1bGUgbmFtZS5cbiAgICogQHJldHVybiB7TG9nZ2VyfSBBIGxvZ2dlciBvYmplY3QuXG4gICAqL1xuICBnZXRMb2dnZXIobW9kdWxlTmFtZTogc3RyaW5nKTogSUxvZ2dlciB7XG4gICAgcmV0dXJuIG5ldyBMb2dnZXIodGhpcy4kbG9nLCBtb2R1bGVOYW1lLCBsb2cpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBuZXcgb2JzZXJ2ZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaCBuZXcgbG9nIGVudHJ5LlxuICAgKiBUaGVzZSBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQgdG8gdGhlIG9ic2VydmVyIGZ1bmN0aW9uLCBpbiBvcmRlcjpcbiAgICogLSBtZXNzYWdlIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gYmUgbG9nZ2VkLlxuICAgKiAtIHNvdXJjZSB7P3N0cmluZz19IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBsb2cuXG4gICAqIC0gbGV2ZWwgeydsb2cnfCdpbmZvJ3wnd2FybmluZyd8J2Vycm9yJ30gbGV2ZWwgVGhlIGxvZyBsZXZlbC5cbiAgICogLSBvcHRpb25zIHtPYmplY3Q/fSBvcHRpb25zIEFkZGl0aW9uYWwgbG9nIG9wdGlvbnMuXG4gICAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBvYnNlcnZlckZ1bmMgVGhlIG9ic2VydmVyIGZ1bmN0aW9uLlxuICAgKi9cbiAgYWRkT2JzZXJ2ZXIob2JzZXJ2ZXJGdW5jOiBJT2JzZXJ2ZXJGdW5jdGlvbik6IHZvaWQge1xuICAgIG9ic2VydmVycy5wdXNoKG9ic2VydmVyRnVuYyk7XG4gIH1cblxufVxuXG5hcHAuc2VydmljZSgnbG9nZ2VyJywgTG9nZ2VyU2VydmljZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL21haW4vaGVscGVycy9sb2dnZXIvbG9nZ2VyLnRzIiwiaW1wb3J0IGFwcCBmcm9tICdtYWluLm1vZHVsZSc7XG5pbXBvcnQge0NhY2hlU2VydmljZX0gZnJvbSAnaGVscGVycy9jYWNoZS9jYWNoZS5zZXJ2aWNlJztcbmltcG9ydCB7SUxvZ2dlciwgTG9nZ2VyU2VydmljZX0gZnJvbSAnaGVscGVycy9sb2dnZXIvbG9nZ2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBJU2VydmVyQ29uZmlnIHtcbiAgdXJsOiBzdHJpbmc7XG4gIHJvdXRlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhY2hlSGFuZGxlckZ1bmN0aW9uIHtcbiAgKGNhY2hlZERhdGE6IGFueSk6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUmVxdWVzdEJ1aWxkZXJGdW5jdGlvbiB7XG4gIChvcHRpb25zPzogYW55KTogbmcuSVByb21pc2U8YW55Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUmVxdWVzdEhhbmRsZXJGdW5jdGlvbiB7XG4gIChyZXF1ZXN0QnVpbGRlcjogSVJlcXVlc3RCdWlsZGVyRnVuY3Rpb24sIG9wdGlvbnM/OiBhbnkpOiBuZy5JUHJvbWlzZTxhbnk+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElFcnJvckhhbmRsZXJGdW5jdGlvbiB7XG4gIChwcm9taXNlOiBuZy5JUHJvbWlzZTxhbnk+LCBvcHRpb25zPzogYW55KTogbmcuSVByb21pc2U8YW55Pjtcbn1cblxuLyoqXG4gKiBSRVNUIHNlcnZpY2U6IHByb3ZpZGVzIG1ldGhvZHMgdG8gcGVyZm9ybSBSRVNUIHJlcXVlc3RzLlxuICovXG5leHBvcnQgY2xhc3MgUmVzdFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgc2VydmVyOiBJU2VydmVyQ29uZmlnID0gbnVsbDtcbiAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnOiBuZy5JUmVxdWVzdFNob3J0Y3V0Q29uZmlnID0ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6ICdjb250ZW50LXR5cGUnXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0cyBjYWNoZSBoYW5kbGVyLlxuICAgKiBUaGlzIGhhbmRsZXIganVzdCByZXR1cm4gdGhlIHNwZWNpZmllZCBjYWNoZSBkYXRhIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICovXG4gIHByaXZhdGUgY2FjaGVIYW5kbGVyOiBJQ2FjaGVIYW5kbGVyRnVuY3Rpb24gPSBhbmd1bGFyLmlkZW50aXR5O1xuICBwcml2YXRlIGxvZ2dlcjogSUxvZ2dlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlICRxOiBuZy5JUVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgJGh0dHA6IG5nLklIdHRwU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjYWNoZVNlcnZpY2U6IENhY2hlU2VydmljZSxcbiAgICAgICAgICAgICAgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlci5nZXRMb2dnZXIoJ3Jlc3RTZXJ2aWNlJyk7XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgYSBHRVQgcmVxdWVzdC5cbiAgICogQHBhcmFtIHshU3RyaW5nfSB1cmwgVVJMIG9mIHRoZSBSRVNUIHNlcnZpY2UgY2FsbC5cbiAgICogQHBhcmFtIHs/T2JqZWN0LjxzdHJpbmd8T2JqZWN0Pj19IHBhcmFtcyBNYXAgb2Ygc3RyaW5ncyBvciBvYmplY3RzIHdoaWNoIHdpbGwgYmUgdHVybmVkIHRvID9rZXkxPXZhbHVlMSZrZXkyPXZhbHVlMiBhZnRlciB0aGUgdXJsLiBJZiB0aGUgdmFsdWUgaXMgbm90IGEgc3RyaW5nLCBpdCB3aWxsIGJlXG4gICAqICAgSlNPTmlmaWVkLlxuICAgKiBAcGFyYW0gez9ib29sZWFufCdmb3JjZSd9IGNhY2hlIElmIHNldCB0byB0cnVlLCB0aGUgZmlyc3QgcmVxdWVzdCB3aWxsIGJlIGNhY2hlZCwgYW5kIG5leHQgcmVxdWVzdCB3aXRoIGNhY2hlIHNldCB0byB0cnVlIHdpbGwgdXNlIHRoZSBjYWNoZWQgcmVzcG9uc2UuXG4gICAqICAgSWYgc2V0IHRvICdmb3JjZScsIHRoZSByZXF1ZXN0IHdpbGwgYWx3YXlzIGJlIG1hZGUgYW5kIGNhY2hlIHdpbGwgYmUgdXBkYXRlZC5cbiAgICogICBJZiBzZXQgdG8gZmFsc2Ugb3Igb21pdHRlZCwgbm8gY2FjaGUgd2lsbCBiZSBzZXQgb3IgdXNlZC5cbiAgICogQHBhcmFtIHs/T2JqZWN0PX0gb3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHJlcXVlc3QvZXJyb3IgaGFuZGxlcnMuXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGhlIHByb21pc2UuXG4gICAqL1xuICBnZXQodXJsOiBzdHJpbmcsIHBhcmFtcz86IGFueSwgY2FjaGU/OiBib29sZWFufHN0cmluZywgb3B0aW9ucz86IGFueSk6IG5nLklQcm9taXNlPGFueT4ge1xuICAgIGxldCBhcGlVcmwgPSB0aGlzLmJhc2VVcmwgKyB1cmw7XG4gICAgbGV0IHByb21pc2VCdWlsZGVyID0gKCkgPT4gdGhpcy4kaHR0cC5nZXQoYXBpVXJsLCB7cGFyYW1zOiBwYXJhbXN9KTtcblxuICAgIGlmICghY2FjaGUpIHtcbiAgICAgIC8vIERvIG5vdCB1c2UgY2FjaGVcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlcXVlc3QocHJvbWlzZUJ1aWxkZXIsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY2FjaGVkRGF0YSA9IGNhY2hlID09PSAnZm9yY2UnID8gbnVsbCA6IHRoaXMuY2FjaGVTZXJ2aWNlLmdldENhY2hlRGF0YSh1cmwsIHBhcmFtcyk7XG5cbiAgICAgIGlmIChjYWNoZWREYXRhICE9PSBudWxsKSB7XG4gICAgICAgIGNhY2hlZERhdGEgPSB0aGlzLmNhY2hlSGFuZGxlcihjYWNoZWREYXRhKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhY2hlZERhdGEgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKCdHRVQgcmVxdWVzdDogJyArIHVybCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIGNhY2hlIGVudHJ5XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlcXVlc3QocHJvbWlzZUJ1aWxkZXIsIG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmNhY2hlU2VydmljZS5zZXRDYWNoZURhdGEodXJsLCBwYXJhbXMsIHJlc3BvbnNlLCBudWxsKTtcbiAgICAgICAgICByZXR1cm4gYW5ndWxhci5jb3B5KHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBVc2UgY2FjaGVkIHZlcnNpb25cbiAgICAgICAgbGV0IGRlZmVycmVkID0gdGhpcy4kcS5kZWZlcigpO1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGFuZ3VsYXIuY29weShjYWNoZWREYXRhKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JIYW5kbGVyKGRlZmVycmVkLnByb21pc2UsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyBhIFBVVCByZXF1ZXN0LlxuICAgKiBAcGFyYW0geyFTdHJpbmd9IHVybCBVUkwgb2YgdGhlIFJFU1Qgc2VydmljZSBjYWxsLlxuICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGRhdGEgRGF0YSB0byBiZSBzZW50IGFzIHRoZSByZXF1ZXN0IG1lc3NhZ2UgZGF0YS5cbiAgICogQHBhcmFtIHs/T2JqZWN0PX0gb3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHJlcXVlc3QvZXJyb3IgaGFuZGxlcnMuXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGhlIHByb21pc2UuXG4gICAqL1xuICBwdXQodXJsOiBzdHJpbmcsIGRhdGE6IGFueSwgb3B0aW9ucz86IGFueSk6IG5nLklQcm9taXNlPGFueT4ge1xuICAgIHRoaXMubG9nZ2VyLmxvZygnUFVUIHJlcXVlc3Q6ICcgKyB1cmwsIG51bGwpO1xuICAgIGxldCBwcm9taXNlID0gKCkgPT4gdGhpcy4kaHR0cC5wdXQodGhpcy5iYXNlVXJsICsgdXJsLCBkYXRhLCB0aGlzLmRlZmF1bHRDb25maWcpO1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlcXVlc3QocHJvbWlzZSwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgYSBQT1NUIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7IVN0cmluZ30gdXJsIFVSTCBvZiB0aGUgUkVTVCBzZXJ2aWNlIGNhbGwuXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZGF0YSBEYXRhIHRvIGJlIHNlbnQgYXMgdGhlIHJlcXVlc3QgbWVzc2FnZSBkYXRhLlxuICAgKiBAcGFyYW0gez9PYmplY3Q9fSBvcHRpb25zIEFkZGl0aW9uYWwgb3B0aW9ucyBmb3IgcmVxdWVzdC9lcnJvciBoYW5kbGVycy5cbiAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgcHJvbWlzZS5cbiAgICovXG4gIHBvc3QodXJsOiBzdHJpbmcsIGRhdGE6IGFueSwgb3B0aW9ucz86IGFueSk6IG5nLklQcm9taXNlPGFueT4ge1xuICAgIHRoaXMubG9nZ2VyLmxvZygnUE9TVCByZXF1ZXN0OiAnICsgdXJsLCBudWxsKTtcbiAgICBsZXQgcHJvbWlzZUJ1aWxkZXIgPSAoKSA9PiB0aGlzLiRodHRwLnBvc3QodGhpcy5iYXNlVXJsICsgdXJsLCBkYXRhLCB0aGlzLmRlZmF1bHRDb25maWcpO1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlcXVlc3QocHJvbWlzZUJ1aWxkZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIGEgREVMRVRFIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7IVN0cmluZ30gdXJsIFVSTCBvZiB0aGUgUkVTVCBzZXJ2aWNlIGNhbGwuXG4gICAqIEBwYXJhbSB7P09iamVjdD19IG9wdGlvbnMgQWRkaXRpb25hbCBvcHRpb25zIGZvciByZXF1ZXN0L2Vycm9yIGhhbmRsZXJzLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBwcm9taXNlLlxuICAgKi9cbiAgZGVsZXRlKHVybDogc3RyaW5nLCBvcHRpb25zPzogYW55KTogbmcuSVByb21pc2U8YW55PiB7XG4gICAgdGhpcy5sb2dnZXIubG9nKCdERUxFVEUgcmVxdWVzdDogJyArIHVybCwgbnVsbCk7XG4gICAgbGV0IHByb21pc2UgPSAoKSA9PiB0aGlzLiRodHRwLmRlbGV0ZSh0aGlzLmJhc2VVcmwgKyB1cmwsIHRoaXMuZGVmYXVsdENvbmZpZyk7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVxdWVzdChwcm9taXNlLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjdXJyZW50IHNlcnZlciBjb25maWd1cmF0aW9uLlxuICAgKiBBIHNlcnZlciBwYXJhbWV0ZXIgbXVzdCBjb250YWlucyBhdCBsZWFzdCB0aGVzZSB0d28gc3RyaW5nczpcbiAgICogLSB1cmw6IFRoZSBiYXNlIFVSTCBvZiB0aGUgc2VydmVyXG4gICAqIC0gcm91dGU6IFRoZSBiYXNlIHJvdXRlIG9mIHRoZSBSRVNUIEFQSVxuICAgKiBAcGFyYW0geyFPYmplY3R9IHNlcnZlciBUaGUgc2VydmVyIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBzZXRTZXJ2ZXIoc2VydmVyOiBJU2VydmVyQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2ZXIgPSBzZXJ2ZXI7XG4gICAgdGhpcy5iYXNlVXJsID0gc2VydmVyLnVybCArIHNlcnZlci5yb3V0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHNlcnZlciBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBzZXJ2ZXIgYmFzZSBVUkwuXG4gICAqL1xuICBnZXRTZXJ2ZXIoKTogSVNlcnZlckNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGJhc2UgVVJJLlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBjb21wdXRlZCBiYXNlIFVSSS5cbiAgICovXG4gIGdldEJhc2VVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5iYXNlVXJsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBjdXN0b21pemVkIHJlcXVlc3QgaGFuZGxlciBmdW5jdGlvbiBmb3IgYWxsIHJlcXVlc3RzLlxuICAgKiBUaGUgZnVuY3Rpb24gc2hvdWxkIGhhdmUgdGhlIGZvbGxvd2luZyBzaWduYXR1cmUsIGFuZCByZXR1cm4gYSBwcm9taXNlOlxuICAgKiBmdW5jdGlvbiByZXF1ZXN0SGFuZGxlcihyZXF1ZXN0QnVpbGRlciwgb3B0aW9ucykge1xuICAgKiAgIHJldHVybiByZXF1ZXN0QnVpbGRlcigpO1xuICAgKiB9XG4gICAqIFRoZSByZXF1ZXN0QnVpbGRlciBwYXJhbWV0ZXIgaXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHJlcXVlc3QgcHJvbWlzZS5cbiAgICogVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9wdGlvbmFsIG9iamVjdCBjb250YWluaW5nIHdoYXRldmVyIG9wdGlvbnMgeW91ciBoYW5kbGVyIG1heSBuZWVkcy5cbiAgICogQHBhcmFtIHshZnVuY3Rpb259IHJlcXVlc3RIYW5kbGVyRnVuYyBUaGUgcmVxdWVzdCBoYW5kbGVyLlxuICAgKi9cbiAgc2V0UmVxdWVzdEhhbmRsZXIocmVxdWVzdEhhbmRsZXJGdW5jOiBJUmVxdWVzdEhhbmRsZXJGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMucmVxdWVzdEhhbmRsZXIgPSByZXF1ZXN0SGFuZGxlckZ1bmM7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCByZXF1ZXN0IGhhbmRsZXIgZnVuY3Rpb24uXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBUaGUgcmVxdWVzdCBoYW5kbGVyLlxuICAgKi9cbiAgZ2V0UmVxdWVzdEhhbmRsZXIoKTogSVJlcXVlc3RIYW5kbGVyRnVuY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3RIYW5kbGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBjdXN0b21pemVkIGRlZmF1bHQgZXJyb3IgaGFuZGxlciBmdW5jdGlvbiBmb3IgYWxsIHJlcXVlc3RzLlxuICAgKiBUaGUgZnVuY3Rpb24gc2hvdWxkIGhhdmUgdGhlIGZvbGxvd2luZyBzaWduYXR1cmUsIGFuZCByZXR1cm4gYSBwcm9taXNlOlxuICAgKiBmdW5jdGlvbiBlcnJvckhhbmRsZXIocHJvbWlzZSwgb3B0aW9ucykge1xuICAgKiAgIHJldHVybiBwcm9taXNlLmNhdGNoKHJlc3BvbnNlLCBmdW5jdGlvbigpIHtcbiAgICogICAgICAuLi5cbiAgICogICAgICByZXR1cm4gJHEucmVqZWN0KHJlc3BvbnNlKTtcbiAgICogICB9KTtcbiAgICogfVxuICAgKiBUaGUgcHJvbWlzZSBwYXJhbWV0ZXIgaXMgdGhlIHJlcXVlc3QgcHJvbWlzZS5cbiAgICogVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9wdGlvbmFsIG9iamVjdCBjb250YWluaW5nIHdoYXRldmVyIG9wdGlvbnMgeW91ciBoYW5kbGVyIG1heSBuZWVkcy5cbiAgICogQHBhcmFtIHshZnVuY3Rpb259IGVycm9ySGFuZGxlckZ1bmMgVGhlIGVycm9yIGhhbmRsZXIuXG4gICAqL1xuICBzZXRFcnJvckhhbmRsZXIoZXJyb3JIYW5kbGVyRnVuYzogSUVycm9ySGFuZGxlckZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5lcnJvckhhbmRsZXIgPSBlcnJvckhhbmRsZXJGdW5jO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgZXJyb3IgaGFuZGxlciBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBlcnJvciBoYW5kbGVyLlxuICAgKi9cbiAgZ2V0RXJyb3JIYW5kbGVyKCk6IElFcnJvckhhbmRsZXJGdW5jdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JIYW5kbGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBjdXN0b21pemVkIGRlZmF1bHQgY2FjaGUgaGFuZGxlciBmdW5jdGlvbiBmb3IgYWxsIGNhY2hlZCByZXF1ZXN0cy5cbiAgICogVGhlIGZ1bmN0aW9uIHNob3VsZCBoYXZlIHRoZSBmb2xsb3dpbmcgc2lnbmF0dXJlLCBhbmQgcmV0dXJuIGFuIG9iamVjdDpcbiAgICogZnVuY3Rpb24gY2FjaGVIYW5kbGVyKGNhY2hlZERhdGEpIHtcbiAgICogICAgcmV0dXJuIGlzVmFsaWQoY2FjaGVkRGF0YSkgPyBjYWNoZWREYXRhIDogbnVsbDtcbiAgICogfVxuICAgKiBUaGlzIGhhbmRsZXIgaXMgb25seSBjYWxsZWQgYmVmb3JlIGZvciByZXF1ZXN0cyB0aGF0IHdvdWxkIHJldHVybiBjYWNoZWQgZGF0YSBvdGhlcndpc2UuXG4gICAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBjYWNoZUhhbmRsZXJGdW5jIFRoZSBjYWNoZSBoYW5kbGVyLlxuICAgKi9cbiAgc2V0Q2FjaGVIYW5kbGVyKGNhY2hlSGFuZGxlckZ1bmM6IElDYWNoZUhhbmRsZXJGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMuY2FjaGVIYW5kbGVyID0gY2FjaGVIYW5kbGVyRnVuYztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjdXJyZW50IGNhY2hlIGhhbmRsZXIgZnVuY3Rpb24uXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBUaGUgY2FjaGUgaGFuZGxlci5cbiAgICovXG4gIGdldENhY2hlSGFuZGxlcigpOiBJQ2FjaGVIYW5kbGVyRnVuY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLmNhY2hlSGFuZGxlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHJlcXVlc3QgaGFuZGxlciwgdGhhdCBqdXN0IGJ1aWxkcyB0aGUgcHJvbWlzZS5cbiAgICogQHBhcmFtIHshZnVuY3Rpb259IHJlcXVlc3RCdWlsZGVyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm4gdGhlIHJlcXVlc3QncyBwcm9taXNlLlxuICAgKiBAcGFyYW0gez9PYmplY3Q9fSBvcHRpb25zIE9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcmVxdWVzdCBidWlsZGVyIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBwcm9taXNlLlxuICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAqL1xuICBwcml2YXRlIHJlcXVlc3RIYW5kbGVyKHJlcXVlc3RCdWlsZGVyOiBJUmVxdWVzdEJ1aWxkZXJGdW5jdGlvbiwgb3B0aW9ucz86IGFueSk6IG5nLklQcm9taXNlPGFueT4ge1xuICAgIC8vIERlZmF1bHQgcmVxdWVzdCBoYW5kbGVyIGp1c3QgYnVpbGRzIHRoZSByZXF1ZXN0XG4gICAgcmV0dXJuIHJlcXVlc3RCdWlsZGVyKG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgZXJyb3IgaGFuZGxlci5cbiAgICogVGhpcyBoYW5kbGVyIHRyaWVzIHRvIGV4dHJhY3QgYSBkZXNjcmlwdGlvbiBvZiB0aGUgZXJyb3IgYW5kIGxvZ3MgYW5kIGVycm9yIHdpdGggaXQuXG4gICAqIEBwYXJhbSB7IU9iamVjdH0gcHJvbWlzZSBUaGUgcHJvbWlzZSB0byBoYW5kbGUgZXJyb3JzLlxuICAgKiBAcGFyYW0gez9PYmplY3Q9fSBvcHRpb25zIEFkZGl0aW9uYWwgb3B0aW9uczogaWYgJ3NraXBFcnJvcnMnIHByb3BlcnR5IGlzIHNldCB0byB0cnVlLCBlcnJvcnMgd2lsbCBub3QgYmUgaGFuZGxlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgcHJvbWlzZS5cbiAgICovXG4gIHByaXZhdGUgZXJyb3JIYW5kbGVyKHByb21pc2U6IG5nLklQcm9taXNlPGFueT4sIG9wdGlvbnM/OiBhbnkpOiBuZy5JUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMuc2tpcEVycm9ycykge1xuICAgICAgcHJvbWlzZS5jYXRjaCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBsZXQgZXJyb3I7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgZXJyb3IgPSAnU2VydmVyIHVuYXZhaWxhYmxlIG9yIFVSTCBkb2VzIG5vdCBleGlzdCc7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgIGxldCBtZXNzYWdlID0gcmVzcG9uc2UuZGF0YS5tZXNzYWdlID8gcmVzcG9uc2UuZGF0YS5tZXNzYWdlIDogbnVsbDtcbiAgICAgICAgICBsZXQgY29kZSA9IHJlc3BvbnNlLmRhdGEuZXJyb3IgPyByZXNwb25zZS5kYXRhLmVycm9yIDogbnVsbDtcbiAgICAgICAgICBlcnJvciA9IG1lc3NhZ2UgfHwgY29kZSB8fCBhbmd1bGFyLnRvSnNvbihyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yLCBudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLiRxLnJlamVjdChyZXNwb25zZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgcmVxdWVzdC5cbiAgICogQHBhcmFtIHshZnVuY3Rpb259IHJlcXVlc3RCdWlsZGVyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm4gdGhlIHJlcXVlc3QncyBwcm9taXNlLlxuICAgKiBAcGFyYW0gez9PYmplY3Q9fSBvcHRpb25zIEFkZGl0aW9uYWwgb3B0aW9ucyBmb3IgcmVxdWVzdC9lcnJvciBoYW5kbGVycy5cbiAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgcHJvbWlzZS5cbiAgICovXG4gIHByaXZhdGUgY3JlYXRlUmVxdWVzdChyZXF1ZXN0QnVpbGRlcjogSVJlcXVlc3RCdWlsZGVyRnVuY3Rpb24sIG9wdGlvbnM/OiBhbnkpOiBuZy5JUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5lcnJvckhhbmRsZXIodGhpcy5yZXF1ZXN0SGFuZGxlcihyZXF1ZXN0QnVpbGRlciwgb3B0aW9ucyksIG9wdGlvbnMpO1xuICB9XG59XG5cbmFwcC5zZXJ2aWNlKCdyZXN0U2VydmljZScsIFJlc3RTZXJ2aWNlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvbWFpbi9oZWxwZXJzL3Jlc3QvcmVzdC5zZXJ2aWNlLnRzIiwiaW1wb3J0IGFwcCBmcm9tICdtYWluLm1vZHVsZSc7XG5pbXBvcnQge0lBcHBsaWNhdGlvbkNvbmZpZ30gZnJvbSAnbWFpbi5jb25zdGFudHMnO1xuaW1wb3J0IHtJTG9nZ2VyLCBMb2dnZXJTZXJ2aWNlfSBmcm9tICdoZWxwZXJzL2xvZ2dlci9sb2dnZXInO1xuXG4vKipcbiAqIERpc3BsYXlzIHRoZSBhYm91dCBzY3JlZW4uXG4gKi9cbmV4cG9ydCBjbGFzcyBBYm91dENvbnRyb2xsZXIge1xuXG4gIHZlcnNpb246IHN0cmluZztcblxuICBwcml2YXRlIGxvZ2dlcjogSUxvZ2dlcjtcblxuICBjb25zdHJ1Y3Rvcihsb2dnZXI6IExvZ2dlclNlcnZpY2UsXG4gICAgICAgICAgICAgIGNvbmZpZzogSUFwcGxpY2F0aW9uQ29uZmlnKSB7XG5cbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlci5nZXRMb2dnZXIoJ2Fib3V0Jyk7XG4gICAgdGhpcy52ZXJzaW9uID0gY29uZmlnLnZlcnNpb247XG5cbiAgICB0aGlzLmxvZ2dlci5sb2coJ2luaXQnKTtcbiAgfVxuXG59XG5cbmFwcC5jb250cm9sbGVyKCdhYm91dENvbnRyb2xsZXInLCBBYm91dENvbnRyb2xsZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9tYWluL3NjcmVlbnMvYWJvdXQvYWJvdXQuY29udHJvbGxlci50cyIsImltcG9ydCBhcHAgZnJvbSAnbWFpbi5tb2R1bGUnO1xuaW1wb3J0IHtJTG9nZ2VyLCBMb2dnZXJTZXJ2aWNlfSBmcm9tICdoZWxwZXJzL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IHtRdW90ZVNlcnZpY2V9IGZyb20gJ3dlYi1zZXJ2aWNlcy9xdW90ZS9xdW90ZS5zZXJ2aWNlJztcblxuLyoqXG4gKiBEaXNwbGF5cyB0aGUgaG9tZSBzY3JlZW4uXG4gKi9cbmV4cG9ydCBjbGFzcyBIb21lQ29udHJvbGxlciB7XG5cbiAgaXNMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgcXVvdGU6IHN0cmluZyA9IG51bGw7XG5cbiAgcHJpdmF0ZSBsb2dnZXI6IElMb2dnZXI7XG4gIHByaXZhdGUgcXVvdGVTZXJ2aWNlOiBRdW90ZVNlcnZpY2U7XG5cbiAgY29uc3RydWN0b3IobG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICBxdW90ZVNlcnZpY2U6IFF1b3RlU2VydmljZSkge1xuXG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXIuZ2V0TG9nZ2VyKCdob21lJyk7XG4gICAgdGhpcy5xdW90ZVNlcnZpY2UgPSBxdW90ZVNlcnZpY2U7XG5cbiAgICB0aGlzLmxvZ2dlci5sb2coJ2luaXQnKTtcblxuICAgIHRoaXMucXVvdGVTZXJ2aWNlXG4gICAgICAuZ2V0UmFuZG9tSm9rZSh7Y2F0ZWdvcnk6ICduZXJkeSd9KVxuICAgICAgLnRoZW4oKHF1b3RlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5xdW90ZSA9IHF1b3RlO1xuICAgICAgfSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICB9XG5cbn1cblxuYXBwLmNvbnRyb2xsZXIoJ2hvbWVDb250cm9sbGVyJywgSG9tZUNvbnRyb2xsZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9tYWluL3NjcmVlbnMvaG9tZS9ob21lLmNvbnRyb2xsZXIudHMiLCJpbXBvcnQgYXBwIGZyb20gJ21haW4ubW9kdWxlJztcblxuLyoqXG4gKiBMb2FkaW5nIGRpcmVjdGl2ZTogZGlzcGxheXMgYSBsb2FkaW5nIGluZGljYXRvciB3aGlsZSBkYXRhIGlzIGJlaW5nIGxvYWRlZC5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOiA8ZGl2IHVpLWxvYWRpbmc9XCJpc0xvYWRpbmdcIj48L2Rpdj5cbiAqIFRoZSBleHBlY3RlZCB2YWx1ZSBvZiB0aGUgZGlyZWN0aXZlIGF0dHJpYnV0ZSBpcyBhIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBjb250ZW50XG4gKiBpcyBzdGlsbCBsb2FkaW5nIG9yIG5vdC5cbiAqXG4gKiBBZGRpdGlvbmFsIHBhcmFtZXRlciBhdHRyaWJ1dGVzOlxuICogLSBtZXNzYWdlOiB0aGUgbG9hZGluZyBtZXNzYWdlIHRvIGRpc3BsYXkgKG5vbmUgYnkgZGVmYXVsdClcbiAqXG4gKiBFeGFtcGxlOiA8ZGl2IHVpLWxvYWRpbmc9XCJpc0xvYWRpbmdcIiBtZXNzYWdlPVwiTG9hZGluZy4uLlwiPjwvZGl2PlxuICovXG5leHBvcnQgY2xhc3MgTG9hZGluZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIG5nLklEaXJlY3RpdmUge1xuICByZXN0cmljdCA9ICdBJztcbiAgdGVtcGxhdGUgPSA8c3RyaW5nPnJlcXVpcmUoJ2xvYWRpbmcuaHRtbCcpO1xuICBzY29wZSA9IHtcbiAgICBtZXNzYWdlOiAnPCcsXG4gICAgaXNMb2FkaW5nOiAnPHVpTG9hZGluZydcbiAgfTtcbn1cblxuYXBwLmRpcmVjdGl2ZSgndWlMb2FkaW5nJywgKCkgPT4gbmV3IExvYWRpbmdEaXJlY3RpdmUoKSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NvdXJjZXMvbWFpbi91aS1jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5kaXJlY3RpdmUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBuZy1zaG93PVxcXCJpc0xvYWRpbmdcXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNvZyBmYS1zcGluIGZhLTN4XFxcIj48L2k+IDxzcGFuPnt7bWVzc2FnZX19PC9zcGFuPjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL21haW4vdWktY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuaHRtbFxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGFwcCBmcm9tICdtYWluLm1vZHVsZSc7XG5pbXBvcnQge1Jlc3RTZXJ2aWNlfSBmcm9tICdoZWxwZXJzL3Jlc3QvcmVzdC5zZXJ2aWNlJztcbmltcG9ydCB7Q29udGV4dFNlcnZpY2V9IGZyb20gJ2hlbHBlcnMvY29udGV4dC9jb250ZXh0LnNlcnZpY2UnO1xuXG4vKipcbiAqIFF1b3RlIHNlcnZpY2U6IGFsbG93cyB0byBnZXQgcXVvdGUgb2YgdGhlIGRheS5cbiAqL1xuZXhwb3J0IGNsYXNzIFF1b3RlU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBST1VURVMgPSB7XG4gICAgcmFuZG9tSm9rZTogJy9qb2tlcy9yYW5kb20/ZXNjYXBlPWphdmFzY3JpcHQmbGltaXRUbz1bOmNhdGVnb3J5XSdcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlICRxOiBuZy5JUVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVzdFNlcnZpY2U6IFJlc3RTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGNvbnRleHRTZXJ2aWNlOiBDb250ZXh0U2VydmljZSkge1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHJhbmRvbSBDaHVjayBOb3JyaXMgam9rZS5cbiAgICogVXNlZCBjb250ZXh0IHByb3BlcnRpZXM6XG4gICAqIC0gY2F0ZWdvcnk6IHRoZSBqb2tlJ3MgY2F0ZWdvcnk6ICduZXJkeScsICdleHBsaWNpdCcuLi5cbiAgICogQHBhcmFtIHshT2JqZWN0fSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIHVzZS5cbiAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgcHJvbWlzZS5cbiAgICovXG4gIGdldFJhbmRvbUpva2UoY29udGV4dDogYW55KTogbmcuSVByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMucmVzdFNlcnZpY2VcbiAgICAgIC5nZXQodGhpcy5jb250ZXh0U2VydmljZS5pbmplY3QodGhpcy5ST1VURVMucmFuZG9tSm9rZSwgY29udGV4dCksIG51bGwsIHRydWUpXG4gICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEudmFsdWUuam9rZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy4kcS5yZWplY3QoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICByZXR1cm4gJ0Vycm9yLCBjb3VsZCBub3QgbG9hZCBqb2tlIDotKCc7XG4gICAgICB9KTtcbiAgfVxuXG59XG5cbmFwcC5zZXJ2aWNlKCdxdW90ZVNlcnZpY2UnLCBRdW90ZVNlcnZpY2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9tYWluL3dlYi1zZXJ2aWNlcy9xdW90ZS9xdW90ZS5zZXJ2aWNlLnRzIiwiYW5ndWxhci5tb2R1bGUoJ3RyYW5zbGF0aW9ucycpLnJ1bihbJ2dldHRleHRDYXRhbG9nJywgZnVuY3Rpb24gKGdldHRleHRDYXRhbG9nKSB7XG4vKiBqc2hpbnQgLVcxMDAgKi9cbiAgICBnZXR0ZXh0Q2F0YWxvZy5zZXRTdHJpbmdzKCdlbi1VUycsIHtcIkFib3V0XCI6XCJBYm91dFwiLFwiQVBQX05BTUVcIjpcIldNIDIwMThcIixcIkhlbGxvIHdvcmxkICFcIjpcIkhlbGxvIHdvcmxkICFcIixcIkhvbWVcIjpcIkhvbWVcIixcIlRvZ2dsZSBuYXZpZ2F0aW9uXCI6XCJUb2dnbGUgbmF2aWdhdGlvblwiLFwiVmVyc2lvblwiOlwiVmVyc2lvblwifSk7XG4vKiBqc2hpbnQgK1cxMDAgKi9cbn1dKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvdHJhbnNsYXRpb25zL2VuLVVTLnBvXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJhbmd1bGFyLm1vZHVsZSgndHJhbnNsYXRpb25zJykucnVuKFsnZ2V0dGV4dENhdGFsb2cnLCBmdW5jdGlvbiAoZ2V0dGV4dENhdGFsb2cpIHtcbi8qIGpzaGludCAtVzEwMCAqL1xuICAgIGdldHRleHRDYXRhbG9nLnNldFN0cmluZ3MoJ2ZyLUZSJywge1wiQWJvdXRcIjpcIkEgcHJvcG9zXCIsXCJBUFBfTkFNRVwiOlwiV00gMjAxOFwiLFwiSGVsbG8gd29ybGQgIVwiOlwiQm9uam91ciBsZSBtb25kZSAhXCIsXCJIb21lXCI6XCJBY2N1ZWlsXCIsXCJUb2dnbGUgbmF2aWdhdGlvblwiOlwiQmFzY3VsZXIgbGEgbmF2aWdhdGlvblwiLFwiVmVyc2lvblwiOlwiVmVyc2lvblwifSk7XG4vKiBqc2hpbnQgK1cxMDAgKi9cbn1dKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvdHJhbnNsYXRpb25zL2ZyLUZSLnBvXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNlY3Rpb24gaWQ9XFxcImhvbWUtc2NyZWVuXFxcIiBjbGFzcz1cXFwiaG9tZS1zY3JlZW4gY29udGFpbmVyLWZsdWlkXFxcIj48ZGl2IGNsYXNzPVxcXCJqdW1ib3Ryb24gdGV4dC1jZW50ZXJcXFwiPjxoMT48aW1nIGNsYXNzPVxcXCJsb2dvXFxcIiBzcmM9XFxcImltYWdlcy9hbmd1bGFyanMtbG9nby5wbmdcXFwiIGFsdD1cXFwiYW5ndWxhcmpzIGxvZ29cXFwiPiA8c3BhbiB0cmFuc2xhdGU+SGVsbG8gd29ybGQgITwvc3Bhbj48L2gxPjxkaXYgdWktbG9hZGluZz1cXFwidm0uaXNMb2FkaW5nXFxcIj48L2Rpdj48cD48ZW0gY2xhc3M9XFxcInF1b3RlXFxcIj57e3ZtLnF1b3RlfX08L2VtPjwvcD48L2Rpdj48L3NlY3Rpb24+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvbWFpbi9zY3JlZW5zL2VpbnN0ZWxsdW5nZW4vZWluc3RlbGx1bmdlbi5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNlY3Rpb24gaWQ9XFxcImhvbWUtc2NyZWVuXFxcIiBjbGFzcz1cXFwiaG9tZS1zY3JlZW4gY29udGFpbmVyLWZsdWlkXFxcIj48ZGl2IGNsYXNzPVxcXCJqdW1ib3Ryb24gdGV4dC1jZW50ZXJcXFwiPjxoMT48aW1nIGNsYXNzPVxcXCJsb2dvXFxcIiBzcmM9XFxcImltYWdlcy9hbmd1bGFyanMtbG9nby5wbmdcXFwiIGFsdD1cXFwiYW5ndWxhcmpzIGxvZ29cXFwiPiA8c3BhbiB0cmFuc2xhdGU+SGVsbG8gd29ybGQgITwvc3Bhbj48L2gxPjxkaXYgdWktbG9hZGluZz1cXFwidm0uaXNMb2FkaW5nXFxcIj48L2Rpdj48cD48ZW0gY2xhc3M9XFxcInF1b3RlXFxcIj57e3ZtLnF1b3RlfX08L2VtPjwvcD48L2Rpdj48L3NlY3Rpb24+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvbWFpbi9zY3JlZW5zL2tvL2tvLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2VjdGlvbiBpZD1cXFwiaG9tZS1zY3JlZW5cXFwiIGNsYXNzPVxcXCJob21lLXNjcmVlbiBjb250YWluZXItZmx1aWRcXFwiPjxkaXYgY2xhc3M9XFxcImp1bWJvdHJvbiB0ZXh0LWNlbnRlclxcXCI+PGgxPjxpbWcgY2xhc3M9XFxcImxvZ29cXFwiIHNyYz1cXFwiaW1hZ2VzL2FuZ3VsYXJqcy1sb2dvLnBuZ1xcXCIgYWx0PVxcXCJhbmd1bGFyanMgbG9nb1xcXCI+IDxzcGFuIHRyYW5zbGF0ZT5IZWxsbyB3b3JsZCAhPC9zcGFuPjwvaDE+PGRpdiB1aS1sb2FkaW5nPVxcXCJ2bS5pc0xvYWRpbmdcXFwiPjwvZGl2PjxwPjxlbSBjbGFzcz1cXFwicXVvdGVcXFwiPnt7dm0ucXVvdGV9fTwvZW0+PC9wPjwvZGl2Pjwvc2VjdGlvbj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy9tYWluL3NjcmVlbnMvZmluYWxlL2ZpbmFsZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNlY3Rpb24gaWQ9XFxcImhvbWUtc2NyZWVuXFxcIiBjbGFzcz1cXFwiaG9tZS1zY3JlZW4gY29udGFpbmVyLWZsdWlkXFxcIj48ZGl2IGNsYXNzPVxcXCJqdW1ib3Ryb24gdGV4dC1jZW50ZXJcXFwiPjxoMT48aW1nIGNsYXNzPVxcXCJsb2dvXFxcIiBzcmM9XFxcImltYWdlcy9hbmd1bGFyanMtbG9nby5wbmdcXFwiIGFsdD1cXFwiYW5ndWxhcmpzIGxvZ29cXFwiPiA8c3BhbiB0cmFuc2xhdGU+SGVsbG8gd29ybGQgITwvc3Bhbj48L2gxPjxkaXYgdWktbG9hZGluZz1cXFwidm0uaXNMb2FkaW5nXFxcIj48L2Rpdj48cD48ZW0gY2xhc3M9XFxcInF1b3RlXFxcIj57e3ZtLnF1b3RlfX08L2VtPjwvcD48L2Rpdj48L3NlY3Rpb24+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvbWFpbi9zY3JlZW5zL2dydXBwZW4vZ3J1cHBlbi5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9