import heroPhoto from "../assets/tyler-nix-WVl1N2C2zEA-unsplash.webp";
import heroPhotoTwo from "../assets/karsten-winegeart-l24eJZ9cIQk-unsplash.webp";
export default function Bean() {
  return (
    <div>
      <div
        className="bg-cover bg-center"
        style={{
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "50vh",
          backgroundImage: `url(${heroPhotoTwo})`,
        }}
      ></div>
      <div
        className="bg-cover bg-center"
        style={{
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "50vh",
          backgroundImage: `url(${heroPhoto})`,
        }}
      ></div>
    </div>
  );
}
