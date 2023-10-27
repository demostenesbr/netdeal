$scope.treeData = [
  {
    id: 1,
    name: "Richard Paul M.",
    parentId: null,
    checked: false,
    children: [],
  },
  { id: 2, name: "Luis F. Doris", parentId: 1, checked: false, children: [] },
  {
    id: 3,
    name: "Maurice Rudoff Ludwig",
    parentId: 2,
    checked: false,
    children: [],
  },
  {
    id: 4,
    name: "Joseph E. James A.",
    parentId: 3,
    checked: false,
    children: [],
  },
  { id: 5, name: "Alan G. William", parentId: 4, checked: false, children: [] },
  {
    id: 6,
    name: "Guglielmo Hendrik Antoon",
    parentId: 3,
    checked: false,
    children: [],
  },
  {
    id: 7,
    name: "Wladyslaw Stanislaw Ivar",
    parentId: 3,
    checked: false,
    children: [],
  },
  { id: 8, name: "Élie Melvin", parentId: 3, checked: false, children: [] },
  {
    id: 9,
    name: "Alvin E. Emil Theodor",
    parentId: 3,
    checked: false,
    children: [],
  },
  {
    id: 10,
    name: "Helke Norman E.",
    parentId: 3,
    checked: false,
    children: [],
  },
  {
    id: 11,
    name: "Kurt Dickinson W.",
    parentId: 2,
    checked: false,
    children: [],
  },
  {
    id: 12,
    name: "Finn E. May-Britt",
    parentId: 2,
    checked: false,
    children: [],
  },
  {
    id: 13,
    name: "James A. Shimon",
    parentId: 2,
    checked: false,
    children: [],
  },
];

var app = angular.module("myApp", []);

app.controller("ListController", function ($scope) {
  $scope.items = [];
  $scope.newItemName = "";

  $scope.addItem = function () {
    $scope.items.push({
      name: $scope.newItemName,
      checked: false,
      subitems: [],
    });
    $scope.newItemName = "";
  };

  $scope.editItem = function (item) {
    // Implement edit functionality
  };

  $scope.deleteItem = function (item) {
    var index = $scope.items.indexOf(item);
    if (index !== -1) {
      $scope.items.splice(index, 1);
    }
  };

  $scope.editSubitem = function (item, subitem) {
    // Implement edit functionality for subitems
  };

  $scope.deleteSubitem = function (item, subitem) {
    var index = item.subitems.indexOf(subitem);
    if (index !== -1) {
      item.subitems.splice(index, 1);
    }
  };
});
