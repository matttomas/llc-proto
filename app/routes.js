const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/maintain-service/UR-February/charge-planning', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
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

module.exports = router
