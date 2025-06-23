import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

function About({setPlayState}) {
  return (
    <div className='about'>
     <div className="about-left">
        <img src={about_img} alt="about_img" className='about-img' />
        <img src={play_icon} alt="play_icon" className='play-icon' onClick={()=>{setPlayState(true)}} />
     </div>
     <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque asperiores corporis molestias vero accusantium velit, cumque architecto adipisci magni iste sit explicabo animi soluta quidem obcaecati, libero sapiente? Quasi, dolore veritatis impedit tenetur illum ullam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugit dignissimos vel quis modi eos facilis vero vitae quam consequuntur laudantium quidem minima, repellendus impedit?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quo exercitationem cum et labore placeat libero rerum pariatur cumque? Porro commodi unde est aspernatur tempore iste, consequatur quam, amet magni natus voluptas.</p>
     </div>
    </div>
  )
}

export default About