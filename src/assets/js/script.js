var app = angular.module('treeApp', []);
  app.controller('TreeController', function ($scope) {
    // Initialize your tree data (you can load it from local storage here)

    $scope.treeData = [
      { id: 1, name: 'Richard Paul M.', parentId: null, checked: false, children: [] },
      { id: 2, name: 'Luis F. Doris', parentId: 1, checked: false, children: [] },
      { id: 3, name: 'Maurice Rudoff Ludwig', parentId: 2, checked: false, children: [] },
      { id: 4, name: 'Luis F. Doris', parentId: 3, checked: false, children: [] },
      { id: 5, name: 'Alan G. William', parentId: 4, checked: false, children: [] },
      { id: 6, name: 'Guglielmo Hendrik Antoon', parentId: 3, checked: false, children: [] },
      { id: 7, name: 'Wladyslaw Stanislaw Ivar', parentId: 3, checked: false, children: [] },
      { id: 8, name: 'Élie Melvin', parentId: 3, checked: false, children: [] },
      { id: 9, name: 'Alvin E. Emil Theodor', parentId: 3, checked: false, children: [] },
      { id: 10, name: 'Helke Norman E.', parentId: 3, checked: false, children: [] },
      { id: 11, name: 'Kurt Dickinson W.', parentId: 2, checked: false, children: [] },
      { id: 12, name: 'Finn E. May-Britt', parentId: 2, checked: false, children: [] },
      { id: 13, name: 'James A. Shimon', parentId: 2, checked: false, children: [] },
    ];

    // Function to handle checkbox state changes
    $scope.checkItem = function (item) {
      updateChildrenState(item, item.checked);
      updateParentState(item);
    };

    // Recursively update the state of all children
    function updateChildrenState(item, state) {
      item.checked = state;
      angular.forEach(item.children, function (child) {
        updateChildrenState(child, state);
      });
    }

    // Update the state of the parent based on children's state
    function updateParentState(item) {
      if (!item.parent) return;

      var allChecked = true;
      var allUnchecked = true;

      angular.forEach(item.parent.children, function (child) {
        if (child.checked) {
          allUnchecked = false;
        } else {
          allChecked = false;
        }
      });

      if (allChecked) {
        item.parent.checked = true;
      } else if (allUnchecked) {
        item.parent.checked = false;
      } else {
        item.parent.checked = false; // Set to indeterminate
      }

      updateParentState(item.parent);
    }
  });