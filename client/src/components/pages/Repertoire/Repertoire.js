

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../Card";
import "./Repertoire.css";
import pieces from "../../img/piece.png";

const Repertoire = () => {
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const result = await fetch("http://localhost:3000/api/pieces/");
            const resultJson = await result.json();

            setAlbums(resultJson);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div>
            {isLoading && (
                <div className="loading">
                    <p>...loading</p>
                </div>
            )}
            <div className="albums-container">
                {albums.map(piece => (
                    <Link
                        to={{pathname:`/api/pieces/${piece._id}`,state:`${piece._id}`}}
                        state={{
                            _id:piece._id,
                            name: piece.name,
                            composer:piece.composer.name,
                            duration:piece.duration,
                            publishyear:piece.year,
                            instruments:piece.instruments,
                            links:piece.recordingLink,
                            publisher:piece.publisher,
                            scorelink:piece.scoreLink,
                            image:piece.image

                        }}
                        key={piece.name}
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <Card className="albums-card">
                            <img
                                src="/image/piece.jpg"
                                // src={album.image}
                                // image source: https://maxmaraliving.com.au/team/terry/image-placeholder/
                                alt={`data thumbnail`}
                            />
                            <h5>{piece.name}</h5>
                            <p><strong>Instrument</strong>: {piece.instruments}</p>
                            <p>Name: {piece.recordingLink}</p>


                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Repertoire;
