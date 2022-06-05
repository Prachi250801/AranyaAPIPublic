const express = require ('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.options('*',cors());
const sponsorsRouter = require('./routes/sponsorRoutes')
const aboutUsRouter = require('./routes/aboutUsRoutes')
const teamRouter = require('./routes/teamRoutes')
const productsRouter = require('./routes/productsRoutes')
const employmentRouter = require('./routes/employmentRoutes')
const clientTestRouter = require('./routes/clientTestRoutes')
const servicesRouter = require('./routes/servicesRoutes')
const contactRouter = require('./routes/contactRoutes')
app.use('/api/v1/Home/sponsors',sponsorsRouter);
app.use('/api/v1/Home/aboutUs',aboutUsRouter);
app.use('/api/v1/Home/Team',teamRouter);
app.use('/api/v1/Home/products',productsRouter);
app.use('/api/v1/Home/employment',employmentRouter);
app.use('/api/v1/Home/clientTest',clientTestRouter);
app.use('/api/v1/Home/services',servicesRouter);
app.use('/api/v1/Home/contact',contactRouter);
module.exports=app;