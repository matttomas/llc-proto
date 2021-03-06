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
router.post('/maintain-service/UR-February/address-change', function (req, res) {

  // Make a variable and give it the value
  var addressOption = req.session.data['address-options']

  // Check whether the variable matches a condition
  if (addressOption == 'Yes'){
  // Send user to next page
    res.redirect('charge-expire')
  }
  else if (addressOption == 'No'){
    // Send user to ineligible page
    res.redirect('charge-address-change')
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
  else if (chargecategory == 'Listed building'){
    // Send user to ineligible page
    res.redirect('charge-listedbuilding-category')
  }
  else if (chargecategory == 'Land compensation'){
    // Send user to ineligible page
    res.redirect('charge-landcompensation-category')
  }
  else if (chargecategory == 'Housing'){
    // Send user to ineligible page
    res.redirect('charge-housing-category')
  }
  else if (chargecategory == 'Other'){
    // Send user to ineligible page
    res.redirect('charge-other-category')
  }
})

// Add your routes here - above the module.exports line
router.post('/maintain-service/UR-March/charge-planning', function (req, res) {

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
router.post('/maintain-service/UR-March/address-change', function (req, res) {

  // Make a variable and give it the value
  var addressOption = req.session.data['address-options']

  // Check whether the variable matches a condition
  if (addressOption == 'Yes'){
  // Send user to next page
    res.redirect('charge-expire')
  }
  else if (addressOption == 'No'){
    // Send user to ineligible page
    res.redirect('charge-address-change')
  }
})

// Add your routes here - above the module.exports line
router.post('/maintain-service/UR-March/charge-category-function', function (req, res) {

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
  else if (chargecategory == 'Listed building'){
    // Send user to ineligible page
    res.redirect('charge-listedbuilding-category')
  }
  else if (chargecategory == 'Land compensation'){
    // Send user to ineligible page
    res.redirect('charge-landcompensation-category')
  }
  else if (chargecategory == 'Housing'){
    // Send user to ineligible page
    res.redirect('charge-housing-category')
  }
  else if (chargecategory == 'Other'){
    // Send user to ineligible page
    res.redirect('charge-other-category')
  }
})

module.exports = router
