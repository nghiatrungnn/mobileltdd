const Tour = require('../models/Tour');

// Lấy danh sách tour
exports.getTours = async (req, res) => {
    try {
        const tours = await Tour.find();
        res.json(tours);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm tour mới
exports.createTour = async (req, res) => {
    const tour = new Tour(req.body);
    try {
        const savedTour = await tour.save();
        res.status(201).json(savedTour);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
