import React from 'react';
import HasVacancy from "./HasVacancy";
import Movies from "./Movies";
import Form from "./Form";

const App = () => {

  var movieslist = ["Pulp Fiction", "Rushmore", "Picnic at Hanging Rock", "His Girl Friday", "Wag the Dog"];

  // var film = {
  //   title: "Rear Window",
  //   year: 1958,
  //   director: "Alfred Hitchcock",
  //   cast: ["James Stewart", "Grace Kelly"],
  //   genre: ["Mystery", "Thriller"],
  //   awards: ["Palme d'Or", "Academy Award for Best Editting"],
  //   poster: "https://images-na.ssl-images-amazon.com/images/I/718N4WhxRgL._AC_SY879_.jpg",
  //   logline: "A wheelchair-bound photographer spies on his neighbors from his apartment window and becomes convinced one of them has committed murder.",
  //   rating: 8.4
  // }

  return (
    <div>
      <HasVacancy availability={false} />
      <hr />
      <Movies movies={movieslist} />
      <hr />
      <Form />
    </div>
  )
}

export default App;