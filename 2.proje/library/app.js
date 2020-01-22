var myLibraryApp = angular.module('myLibraryApp',[]);
myLibraryApp.controller('LibraryController',function($scope){
       
        $scope.bookname= null; 
        $scope.Authorname= null;
        $scope.price= null;

        $scope.books=[];

        $scope.update={
            
            bookname: null,
            Authorname:null,
            price: null
        };
        
        $scope.ClearBook = function(){
            $scope.bookname= null; 
            $scope.Authorname= null;
            $scope.price= null;
    
        };
    
   
    $scope.removeBook=function(book){
        var removeBook= $scope.books.indexOf(book);
        $scope.books.splice(removeBook, 1);
    
     };
     

  
       $scope.save = function(){
          $scope.books.push({
            
            bookname: $scope.newbook.bookname,
            Authorname: $scope.newbook.Authorname,
              price: $scope.newbook.price,
              available : true
               
          });
          $scope.newbook.bookname = "";
          $scope.newbook.Authorname = "";
          $scope.newbook.price = "";

        };
        
    
    $scope.updateBook=function(book){

        $scope.update=book;
        

    }
    $scope.ClearBook();
    

});