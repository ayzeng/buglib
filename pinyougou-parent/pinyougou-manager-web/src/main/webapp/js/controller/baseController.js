app.controller("baseController",function ($scope) {
        //分页控件配置
        $scope.paginationConf={
            currentPage:1,
            totalItems:10,
            itemsPerPage:10,
            perPageOptions:[10,20,30,40,50],
            onChange:function () {
                $scope.reloadList();
            }
        };

    //刷新列表
    $scope.reloadList = function(){
        $scope.search($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
    };


    $scope.selectIds = [];//勾选的id集合

    //勾选复选框获取id
    $scope.updateSelection = function($event,id){
        if($event.target.checked) {
            $scope.selectIds.push(id);//向集合添加元素
        }else{
            //取消选中复选框
            var index = $scope.selectIds.indexOf(id);//返回id在集合中位置
            $scope.selectIds.splice(index,1);//从index位置移除1个元素
        }
    };

    $scope.jsonToString=function(jsonString,key){
        var json= JSON.parse(jsonString);
        var value="";

        for(var i=0;i<json.length;i++){
            if(i>0){
                value+=",";
            }
            value +=json[i][key];
        }

        return value;
    };
});