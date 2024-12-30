from odoo import models, fields

class PosConfig(models.Model):
    _inherit = 'pos.config'

    restrict_single_payment = fields.Boolean(
        string="Restrict Single Payment Method",
        help="If checked, the POS will allow only one payment method per order."
    )
