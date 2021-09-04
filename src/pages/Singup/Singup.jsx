import "./singup.css"
import img1 from "../../img/back-twitter.png"
import img2 from "../../img/twitter-logo.png"

import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {useRef} from "react"
function Singup() {
    const [setToken]= useAuth(false)

    const usernameRefs = useRef();
    const passwordRefs = useRef();

    const handlesingup = evt => {
        evt.preventDefault();
        
        const obj = {
            username: usernameRefs.current.value
        }
        
        setToken(obj)
    }

    const openModal = useRef(null);
    const closeModal = useRef(null);
    
    return (
        
        <>
            <div>
        
            <dialog className="dialog" ref={closeModal} open={true}>
                <div className="sinup">
                <img alt="ds" src={img1} width="850"  />
                <div >
                    <img alt="ds" src={img2} width="40" />
                    
                    <h1 className="sinup-h1">Happening now</h1>
                    <h2 className="sinup-h2">Join Twitter today</h2>
                    <ul className="sinup-list">
                        <li className="sinup-list-item">Sign up with Google</li>
                        <li className="sinup-list-item">Sign up with Apple</li>
                            <li className="sinup-list-item"
                              onClick={() => {
                                openModal.current.open = true
                                closeModal.current.open = false
                            }
                            }
                            >Sign up with phone or email</li>
                    </ul>
                    <p className="sinup-text">By singing up you agree to the  Terms of Service and Privacy Policy, including Cookie Use.</p>
                    <span className="sinup-span">Already have an account?</span>
                        <span className="sinup-link"><NavLink to="/login">Login</NavLink></span>
                    </div>
               </div>
            </dialog>

           
            
            <dialog className="div-d" ref={openModal} open={false}>
                <div className="imgs">
                    <img alt="ds" className="logo2" src={img2} width="40" />
                </div>
                <h2 className="singup2-h2">Create an account</h2>
                <form onSubmit= {handlesingup}>
                    <input className="login-input d" ref= {usernameRefs} type="text"     placeholder="Name" required />
                    <input className="login-input d" ref={passwordRefs} type="tel" placeholder="Phone number" required />
                    <p className="sungup2-p">Use email</p>
                        
                    <h3 className="singup2-h3">Date of birth</h3>
                    <p className="singup2-text">Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus  metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>

                    <select className="selct s1">
                        <option >Month</option> 
                    </select>
                    <select className="selct ">
                    <option >Day</option> 
                    </select>
                    <select className="selct ">
                        <option >Year</option> 
                    </select>
                    <button className="login-btn singup-b">Next</button>
                </form>
            </dialog>
        </div>  
          
       
      
        </>
    )
    
}

export default Singup;





   

