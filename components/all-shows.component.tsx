import { ALL_SHOWS } from "@/data/shows.sample";
import { ShowModel } from "@/models/ShowModel.model";
import Show from "./show.component";

export default function AllShows() {
  const shows: ShowModel[] = ALL_SHOWS;
  return (
    <>
      <h2>All Shows</h2>
      <p>Showing all {shows.length} show(s)...</p>
      {shows.map((show) => (
        <>
          <div key={show.id}>
            <Show {...show} />
          </div>
        </>
      ))}
    </>
  );
}
