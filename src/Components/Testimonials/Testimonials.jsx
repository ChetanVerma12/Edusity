import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1_icon from '../../assets/user-1.png'
import user2_icon from '../../assets/user-2.png'
import user3_icon from '../../assets/user-3.png'
import user4_icon from '../../assets/user-4.png'
import { useRef } from 'react'

function Testimonials() {
  const slider = useRef();
  let tx = 0;
  const slideForward = ()=>{
        if(tx > -50){
            tx-=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
  }
   const slideBackward = ()=>{
        if(tx < 0){
            tx+=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="next_icon" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="back_icon" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user1_icon} alt="user1_icon" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias rem aspernatur aperiam nam nostrum! Iste voluptate voluptas accusamus deleniti minima quasi sint quas perferendis. Eum ut odit maiores, ratione distinctio molestias?</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user2_icon} alt="user2_icon" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias rem aspernatur aperiam nam nostrum! Iste voluptate voluptas accusamus deleniti minima quasi sint quas perferendis. Eum ut odit maiores, ratione distinctio molestias?</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user3_icon} alt="user3_icon" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias rem aspernatur aperiam nam nostrum! Iste voluptate voluptas accusamus deleniti minima quasi sint quas perferendis. Eum ut odit maiores, ratione distinctio molestias?</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user4_icon} alt="user4_icon" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias rem aspernatur aperiam nam nostrum! Iste voluptate voluptas accusamus deleniti minima quasi sint quas perferendis. Eum ut odit maiores, ratione distinctio molestias?</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials