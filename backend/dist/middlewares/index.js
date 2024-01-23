import cors from 'cors';
import bodyParser from 'body-parser';
export const init = (server) => {
    const allowedOrigins = [
        `http://localhost:8081`,
        `http://localhost:4000`,
        `https://studio.apollographql.com`,
    ];
    server.use(cors({
        origin: function (origin, callback) {
            // allow requests with no origin
            // (like mobile apps or curl requests)
            if (!origin)
                return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                const msg = 'The CORS policy for this site does not ' +
                    'allow access from the specified Origin.';
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        },
        credentials: true,
    }), bodyParser.json());
};
