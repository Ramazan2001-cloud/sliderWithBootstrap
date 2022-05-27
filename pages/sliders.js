// Пример Слайдер 

const Slider = () => {
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                {/* Здесь я не стал загружать картинки а просто скопировал url адрес */}
                <img src="https://storge.pic2.me/c/1360x800/158/5f8597546a96f5.16444035.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://cs10.pikabu.ru/post_img/big/2020/05/12/9/1589296660129826533.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://i.pinimg.com/originals/c9/f8/07/c9f8075dc3ac5bdae5cf3ecf67163fb1.png" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
export default Slider;