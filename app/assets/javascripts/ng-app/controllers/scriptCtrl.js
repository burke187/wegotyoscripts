
 // $scope.sph = [ '-10','-9.75','-9.5','-9.25','-9','-8.75','-8.5','-8.25','-8','-7.75','-7.5','-7.25','-7','-6.75','-6.5','-6.25','-6','-5.75','-5.5','-5.25','-5','-4.75','-4.5','-4.25','-4','-3.75','-3.5','-3.25','-3','-2.75','-2.5','-2.25','-2','-1.75','-1.5','-1.25','-1','-0.75','-0.5','-0.25','0','0.25','0.5','0.75','1','1.25','1.5','1.75','2','2.25','2.5','2.75','3','3.25','3.5','3.75','4','4.25','4.5','4.75','5','5.25','5.5','5.75','6','6.25','6.5','6.75','7','7.25','7.5','7.75','8','8.25','8.5','8.75','9','9.25','9.5','9.75','10'];
  //$scope.syl = [ '-10','-9.75','-9.5','-9.25','-9','-8.75','-8.5','-8.25','-8','-7.75','-7.5','-7.25','-7','-6.75','-6.5','-6.25','-6','-5.75','-5.5','-5.25','-5','-4.75','-4.5','-4.25','-4','-3.75','-3.5','-3.25','-3','-2.75','-2.5','-2.25','-2','-1.75','-1.5','-1.25','-1','-0.75','-0.5','-0.25','0','0.25','0.5','0.75','1','1.25','1.5','1.75','2','2.25','2.5','2.75','3','3.25','3.5','3.75','4','4.25','4.5','4.75','5','5.25','5.5','5.75','6','6.25','6.5','6.75','7','7.25','7.5','7.75','8','8.25','8.5','8.75','9','9.25','9.5','9.75','10'];
  //$scope.axs = [ '0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115','116','117','118','119','120','121','122','123','124','125','126','127','128','129','130','131','132','133','134','135','136','137','138','139','140','141','142','143','144','145','146','147','148','149','150','151','152','153','154','155','156','157','158','159','160','161','162','163','164','165','166','167','168','169','170','171','172','173','174','175','176','177','178','179','180'];
  //$scope.bc = ['7', '7.1', '7.2', '7.3', '7.4','7.5','7.6','7.7','7.8','7.9','8','8.1','8.2','8.3','8.4','8.5','8.6','8.7','8.8','8.9','9'];
  //$scope.diam =['13','13.1','13.2','13.3','13.4','13.5','13.6','13.7','13.8','13.9','14','14.1','14.2','14.3','14.4','14.5','14.6','14.7','14.8','14.9','15'];
angular.module('Wegotyoscripts').controller('ModalDemoCtrl', function ($scope, $modal, $log) {

  $scope.items = ['-10','-9.75','-9.5','-9.25','-9','-8.75','-8.5','-8.25','-8','-7.75','-7.5','-7.25','-7','-6.75','-6.5','-6.25','-6','-5.75','-5.5','-5.25','-5','-4.75','-4.5','-4.25','-4','-3.75','-3.5','-3.25','-3','-2.75','-2.5','-2.25','-2','-1.75','-1.5','-1.25','-1','-0.75','-0.5','-0.25','0','0.25','0.5','0.75','1','1.25','1.5','1.75','2','2.25','2.5','2.75','3','3.25','3.5','3.75','4','4.25','4.5','4.75','5','5.25','5.5','5.75','6','6.25','6.5','6.75','7','7.25','7.5','7.75','8','8.25','8.5','8.75','9','9.25','9.5','9.75','10'];

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('Wegotyoscripts').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
  