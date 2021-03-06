import '../Css/WorkExamples.css';


function WorkExamples (props) {
    return(
        <div className="work-examples-tab">

            <div className="spotify-tab">
                <div className="info-tab">
                    <h2 className='info-title'>Spotify</h2>
                    <p className="info-description">
                        Debut single of Philadelphia band Mars Counsel. Produced, mixed, and mastered by James Kull
                    </p>
                </div>

                <div className="embedded-tab">
            <iframe src="https://open.spotify.com/embed/track/2ZkAdfTu6dxSYiMVZ2OHHz" width="75%" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

                </div>

            </div>

            <div className="youtube-tab">

            <div className="info-tab">
                    <h2 className='info-title'>Youtube</h2>
                    <p className="info-description">
                        James Kull brings his percussive guitar style to the studio, and covers Drifting by Andy McKee
                    </p>
                </div>

                <div className="embedded-tab">
            <iframe width="75%" height="300" src="https://www.youtube.com/embed/ykQ6rFxcNtM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>

            </div>


        </div>
    );
}

export default WorkExamples;