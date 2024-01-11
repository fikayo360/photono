import './contact.css'

const Contact = () => {
    return (
        <section id="contact">
            <div id='contactWrap'>
                <div id="contactLeft">
                    <h1 id="mainHeading">contact us</h1>
                    <div id="socialIcons">
                        <img className='socialIcon' src='./instagram.png'/>
                        <img className='socialIcon' src='./linkedin.png'/>
                        <img className='socialIcon' src='./twitter.png'/>
                        <img className='socialIcon' src='./whatsapp.png'/>
                    </div>
                    <div className='infoCont'>
                        <img src='https://cdn-icons-png.flaticon.com/128/126/126509.png'/>
                        <span>+123 456 789</span>
                    </div>
                    <div className='infoCont'>
                        <img  src='https://cdn-icons-png.flaticon.com/128/482/482138.png'/>
                        <span>soso@gmail.com</span>
                    </div>
                    <div className='infoCont'>
                        <img src='https://cdn-icons-png.flaticon.com/128/927/927667.png' />
                        <span>27 halo close ny boulevard</span>
                    </div>
                </div>

                <div id="contactRight">
                    <form>
                    <input placeholder="fullname" />
                    <input placeholder="emailaddress" />
                    <textarea placeholder="Message" />
                    <button>send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact