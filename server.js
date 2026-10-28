/**
 * @file server.js
 * @description Entry point for the Express.js Modular MVC REST API (Week 6)
 * @author Hamza Shoukat (Roll No: SU92-BCSFM-F26-027)
 * @subject Advanced Computer Programming
 */

const app = require('./src/app');
const { initDatabase } = require('./src/config/db');

const PORT = 5000;

initDatabase();

app.listen(PORT, () => {
  console.log('==========================================================');
  console.log('  EXPRESS.JS MODULAR MVC REST API SERVER RUNNING');
  console.log('  Student : Hamza Shoukat | Roll No: SU92-BCSFM-F26-027');
  console.log('  Base URL: http://localhost:' + PORT);
  console.log('  Modules :');
  console.log('    1. Auth System   : http://localhost:' + PORT + '/api/auth');
  console.log('    2. Category CRUD : http://localhost:' + PORT + '/api/categories');
  console.log('    3. Course CRUD   : http://localhost:' + PORT + '/api/courses');
  console.log('==========================================================');
});
