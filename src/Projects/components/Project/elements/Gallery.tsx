import { Carousel } from "@mantine/carousel";

const Gallery = () => {
  return (
    <div className="rounded-lg overflow-hidden">
      <Carousel withIndicators loop align="center">
        <Carousel.Slide>
          <img
            src="https://i.wpimg.pl/c/1920x720/wpcdn.pl/extradom/designs/72062/586778/4e3ec8bd096f7e7f4c398bf14cbe2f183e4852267faf20145bb5ab4a61f976ea.jpg"
            alt=""
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="https://i.wpimg.pl/c/1920x720/wpcdn.pl/extradom/designs/72062/586778/4e3ec8bd096f7e7f4c398bf14cbe2f183e4852267faf20145bb5ab4a61f976ea.jpg"
            alt=""
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="https://i.wpimg.pl/c/1920x720/wpcdn.pl/extradom/designs/72062/586778/4e3ec8bd096f7e7f4c398bf14cbe2f183e4852267faf20145bb5ab4a61f976ea.jpg"
            alt=""
          />
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};

export default Gallery;
