'use strict';

angular.module('bahmni.common.displaycontrol.patientObservationsChart').directive('patientObservationsChart', ['$translate', 'spinner', 'observationsService', '$q',
    function ($translate, spinner, observationsService, $q) {
        var link = function ($scope) {

            var getPatientObservationChartData = function () {
                return observationsService.fetchPatientObservationsChartData("123").success(function (data) {
                    $scope.flowsheetHeader = data.flowsheetHeader;
                    $scope.flowsheetData = data.flowsheetData;
                    $scope.flowsheetDataKeys = Object.keys($scope.flowsheetData);
                })
            }

            var init = function () {
                return $q.all([getPatientObservationChartData()]).then(function () {
                });
            };

            spinner.forPromise(init());
        };
        return {
            restrict: 'E',
            link: link,
            scope: {
                section: "="
            },
            templateUrl: "../common/displaycontrols/patientObservationsChart/views/patientObservationsChart.html"
        };
    }]);
