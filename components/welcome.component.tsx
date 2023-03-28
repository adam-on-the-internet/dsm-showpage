import AllShows from "./all-shows.component";

export default function Welcome() {
  return (
    <>
      <h1>Des Moines Showpage</h1>
      <p>Welcome to Des Moines Showpage.</p>
      <p>
        Based off of
        <a href="https://stlshowpage.com/" target="_blank">
          St Louis Showpage
        </a>
      </p>
      <p>More coming soon...</p>
      <br />
      <AllShows />
    </>
  );
}
