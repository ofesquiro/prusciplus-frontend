!/bin/bash

# Install dependencies
npm install

# Start the Angular application
ng serve --configuration production &

# Wait for the Angular application to start
sleep 30

# Run Selenium tests
npx selenium-side-runner -c "browserName=chrome" prusciplus-app/tests/test.side