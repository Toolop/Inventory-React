import './Home.css'
import Edit from '../../component/button/Edit'
import Delete from '../../component/button/Delete'
import Sidebar from '../../component/sidebar'
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
                    </div>
                    <div class='list-barang'>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Home