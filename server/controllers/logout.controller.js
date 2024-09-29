import jwt from "jsonwebtoken"

export const logoutController = async (req,res)=>{
   //Take the token from the request
   try {
    const token = req.cookies.token 
    if(!token){
        res.status(403).json({
            message:"User not logged in"
        })
    }

    //Verify the token
    const verifyToken = jwt.verify(token,process.env.JWT_SECRET)

    //If verification is done , then delete the token from the db
    await token.deleteOne({token})

    //Delete the token from the client side
    await clearCookie("token",{
        httpOnly: true
    })

    res.status(200).json({
        message: "User logged out successfully",
        success: true
    })
   } catch (error) {
    res.status(500).json({
        message:"Internal server error",
        error
    })
   }

}