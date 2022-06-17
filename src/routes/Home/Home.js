import './Home.css'
import Edit from '../../component/button/Edit'
import Delete from '../../component/button/Delete'
import Sidebar from '../../component/sidebar'
import Graph from '../../component/graph/Graph'
import '../../component/font.css'

const Home = () =>{
    return(
        <body>
            <div class='main-wrapper'>
                <Sidebar></Sidebar>
                <div class = "content">
                    <div class='content-detail'>
                        <div class='detail'>
                            <div class='detail-title'>
                                <h4>Bell Pepper</h4>
                                <h6>Pack ID: B3214</h6>
                            </div>
                            <div class='detail-action'>
                                <Edit/>
                                <Delete></Delete>
                            </div>
                        </div>
                        <div class ="display-flex">
                            <h4 class="inventory">Inventory: <b class="font-blue">994 items</b></h4>
                            <h4 class="inventory">On shelf: <b>22/35 items</b></h4>
                        </div>
                            <ul class ="display-flex space">
                                <li><b>992</b>Good</li>
                                <li><b>1</b>About to expire</li>
                                <li><b>1</b>Crushed</li>
                            </ul>
                            <div class='image-container'>
                                <img src="https://nusantaranews.co/assets/uploads/2017/09/Paprika.jpg"></img>
                            </div>
                            <Graph></Graph>
                    </div>
                    <div class='list-barang'>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Home