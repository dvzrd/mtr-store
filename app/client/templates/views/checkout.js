Template.checkout.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('products');
    });
});