import './Sidebar.css';
import { FaAngleLeft,FaChartBar,FaBolt,FaClipboardList } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";

const Sidebar = () =>{
    return(
        <div class='sidebar'>
            <div class='back'>
                <FaAngleLeft class="icon-top"></FaAngleLeft>
            </div>
            <div class='navigation'>
                <div id="profil"></div>
                <FaChartBar class="icon"></FaChartBar>
                <div id="mainmenu"></div>
                <FaBolt class="icon"></FaBolt>
                <FaClipboardList class="icon"></FaClipboardList>
            </div>
            <div class='setting'>
                <div class = "setting-icon">
                    <AiFillSetting class="icon"></AiFillSetting>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;