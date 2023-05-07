import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import required modules
import {Navigation, Pagination} from "swiper";
import {Helmet} from "react-helmet";
import HomeFooterJoinUs from "../../home-footer-joinUs";
import Footer from "../../Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const iframestyle = {
    border:"none",
    overflow:"hidden",
    padding:"20px",
    marginBottom:"0.3rem"
}
const titleS = {
    minWidth:"800px",
    width:"auto",
    height:"50px",
    background:"#f4544e",
    padding: ".5rem"
}
const tiktokS = {
    maxWidth: "605px",
    minWidth: "325px"
}
const timelineS = {
    minWidth:"800px",
    width: "auto",
    height: "auto",
    justifyContent:"center",
    margin:"auto",
    padding:"10%"
}
const topS = {
    width:"70%",
    height:"auto",
    justifyContent: "center",
    padding:"5%",
    margin:"auto"

}
const topSC = {
    minWidth:"1000px",
    width:"auto",
    height:"400px"
}

export default function App() {
    return (
        <>
            <br/><br/><br/>
            <div style={titleS}><h3>Join our group and enjoy interate with others</h3></div>
            <div>Welcome to our community</div>
            <Row style={topSC}>
                <Col style={topS}><iframe
                    src="https://www.facebook.com/plugins/group.php?href=https%3A%2F%2Fwww.facebook.com%2Fgroups%2Fayearofrunning%2F&width=280&show_metadata=false&appId=407443791582428&height=239"
                    width="400" height="450" style={iframestyle} scrolling="no" frameBorder="0"
                    allowFullScreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></Col>
                <Col style={topS}><h3>Welcome to join our group</h3><p>Our group welcomes all classical music lovers to communicate with each other, please feel free to join us, you can post any topic to communicate with each others, or if you have any questions you can also ask for help in our group.</p></Col>
            </Row>

            <div style={titleS}><h3>Our facebook community</h3></div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={1}
                    spaceBetween={33}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper">
                <SwiperSlide>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmelbmusicedu%2Fposts%2Fpfbid0kX6jBJG5VNjuy7p77rp8KHrNxhAx138thBK7kMFBgXJJiVHdswURwXVekCSezU3Fl&show_text=true&width=500"
                        width="500" height="582" style={iframestyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmelbmusic%2Fposts%2Fpfbid02vHF4jUGUtNoaWLQNKFbgghdU28vxfVcjX3iwwsRKtrwFjJ9unVaTP5tXiqfz5WsBl&show_text=true&width=500"
                        width="500" height="659" style={iframestyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmolouiemusic%2Fposts%2Fpfbid0Vm7MKZ1T6Aqmf7N2DcgxqtAxa7upLUuAjoBSYR2VzpSL7Y95mTPJjQBviirAfnH3l&show_text=true&width=500"
                        width="500" height="654" style={iframestyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcoreliaproject%2Fposts%2Fpfbid02S9D1Y39ZAqe3aE8G8WcVp5btdLAiaHi5KSWT4bdCPii6SBmmvdedwbjLMJfgq1HGl&show_text=true&width=500"
                        width="500" height="435" style={iframestyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAustralianRomanticClassicalOrchestra%2Fposts%2Fpfbid0TH4aqU9pQmF141s1AQbUidP3xfgZoA6APPvmE5GSEVQQnMk62uFwgfJzFevgUSRsl&show_text=true&width=500"
                        width="500" height="578" style={iframestyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FClassical.Mussic%2Fposts%2Fpfbid02hacyiUad2sDBE7v68wpG6iEF8CWqRAVkKwMTy2FdQPSEQmaZjo6Ndy66x4EKEFy9l&show_text=true&width=500"
                        width="500" height="481" style={iframestyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMirusiaLouwerse%2Fposts%2Fpfbid0vJzUKwF3B3WPi9Ytf3t2HJhhN9NuPndj3PnPGFmoH9F5MTACmYM762EkTNbakGhul&show_text=true&width=500"
                        width="500" height="283" style={iframestyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMirusiaLouwerse%2Fposts%2Fpfbid0ZahR2mNAkfnrkYxowxZA61UKZYwrPvcYgPDGxraQMibKcUfMeLBbttctnfz7r4ZGl&show_text=true&width=500"
                        width="500" height="480" style={iframestyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fclassicalpage%2Fposts%2Fpfbid0229sUc3pok4qvFK7xx7T6Acdjc79jJctYVifh8LvzFRRiB6zEkhoNGVLh5AFhbpWul&show_text=true&width=500"
                        width="500" height="450" style={iframestyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAustralianRomanticClassicalOrchestra%2Fposts%2Fpfbid02BFnueWaFeAszTZCeK23vEXrCBVDrrijKNu7KVen52JQ19xZPnuBQQmfBsVcNuvjKl&show_text=true&width=500"
                        width="500" height="488" style={iframestyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAustralianRomanticClassicalOrchestra%2Fposts%2Fpfbid0nrJT6Cd4p7Tv6uA5V9iRHmxGsf1rYmmpvq6Ws2asRoXgTm5RqiUkA19mDGo7d1eFl&show_text=true&width=500"
                        width="500" height="597" style={iframestyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fclassicalpage%2Fposts%2Fpfbid0PRcpBaKq8RFBEShWoxmKdDMrLBy4nVmjBaJRvPki5T4sdcDHCvttXUvs9YrNTXMhl&show_text=true&width=500"
                        width="500" height="584" style={iframestyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fclassicalpage%2Fposts%2Fpfbid02cXB3Z9FJLurmAfJNgtZLdXoHc5DAMxXEsZVQgdLZVyWmaAzmKgoLK1zRu7zomT6il&show_text=true&width=500"
                        width="500" height="616" style={iframestyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fclassicalpage%2Fposts%2Fpfbid02DqxR1BLN9jbLYXvKFH3HG5Uqw4HDdyMrtEesZnwHnsU4rK4aMgRzjSUMAs9JD1Yil&show_text=true&width=500"
                        width="500" height="570" style={iframestyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fclassicalpage%2Fposts%2Fpfbid02v4MeznrBBKj2vAGspaBJRjD64RrfbZphp1884xsh4TvDReas9zjbhvo9te8RT9L4l&show_text=true&width=500"
                        width="500" height="456" style={iframestyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fclassicalpage%2Fposts%2Fpfbid0LAaLYksx7rnvqSER4dBc1AjXr44iuFSsgh3fbPsKmbS794A4ahis1HFyjheK6721l&show_text=true&width=500"
                        width="500" height="712" style={iframestyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </SwiperSlide>
                {/*<SwiperSlide>Slide 5</SwiperSlide>*/}
                {/*<SwiperSlide>Slide 6</SwiperSlide>*/}
                {/*<SwiperSlide>Slide 7</SwiperSlide>*/}
                {/*<SwiperSlide>Slide 8</SwiperSlide>*/}
                {/*<SwiperSlide>Slide 9</SwiperSlide>*/}
            </Swiper>
            <div style={titleS}><h3>Our Tiktok community</h3></div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={1}
                    spaceBetween={33}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper">
                <SwiperSlide>
                    <blockquote className="tiktok-embed"
                                cite="https://www.tiktok.com/@almadeutscher/video/7089154686665673990"
                                data-video-id="7089154686665673990" >
                        <section><a target="_blank" title="@almadeutscher"
                                    href="https://www.tiktok.com/@almadeutscher?refer=embed">@almadeutscher</a> Did
                            you know very few pieces played in classical music concerts are composed by women? I’m
                            shining a light on some amazing female composers. Here’s a piece by Teresa Carreño ✨ <a
                                title="femalecomposer" target="_blank"
                                href="https://www.tiktok.com/tag/femalecomposer?refer=embed">#femalecomposer</a> <a
                                target="_blank" title="♬ original sound - AlmaDeutscher"
                                href="https://www.tiktok.com/music/original-sound-7089154751165664005?refer=embed">♬
                                original sound - AlmaDeutscher</a></section>
                    </blockquote>
                    <blockquote className="tiktok-embed"
                                cite="https://www.tiktok.com/@emilythebear/video/6954172227130641670"
                                data-video-id="6954172227130641670" >
                        <section><a target="_blank" title="@emilythebear"
                                    href="https://www.tiktok.com/@emilythebear?refer=embed">@emilythebear</a> female
                            composers are the future!!!!!! Inspired by the talented @niaimanifranklin ✨✨🤍 <a
                                title="femaleisfuture" target="_blank"
                                href="https://www.tiktok.com/tag/femaleisfuture?refer=embed">#femaleisfuture</a>
                            <a title="composer" target="_blank"
                               href="https://www.tiktok.com/tag/composer?refer=embed">#composer</a> <a
                                target="_blank" title="♬ original sound - Emily Bear"
                                href="https://www.tiktok.com/music/original-sound-6954172055600237317?refer=embed">♬
                                original sound - Emily Bear</a></section>
                    </blockquote>
                    <blockquote className="tiktok-embed"
                                cite="https://www.tiktok.com/@laufey/video/6958449298568695046"
                                data-video-id="6958449298568695046" >
                        <section><a target="_blank" title="@laufey"
                                    href="https://www.tiktok.com/@laufey?refer=embed">@laufey</a> composing for
                            a nonexistent romantic film set in the French countryside ... 🎹💗⭐️ <a
                                title="womencomposers" target="_blank"
                                href="https://www.tiktok.com/tag/womencomposers?refer=embed">#womencomposers</a>
                            <a title="music" target="_blank"
                               href="https://www.tiktok.com/tag/music?refer=embed">#music</a> <a
                                title="songwriter" target="_blank"
                                href="https://www.tiktok.com/tag/songwriter?refer=embed">#songwriter</a> <a
                                title="filmscore" target="_blank"
                                href="https://www.tiktok.com/tag/filmscore?refer=embed">#filmscore</a> <a
                                title="piano" target="_blank"
                                href="https://www.tiktok.com/tag/piano?refer=embed">#piano</a> <a
                                target="_blank" title="♬ original sound - laufey"
                                href="https://www.tiktok.com/music/original-sound-6958449214166682373?refer=embed">♬
                                original sound - laufey</a></section>
                    </blockquote>
                    <blockquote className="tiktok-embed"
                                cite="https://www.tiktok.com/@tonyannn/video/7149183811690040619"
                                data-video-id="7149183811690040619" >
                        <section><a target="_blank" title="@tonyannn"
                                    href="https://www.tiktok.com/@tonyannn?refer=embed">@tonyannn</a> hope you
                            all like it as much as I do.. ❤️ <a title="piano" target="_blank"
                                                                href="https://www.tiktok.com/tag/piano?refer=embed">#piano</a>
                            <a title="music" target="_blank"
                               href="https://www.tiktok.com/tag/music?refer=embed">#music</a> <a
                                title="original" target="_blank"
                                href="https://www.tiktok.com/tag/original?refer=embed">#original</a> <a
                                title="inspiration" target="_blank"
                                href="https://www.tiktok.com/tag/inspiration?refer=embed">#inspiration</a> <a
                                title="song" target="_blank"
                                href="https://www.tiktok.com/tag/song?refer=embed">#song</a> <a
                                title="neoclassical" target="_blank"
                                href="https://www.tiktok.com/tag/neoclassical?refer=embed">#neoclassical</a> <a
                                title="composer" target="_blank"
                                href="https://www.tiktok.com/tag/composer?refer=embed">#composer</a> <a
                                title="friday" target="_blank"
                                href="https://www.tiktok.com/tag/friday?refer=embed">#friday</a> <a
                                title="weekend" target="_blank"
                                href="https://www.tiktok.com/tag/weekend?refer=embed">#weekend</a> <a
                                title="song" target="_blank"
                                href="https://www.tiktok.com/tag/song?refer=embed">#song</a> <a title="cover"
                                target="_blank"
                                href="https://www.tiktok.com/tag/cover?refer=embed">#cover</a>
                            <a title="romantic" target="_blank"
                               href="https://www.tiktok.com/tag/romantic?refer=embed">#romantic</a> <a
                                target="_blank" title="♬ original sound - tony ann"
                                href="https://www.tiktok.com/music/original-sound-7149183875795962670?refer=embed">♬
                                original sound - tony ann</a></section>
                    </blockquote>

                </SwiperSlide>
                <SwiperSlide>
                    <blockquote className="tiktok-embed"
                                cite="https://www.tiktok.com/@hanamifroom/video/7093528581745167659"
                                data-video-id="7093528581745167659" style={tiktokS}>
                        <section><a target="_blank" title="@hanamifroom"
                                    href="https://www.tiktok.com/@hanamifroom?refer=embed">@hanamifroom</a> Chopin
                            Nocturne in E flat Major Op. 9 No. 2🎶 IG: hanamifroomviolin <a title="violin"
                                                                                            target="_blank"
                                                                                            href="https://www.tiktok.com/tag/violin?refer=embed">#violin</a>
                            <a title="violinist" target="_blank"
                               href="https://www.tiktok.com/tag/violinist?refer=embed">#violinist</a> <a
                                title="violingirl" target="_blank"
                                href="https://www.tiktok.com/tag/violingirl?refer=embed">#violingirl</a> <a
                                title="musiciansoftiktok" target="_blank"
                                href="https://www.tiktok.com/tag/musiciansoftiktok?refer=embed">#musiciansoftiktok</a>
                            <a title="violinista" target="_blank"
                               href="https://www.tiktok.com/tag/violinista?refer=embed">#violinista</a> <a
                                title="violintok" target="_blank"
                                href="https://www.tiktok.com/tag/violintok?refer=embed">#violintok</a> <a
                                title="classicalmusic" target="_blank"
                                href="https://www.tiktok.com/tag/classicalmusic?refer=embed">#classicalmusic</a> <a
                                title="chopin" target="_blank"
                                href="https://www.tiktok.com/tag/chopin?refer=embed">#chopin</a> <a
                                title="chopinnocturne" target="_blank"
                                href="https://www.tiktok.com/tag/chopinnocturne?refer=embed">#chopinnocturne</a> <a
                                title="beautiful" target="_blank"
                                href="https://www.tiktok.com/tag/beautiful?refer=embed">#beautiful</a> <a title="music"
                              target="_blank"
                              href="https://www.tiktok.com/tag/music?refer=embed">#music</a>
                            <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> <a
                                title="foryou" target="_blank"
                                href="https://www.tiktok.com/tag/foryou?refer=embed">#foryou</a> <a title="foryoupage"
                                target="_blank"
                                href="https://www.tiktok.com/tag/foryoupage?refer=embed">#foryoupage</a>
                            <a target="_blank" title="♬ original sound - Hanami花美"
                               href="https://www.tiktok.com/music/original-sound-7093528512618859310?refer=embed">♬
                                original sound - Hanami花美</a></section>
                    </blockquote>
                    <blockquote className="tiktok-embed"
                                cite="https://www.tiktok.com/@almadeutscher/video/7034501631798529286"
                                data-video-id="7034501631798529286" style={tiktokS}>
                        <section><a target="_blank" title="@almadeutscher"
                                    href="https://www.tiktok.com/@almadeutscher?refer=embed">@almadeutscher</a> Pop
                            melodies that any classical composer would be proud of… <a title="classicalmusic"
                                                                                       target="_blank"
                                                                                       href="https://www.tiktok.com/tag/classicalmusic?refer=embed">#ClassicalMusic</a>
                            <a title="ohgirlitsyou" target="_blank"
                               href="https://www.tiktok.com/tag/ohgirlitsyou?refer=embed">#OhGirlItsYou</a> <a
                                title="cover" target="_blank"
                                href="https://www.tiktok.com/tag/cover?refer=embed">#Cover</a> <a target="_blank"
                                                                                                  title="♬ original sound - AlmaDeutscher"
                                                                                                  href="https://www.tiktok.com/music/original-sound-7034501667437447942?refer=embed">♬
                                original sound - AlmaDeutscher</a></section>
                    </blockquote>
                    <blockquote className="tiktok-embed"
                                cite="https://www.tiktok.com/@annalapwoodorgan/video/7075471349682113798"
                                data-video-id="7075471349682113798" style={tiktokS}>
                        <section><a target="_blank" title="@annalapwoodorgan"
                                    href="https://www.tiktok.com/@annalapwoodorgan?refer=embed">@annalapwoodorgan</a> This
                            sound!!! Go and show @Kristina Arakelyan some love. <a title="classicalmusic"
                                                                                   target="_blank"
                                                                                   href="https://www.tiktok.com/tag/classicalmusic?refer=embed">#classicalmusic</a>
                            <a title="womenoftiktok" target="_blank"
                               href="https://www.tiktok.com/tag/womenoftiktok?refer=embed">#womenoftiktok</a> <a
                                title="womeninmusic" target="_blank"
                                href="https://www.tiktok.com/tag/womeninmusic?refer=embed">#womeninmusic</a> <a
                                title="femalecomposer" target="_blank"
                                href="https://www.tiktok.com/tag/femalecomposer?refer=embed">#femalecomposer</a> <a
                                title="piano" target="_blank"
                                href="https://www.tiktok.com/tag/piano?refer=embed">#piano</a> <a target="_blank"
                                                                                                  title="♬ Kristina Arakelyan Dreamland - Anna Lapwood | Organist"
                                                                                                  href="https://www.tiktok.com/music/Kristina-Arakelyan-Dreamland-7075471326370515718?refer=embed">♬
                                Kristina Arakelyan Dreamland - Anna Lapwood | Organist</a></section>
                    </blockquote>
                    <blockquote className="tiktok-embed"
                                cite="https://www.tiktok.com/@monaa_s/video/7021216200550092037"
                                data-video-id="7021216200550092037" style={tiktokS}>
                        <section><a target="_blank" title="@monaa_s"
                                    href="https://www.tiktok.com/@monaa_s?refer=embed">@monaa_s</a> Jiya Jale❤️ <a
                            title="arrahman" target="_blank"
                            href="https://www.tiktok.com/tag/arrahman?refer=embed">#arrahman</a> <a
                            title="femaletablaplayer" target="_blank"
                            href="https://www.tiktok.com/tag/femaletablaplayer?refer=embed">#femaletablaplayer</a> <a
                            title="tabla" target="_blank" href="https://www.tiktok.com/tag/tabla?refer=embed">#tabla</a>
                            <a title="music" target="_blank"
                               href="https://www.tiktok.com/tag/music?refer=embed">#music</a> <a
                                title="indianclassicalmusic" target="_blank"
                                href="https://www.tiktok.com/tag/indianclassicalmusic?refer=embed">#indianclassicalmusic</a>
                            <a title="musician" target="_blank"
                               href="https://www.tiktok.com/tag/musician?refer=embed">#musician</a> <a
                                title="indianmusic" target="_blank"
                                href="https://www.tiktok.com/tag/indianmusic?refer=embed">#indianmusic</a> <a
                                title="tablaplayer" target="_blank"
                                href="https://www.tiktok.com/tag/tablaplayer?refer=embed">#tablaplayer</a> <a
                                title="percussion" target="_blank"
                                href="https://www.tiktok.com/tag/percussion?refer=embed">#percussion</a> <a
                                title="tablacover" target="_blank"
                                href="https://www.tiktok.com/tag/tablacover?refer=embed">#tablacover</a> <a
                                target="_blank" title="♬ original sound - M O N A"
                                href="https://www.tiktok.com/music/original-sound-7021216068131654406?refer=embed">♬
                                original sound - M O N A</a></section>
                    </blockquote>
                </SwiperSlide>
                <SwiperSlide>
                    <blockquote className="tiktok-embed"
                                cite="https://www.tiktok.com/@astralight__/video/7142668875149167914"
                                data-video-id="7142668875149167914" style={tiktokS}>
                        <section><a target="_blank" title="@astralight__"
                                    href="https://www.tiktok.com/@astralight__?refer=embed">@astralight__</a> and
                            I&#39;m still single... <a title="fypシ" target="_blank"
                                                       href="https://www.tiktok.com/tag/fyp%E3%82%B7?refer=embed">#fypシ</a>
                            <a title="metal" target="_blank"
                               href="https://www.tiktok.com/tag/metal?refer=embed">#metal</a> <a title="music"
                                                                                                 target="_blank"
                                                                                                 href="https://www.tiktok.com/tag/music?refer=embed">#music</a>
                            <a title="nirvana" target="_blank"
                               href="https://www.tiktok.com/tag/nirvana?refer=embed">#nirvana</a> <a
                                title="femalebassist" target="_blank"
                                href="https://www.tiktok.com/tag/femalebassist?refer=embed">#femalebassist</a> <a
                                target="_blank" title="♬ original sound - hey"
                                href="https://www.tiktok.com/music/original-sound-7085140296282950443?refer=embed">♬
                                original sound - hey</a></section>
                    </blockquote>
                    <blockquote className="tiktok-embed"
                                cite="https://www.tiktok.com/@frederike_meier/video/6962391341611437317"
                                data-video-id="6962391341611437317" style={tiktokS}>
                        <section><a target="_blank" title="@frederike_meier"
                                    href="https://www.tiktok.com/@frederike_meier?refer=embed">@frederike_meier</a> I
                            think my „skills“ as a drummer and a dancer helped me for this one. 😅<a
                                title="viralclassicalmusic" target="_blank"
                                href="https://www.tiktok.com/tag/viralclassicalmusic?refer=embed">#viralclassicalmusic</a>
                            <a title="challenge" target="_blank"
                               href="https://www.tiktok.com/tag/challenge?refer=embed">#challenge</a> <a
                                title="drummergirl" target="_blank"
                                href="https://www.tiktok.com/tag/drummergirl?refer=embed">#drummergirl</a> <a
                                title="viral" target="_blank"
                                href="https://www.tiktok.com/tag/viral?refer=embed">#viral</a> <a target="_blank"
                                                                                                  title="♬ oops gee accidentally brought this trend back - Tik Toker"
                                                                                                  href="https://www.tiktok.com/music/oops-gee-accidentally-brought-this-trend-back-6772999364211198725?refer=embed">♬
                                oops gee accidentally brought this trend back - Tik Toker</a></section>
                    </blockquote>
                    <blockquote className="tiktok-embed"
                                cite="https://www.tiktok.com/@classicdivinity/video/7112983205233413419"
                                data-video-id="7112983205233413419" style={tiktokS}>
                        <section><a target="_blank" title="@classicdivinity"
                                    href="https://www.tiktok.com/@classicdivinity?refer=embed">@classicdivinity</a> The
                            Goddess of the Flute @JasmineChoi최나경 plays “Caprice No. 24” by N. Paganini ✨👏🏻👏🏻 <a
                                title="classicalmusic" target="_blank"
                                href="https://www.tiktok.com/tag/classicalmusic?refer=embed">#classicalmusic</a> <a
                                title="jasminechoi" target="_blank"
                                href="https://www.tiktok.com/tag/jasminechoi?refer=embed">#JasmineChoi</a> <a
                                title="최나경" target="_blank"
                                href="https://www.tiktok.com/tag/%EC%B5%9C%EB%82%98%EA%B2%BD?refer=embed">#최나경</a> <a
                                title="classicdivinity" target="_blank"
                                href="https://www.tiktok.com/tag/classicdivinity?refer=embed">#classicdivinity</a> <a
                                title="operatiktok" target="_blank"
                                href="https://www.tiktok.com/tag/operatiktok?refer=embed">#operatiktok</a> <a
                                title="highnotes" target="_blank"
                                href="https://www.tiktok.com/tag/highnotes?refer=embed">#highnotes</a> <a title="flute"
                                                                                                          target="_blank"
                                                                                                          href="https://www.tiktok.com/tag/flute?refer=embed">#flute</a>
                            <a title="flutist" target="_blank"
                               href="https://www.tiktok.com/tag/flutist?refer=embed">#flutist</a> <a title="flutemusic"
                                                                                                     target="_blank"
                                                                                                     href="https://www.tiktok.com/tag/flutemusic?refer=embed">#flutemusic</a>
                            <a target="_blank" title="♬ original sound - Classic Divinity"
                               href="https://www.tiktok.com/music/original-sound-7112983201466960683?refer=embed">♬
                                original sound - Classic Divinity</a></section>
                    </blockquote>
                    <blockquote className="tiktok-embed"
                                cite="https://www.tiktok.com/@katekulp/video/7144282364104002821"
                                data-video-id="7144282364104002821" style={tiktokS}>
                        <section><a target="_blank" title="@katekulp"
                                    href="https://www.tiktok.com/@katekulp?refer=embed">@katekulp</a> credit:
                            @mumbray <a title="foryou" target="_blank"
                                        href="https://www.tiktok.com/tag/foryou?refer=embed">#foryou</a> <a title="fyp"
                                                                                                            target="_blank"
                                                                                                            href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a>
                            <a title="foryoupage" target="_blank"
                               href="https://www.tiktok.com/tag/foryoupage?refer=embed">#foryoupage</a> <a
                                title="classicalmusic" target="_blank"
                                href="https://www.tiktok.com/tag/classicalmusic?refer=embed">#classicalmusic</a> <a
                                title="music" target="_blank"
                                href="https://www.tiktok.com/tag/music?refer=embed">#music</a> <a title="trending"
                                                                                                  target="_blank"
                                                                                                  href="https://www.tiktok.com/tag/trending?refer=embed">#trending</a>
                            <a target="_blank" title="♬ Can Can - Rias Orchestra &#38; Helmuth Brandenburg"
                               href="https://www.tiktok.com/music/Can-Can-7075024109586991878?refer=embed">♬ Can Can -
                                Rias Orchestra &#38; Helmuth Brandenburg</a></section>
                    </blockquote>

                </SwiperSlide>
                <SwiperSlide>
                    <blockquote className="tiktok-embed"
                                cite="https://www.tiktok.com/@pianocole/video/6982654062948814086"
                                data-video-id="6982654062948814086" style={tiktokS}>
                        <section><a target="_blank" title="@pianocole"
                                    href="https://www.tiktok.com/@pianocole?refer=embed">@pianocole</a> Reply to
                            @dem_wats_21 You Are The Reason ❤️ <a title="youarethereason" target="_blank"
                                                                  href="https://www.tiktok.com/tag/youarethereason?refer=embed">#youarethereason</a>
                            <a title="walkdowntheaisle" target="_blank"
                               href="https://www.tiktok.com/tag/walkdowntheaisle?refer=embed">#walkdowntheaisle</a> <a
                                title="pianocole" target="_blank"
                                href="https://www.tiktok.com/tag/pianocole?refer=embed">#pianocole</a> <a
                                title="pianogirl" target="_blank"
                                href="https://www.tiktok.com/tag/pianogirl?refer=embed">#pianogirl</a> <a
                                title="weddingsong" target="_blank"
                                href="https://www.tiktok.com/tag/weddingsong?refer=embed">#weddingsong</a> <a
                                target="_blank" title="♬ original sound - Nicole Reynolds"
                                href="https://www.tiktok.com/music/original-sound-6982653961291533062?refer=embed">♬
                                original sound - Nicole Reynolds</a></section>
                    </blockquote>
                    <blockquote className="tiktok-embed"
                                cite="https://www.tiktok.com/@myleeneklass/video/7076364183025028358"
                                data-video-id="7076364183025028358" style={tiktokS}>
                        <section><a target="_blank" title="@myleeneklass"
                                    href="https://www.tiktok.com/@myleeneklass?refer=embed">@myleeneklass</a> 👋x6! <a
                            title="encanto" target="_blank"
                            href="https://www.tiktok.com/tag/encanto?refer=embed">#encanto</a> <a
                            title="wedonttalkaboutbruno" target="_blank"
                            href="https://www.tiktok.com/tag/wedonttalkaboutbruno?refer=embed">#wedonttalkaboutbruno</a>
                            <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> <a
                                title="learnontiktok" target="_blank"
                                href="https://www.tiktok.com/tag/learnontiktok?refer=embed">#learnontiktok</a> <a
                                title="myleenesmusicklass" target="_blank"
                                href="https://www.tiktok.com/tag/myleenesmusicklass?refer=embed">#myleenesmusicklass</a>
                            <a title="piano" target="_blank"
                               href="https://www.tiktok.com/tag/piano?refer=embed">#piano</a> <a target="_blank"
                                                                                                 title="♬ original sound - Myleene Klass"
                                                                                                 href="https://www.tiktok.com/music/original-sound-7076364130973715205?refer=embed">♬
                                original sound - Myleene Klass</a></section>
                    </blockquote>
                    <blockquote className="tiktok-embed"
                                cite="https://www.tiktok.com/@sheelaawe/video/7022309669515382021"
                                data-video-id="7022309669515382021" style={tiktokS}>
                        <section><a target="_blank" title="@sheelaawe"
                                    href="https://www.tiktok.com/@sheelaawe?refer=embed">@sheelaawe</a> Family &gt; <a
                            title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> <a
                            title="foryou" target="_blank"
                            href="https://www.tiktok.com/tag/foryou?refer=embed">#foryou</a> <a title="family"
                                                                                                target="_blank"
                                                                                                href="https://www.tiktok.com/tag/family?refer=embed">#family</a>
                            <a title="oppochallenge" target="_blank"
                               href="https://www.tiktok.com/tag/oppochallenge?refer=embed">#OPPOChallenge</a> <a
                                target="_blank" title="♬ original sound - Sheela Awe"
                                href="https://www.tiktok.com/music/original-sound-7022309596668644101?refer=embed">♬
                                original sound - Sheela Awe</a></section>
                    </blockquote>
                    <blockquote className="tiktok-embed"
                                cite="https://www.tiktok.com/@pianochloemarie/video/7000320611381710086"
                                data-video-id="7000320611381710086" style={tiktokS}>
                        <section><a target="_blank" title="@pianochloemarie"
                                    href="https://www.tiktok.com/@pianochloemarie?refer=embed">@pianochloemarie</a> By
                            Hans Zimmer❤️💫 <a title="hanszimmer" target="_blank"
                                               href="https://www.tiktok.com/tag/hanszimmer?refer=embed">#hanszimmer</a>
                            <a title="moviesoundtrack" target="_blank"
                               href="https://www.tiktok.com/tag/moviesoundtrack?refer=embed">#moviesoundtrack</a> <a
                                title="foryou" target="_blank"
                                href="https://www.tiktok.com/tag/foryou?refer=embed">#foryou</a> <a title="foryoupage"
                                                                                                    target="_blank"
                                                                                                    href="https://www.tiktok.com/tag/foryoupage?refer=embed">#foryoupage</a>
                            <a title="piano" target="_blank"
                               href="https://www.tiktok.com/tag/piano?refer=embed">#piano</a> <a title="pianomusic"
                                                                                                 target="_blank"
                                                                                                 href="https://www.tiktok.com/tag/pianomusic?refer=embed">#pianomusic</a>
                            <a title="beautifulmusic" target="_blank"
                               href="https://www.tiktok.com/tag/beautifulmusic?refer=embed">#beautifulmusic</a> <a
                                title="beautifulpiano" target="_blank"
                                href="https://www.tiktok.com/tag/beautifulpiano?refer=embed">#beautifulpiano</a> <a
                                title="pianogirl" target="_blank"
                                href="https://www.tiktok.com/tag/pianogirl?refer=embed">#pianogirl</a> <a title="sunset"
                                                                                                          target="_blank"
                                                                                                          href="https://www.tiktok.com/tag/sunset?refer=embed">#sunset</a>
                            <a title="sunsetmusic" target="_blank"
                               href="https://www.tiktok.com/tag/sunsetmusic?refer=embed">#sunsetmusic</a> <a
                                target="_blank" title="♬ sonido original - ChloeMarie"
                                href="https://www.tiktok.com/music/sonido-original-7000320360231013126?refer=embed">♬
                                sonido original - ChloeMarie</a></section>
                    </blockquote>
                </SwiperSlide>
                <Helmet>
                    <script async src="https://www.tiktok.com/embed.js"></script>
                </Helmet>
            </Swiper>

            <br/>
            <div style={titleS}><h3>Our Twitter community</h3></div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={1}
                    spaceBetween={33}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper">
                <SwiperSlide>
                    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Classical Music composed by female
                        composers throughout history is a treasure recently found and still being explored, analyzed,
                        researched. No one knows what will be found in the future. But we already know that a big
                        treasure is already found! So many pieces for a lifetime! &gt;</p>&mdash; 🟣 Talia Ilan ישראל לא
                        נגישה (@taliailan) <a
                            href="https://twitter.com/taliailan/status/1436051441525927938?ref_src=twsrc%5Etfw">September
                            9, 2021</a></blockquote>
                    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">“Tár” tells the story of a powerful
                        female maestro – rare in the classical music world – played by Cate Blanchett. “The film’s
                        thesis could be bluntly stated,” writes <a
                            href="https://twitter.com/zwoolfe?ref_src=twsrc%5Etfw">@zwoolfe</a>. “Women, too, can be
                        inappropriately horny and generally evil.” <a
                            href="https://t.co/blxH59aLsY">https://t.co/blxH59aLsY</a></p>&mdash; New York Times Arts
                        (@nytimesarts) <a
                            href="https://twitter.com/nytimesarts/status/1581621816602173440?ref_src=twsrc%5Etfw">October
                            16, 2022</a></blockquote>

                    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">[1/3] 🇬🇧 HAPPY BIRTHDAY, CLARA
                        SCHUMANN! 🎉🎊🎂<br/>.<br/>Clara Schumann (1819- 1896) was one of the most talented musicians of
                        all times. 🎶<br/>.<br/>She was a unique female force of the classical music era, specifically
                        during the 19th century. <a
                            href="https://t.co/dxwPFPvd2m">pic.twitter.com/dxwPFPvd2m</a></p>&mdash; 𝐃𝐨𝐧𝐧𝐞,
                        𝐖𝐨𝐦𝐞𝐧 𝐢𝐧 𝐌𝐮𝐬𝐢𝐜 (@Donne_UK) <a
                            href="https://twitter.com/Donne_UK/status/1305143331790430208?ref_src=twsrc%5Etfw">September
                            13, 2020</a></blockquote>
                </SwiperSlide>
                <SwiperSlide>
                    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Delighted to have been elected the
                        first female Chair of the <a
                            href="https://twitter.com/EBU_HQ?ref_src=twsrc%5Etfw">@EBU_HQ</a> Classical Music Group this
                        week in Cologne <a href="https://t.co/LT3XCUHaLY">pic.twitter.com/LT3XCUHaLY</a></p>&mdash; Gail
                        Henry (@TheGailHenry) <a
                            href="https://twitter.com/TheGailHenry/status/1528000204418568193?ref_src=twsrc%5Etfw">May
                            21, 2022</a></blockquote>
                    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Did you know; the first composition of
                        the western classical music by Japanese was written by a female pianist.<br/>Nobu Koda was born
                            in 1870, became one of the students of the first generation studied with American or German
                            professors who were invited by Japanese Government. <a
                                href="https://t.co/7WGILSOEqf">pic.twitter.com/7WGILSOEqf</a></p>&mdash; Maho Harada
                        (@real_sail2) <a
                            href="https://twitter.com/real_sail2/status/1255465692398260225?ref_src=twsrc%5Etfw">April
                            29, 2020</a></blockquote>
                    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Boydell &amp; Brewer is honoured to
                        share the stories of remarkable <a
                            href="https://twitter.com/hashtag/WomeninMusic?src=hash&amp;ref_src=twsrc%5Etfw">#WomeninMusic</a>.
                        Whether it’s the inspiring biographies of women who compose, perform, and champion classical
                        music, or the female academics and authors who work hard to make their voices heard. <a
                            href="https://twitter.com/hashtag/InternationalWomensDay?src=hash&amp;ref_src=twsrc%5Etfw">#InternationalWomensDay</a>
                        <a href="https://t.co/GBZx3KnqeI">pic.twitter.com/GBZx3KnqeI</a></p>&mdash; B&amp;B Music
                        (@boydellmusic) <a
                            href="https://twitter.com/boydellmusic/status/1103997050105016320?ref_src=twsrc%5Etfw">March
                            8, 2019</a></blockquote>
                </SwiperSlide>
                <SwiperSlide>
                    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">‘They deserve a place in history’:
                        music teacher makes map of female composers.<br/>Interactive tool features more than 500 women
                            who are often forgotten in the classical music world. <a
                                href="https://t.co/l4o9ieTxWb">https://t.co/l4o9ieTxWb</a></p>&mdash; Eric Alper 🎧
                        (@ThatEricAlper) <a
                            href="https://twitter.com/ThatEricAlper/status/1428960078904840195?ref_src=twsrc%5Etfw">August
                            21, 2021</a></blockquote>
                    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">in the 12+ years i studied music i had
                        a female conductor for exactly TWO concerts.<br/>classical music scene is sexist AF. <a
                            href="https://t.co/BjwxN3UmbX">https://t.co/BjwxN3UmbX</a></p>&mdash; Vianey 🌈
                        (@vianey_gon) <a
                            href="https://twitter.com/vianey_gon/status/1576945398509633536?ref_src=twsrc%5Etfw">October
                            3, 2022</a></blockquote>
                    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">In honor of <a
                        href="https://twitter.com/hashtag/WomensHistoryMonth?src=hash&amp;ref_src=twsrc%5Etfw">#WomensHistoryMonth</a>,
                        Assistant Conductor Erina Yashima, First Associate Concertmaster Juliette Kang, &amp; Principal
                        Horn Jennifer Montone discuss pioneering female composers &amp; their impact on classical
                        music: <a href="https://t.co/9zXNlHPeE4">https://t.co/9zXNlHPeE4</a> <a
                            href="https://t.co/BJEuBC8qBT">pic.twitter.com/BJEuBC8qBT</a></p>&mdash; The Philadelphia
                        Orchestra (@philorch) <a
                            href="https://twitter.com/philorch/status/1367184221253619717?ref_src=twsrc%5Etfw">March 3,
                            2021</a></blockquote>
                </SwiperSlide>
                <SwiperSlide>
                    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">A classical music playlist of
                        underrated female classical composers <a
                            href="https://t.co/nvoufUhJ1C">https://t.co/nvoufUhJ1C</a> via <a
                            href="https://twitter.com/YouTube?ref_src=twsrc%5Etfw">@YouTube</a></p>&mdash; Kostas
                        Goulospiros (@KGoulospiros) <a
                            href="https://twitter.com/KGoulospiros/status/1581369546513915904?ref_src=twsrc%5Etfw">October
                            15, 2022</a></blockquote>
                    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Thank you <a
                        href="https://twitter.com/chicagosymphony?ref_src=twsrc%5Etfw">@chicagosymphony</a> for this
                        thoughtful article about female conductors in classical music, shared in the <a
                            href="https://twitter.com/hashtag/ExperienceCSO?src=hash&amp;ref_src=twsrc%5Etfw">#ExperienceCSO</a> portal.🔗 <a
                            href="https://t.co/FK0OqAOHSP">https://t.co/FK0OqAOHSP</a><br/><br/>📸 S Bremer <a
                            href="https://t.co/TOZ7SbDEzF">pic.twitter.com/TOZ7SbDEzF</a></p>&mdash; Susanna Mälkki
                        (@MalkkiConductor) <a
                            href="https://twitter.com/MalkkiConductor/status/1375148421431099393?ref_src=twsrc%5Etfw">March
                            25, 2021</a></blockquote>
                    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">In our latest podcast, we talk to
                        world-renowned conductor <a
                            href="https://twitter.com/marinalsop?ref_src=twsrc%5Etfw">@marinalsop</a> about the Female
                        Conductor Programme at the <a
                            href="https://twitter.com/NCH_Music?ref_src=twsrc%5Etfw">@NCH_Music</a>, smashing glass
                        ceilings in classical music, the impact of the pandemic on her work and the recent US elections.<br/><br/>Listen
                            👉<a href="https://t.co/UgEM9yfELf">https://t.co/UgEM9yfELf</a> <a
                                href="https://t.co/N6ximK1K0R">pic.twitter.com/N6ximK1K0R</a>
                    </p>&mdash; TheWomensPodcast (@ITWomensPodcast) <a
                        href="https://twitter.com/ITWomensPodcast/status/1353720550514970624?ref_src=twsrc%5Etfw">January
                        25, 2021</a></blockquote>
                </SwiperSlide>
                <Helmet>
                    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                </Helmet>
            </Swiper>

            <br/>
            <div style={titleS}><h3>Our Youtube community</h3></div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={1}
                    spaceBetween={33}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper">
                <SwiperSlide>
                    <iframe width="500" height="315" style={iframestyle} src="https://www.youtube.com/embed/IdYYo3iVFzM"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <iframe width="500" height="315" style={iframestyle} src="https://www.youtube.com/embed/2bFo65szAP0"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <iframe width="500" height="315" style={iframestyle} src="https://www.youtube.com/embed/hyMfJa8qN2Q"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <iframe width="500" height="315" style={iframestyle} src="https://www.youtube.com/embed/BF7pmimzjBs"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe width="500" height="315" style={iframestyle} src="https://www.youtube.com/embed/0Cg_0jepxow"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <iframe width="500" height="315" style={iframestyle} src="https://www.youtube.com/embed/RzoO756PvL8"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <iframe width="500" height="315" style={iframestyle} src="https://www.youtube.com/embed/RzoO756PvL8"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <iframe width="500" height="315" style={iframestyle} src="https://www.youtube.com/embed/wUMP58sKcg4"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>

                </SwiperSlide>
                <SwiperSlide>
                    <iframe width="500" height="315" style={iframestyle} src="https://www.youtube.com/embed/MyB8W2yvcQQ"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <iframe width="500" height="315" style={iframestyle} src="https://www.youtube.com/embed/3Bsnuew8f6s"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <iframe width="500" height="315" style={iframestyle} src="https://www.youtube.com/embed/zBgOENa9ZyI"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <iframe width="500" height="315" style={iframestyle} src="https://www.youtube.com/embed/3a0n6LvuhWM"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </SwiperSlide>
            </Swiper>
            <div style={titleS}><h3>Check out our Twitter</h3></div>
            <div style={timelineS}>
                <a className="twitter-timeline"
                   href="https://twitter.com/AppleMusic"
                   data-tweet-limit="10">
                    Tweets by @TwitterDev
                </a>
            </div>
            <br/><br/><br/><br/>
            <footer>
                <HomeFooterJoinUs />
                <Footer />
            </footer>

        </>
    );
}
