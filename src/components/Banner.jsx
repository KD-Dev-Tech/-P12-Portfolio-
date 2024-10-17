import bannerData from "../containers/data/about.json";

function Banner() {
    const banner = bannerData.about;
    return (
        <div className="container_animation">
            <h1>Hello, I&apos;m</h1>
            <div className="animation">
                <div className="first">
                    <div style={{display:'flex', alignItems:'self-end'}}>
                        {banner.firstname} {banner.lastname}
                    </div>
                </div>
                <div className="second">
                    <div>
                        {banner.title}
                    </div>
                </div>
            </div>
        </div>
    )           
}
export default Banner