// add donation
// delete donation
// get all donations
// get donation by id
// update donation by id
// edit donation by id
// add payment gateway
const express = require('express');
const router = express.Router();
const Donation = require('../models/donation');
// const paypal = require('paypal-rest-sdk');

// add donation
router.post('/add', async (req, res) => {
    try {
        const donation = new Donation(req.body);
        await donation.save();
        res.status(201).send({success:true, message: "Donation added successfully"});
    } catch (error) {
        res.status(400).send({success:false, message: error.message});
    }
}
);
// delete donation
router.delete('/delete/:id', async (req, res) => {
    try {
        const donation = await Donation.findByIdAndDelete(req.params.id);
        if (!donation) {
            return res.status(404).send({success:false, message: "Donation not found"});
        }
        res.send({success:true, message: "Donation deleted successfully"});
    } catch (error) {
        res.status(500).send({success:false, message: error.message});
    }
}
);
// get all donations
router.get('/all', async (req, res) => {
    try {
        const donations = await Donation.find();
        res.send({success:true, donations});
    } catch (error) {
        res.status(500).send({success:false, message: error.message});
    }
}
);
// get donation by id
router.get('/:id', async (req, res) => {
    try {
        const donation = await Donation.findById(req.params.id);
        if (!donation) {
            return res.status(404).send({success:false, message: "Donation not found"});
        }
        res.send({success:true, donation});
    } catch (error) {
        res.status(500).send({success:false, message: error.message});
    }
}
);
// update donation by id
router.patch('/update/:id', async (req, res) => {
    try {
        const donation = await Donation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!donation) {
            return res.status(404).send({success:false, message: "Donation not found"});
        }
        res.send({success:true, donation});
    } catch (error) {
        res.status(500).send({success:false, message: error.message});
    }
}
);
// edit donation by id
router.put('/edit/:id', async (req, res) => {
    try {
        const donation = await Donation.findByIdAndUpdate
        (req.params.id, req.body, { new: true });
        if (!donation) {
            return res.status(404).send({success:false, message: "Donation not found"});
        }
        res.send({success:true, donation});
    } catch (error) {
        res.status(500).send({success:false, message: error.message});
    }
}
);
// paypal.configure({
//     'mode': 'sandbox', //sandbox or live
//     'client_id': 'YOUR_CLIENT_ID',
//     'client_secret': 'YOUR_CLIENT_SECRET'
// });

// // add payment gateway
// router.post('/pay', (req, res) => {
//     const create_payment_json = {
//         "intent": "sale",
//         "payer": {
//             "payment_method": "paypal"
//         },
//         "redirect_urls": {
//             "return_url": "http://return.url",
//             "cancel_url": "http://cancel.url"
//         },
//         "transactions": [{
//             "item_list": {
//                 "items": [{
//                     "name": "Donation",
//                     "sku": "001",
//                     "price": req.body.amount,
//                     "currency": "USD",
//                     "quantity": 1
//                 }]
//             },
//             "amount": {
//                 "currency": "USD",
//                 "total": req.body.amount
//             },
//             "description": "Donation payment"
//         }]
//     };

//     paypal.payment.create(create_payment_json, function (error, payment) {
//         if (error) {
//             res.status(500).send({success:false, message: error.message});
//         } else {
//             for(let i = 0; i < payment.links.length; i++) {
//                 if (payment.links[i].rel === 'approval_url') {
//                     res.send({success:true, forwardLink: payment.links[i].href});
//                 }
//             }
//         }
//     });
// });

module.exports = router;
