function HeroContent() {
    return (
        <>
            <main className="hero container">
                <div className="hero-content">
                    <h1>POWER YOUR STRIDE WITH NIKE</h1>
                    <p>YOUR FEET DESERVE EXCELLENCE — WE DELIVER IT WITH EVERY STEP. WE’RE HERE TO BACK EVERY STRIDE WITH STYLE AND SUPPORT.</p>
                    <div className="hero-btn">
                        <button>Shop Now</button>
                        <button className="category">Category</button>
                    </div>
                    <div className="available">
                        <p>Also Available On</p>
                        <div className="social-icons">
                            <img src="/flipkart.png" alt="Flipkart" />
                            <img src="/amazon.png" alt="Amazon" />
                        </div>

                    </div>
                </div>

                <div className="hero-img">
                    <img src="/shoe-1.png" alt="Shoe" />
                </div>

            </main>
        </>
    )
}


export default HeroContent; 