# Demo Next.js

This is a sample app that uses [Next.js](https://github.com/zeit/next.js) for server-side rendering of React components.

### What does this demo?

This is a web application that consumes data for [ICNDb.com](http://www.icndb.com/api/).

There are two pages:

- A home page (`/`), with a infinite scroll of Chuck Norris's jokes.
- A search page (`/search`), witch has a form for search jokes by a numeric id.

### How I run it?

First, execute `npm install` at the root of the project to download the dependencies.

Then, to run the app:

- For development:

      npm run dev

- For production:

      npm run build
      npm run start
      
The app will be available at `localhost:3000`

### Docker

To build de Docker Image, run the next command:
    
    docker build . -t "demo-next-js"

Then, to run the container:

    docker run -d -p 3000:3000 demo-next-js
    
Alternatively, you can pull our Docker Image:

    docker pull onready/demo-next.js 

### Additional libraries

- [isomorphic-unfetch](https://github.com/developit/unfetch)
- [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap)
- [react-infinite-scroller](https://github.com/CassetteRocks/react-infinite-scroller)
- [react-scroll-up](https://github.com/milosjanda/react-scroll-up)
- [react-spinners](https://github.com/davidhu2000/react-spinners)

