//控制器 记得引入服务$scope,$http,brandService...
app.controller("brandController",function ($scope,$http,brandService,$controller) {

    $controller("baseController",{$scope:$scope});//控制器继承，让当前的scope和baseController的scope通用

    //查询品牌列表
    $scope.findAll=function () {
        brandService.findAll().success(function (response) {
            $scope.list = response;
        });
    };



    $scope.findPage = function (page,size) {
        brandService.findPage(page,size).success(function (response) {
            $scope.paginationConf.totalItems = response.total;//更新总记录数
            $scope.list = response.rows;//显示当前页数据
        })
    };

    //新增
    /*$scope.save = function(){
        var methodName = "add";
        //前端判断新增or修改
        //如果有id，证明有数据，是修改
        if ($scope.entity.id != null) {
            methodName = "update";
        }
        $http.post("../brand/"+methodName+".do",$scope.entity).success(function (response) {
            //返回的是Result对象
            if (response.success) {
                $scope.reloadList();//刷新
            }else {
                alert(response.message)
            }
        })
    };*/
    $scope.save = function(){
        var Object = null;


        if ($scope.entity.id != null) {
            Object = brandService.update($scope.entiry);
        }else {
            Object = brandService.add($scope.entity);
        }
        Object.success(function (response) {
            //返回的是Result对象
            if (response.success) {
                $scope.reloadList();//刷新
            }else {
                alert(response.message)
            }
        })
    };

    //查询实体
    $scope.findOne=function(id){
        brandService.findOne(id).success(function (response) {
            $scope.entity = response;
        })
    };



    //删除
    $scope.dele = function(){
        brandService.dele($scope.selectIds).success(function (response) {
            if (response.success) {
                $scope.reloadList();//刷新
            }else{
                alert(response.message);
            }
        })
    };

    //<input ng-model="searchEntiry.name"> 将input的值绑定到searchEntiry.name中

    $scope.searchEntiry = {};//搜索对象
    //条件查询
    $scope.search = function (page,size) {
        brandService.search(page,size,$scope.searchEntiry).success(function (response) {
            $scope.list = response.rows;//显示当前页数据
            $scope.paginationConf.totalItems = response.total;//更新总记录数
        })
    };
});