const { successResponse, errorResponse } = require("../helpers/response.helper");
const { UserSchema, BookingSchema } = require("./models_import");

const getAllCounts = async (req, res) => {
  try {
    const result = await UserSchema.aggregate([
      {
        $match: {
          role: { $ne: "super_admin" },
        },
      },
      {
        $group: {
          _id: "$role",
          totalUsers: { $sum: 1 },
        },
      },
    ]);

    return successResponse(res, "", result);
  } catch (err) {
    return errorResponse(res, SOMETING_WENT_WRONG);
  }
};

const getFiveUsers = async (req, res) => {
  try {
    const result = await UserSchema.aggregate([ 
      {
        $match: {
          role: { $ne: "super_admin" },  
        },
      },
      {
        $project:{
          password:0,
        }
      },
      {
        $group: {
          _id: "$role",  
          users: { $push: `$$ROOT` },  
        },
      },
     {
      $project:{
        users:{$slice:["$users",5]}
      }
     }
      
    ]);

  

    successResponse(res, "five users  successfully", result);
  
  } catch (err) {
    console.log(err);
    errorResponse(res, "Something went wrong");
  }
};

const getFiveBooking= async(req,res)=>{
  let where={} 
  
try{
  const result =await BookingSchema.aggregate([
    {
      $match:where,     
       },
       {
        $lookup: {
          from: "user",
          localField: "booking_by",
          foreignField: "_id", 
          as: "user_details",
          pipeline: [
            {
              $project: {
                password: 0,  
              }
            }
          ]
        }
      },
      {
          $lookup:{
               from:"packages",
               localField:"package_id",
               foreignField:"_id",
               as:"packges_details",  
          }
      },
       {
        $sort:{_id:-1}
       },
       {
        $limit:5
       },
       
  ])

  successResponse( res,"Bookings fetched successfully ",result)
 }catch(err){
  errorResponse(res," ")
}

}

module.exports = {
  getAllCounts,
  getFiveUsers,
  getFiveBooking,
};
