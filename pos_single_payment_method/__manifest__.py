{
    'name': 'POS Single Payment Method',
    'version': '15.0',
    'summary': 'This application allows the single payment method is single order',
    'author': 'Mittal Nayar -BeyonData',
    'description': """
    This application allows the single payment method is single order
    """,
    'category': 'Point of Sale',


   "depends": ['point_of_sale'],
    'data': [
        'views/pos_config_inherited_view.xml',
    ],
    'assets': {
        'point_of_sale.assets': [
            'pos_single_payment_method/static/src/js/payment_screen.js',
        ],
    },
    'price': '18.00',
    'currency': 'USD',
    'demo': [],
    'installable': True,
    'application': True,
    'license': 'LGPL-3',
    'images': ['static/description/banner.gif'],



}