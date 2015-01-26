'use strict';

angular.module('clipAdminFrontApp')
    .factory('Session', function($rootScope) {
        var currentUserMail = undefined;
        var currentCode = undefined;

        return {

            getUserMail: function () {
                return currentUserMail;
            },
            setUserMail: function (mail) {
                currentUserMail = mail;
            },
            getCode: function () {
                return currentCode;
            },
            setCode: function (code) {
                currentCode = code;
            }

        };


    }
);