import React from 'react'
import back_icon from '../../assets/back-icon.png'
import next_icon from '../../assets/next-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div class="testimonials">
      <img src={next_icon} alt="" className="next-btn" />
      <img src={back_icon} alt="" className="back-btn" />
      <div className="slider">
        <ul>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Lee-Dong Gi</h3>
                            <span>Kunsan, Jeonbuk State. South Korea</span>
                        </div>
                    </div>
                    <p>Lee Dong-gi was born on September 18, 1999 in Daejeon Metropolitan City. 
                        I graduated from Gunsan High School in 2018, and am currently enrolled 
                        in the Department of Computer Information Engineering at Gunsan National University in 2024.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Yoon-Bo Ra</h3>
                            <span>Cheongju, Chungcheongbuk-do. South Korea</span>
                        </div>
                    </div>
                    <p>Bora Yoon was born on July 7, 1998 in Cheongju, Chungcheongbuk-do. 
                        I graduated from Cheongju Foreign Language High School in 2016, and graduated 
                        from the Department of Elementary Education at Korea National University of 
                        Education in 2020. I passed the elementary school employment exam in 2020 and 
                        am currently working as an elementary school teacher in Chungcheongbuk-do.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Kim-Yoon Jeong</h3>
                            <span>Sejong City, South Korea</span>
                        </div>
                    </div>
                    <p>Kim Yun-jeong was born on June 1, 1998 in Cheonan, Chungcheongnam-do.
                         I graduated from Daejeon Foreign Language High School in 2016 and the Department of Home Economics 
                         Education at Korea National University of Education in 2020. I passed the secondary school employment
                          examination in 2020 and am currently working as a home teacher in Sejong City.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>unknown</h3>
                            <span>Kunsan, South Korea</span>
                        </div>
                    </div>
                    <p>textline example</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}


export default Testimonials
