import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.path} from ${req.ip}`);
  next();
});

// Option 1: Control origin
// const corsOptions = {
//   origin: function (origin, callback) {
//     const allowedOrigins = ['http://localhost:5173'];
//     if (!origin || allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error(`CORS not allowed for this origin: ${origin}`));
//     }
//   }
// };

// app.use(cors(corsOptions));

// Option 2: Allow all origins
app.use(cors());

app.get('/api/time', (req, res) => {
  res.json({ time: new Date().toLocaleTimeString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
