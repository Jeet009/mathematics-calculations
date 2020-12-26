exports.getPercentage = (req, res, next) => {
  console.log("You have just visited GET/home route");
  res.status(200).json({
    title: "This API will help you to calculate percentage.",
  });
};
