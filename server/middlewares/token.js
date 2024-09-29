import jwt from "jsonwebtoken";

export const authenticateToken = async (req,res,next) => {
    const token = req.cookies.token;

    if (!token) {
        res.status(401).json({
            message: "Access token is required"
        })
    }
    try {
        const verifiedToken =  jwt.verify(token,process.env.JWT_SECRET,{
            httpOnly: true,
        })
        req.user=verifiedToken

        next()
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}