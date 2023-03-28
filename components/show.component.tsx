export default function Show(props: any) {
  // TODO show date like "Wednesday, March 29, 2023"
  // TODO show band/act names (w/ links). bold "main"?
  // TODO show venue (w/ link?)
  // TODO show show time
  // TODO show cost
  // TODO show ages
  // TODO show event link
  // TODO show genres, etc
  // TODO link to flyer
  const jointLineup = props.lineup.join(", ");
  return (
    <>
      <hr />
      <p>
        <span>{props.date}</span>
      </p>
      <p>
        <span>
          {jointLineup}{" "}
        </span>
        <span>@ {props.venue}</span>
      </p>
    </>
  );
}
