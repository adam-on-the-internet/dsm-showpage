import { ALL_SHOWS } from "@/data/shows.sample";
import { ShowModel } from "@/models/ShowModel.model";
import Show from "./show.component";

export default function AllShows() {
  const shows: ShowModel[] = ALL_SHOWS;
  return (
    <>
      <h2>All Shows</h2>
      <p>All of the shows:</p>
      {shows.map((show) => (
        <Show {...show} />
      ))}
    </>
  );
}
