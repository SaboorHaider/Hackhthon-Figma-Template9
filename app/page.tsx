import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import AboutUs from "@/components/About"
import MenuCom from "@/components/Menu"
import FoodCategory from "@/components/Food-category"

const Home=() =>{
    return(
        <div className="">
             
       <header>
       <Navbar/>
       </header>

       <main>
       <Hero/>
             < AboutUs/>
             <FoodCategory/>
             <MenuCom/>

       </main>
        
<footer>
    <Footer/>
</footer>

        </div>
        
    )
}

export default Home