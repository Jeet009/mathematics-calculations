// GET Request For Info
exports.getPercentage = (req, res, next) => {
  console.log("You have just visited GET/home route");
  res.status(200).json({
    title: "This API will help you to calculate percentage.",
  });
};

// Post Request To Calculate Percentage (Ex - 20 is ___% of 100)
exports.calculatePercentage = (req, res, next) => {
  const numberOne = req.body.numberOne;
  const numberTwo = req.body.numberTwo;

  res.status(200).json({
    output: (numberOne / numberTwo) * 100 + "%",
  });
};

// Post Request To Calculate Percentage Of Any Number (Ex - ___ is 50% of 100)
exports.calculatePercentOf = (req, res, next) => {
  const percentage = req.body.percentage;
  const percentOf = req.body.percentOf;

  res.status(200).json({
    output: (percentage / 100) * percentOf,
  });
};

// Post Request To Find The Number From Percentage (Ex - 50 is 50% of ___)
exports.calculatePercentFrom = (req, res, next) => {
  const percentage = req.body.percentage;
  const number = req.body.number;

  res.status(200).json({
    output: (number * 100) / percentage,
  });
};
