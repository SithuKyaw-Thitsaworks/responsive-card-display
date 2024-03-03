const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 12001;
app.listen(PORT, () => {
  console.info(`Responsive card display page is running at http://localhost:${PORT}`);
});
