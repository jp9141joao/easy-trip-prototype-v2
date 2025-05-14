import express from 'express';
import cors from 'cors';
import { routes } from '../routes/routes';

const app = express();
const port = process.env.PORT || 3000;
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173'];

app.use(cors({
    origin: function(origin, callback) {

        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = `The CORS policy for this site does not allow access from the specified Origin ${origin}.`;
            return callback(new Error(msg), false);
        }

        return callback(null, true);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],

}))

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

