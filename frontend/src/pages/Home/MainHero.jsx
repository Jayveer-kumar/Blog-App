import Hero from "./Hero/Hero"
import LatestInsight from "./LatestInsight/LatestInsight";
import About from "./About";
import Subscribe from "./Subscribe";
function MainHero(){
    return (
        <>
        <div  >
            <Hero />
            <LatestInsight />
            <About />
            <Subscribe />
        </div>
        </>
    )
}

export default MainHero;