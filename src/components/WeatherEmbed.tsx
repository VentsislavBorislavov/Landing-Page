interface PropsType {
  location: string;
  image: string;
  temperature: number;
  feelsLike: string;
  embedType: "red" | "blue" | "green";
}
const WeatherEmbed = ({
  location,
  image,
  temperature,
  feelsLike,
  embedType,
}: PropsType) => {
  return (
    <div className={`weather-embed ${embedType}`}>
      <h3>The Weather</h3>
      <h4>Location</h4>
      <p>{location}</p>
      <h4>Temperature</h4>
      <p>{temperature}&deg;C</p>
      <h4>Feels Like</h4>
      <p>{feelsLike}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default WeatherEmbed;
