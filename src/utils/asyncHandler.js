export {asyncHandler}


const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err)=>next)
    }
}






//this is another method of using asyncHandlers.
// const asyncHandler=(fn)=>async(req,res,next)=>{
//     try {
        
//     } catch (error) {
//         res.status(err.code || 500).json({
//             sucess:false,
//             message: err.message
//         })
//     }
// }