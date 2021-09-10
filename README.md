# WELOVEMOVIES API
# Table of connects
 - [1.0 Overview](#10-Overview)
   - [1.1 Description](#11-Description)
   - [1.2 Technologies](#12-Technologies)
   - [1.3 Features](#13-Features)
     - [1.3.1 Endpoints](#131-Endpoints)
 - [2.0 How to Use](#20-How-to-Use)
 - [3.0 License](#30-License)
# 1.0 Overview
Check out the live API [here](https://welovemovies-api.herokuapp.com/)!
## 1.1 Description
WeLoveMovies is a RESTful API that provides data on movies, theaters, and reviews. See [Features](#13-Features) for details.
## 1.2 Technologies
This API was built using Node.js, Expess.js, Knex.js, and PostgresSQL.
## 1.3 Features
### 1.3.1 Endpoints
- `GET /movies`
- `GET /movies?is_showing=true`
- `GET /movies/:movieId`
- `GET /movies/:movieId/theaters`
- `GET /movies/:movieId/reviews`
- `DELETE /reviews/:reviewId`
- `PUT /reviews/:reviewId`
- `GET /theaters`
# 2.0 How to Use
Feel free to incorporate this API in your full stack project! Also, feel free to fork and make edits.
1. Clone repo
2. ```npm install``` to install depedencies
3. Create a `.env` file
4. Inside the `.env` file, set ```NODE_ENV``` to `development` or `production`. Then set ```DATABASE_URL``` to the url of your database
5. Run ```knew migrate:latest``` and ```knex seed:run``` to migrate and seed
6. Run ```npm install`` to run the API locally
7. ENJOY!
# 3.0 License 
MIT License

Copyright (c) 2021 by Suncerie Daye

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
