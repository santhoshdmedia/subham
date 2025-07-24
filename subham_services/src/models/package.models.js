const { Schema, model, default: mongoose } = require("mongoose");

const TopAttractionSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
});

const IncludedExcludedSchema = new mongoose.Schema({
  type: { type: String, enum: ["included", "excluded"], default: "included" },
  description: { type: String, required: true },
});

const ItinerarySchema = new mongoose.Schema({
  title: { type: String, required: true },
  time: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = model(
  "package",
  Schema(
    {
      name: { type: String, required: true },
      image: { type: String, required: true },
      original_price: { type: Number, required: true },
      discount_price: { type: Number, required: true },
      message_description: { type: String, required: true },
      duration: { type: String, required: true },
      location: { type: String, required: true },
      contact: { type: String, required: true },
      description: { type: String, required: true },
      top_attractions: [TopAttractionSchema],
      included_excluded: [IncludedExcludedSchema],
      itinerary: [ItinerarySchema],
      country: { type: String, enum: ["india", "srilanka"], required: true },
      isSurprice:{type:Boolean,default:false}
    },

    {
      colloction: "package",
      timestamps: true,
    }
  )
);
