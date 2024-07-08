# GoBlood Bank

**Live site:**

- [GoBlood Bank](https://goblood-bank.web.app)

**Server site Repo:**

- [GoBlood Bank - Server Site Repo](https://github.com/sajjathossainbd/go-blood-bank-server)

## Credential:
Admin Email and password
1. Email: sajjad@gmail.com
2. Password: Sajjad@123

## Features and Characteristics:

1. **User-friendly Registration:** Streamlined signup process allowing users to register as donors with basic information and blood type.
2. **Search for Blood Donations:** Public search functionality to find potential blood donors based on blood group, location (district and upazila), simplifying the search for recipients in need.
3. **Manage Donation Requests:** Donors can create and manage blood donation requests, specifying recipient details, hospital location, date, time, and a message.
4. **Donation Request Status Tracking:** Real-time tracking of donation requests with clear status updates (pending, in-progress, done, canceled) for both donors and admins.
5. **Secure User Authentication:** Secure login system with JWT token implementation to protect user data and restrict access to private functionalities.
6. **Role-Based Access Control:** Differentiated access levels for donors, volunteers, and admins. Donors can manage their requests, volunteers can view and update donation statuses, and admins have full control over user management, content management, and overall data access.
7. **Content Management System:** Dedicated section for admins to create and publish informative blog posts to raise awareness about blood donation and related topics.
8. **Donation Request Details:** Detailed view of each donation request, including recipient information, location, date, and time, allowing potential donors to make informed decisions.
9. **Responsive Design:** Optimized website layout that seamlessly adapts to various devices (mobile, tablet, desktop) for a smooth user experience across all platforms.
10. **Funding Integration (Optional):** Optional feature for users to contribute financially to support the organization's blood donation efforts (requires Stripe payment integration).


## How to run:
Please follow the instructions to run this repository on your machine:

1. Clone this repository -
    ```sh
    git clone https://github.com/sajjathossainbd/go-blood-bank-client.git
    ```
2. Go to the cloned project directory
    ```sh
    cd go-blood-bank-client
    ```
3. Install project Dependencies
   
   If you use Yarn:
    ```sh
    yarn add
    ```
   Or if you use npm:
    ```sh
    npm install
    ```
5. Run project local machine
   
    If you use Yarn:
    ```sh
    yarn dev
    ```
   Or if you use npm:
    ```sh
    npm start
    ```

## Additional Information
- **Environment Variables:**
  - Create a `.env.local` file in the root of your client project and add the following variables:
    ```plaintext
    VITE_API_KEY=Your firebase config file
    VITE_AUTH_DOMAIN=Your firebase config file
    VITE_PROJECT_ID=Your firebase config file
    VITE_STORAGE_BUCKET=Your firebase config file
    VITE_MESSAGING_SENDER_ID=Your firebase config file
    VITE_APP_ID=Your firebase config file
    VITE_API_BASE_URL=Your firebase config file
    VITE_IMAGEBB_API_KEY=your imageBB Api key
    ```


## Resources and Dependencies:
- [React](https://react.dev/) - A JavaScript library for building user interfaces.
- [React Router Dom](https://reactrouter.com/en/main) - Declarative routing for React applications.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Daisy UI](https://daisyui.com/) - Component library for Tailwind CSS
- [Firebase](https://console.firebase.google.com/) - Firebase is a set of backend cloud computing services
- [React Icon](https://react-icons.github.io/react-icons/) - Include popular icons in your React projects easily with react-icons.
- [React Helmet Async](https://www.npmjs.com/package/react-helmet-async) - Dynamic header title change
- [Sweetalert2](etalert2.github.io) - Beautiful, responsive, customizable replacement for JavaScript's popup boxes
- [Tanstack Query](https://github.com/TanStack/query) - Powerful asynchronous state management, fetching, caching, and updating data in React.
- [Axios](https://www.axios.com/) - Promise-based HTTP client for the browser and Node.js.
- [React Hook Form](https://react-hook-form.com/) - Performant, flexible and extensible forms with easy-to-use validation.
- [Swiper](https://swiperjs.com/) - The Most Modern Mobile Touch Slider


## Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are welcome.

## License

This project is open-source and available under the [MIT License](LICENSE).
