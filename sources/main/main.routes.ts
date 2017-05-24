import app from 'main.module';

/**
 * Configures the application routes.
 */
function routeConfig($stateProvider: angular.ui.IStateProvider,
                     $urlRouterProvider: angular.ui.IUrlRouterProvider,
                     gettext: angular.gettext.gettextFunction) {

  // Routes configuration
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      template: <string>require('shell/shell.html'),
      controller: 'shellController as shell'
    })
      .state('app.home', {
      url: '/',
      template: <string>require('screens/home/home.html'),
      controller: 'homeController as vm',
      data: {title: gettext('Home')}
    })
    .state('app.einstellungen', {
      url: '/einstellungen',
      template: <string>require('screens/einstellungen/einstellungen.html'),
      controller: 'einstellungenController as vm',
      data: {title: gettext('Einstellungen')}
    })
    .state('app.gruppen', {
      url: '/gruppen',
      template: <string>require('screens/gruppen/gruppen.html'),
      controller: 'gruppeController as vm',
      data: {title: gettext('Gruppenphase')}
    })
    .state('app.ko', {
      url: '/ko',
      template: <string>require('screens/ko/ko.html'),
      controller: 'koController as vm',
      data: {title: gettext('KO-Phase')}
    })
     .state('app.finale', {
      url: '/finale',
      template: <string>require('screens/finale/finale.html'),
      controller: 'finaleController as vm',
      data: {title: gettext('Finale')}
    });

}

app.config(routeConfig);
