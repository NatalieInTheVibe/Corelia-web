import React, {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";
import {Link} from "../../../styles";
import {Card} from "antd";


const mystyle = {
    marginLeft:"10%",
    marginTop:"15%",
    border:"none",
    overflow:"hidden"
};

const iframeContainer = {
    position: "relative",
    paddingBottom: "100%",
    paddingTop: "35px",
    height: "0",
    overflow: "hidden"
}

const iframestyle = {
    border:"none",
    overflow:"hidden"
}

const fbtimeline = {
    border:"none",
    overflow:"hidden"
}

const Forum = () => {
    return (
            <Container>
                <Row>
                    <Col>

                    </Col>
                    <Col>

                    </Col>
                    <Col>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={iframeContainer}>
                            <iframe
                                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fwomensguitargroup%2Fphotos%2Fa.118775559658788%2F571896841013322%2F&show_text=true&width=500"
                                width="500" height="589" style={iframestyle} scrolling="no"
                                frameBorder="0" allowFullScreen="true"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div>
                    </Col>
                    <Col>
                        <div style={iframeContainer}>
                        <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fvicconcertorchestra%2Fposts%2Fpfbid0setWnySKyQHgdA1KpRLrgUCuXqQfVb95VuNr3D1QMEWUq4NJGjLTqWSDApYNxsbfl&show_text=true&width=500"
                        width="500" height="532" style={iframestyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div>
                    </Col>
                    <Col>
                        <div style={iframeContainer}>
                        <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAmlamusic%2Fposts%2Fpfbid02DTfo5brXefLqGnDo3bSXC2mA4c2EhoGWQB9KrDWeSGEG2XX6e62ikipvRfrPNWX3l&show_text=true&width=500"
                        width="500" height="557" style={iframestyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div>
                    </Col>
                    <Col>
                        <iframe
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcoreliaproject%2F&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=407443791582428"
                            width="340" height="331" style={fbtimeline} scrolling="no" frameBorder="0"
                            allowFullScreen="true"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </Col>
                </Row>
                <Row>
                    <Col>
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
                        <Helmet>
                            <script async src="https://www.tiktok.com/embed.js"></script>
                        </Helmet>

                    </Col>
                    <Col>

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
                            <Helmet>
                            <script async src="https://www.tiktok.com/embed.js"></script>
                            </Helmet>

                    </Col>
                    <Col>

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
                            <Helmet>
                            <script async src="https://www.tiktok.com/embed.js"></script>
                            </Helmet>

                    </Col>
                    <Col>

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
                            <Helmet>
                                <script async src="https://www.tiktok.com/embed.js"></script>
                            </Helmet>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Y56ODjb8ZMo"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </Col>
                    <Col>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/SAtZawkqBG8"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe></Col>
                </Row>
                <Row>
                    <Col>
                        <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Sunsets don&#39;t get much better
                            than this one over <a
                                href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">@GrandTetonNPS</a>. <a
                                href="https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw">#nature</a>
                            <a href="https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw">#sunset</a> <a
                                href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a></p>&mdash; US Department of
                            the Interior (@Interior) <a
                                href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw">May 5,
                                2014</a></blockquote>
                        <Helmet>
                            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                        </Helmet>
                    </Col>
                    <Col>
                        <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Go <a
                            href="https://twitter.com/JSalke?ref_src=twsrc%5Etfw">@JSalke</a> and <a
                            href="https://twitter.com/AmazonStudios?ref_src=twsrc%5Etfw">@AmazonStudios</a>! <a
                            href="https://t.co/ycGoNE2Zne">https://t.co/ycGoNE2Zne</a></p>&mdash; Jeff Bezos
                            (@JeffBezos) <a
                                href="https://twitter.com/JeffBezos/status/1577732519856082944?ref_src=twsrc%5Etfw">October
                                5, 2022</a></blockquote>
                        <Helmet>
                            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                        </Helmet>
                    </Col>
                    <Col>
                        <blockquote className="twitter-tweet"><p lang="en" dir="ltr">So damn cool. Congrats to MiMi and
                            the whole Mars helicopter team. <a
                                href="https://t.co/8KWQoLbtHV">https://t.co/8KWQoLbtHV</a></p>&mdash; Jeff Bezos
                            (@JeffBezos) <a
                                href="https://twitter.com/JeffBezos/status/1519789439224012802?ref_src=twsrc%5Etfw">April
                                28, 2022</a></blockquote>
                        <Helmet>
                        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script></Helmet>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a className="twitter-timeline"
                           href="https://twitter.com/TwitterDev"
                           data-tweet-limit="10">
                            Tweets by @TwitterDev
                        </a>
                    </Col>
                </Row>
                <Row></Row>
                <Row></Row>
            </Container>

    );
};

export default Forum;


// const Forum = () => {
//     const [embed, setEmbed] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//
//     useEffect(() => {
//         setIsLoading(true);
//         const fetchData = async () => {
//             const result = await fetch("https://jsonplaceholder.typicode.com/albums");
//             const resultJson = await result.json();
//             const sliceResult = resultJson.slice(0, 10);
//             setEmbed(sliceResult);
//             setIsLoading(false);
//         };
//         fetchData();
//     }, []);
//
//     return (
//         <div>
//             {isLoading && (
//                 <div className="loading">
//                     <p>...loading</p>
//                 </div>
//             )}
//             <div className="albums-container">
//                 {embed.map(album => (
//                     <Link
//                         to={`/${album.id}/photos`}
//                         key={album.id}
//                         style={{ textDecoration: "none", color: "black" }}
//                     >
//                         <Card className="albums-card">
//                             <img
//                                 src={"https://via.placeholder.com/168x118.png"}
//                                 alt={`data thumbnail`}
//                             />
//                             <h5>Composer {album.id}</h5>
//                             <h6>Composer {album.title}</h6>
//                         </Card>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default Forum;
