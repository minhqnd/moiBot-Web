# Node.js Hello World Web Server for cPanel

This project is a minimal Express.js web server suitable for deployment on cPanel. It responds with "Hello World" on the root route (`/`).

## Files
- `server.js`: Main server file
- `package.json`: Node.js dependencies and scripts

## How to Run Locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   node server.js
   ```
3. Visit `http://localhost:3000` in your browser.

## Deploying to cPanel
1. Upload all project files to your cPanel account (usually in a subfolder under `home/username` or `public_html`).
2. Use cPanel's "Setup Node.js App" feature:
   - Set the application root to your project folder.
   - Set the startup file to `server.js`.
   - Set the port to your desired value (default is 3000).
   - Click "Create" or "Update" to start the app.
3. Access your app via the provided URL or port.

## Notes
- Make sure your cPanel hosting supports Node.js applications.
- You may need to adjust the port or folder settings based on your hosting provider's requirements.
