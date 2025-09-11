const express =require("express");
const router =express.Router();
const {createUser,getusers,login_user, logoutUser,getProfile,forgotPassword ,resetPassword,updateUser,updatePreferences}=require("../controllers/User");
const upload = require("../controllers/cloudinary");
const { verifyTokenMiddleware } = require('../middleware/auth');
// عام
router.get("/public", getusers);

router.get("/profile", verifyTokenMiddleware, getProfile);

router.post("/register",upload.single("certificate"),createUser)


router.post("/login",login_user)
router.post("/loge-out",verifyTokenMiddleware,logoutUser)

 router.put("/update", verifyTokenMiddleware, updateUser);

 router.put("/preferences", verifyTokenMiddleware, updatePreferences);



 //forget password
 // طلب إعادة تعيين كلمة المرور
router.post("/forget-password",forgotPassword);

// إعادة تعيين كلمة المرور
router.post("/reset-password", resetPassword);





module.exports = router;
