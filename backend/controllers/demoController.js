const Demo = require("../models/Demo");

// Create a new demo request
exports.createDemo = async (req, res, next) => {
  try {
    const demo = await Demo.create(req.body);
    res.status(201).json({ success: true, data: demo });
  } catch (err) {
    next(err);
  }
};

// Get all demos (with simple pagination)
exports.getDemos = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 25;
    const skip = (page - 1) * limit;

    const [demos, total] = await Promise.all([
      Demo.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
      Demo.countDocuments(),
    ]);

    res
      .status(200)
      .json({ success: true, count: demos.length, total, data: demos });
  } catch (err) {
    next(err);
  }
};

// Get single demo by id
exports.getDemo = async (req, res, next) => {
  try {
    const demo = await Demo.findById(req.params.id);
    if (!demo)
      return res
        .status(404)
        .json({ success: false, message: "Demo not found" });
    res.status(200).json({ success: true, data: demo });
  } catch (err) {
    next(err);
  }
};

// Update demo
exports.updateDemo = async (req, res, next) => {
  try {
    const demo = await Demo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!demo)
      return res
        .status(404)
        .json({ success: false, message: "Demo not found" });
    res.status(200).json({ success: true, data: demo });
  } catch (err) {
    next(err);
  }
};

// Get stats (count per status)
exports.getDemoStats = async (req, res, next) => {
  try {
    const stats = await Demo.aggregate([
      { $group: { _id: "$status", count: { $sum: 1 } } },
      { $project: { status: "$_id", count: 1, _id: 0 } },
    ]);
    res.status(200).json({ success: true, data: stats });
  } catch (err) {
    next(err);
  }
};
