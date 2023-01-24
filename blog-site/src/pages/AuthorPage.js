import Header from "../components/Header";
 
const AuthorPage = () => {
  return ( 
    <div>
      <Header/>
      <h1>About the Author: Veralee</h1>
      <img src="./img/bio.jpg" className="hero-image" alt="" />
      <p>I am a backend developer who is passionate about all the elements that operate under the hood and that's why 
        I choose to work with backend technologies
        I have a strong background in Python and Javascript and I'm proficient in developing scalable web applications
        I also have experience working with databases such as MySQL and MongoDb and I'm also learning 
        to develop RESTful APIs.
        When I'm not writing code and studying, you'll find me exploring music, reading a good book
        or standing around NASA & SpaceX websites and YouTube Channels.
      </p>
    </div>
  );
}
 
export default AuthorPage;


