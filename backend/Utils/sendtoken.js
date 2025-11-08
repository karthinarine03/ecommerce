export default (user,statuscode,res)=>{
    const token=user.getjwttoken();

    const options={
        expires:new Date(
            Date.now()+7*24*60*60*1000
        ),
        httpOnly:true,
        secure:false
    }

    res.status(statuscode).cookie("token",token,options).json({
        token
    })
}