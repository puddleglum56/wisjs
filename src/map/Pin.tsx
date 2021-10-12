type PinProps = {
    lat: number,
    lng: number,
    text: string
}

export default function Pin({lat, lng, text}: PinProps) {

  return (
      <div>{text}</div>
  );
}