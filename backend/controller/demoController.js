const Demo = require('../models/Demo');
const { sendUserConfirmation, sendAdminNotification } = require('../utils/emailService');

// @desc    Create new demo request
// @route   POST /api/demo
// @access  Public
exports.createDemo = async (req, res) => {
  try {
    const { fullName, email, phone, gymName, date } = req.body;

    // Check if demo already exists for this email on the same date
    const existingDemo = await Demo.findOne({
      email: email.toLowerCase(),
      date: new Date(date)
    });

    if (existingDemo) {
      return res.status(400).json({
        success: false,
        message: 'You have already scheduled a demo for this date. Please choose a different date.'
      });
    }

    // Create new demo
    const demo = await Demo.create({
      fullName: fullName.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      gymName: gymName.trim(),
      date: new Date(date)
    });

    // Send confirmation emails (non-blocking)
    Promise.all([
      sendUserConfirmation(demo),
      sendAdminNotification(demo)
    ]).catch(error => {
      console.error('Error sending emails:', error);
    });

    res.status(201).json({
      success: true,
      message: 'Demo scheduled successfully! We will contact you shortly.',
      data: {
        id: demo._id,
        fullName: demo.fullName,
        email: demo.email,
        gymName: demo.gymName,
        date: demo.date
      }
    });

  } catch (error) {
    console.error('Error creating demo:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
};

// @desc    Get all demo requests (for admin)
// @route   GET /api/demo
// @access  Private
exports.getDemos = async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    
    const query = {};
    if (status && status !== 'all') {
      query.status = status;
    }

    const demos = await Demo.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Demo.countDocuments(query);

    res.status(200).json({
      success: true,
      data: demos,
      pagination: {
        current: parseInt(page),
        pages: Math.ceil(total / limit),
        total
      }
    });
  } catch (error) {
    console.error('Error fetching demos:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get single demo request
// @route   GET /api/demo/:id
// @access  Private
exports.getDemo = async (req, res) => {
  try {
    const demo = await Demo.findById(req.params.id);

    if (!demo) {
      return res.status(404).json({
        success: false,
        message: 'Demo request not found'
      });
    }

    res.status(200).json({
      success: true,
      data: demo
    });
  } catch (error) {
    console.error('Error fetching demo:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update demo status
// @route   PUT /api/demo/:id
// @access  Private
exports.updateDemo = async (req, res) => {
  try {
    const { status, notes } = req.body;

    const demo = await Demo.findByIdAndUpdate(
      req.params.id,
      { status, notes },
      { new: true, runValidators: true }
    );

    if (!demo) {
      return res.status(404).json({
        success: false,
        message: 'Demo request not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Demo updated successfully',
      data: demo
    });
  } catch (error) {
    console.error('Error updating demo:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get demo statistics
// @route   GET /api/demo/stats
// @access  Private
exports.getDemoStats = async (req, res) => {
  try {
    const total = await Demo.countDocuments();
    const pending = await Demo.countDocuments({ status: 'pending' });
    const confirmed = await Demo.countDocuments({ status: 'confirmed' });
    const completed = await Demo.countDocuments({ status: 'completed' });

    // Demos by month for current year
    const currentYear = new Date().getFullYear();
    const monthlyStats = await Demo.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(`${currentYear}-01-01`),
            $lte: new Date(`${currentYear}-12-31`)
          }
        }
      },
      {
        $group: {
          _id: { $month: "$createdAt" },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { "_id": 1 }
      }
    ]);

    res.status(200).json({
      success: true,
      data: {
        total,
        pending,
        confirmed,
        completed,
        monthlyStats
      }
    });
  } catch (error) {
    console.error('Error fetching demo stats:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};