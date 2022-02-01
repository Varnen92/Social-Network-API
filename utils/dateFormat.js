const { DateTime } = require('luxon')

const now = DateTime.now() 
const time = now.toLocaleString(DateTime.DATETIME_FULL) 

return time