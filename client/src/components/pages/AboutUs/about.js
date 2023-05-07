import Footer from "../../Footer";
import HomeFooterJoinUs from "../../home-footer-joinUs";
import React from "react";
const containerS ={
    width:"1000px",
    minHeight:"600px",
    height:"auto",
    background:"#f9fdf3",
    display:"flex",
    justifyContent:"center",
    margin:"auto",
}
const innerContainer = {
    width: "100%",
    height: "300px",
    marginTop:"3rem"
}
const titleS = {
    width:"100%",
    height:"60px",
    color:"#8ab2f0",
    marginLeft:"30px",
    marginTop: "30px"
}
const contentS ={
    width:"200%",
    height:"400px",
    justifyContent: "center",
    marginTop: "100px",
    marginRight:"30px"
}
const about = () => {
    return (
<div>
    <br/><br/><br/><br/><br/>
            <div style={containerS} className='containers'>
            <div style={titleS}>
                <h2>Corelia Project</h2>
            </div>
                <br/><br/>
            <div style={contentS}>
                <p>Magdalenna Krstevska is an Australian classical clarinetist / performer, and have recently founded the Corelia Project, a community initiative that aims to address the lack of gender diversity in the classical music world.</p>
                <br/>
                <p>
                    Historically, women’s voices have been grossly underrepresented in classical music. Currently, most core repertoire lists do not feature a single work written by a woman, however countless exceptional pieces exist. The issue is that to find these pieces it currently takes many hours of personal research to discover names of composers, works, recordings of the works, and where to find the musical score (if the works have been published at all!). Through the promotion of women composers and their works, the Corelia Project aims to encourage shifts in concert programming, and inspire musicians to diversify their own repertoire.
                </p>
            </div>
            </div>
                <div style={innerContainer}>
                    <footer>
                        <HomeFooterJoinUs />
                        <Footer />
                    </footer>
                </div>
</div>



    );
};
export default about;