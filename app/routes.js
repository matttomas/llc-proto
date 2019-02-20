const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/maintain-service/UR-February/charge-planning', function (req, res) {

  // Make a variable and give it the value
  var planningcategory = req.session.data['planning-category']

  // Check whether the variable matches a condition
  if (planningcategory == 'dont-know'){
  // Send user to next page
    res.redirect('charge-dont-know')
  }
  else {
    // Send user to ineligible page
    res.redirect('charge-law-legal')
  }
})

// Add your routes here - above the module.exports line
router.post('/maintain-service/UR-February/charge-category-function', function (req, res) {

  // Make a variable and give it the value
  var chargecategory = req.session.data['charge-category']

  // Check whether the variable matches a condition
  if (chargecategory == 'Planning'){
  // Send user to next page
    res.redirect('charge-planning-category')
  }
  else if (chargecategory == 'Financial'){
    // Send user to ineligible page
    res.redirect('charge-financial-category')
  }
  else if (chargecategory == 'listed-building'){
    // Send user to ineligible page
    res.redirect('charge-listedbuilding-category')
  }
  else if (chargecategory == 'land-compensation'){
    // Send user to ineligible page
    res.redirect('charge-landcompensation-category')
  }
  else if (chargecategory == 'housing'){
    // Send user to ineligible page
    res.redirect('charge-housing-category')
  }
  else if (chargecategory == 'other'){
    // Send user to ineligible page
    res.redirect('charge-other-category')
  }
})

module.exports = router
