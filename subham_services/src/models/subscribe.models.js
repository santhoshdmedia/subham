const {Schema, model} = require('mongoose');

module.exports = model(
    "subscribe", 
    Schema(
        {
            email: {
                type: String,
                required: true,
                unique:true,
            }
        },
        {
            collection:"subscribers",
            timestamps: true,
        }
    )
);