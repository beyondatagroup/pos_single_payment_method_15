odoo.define('your_module.PaymentScreen', function (require) {
    'use strict';

    const PaymentScreen = require('point_of_sale.PaymentScreen');
    const Registries = require('point_of_sale.Registries');

    const PaymentScreenWithSingleMethod = PaymentScreen =>
        class extends PaymentScreen {
            addNewPaymentLine(paymentMethod) {
                const currentOrder = this.env.pos.get_order();

                // Check the POS configuration for the restriction
                if (this.env.pos.config.restrict_single_payment) {
                    // Check if a payment line already exists
                    if (currentOrder.paymentlines.length > 0) {
                        this.showPopup('ErrorPopup', {
                            title: 'Multiple Payment Methods Not Allowed',
                            body: 'You can only select one payment method per order.',
                        });
                        return;
                    }
                }

                // Call the original method to add the payment line
                super.addNewPaymentLine(paymentMethod);
            }
        };

    Registries.Component.extend(PaymentScreen, PaymentScreenWithSingleMethod);

    return PaymentScreenWithSingleMethod;
});
