/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-01-08 15:36:16
 * @version $Id$
 */

angular.module('customFilters', [])
    .filter('unique', function () {
        return function (data, propertyName) {
            if (angular.isArray(data) && angular.isString(propertyName)) {
                var results = [];
                var keys = {};

                angular.forEach(data, function (value, key) {
                    var val = value[propertyName];

                    if (angular.isUndefined(keys[val])) {
                        keys[val] = true;
                        results.push(val);
                    }
                });

                return results;
            } else {
                return data;
            }
        }
    });
