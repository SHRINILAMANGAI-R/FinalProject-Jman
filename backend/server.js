const express = require('express');
const { Pool } = require('pg');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors'); // Import CORS middleware
const bodyParser = require('body-parser');
 
app.use(express.json());
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

 
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'user_db',
  password: 'uthra',
  port: 5432,
});
// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shrinilamangai.r@gmail.com',
      pass: 'hhtu gkpb meer adyf',
    },
  });
 
// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Query the database to find the user
    const query = 'SELECT * FROM users WHERE username = $1';
    const result = await pool.query(query, [username]);

    if (result.rows.length === 0) {
      return res.status(401).send('Username does not exist');
    }

    const user = result.rows[0];

    // Validate the password
    if (user.password !== password) {
      return res.status(401).send('Incorrect Password');
    }

    res.status(200).json({ username, role: user.role });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in');
  }
});
 // CreateUser endpoint
app.post('/CreateUser', async (req, res) => {
  const { name, email, username, dob, role, department } = req.body;
  try {
    // Check if the email already exists in the database
    const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }
    const newUser = await pool.query(
      'INSERT INTO users (name, email, username, dob, role, department) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [name, email, username, dob, role, department]
    );

    // Send email only if the role is admin
    if (role === 'Admin' || role === 'Intern' || role === 'Employee') {
      await transporter.sendMail({
        from: 'shrinilamangai.r@gmail.com',
        to: email,
        subject: 'Welcome to the Application',
        html: `
          <p>Hello ${name},</p>
          <p>You have been added as a ${role} in ETMS.</p>
          <p>Your username: ${username}</p>
          <p>Your temporary password: 123</p>
          <p>Here is the link to the login page to go and change the password: <a href="http://localhost:3000/login">Login</a></p>
          <p>Best regards,<br/>The Admin Team</p>
        `,
      });
    } else {
      console.error('Invalid user role:', role);
    }

    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error during user creation:', error.message);
    res.status(500).json({ message: 'Error creating user' });
  }
});

// Change Password endpoint
app.post('/change-password', async (req, res) => {
    const { username, password, newPassword } = req.body;
    try {
      // Query the database to check if the provided username and current password are correct
      const user = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
      // If a user with the provided credentials exists, update the password
      if (user.rows.length > 0) {
        await pool.query('UPDATE users SET password = $1 WHERE username = $2', [newPassword, username]);
        res.status(200).json({ message: 'Password updated successfully' });
      } else {
        // If no user is found with the provided credentials, return an error
        res.status(401).json({ message: 'Incorrect username or password' });
      }
    } catch (error) {
      console.error('Error during password change:', error.message);
      res.status(500).json({ message: 'Error during password change' });
    }
  });
 
// // Endpoint to fetch user profile data
// app.get('/user-profile', async (req, res) => {
//   try {
//     // Query the database to fetch user data (replace this with your actual query)
//     const userData = await pool.query('SELECT name, email, username, dob, password, role, department FROM users WHERE id = $1', [req.userId]); // Assuming userId is provided in the request
//     res.json(userData.rows[0]);
//   } catch (error) {
//     console.error('Error fetching user profile:', error);
//     res.status(500).json({ message: 'Error fetching user profile' });
//   }
// });

// // Endpoint to update user profile data
// app.put('/user-profile', async (req, res) => {
//   const { name, email, username, dob, password, role, department } = req.body;
//   try {
//     // Update user data in the database (replace this with your actual update query)
//     await pool.query('UPDATE users SET name = $1, email = $2, username = $3, dob = $4, password = $5, role = $6, department = $7 WHERE id = $8', [name, email, username, dob, password, role, department, req.userId]); // Assuming userId is provided in the request
//     res.json({ message: 'User profile updated successfully' });
//   } catch (error) {
//     console.error('Error updating user profile:', error);
//     res.status(500).json({ message: 'Error updating user profile' });
//   }
// });

// Endpoint to fetch user profile data
app.get('/user-profile-fetch', async (req, res) => {
  try {
    // Query the database to fetch user data
    const userData = await pool.query('SELECT name, email, username, dob, password, role, department FROM users WHERE id = $1', [req.body.username]); // Assuming userId is provided in the request
    res.json(userData.rows[0]);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Error fetching user profile' });
  }
});

// Endpoint to update user profile data
app.put('/user-profile', async (req, res) => {
  const { name, email, username, dob, password, role, department } = req.body;
  try {
    // Update user data in the database
    await pool.query('UPDATE users SET name = $1, email = $2, username = $3, dob = $4, password = $5, role = $6, department = $7 WHERE id = $8', [name, email, username, dob, password, role, department, req.userId]); // Assuming userId is provided in the request
    res.json({ message: 'User profile updated successfully' });
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ message: 'Error updating user profile' });
  }
});




// Define route to create a new training event
app.post('/trainings/create', async (req, res) => {
  try {
    const {
      TrainingName ,
      TrainingDate ,
      TrainingStartTime,
      TrainingEndTime ,
      TrainerName ,
      ScheduledBy ,
      ScheduledTo 
    } = req.body;

    
    // Insert query to add a new training event
    const insertQuery = `
    INSERT INTO training ("TrainingName", "TrainingDate", "TrainingStartTime", "TrainingEndTime", "TrainerName", "ScheduledBy", "ScheduledTo")
    VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    console.log(req.body)

    // Run the insert query
    const { rows } = await pool.query(insertQuery, [TrainingName, TrainingDate, TrainingStartTime, TrainingEndTime, TrainerName, ScheduledBy, ScheduledTo]);

    // Respond with the ID of the newly created training event
    res.status(201).json({ message : "Done" });
  } catch (error) {
    console.error('Error adding training event:', error);
    res.status(500).json({ error: 'An error occurred while adding the training event.' });
  }
});









app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



