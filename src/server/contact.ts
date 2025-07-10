import mongoose, { Schema, type Document } from 'mongoose'

export interface IContact extends Document {
  name: string
  email: string
  subject: string
  message: string
  status: 'new' | 'read' | 'replied' | 'archived'
  ipAddress?: string
  userAgent?: string
  createdAt: Date
  updatedAt: Date
  repliedAt?: Date
  notes?: string
}

const ContactSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long'],
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please provide a valid email address',
      ],
      maxlength: [255, 'Email cannot exceed 255 characters'],
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      trim: true,
      minlength: [5, 'Subject must be at least 5 characters long'],
      maxlength: [200, 'Subject cannot exceed 200 characters'],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      minlength: [10, 'Message must be at least 10 characters long'],
      maxlength: [2000, 'Message cannot exceed 2000 characters'],
    },
    status: {
      type: String,
      enum: ['new', 'read', 'replied', 'archived'],
      default: 'new',
    },
    ipAddress: {
      type: String,
      trim: true,
    },
    userAgent: {
      type: String,
      trim: true,
    },
    repliedAt: {
      type: Date,
    },
    notes: {
      type: String,
      trim: true,
      maxlength: [1000, 'Notes cannot exceed 1000 characters'],
    },
  },
  {
    timestamps: true, 
    collection: 'contacts',
  }
)

// Indexes for better query performance
ContactSchema.index({ email: 1 })
ContactSchema.index({ status: 1 })
ContactSchema.index({ createdAt: -1 })
ContactSchema.index({ email: 1, createdAt: -1 })

// // Virtual for formatted creation date
// ContactSchema.virtual('formattedCreatedAt').get(function () {
//   return this.createdAt.toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
//   })
// })

// // Method to mark as read
// ContactSchema.methods.markAsRead = function () {
//   this.status = 'read'
//   return this.save()
// }

// // Method to mark as replied
// ContactSchema.methods.markAsReplied = function (notes?: string) {
//   this.status = 'replied'
//   this.repliedAt = new Date()
//   if (notes) this.notes = notes
//   return this.save()
// }

// // Static method to get contacts by status
// ContactSchema.statics.getByStatus = function (status: string) {
//   return this.find({ status }).sort({ createdAt: -1 })
// }

// // Static method to get recent contacts
// ContactSchema.statics.getRecent = function (limit = 10) {
//   return this.find().sort({ createdAt: -1 }).limit(limit)
// }

// // Pre-save middleware to sanitize data
// ContactSchema.pre('save', function (next) {
//   // Remove any HTML tags from text fields for security
//   this.name = this.name.replace(/<[^>]*>/g, '')
//   this.subject = this.subject.replace(/<[^>]*>/g, '')
//   this.message = this.message.replace(/<[^>]*>/g, '')

//   next()
// })

// // Ensure virtual fields are serialized
// ContactSchema.set('toJSON', {
//   virtuals: true,
//   transform: (doc, ret) => {
//     delete ret._id
//     delete ret.__v
//     return ret
//   },
// })

export default mongoose.models.Contact ||
  mongoose.model<IContact>('Contact', ContactSchema)
