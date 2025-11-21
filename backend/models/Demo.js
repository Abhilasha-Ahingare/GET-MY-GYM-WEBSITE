const mongoose = require('mongoose');

const demoSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^[\+]?[0-9\s\-\(\)]{10,}$/, 'Please enter a valid phone number']
  },
  gymName: {
    type: String,
    required: [true, 'Gym name is required'],
    trim: true,
    maxlength: [200, 'Gym name cannot be more than 200 characters']
  },
  date: {
    type: Date,
    required: [true, 'Preferred date is required']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  },
  demoType: {
    type: String,
    enum: ['online', 'offline'],
    default: 'online'
  },
  notes: {
    type: String,
    maxlength: [500, 'Notes cannot be more than 500 characters']
  }
}, {
  timestamps: true
});

// Index for better query performance
demoSchema.index({ email: 1, createdAt: -1 });
demoSchema.index({ status: 1 });

const Demo = mongoose.model('Demo', demoSchema);

module.exports = Demo;