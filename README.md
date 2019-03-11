This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Starting the app

### `npm install`

Installs all dependencies.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To change frequency of data refreshing modify `refreshInterval` in `src/constants/app.js`.

## Known issues/compromises

- Unstable fetching: themoviedb API does not allow modifying page size, so the only way to fetch more than 20 results is by fetching multiple times.
This is not perfect, though, as theoretically, order of results can change between fetches, so, for example the same series can appear within results twice, on different pages.
In real-life working environment I would modify the API myself if I could, to prevent this issue from happenning.
Attempting to handle it on frontend seemed like a wasted effort, so I left it as a known issue.
- Using UTF-8 emojis instead of icons: makes life easier 😛.
- No tests: I planned to test this app at first, but I changed my mind once I realized how much work the app itself will be 🙈.
