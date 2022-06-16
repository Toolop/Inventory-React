import './Home.css'
import Edit from '../../component/button/Edit'
import Delete from '../../component/button/Delete'

const Home = () =>{
    return(
        <body>
            <div class='main-wrapper'>
                <div class='sidebar'>
                    <div class='back'/>
                    <div class='navigation'>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div class='setting'/>
                </div>
                <div class='content'>
                    <div class='detail'>
                        <div class='detail-title'>
                            <h6>Bell Pepper</h6>
                            <p>Pack ID: B3214</p>
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
        </body>
    )
}

export default Home