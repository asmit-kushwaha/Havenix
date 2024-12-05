const express=require("express");
const router =express.Router({mergeParams:true});
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const Listing = require("../models/listing.js");
const {validateReviews, isLoggedIn, isReviewAuthor} = require("../middlewares.js");

const reviewControllers = require("../controllers/review.js");

//Reviews 
//Post Review Route
router.post("/",isLoggedIn,validateReviews,wrapAsync(reviewControllers.createReview));
 
//Delete Review Route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewControllers.destroyReview));
 

module.exports=router;