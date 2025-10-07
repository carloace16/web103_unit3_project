# WEB103 Project 3 - Fantasy Event Finder

Submitted by: **Carlo Ace Sagad**

About this web app: **A virtual community space for a fantasy world. This application displays a list of notable locations, and allows users to click on any location to see a list of upcoming or historical events associated with it. The project is a full-stack application built with a React frontend, a Node.js/Express backend API, and a PostgreSQL database hosted on Render. It is styled with Pico.css and custom CSS for a clean, responsive interface.**

Time spent: **5** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses React to display data from the API.**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured `events` table.** (And a `locations` table to which events are related).
- [x] **The web app displays a title.**
- [x] **Website includes a visual interface that allows users to select a location they would like to view.** (Locations are displayed as clickable cards).
- [x] **Each location has a detail page with its own unique URL.** (e.g., `/events/1`).
- [x] **Clicking on a location navigates to its corresponding detail page and displays a list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

- [ ] An additional page shows all possible events.
- [ ] Users can sort or filter events by location.
- [ ] Events display a countdown showing the time remaining before that event.
- [ ] Events appear with different formatting when the event has passed.

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='Week 3 GIF.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with **ScreenToGif** ## Notes

A key challenge for this project was architecting the full stack from the starter code. This involved designing the database schema with two related tables (`locations` and `events`) and a foreign key relationship. Building the backend involved creating separate controllers and routes for each data model, and then writing the corresponding frontend service functions to fetch the data. Finally, wiring up the React components with the correct hooks (`useEffect`, `useState`, `useParams`) to display the relational data was a critical step to bring the application to life.

## License

Copyright [2025] [Carlo Ace Sagad]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
