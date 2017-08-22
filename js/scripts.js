//business logic
Balance function(name, initial, deposit, withdrawl) {
  this.name = name;
  this.initial = initial;
  this.deposit = deposit;
  this.withdrawal = withdrawal;
}

Balance.prototype.result = function () {
  this.initial + this.deposit - this.withdrawal;
};

//user-interface logic
$(document).ready(function(){
  $(".form-group").submit(function(event) {
    event.preventDefaul();
    var name = $("#useName").val();
    var iDeposit = $("#initialDeposit").val();

    $(".form-group2").submit(function(event) {
      event.preventDefaul();
      var dAmmount = $("#depositAmount").val();
      var wAmmount = $("#withAmount").val();
      var newBalance = new Balance(name, iDeposit, dAmmount, wAmmount);
  });

});
