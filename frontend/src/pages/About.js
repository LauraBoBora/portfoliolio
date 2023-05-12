function About({ about }) {
    return (
      <div>
        <h2>{about.name}</h2>
        <h3>{about.email}</h3>
        <p>{about.bio}</p>
      </div>
    );
  }
  
  export default About;