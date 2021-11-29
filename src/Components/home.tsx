import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button, Container, Modal } from "react-bootstrap";
import { getHeroes } from "../Services/api"
import { Hero } from "../Types/Hero";


const Home: React.FC = () => {

    const [heroes, setHeroes] = useState<Hero[]>([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (hero:Hero) => {
        setherodata(hero);
        setShow(true);
    };
    const [herodata, setherodata] = useState<Hero>();

    useEffect(() => {
        getHeroes().then(setHeroes)
    }, [])

    return (
        <body>
            <Container>
                <Row xs={4} md={6} className="g-4">
                    {heroes.map((hero, idx) => (
                        <Col key={idx}>
                            <Card>
                                <Card.Img variant="top" src={hero.images.lg} />
                                <Card.Body>
                                    <Card.Title>{hero.name}</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    <Button variant="primary" onClick={()=>{handleShow(hero)}}>
                                        Veja Mais
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Informações</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                      
                       <br/><b>Id: </b>{herodata?.id}
                       
                       <br/><b>Nome Completo: </b>{herodata?.biography.fullName}
                       <br/><b>Apelidos: </b>{herodata?.biography.aliases.join(", ")}
                       <br/><b>Alter Egos: </b>{herodata?.biography.alterEgos}
                       <br/><b>Viés: </b>{herodata?.biography.alignment}
                       <br/><b>Primeira Aparência: </b>{herodata?.biography.firstAppearance}
                       <br/><b>Local de Nascimento: </b>{herodata?.biography.placeOfBirth}
                       <br/><b>Editora: </b>{herodata?.biography.publisher}
                       
                       <br/><b>Cor do Olho: </b>{herodata?.appearance.eyeColor}
                       <br/><b>Gênero: </b>{herodata?.appearance.gender}
                       <br/><b>Cor do Cabelo: </b>{herodata?.appearance.hairColor}
                       <br/><b>Altura: </b>{herodata?.appearance.height.join(" or ")}
                       <br/><b>Raça: </b>{herodata?.appearance.race}
                       <br/><b>Peso: </b>{herodata?.appearance.weight}
                       
                       <br/><b>Filiação: </b>{herodata?.connections.groupAffiliation}
                       <br/><b>Relações: </b>{herodata?.connections.relatives}

                       <br/><b>Base: </b>{herodata?.work.base}
                       <br/><b>Ocupação: </b>{herodata?.work.occupation}

                       <br/><b>Combate: </b>{herodata?.powerstats.combat}
                       <br/><b>Durabilidade: </b>{herodata?.powerstats.durability}
                       <br/><b>Inteligência: </b>{herodata?.powerstats.intelligence}
                       <br/><b>Poder: </b>{herodata?.powerstats.power}
                       <br/><b>Velocidade: </b>{herodata?.powerstats.speed}
                       <br/><b>Força: </b>{herodata?.powerstats.strength}
                
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </body>
    )
}

export default Home