var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
    PaymentStatus[PaymentStatus["Processed"] = 1] = "Processed";
    PaymentStatus[PaymentStatus["Reverseed"] = 2] = "Reverseed";
})(PaymentStatus || (PaymentStatus = {}));
var Payment = /** @class */ (function () {
    function Payment(id) {
        this.id = id;
        this.createdAt = new Date();
        this.status = PaymentStatus.Holded;
    }
    Payment.prototype.getPaymentLifetime = function () {
        return new Date().getTime() - this.createdAt.getTime();
    };
    Payment.prototype.unholdPayment = function () {
        if (this.status == PaymentStatus.Processed) {
            throw new Error('Платеж не может быть возвращен!');
        }
        this.status = PaymentStatus.Reverseed;
        this.updatedAt = new Date();
    };
    return Payment;
}());
var payment = new Payment(1);
payment.unholdPayment();
console.log(payment);
var time = payment.getPaymentLifetime();
console.log(time);
