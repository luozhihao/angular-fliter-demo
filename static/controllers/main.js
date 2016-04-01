/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-01-08 14:59:59
 * @version $Id$
 */

var myModule = angular.module('myApp', ['customFilters']);

myModule.controller('mainCtrl', [function () {
    var vm = this;

    vm.name = 'luozh';

    vm.data = {
        products: [
            {name: 'wx', description: 'A product', category: 'Category #1', price: 100},
            {name: 'wyi', description: 'A product', category: 'Category #1', price: 110},
            {name: 'shengjh', description: 'A product', category: 'Category #3', price: 210},
            {name: 'luozh', description: 'A product', category: 'Category #4', price: 202}
        ]
    };
}]);

myModule.constant('productListActiveClass', 'btn-primary')
.controller('productListCtrl', ['productListActiveClass', function (productListActiveClass) {
    var list = this;

    var selectedCategory = null;

    list.selectCategory = function (newCategory) {
        selectedCategory = newCategory;
    };

    list.categoryFilterFn = function (product) {
        return selectedCategory == null || product.category == selectedCategory;
    };

    list.getCategoryClass = function (category) {
        return selectedCategory == category ? productListActiveClass : "";
    };
}]);