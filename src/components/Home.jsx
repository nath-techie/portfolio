import sabari from './pics/sabari7.png';
import capture2 from './pics/Capture2.JPG';
import '../App.css';
function Home(){

  return(
    <div className="home">
    <div>
<img src={sabari} className="my-photo" alt="logo" />
</div>
<div>
<span className="name">Sabari Nathan</span><br />
<span className="role">Full Stack Developer,</span><br />
<span className="role">by Passion</span><br />

</div>
</div>
);
}
export default Home;
