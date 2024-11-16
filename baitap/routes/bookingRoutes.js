// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Route để xem danh sách tất cả các booking
router.get('/', bookingController.getAllBookings);

// Route để thêm một booking mới
router.post('/add', bookingController.createBooking);

// Route để sửa một booking
router.get('/edit/:id', bookingController.editBookingPage);
router.post('/edit/:id', bookingController.updateBooking);

// Route để hủy một booking
router.post('/cancel/:id', bookingController.cancelBooking);

module.exports = router;
