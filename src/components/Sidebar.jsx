import '../App.css';
import sn1 from './pics/SN1.png';
import pro from './pics/project.png';
import contact from './pics/contact.png';
import li from './pics/li3.png';
import github from './pics/github.png';

function Sidebar(){
  return(
<div className="sidebar">
<img src={sn1}  className="my-logo" />
<img src={pro}  className="icons" />
<img src={contact}  className="icons" />
<img src={li}  className="icons" />
<img src={github}  className="icons" />

</div>
);
}
export default Sidebar;
