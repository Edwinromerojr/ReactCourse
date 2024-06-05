import profilePic from './assets/yuji.jpg'

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Yuji</h2>
            <p className="card-text">I love playing video games</p>
        </div>
    );
}

export default Card