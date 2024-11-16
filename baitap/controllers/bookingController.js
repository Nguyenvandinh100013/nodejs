// controllers/bookingController.js
const Booking = require('../models/Booking');

// Lấy tất cả bookings
exports.getAllBookings = async (req, res, next) => {
    try {
        const bookings = await Booking.find(); // Gọi phương thức find() và đợi kết quả
        res.status(200).json(bookings); // Trả về kết quả dưới dạng JSON
    } catch (error) {
        next(error); // Nếu có lỗi, chuyển tiếp lỗi cho middleware xử lý lỗi
    }
    res.render('index')
};

// Thêm một booking mới
exports.createBooking = (req, res) => {
  const { customerName, date, time } = req.body;
  const newBooking = new Booking({
    customerName,
    date,
    time,
    status: 'Pending'
  });
  
  newBooking.save((err) => {
    if (err) {
      return res.status(500).send('Error saving booking');
    }
    res.redirect('/bookings');
  });
};

// Sửa một booking
exports.editBookingPage = (req, res) => {
  const bookingId = req.params.id;
  Booking.findById(bookingId, (err, booking) => {
    if (err) {
      return res.status(500).send('Error fetching booking');
    }
    res.render('editBooking', { booking });  // Giả sử bạn có form để chỉnh sửa
  });
};

exports.updateBooking = (req, res) => {
  const bookingId = req.params.id;
  const { customerName, date, time } = req.body;
  Booking.findByIdAndUpdate(bookingId, { customerName, date, time }, (err) => {
    if (err) {
      return res.status(500).send('Error updating booking');
    }
    res.redirect('/bookings');
  });
};

// Hủy booking
exports.cancelBooking = (req, res) => {
  const bookingId = req.params.id;
  Booking.findByIdAndUpdate(bookingId, { status: 'Cancelled' }, (err) => {
    if (err) {
      return res.status(500).send('Error canceling booking');
    }
    res.redirect('/bookings');
  });
};
