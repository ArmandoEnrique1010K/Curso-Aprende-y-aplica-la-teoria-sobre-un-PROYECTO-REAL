import PropTypes from "prop-types";

export default function Characters(props) {

    // Desestructura
    const { characters, setCharacters, setUrl, infoApi, setInfoApi } = props
    console.log(characters)

    const resetCharacters = () => {
        setCharacters(null);
        console.log("reiniciando")
    }

    const nextPage = () => {
        setUrl(infoApi.next);
    }

    const previousPage = () => {
        setUrl(infoApi.prev)
    }

    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetCharacters}>Volver a la home</span>
            <div className="container-characters">

                {characters.map((character, index) => (
                    // No utilizar un return dentro del map
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>

                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === "Alive" ? (
                                    <>
                                        <span className="alive">Alive</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="dead">Dead</span>
                                    </>
                                )}
                            </h6>
                            <p className="text-gray"><span>Episodios: </span><span>{character.episode.length}</span></p>
                            <p>
                                <span className="text-gray">Especie: </span><span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                Ir a la pagina
                <div>
                    {infoApi.prev === null || <span className="btn-search" onClick={previousPage}>Anterior</span>}
                </div>

                <div>
                    <span className="btn-search" onClick={nextPage}>Siguiente</span>
                </div>
            </div>
            <span className="back-home" onClick={resetCharacters}>Volver a la home</span>
        </div>
    )
}

Characters.propTypes = {
    characters: PropTypes.array.isRequired,
    setCharacters: PropTypes.func.isRequired
}