import Message from "./Message";
import profilePic from "../images/profile-pic.jpg";
import noImage from "../images/no-image.png";
import WeatherEmbed from "./WeatherEmbed";
import TheSunImg from "../images/the-sun.png";
import WhiteAlbumImg from "../images/white-album.png";
import GoldenExperienceImg from "../images/golden-experience.png";

const Features = () => {
  return (
    <section id="features">
      <h2>Features</h2>
      <h3>Repeat</h3>
      <p className="description">The bot repeats your message</p>
      <Message userImg={noImage} username="User" userColor="red" date="today">
        wr repeat Hello everyone!
      </Message>
      <Message
        userImg={profilePic}
        username="Weather Report"
        userColor="blue"
        date="today"
      >
        Hello everyone!
      </Message>

      <h3>Weather</h3>
      <p className="description">
        The bot gives weather information for the location you are searching
      </p>
      <Message userImg={noImage} username="User" userColor="red" date="today">
        wr weather Bulgaria
      </Message>

      <div className="weather-embeds">
        <WeatherEmbed
          location="Bulgaria"
          image={TheSunImg}
          feelsLike="The Sun"
          temperature={23}
          embedType="red"
        />
        <WeatherEmbed
          location="Moscow"
          image={WhiteAlbumImg}
          feelsLike="White Album"
          temperature={-2}
          embedType="blue"
        />
        <WeatherEmbed
          location="Berlin"
          image={GoldenExperienceImg}
          feelsLike="Golden Experience"
          temperature={12}
          embedType="green"
        />
      </div>
    </section>
  );
};

export default Features;
