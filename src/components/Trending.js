import { Card, Container, Row, Col, Image } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";

const Trending = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white" id="trending">TRENDING MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark movieImage">
                            <Image src={duneImage} alt="Dune Movies" className="images"/>
                            <div className="m-1 p-2 text-white">
                                <Card.Title className="text-center">DUNE</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark movieImage">
                            <Image src={everythingImage} alt="Everything Movies" className="images"/>
                            <div className="m-1 p-2 text-white">
                                <Card.Title className="text-center">EVERYTHING</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark movieImage">
                            <Image src={infiniteImage} alt="Infinite Movies" className="images"/>
                            <div className="m-1 p-2 text-white">
                                <Card.Title className="text-center">INFINITE</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark movieImage">
                            <Image src={jokerImage} alt="Joker Movies" className="images"/>
                            <div className="m-1 p-2 text-white">
                                <Card.Title className="text-center">JOKER</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark movieImage">
                            <Image src={lightyearImage} alt="Lightyear Movies" className="images"/>
                            <div className="m-1 p-2 text-white">
                                <Card.Title className="text-center">LIGHTYEAR</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark movieImage">
                            <Image src={morbiusImage} alt="Morbius Movies" className="images"/>
                            <div className="m-1 p-2 text-white">
                                <Card.Title className="text-center">MORBIUS</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trending