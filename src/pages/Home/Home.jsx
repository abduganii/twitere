import { NavLink } from "react-router-dom"
import "./Home.css"
import useAuth from "../../hooks/useAuth"
import users from "../../assets/data"
import logo1 from "../../img/twitter-logo.png"
import img3 from "../../img/image 8.png"
import img10 from "../../img/settings.png"
import img11 from "../../img/Customize.png"
import img12 from "../../img/image (1).png"
import img13 from "../../img/gif.png"
import img14 from "../../img/stats.png"
import  img15 from "../../img/smile.png"   
import  img16 from "../../img/Group (4).png"
    
    
    
function Home() {
    const [token] = useAuth(true)
   const {username} =token

   const foundUser = () => {
    if (users.find(user => user.username === username)) {
        return users.find(user => user.username === username)
    } else { return  users}
}

    return (
        <div>
            <div className="Home">
                <div className="Home-left">
                    <img className="logotwiter" src={logo1} alt="d" />
                    <ul className= "home-ul">
                        <li className="home-li"><NavLink  className="home-link" to="/" exact>Home</NavLink></li>
                        <li className="home-li"><a className="home-link" href="/">Explore</a></li>
                        <li className="home-li"><a className="home-link" href="/">Notifications</a></li>
                        <li className="home-li"><a className="home-link" href="/">Messages</a></li>
                        <li className="home-li"><a className="home-link" href="/">Bookmarks</a></li>
                        <li className="home-li"><a className="home-link" href="/">Lists</a></li>
                        <li className="home-li"> <NavLink to={`/profile/${username}`}>Profile</NavLink></li>
                        <li className="home-li"><a className="home-link" href="/">More</a></li>
                    </ul>
                    <a className="btn" href="/">Tweet</a>
                    <div className="username">
                        <div>
                        <div> {foundUser().username} </div>
                        <span>{foundUser().nickName}</span>
                        </div>
                        
                        <div className="doto"></div>
                    </div>
                </div>
                <div className="Home-century">
                    <div className="top">
                        <h2>Home</h2>
                        <img src={img11} alt="d" />
                    </div>
                    <hr />
                    <div className="userbefor uz1">
                        <div>
                                <h3 className="username4 h3h" >What’s happening</h3>
                        </div>
                        
                    </div>
                    <div className="img-icon">
                        <div>
                            <img src={img12} alt="d" />
                            <img src={img13} alt="d" />
                            <img src={img14} alt="d" />
                            <img src={img15} alt="d" />
                            <img src={img16} alt="d" />
                        </div>
                        <a className="btnl" href="/">Tweet</a>
                    </div>
                    <hr />
                    <div className="divs1">
                        <div className="user1 " >
                            <div>
                                <h3 className="username4">Designsta <span>@inner · 25m</span></h3>
                                <p className="text">Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
                                <ul className="icon">
                                        <li className="icon-item">10</li>
                                        <li className="icon-item">1</li>
                                        <li className="icon-item">8</li>
                                        <li className="icon-item"></li>
                                        <li className="icon-item"></li>
                                    </ul>
                            </div>
                        </div>

                    </div>
                    <hr />
                    <div className="divs1">  
                        <div className="user1 user2">
                            <div>
                                <h3 className="username4">cloutexhibition <span>@RajLahoti · 22m</span></h3>
                                <p className="text">YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.
                                </p>
                                <ul className="icon">
                                        <li className="icon-item"></li>
                                        <li className="icon-item">5</li>
                                        <li className="icon-item">9</li>
                                        <li className="icon-item"></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="divs1">  
                        <div className="user1 user3">
                            <div>
                                <h3 className="username4">CreativePhoto <span>@cloutexhibition · 1h</span></h3>
                                <p className="text">Обетда..... 
                                    Кечиринглар</p>
                                <img src={img3} alt="d" />
                                    <ul className="icon">
                                            <li className="icon-item">10</li>
                                            <li className="icon-item">1</li>
                                            <li className="icon-item">8</li>
                                            <li className="icon-item"></li>
                                            <li className="icon-item"></li>
                                    </ul>           
                            </div>
                        </div>
                                
                    </div>
                        
                </div>
                <div className="home-right">
                    <input className="sinpt" placeholder="Search Twitter" type="search" />
                  
                    <div className="like">
                        <h3 className="like2-h3">Trends for you <img src={img10} alt="d" /></h3>
                        <div className="liki-div">
                            <div>
                                <p className="like-text">Trending in Germany</p>
                                <h4 className="like-h4">Revolution</h4>
                                <p className="like-text">50.4K Tweets</p>
                            </div>
                            <div className="doto"></div>
                        </div>
                        <div className="liki-div">
                            <div>
                                <p className="like-text">Trending in Germany</p>
                                <h4  className="like-h4">Revolution</h4>
                                <p className="like-text"> 50.4K Tweets</p>
                            </div>
                            <div className="doto"></div>
                        </div>
                        <div className="liki-div">
                            <div>
                                <p className="like-text"> Trending in Germany</p>
                                <h4 className="like-h4">Revolution</h4>
                                <p className="like-text">50.4K Tweets</p> 
                            </div>
                            <div className="doto"></div>
                           
                        </div>
                        <p className="more"> show more</p>
                    </div>
                    <div className="like">
                        <h3 className="like-h3">You might like</h3>
                        <div className="username u2">
                            <div>
                             <div> Mushtariy </div>
                             <span>@Mushtar565266</span>
                            </div>
                            <a className="fbtn" href="/">Follow</a>
                        </div>
                        <div className="username u2">
                            <div>
                             <div> Shuhratbek </div>
                             <span>@mrshukhrat</span>
                            </div>
                            <a className="fbtn" href="/">Follow</a>
                          
                        </div>
                        <p className="more"> show more</p>
                    </div>
                        
                    <div className="spans">
                    <span>Terms of Service</span>
                    <span>Privacy Policy</span>
                    <span>Cookie Policy</span>
                    <span>Imprint</span>
                    <span>Ads Info</span>
                    <span>More ···</span>
                    <span>© 2021 Twitter, Inc.</span>
                    </div>
                </div>
            </div>
                
               
        </div>
      
    )
}

export default Home;