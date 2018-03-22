'use strict';

// Declare app level module which depends on views, and components
angular.module('main.app', ['ngResource', 'ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {

        // this state is based on component
        var loginState = {
            name: 'login',
            url: '/login',
            
            views: {
                'header-view': {
                    component: 'header'
                },
                'login-view': {
                    component: 'login'
                    // templateUrl: '/templates/login-view.html'
                }
            },
            params: {
                user:null
            }
        };

        // this state is based on templateUrl
        var welcomeState = {
            name: 'welcome',
            url: '/welcome',
            views: {
                'header-view': {
                    component: 'header'
                },
                'welcome-view': {
                    component: 'welcome'
                }
            },
            params: {
                user:null
            }
        };

        $stateProvider.state(loginState);
        $stateProvider.state(welcomeState);
        $urlRouterProvider.otherwise('login');

    })

    .component('header', {

        templateUrl : '/templates/header.html',

        controller: function($scope, $state, $stateParams) {
            $scope.user = $stateParams.user;

            this.logout = function() {
                console.log("header logout called.");
                $state.go('login', {user: null});
            };
        }
    })

    .component('login', {

        templateUrl : '/templates/login.html',

        controller : function($state) {
            this.user = null;

            this.login = function() {
                console.log("login called." + this.user);
                $state.go('welcome', {user: this.user});
            };
        }
    })



    .component('welcome', {
        templateUrl: '/templates/welcome.html',
        
        controller: function($scope, $state, $stateParams) {
            $scope.user = $stateParams.user;
        }
    })

    .controller('MainController', ['$scope', function ($scope) {

        $scope.authenticated = false;



        // $scope.login = function() {
        //     console.log("Login method called.");
        // };


        // $scope.logout = function() {
        //     console.log("Logout method called.");
        // };


    }]);



