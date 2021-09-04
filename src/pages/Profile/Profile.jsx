import "./profil.css"
import { NavLink, useParams } from "react-router-dom"
import users from "../../assets/data";
import logo1 from "../../img/twitter-logo.png";
import img2 from "../../img/Ellipse.png"
import img3 from "../../img/image.png"
import img4 from "../../img/Rectangle 15.png"
import img5 from "../../img/Rectangle 16.png"
import img6 from "../../img/Rectangle 17.png"
import img7 from "../../img/Rectangle 16 (1).png"
import img8 from "../../img/Rectangle 17 (1).png"
import img9 from "../../img/Rectangle 15 (1).png"
import img10 from "../../img/settings.png"


function Profile() {
   
    const {username}= useParams()
    
    
    const foundUser = () => {
        if (users.find(user => user.username === username)) {
            return users.find(user => user.username === username)
        } else { return  users}
    }
    
   

    return (
        <div>
            
            {/* <button onClick={() => setToken(false)}>logout</button> */}
           
            <div className="Home">
                <div className="Home-left">
                    <img className="logotwiter" src={logo1} alt="" />
                    <ul className= "home-ul">
                        <li className="home-li"><NavLink  className="home-link" to="/" exact>Home</NavLink></li>
                        <li className="home-li"><a className="home-link" href="/">Explore</a></li>
                        <li className="home-li"><a className="home-link" href="/">Notifications</a></li>
                        <li className="home-li"><a className="home-link" href="/">Messages</a></li>
                        <li className="home-li"><a className="home-link" href="/">Bookmarks</a></li>
                        <li className="home-li"><a className="home-link" href="/">Lists</a></li>
                        <li className="home-li">Profile</li>
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
                    <div className="username2">
                        <div>
                        <div className="usernames" > {foundUser().username}</div>
                        <span className="follower">1,070 Tweets</span>
                        </div>
                    </div>
                    
                    <div className="bgimg">
                        <img className="imgPrifile" src={img2} alt="" />
                    </div>
                    <div className="divs">
                    <div className="username3"> {foundUser().username}</div>
                    <div className="nickmane3">  {foundUser().nickName}</div>
                    <p className="work"> UX UI designer at <span>@abutechuz</span> </p>
                    <div className="aboutuser">
                        <p className="work">Mashag’daman</p>
                        <p className="work">t.me/{foundUser().nickName}</p>
                        <p className="work">Born November 24, 2000</p>
                        <p className="work">Joined May 2020</p>
                    </div>
                    <div className="folow">
                        <p>67<span>Following</span> </p>
                        <p>47<span> Followers</span></p>
                    </div>
                    
                        <ul className="twiter-list">
                            <li className="twiter-li"><NavLink className="twiter-link" to="#" activeClassName="twiter-link-active" >Tweets</NavLink></li>
                            <li className="twiter-li"><NavLink className="twiter-link" to="#" activeClassName="twiter-link-active" >Tweets S replies</NavLink></li>
                            <li className="twiter-li"><NavLink className="twiter-link" to="#" activeClassName="twiter-link-active" >Media</NavLink></li>
                            <li className="twiter-li"><NavLink className="twiter-link" to="#" activeClassName="twiter-link-active" >Likes</NavLink></li>
                            
                        </ul>
                    </div>
                        <hr />
                    <div className="divs1">
                        <p className="pinned">Pinned Tweet</p>
                        <div className="userbefor">
                            <div>
                                <h3 className="username4">{foundUser().username} <span>{foundUser().nickName} Apr 1</span></h3>
                                <p className="text">4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim</p>
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
                        <div className="userbefor">
                            <div>
                                <h3 className="username4">{foundUser().username} <span>{foundUser().nickName} Apr 1</span></h3>
                                <p className="text">Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. 
                                    Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida.
                                    Gap faqat biznes trenerlar haqida emas.
                                </p>
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
                        <div className="userbefor">
                            <div>
                                <h3 className="username4">{foundUser().username} <span>{foundUser().nickName} Apr 1</span></h3>
                                <p className="text">A bo'pti maskamasman</p>
                                <img src={img3} alt="" />
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
                    <div className="imgs">
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                        <img src={img6} alt="" />
                        <img src={img9} alt="" />
                        <img src={img7} alt="" />  
                        <img src={img8} alt="" />
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
                    <div className="like">
                        <h3 className="like2-h3">Trends for you <img src={img10} alt="" /></h3>
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
                </div>
            </div>



        </div>
    )
};

export default Profile;