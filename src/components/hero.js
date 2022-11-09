import heroPhoto from '../assets/jonas-jacobsson-1iTKoFJvJ6E-unsplash.webp';

export default function About() {
    return (
      <div className="bg-cover bg-center" style={{  backgroundRepeat: 'no-repeat',
      width:'100%', height:'60vh', backgroundImage: `url(${heroPhoto})` }}>
     
      </div>
    );
  }
  