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
  return (
    <>
      <hr />
      <p>
        <span>{props.date}</span>
      </p>
      <p>
        <span>
          {props.lineup.map((act: string) => (
            <>
              <span key={act}>{act}</span>
            </>
          ))}
        </span>
        <span>@ {props.venue}</span>
      </p>
    </>
  );
}
