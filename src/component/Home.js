import picture from './../images/home_pic.jpg';
function Home(){

    return(
        <div className="home box">
            <div className="container">
               <div className="first-container">
                    <img src={picture} className='home-img' ></img>
               </div>
               <div className="second-container">

               </div>
            </div>
        </div>
    )

}

export default Home;