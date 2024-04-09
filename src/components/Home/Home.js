import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/gitlogo.gif";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ADEWUNMI OLADELE</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
                <iframe
                  src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc20.html?contract=0xC47c8f66b1f8e0cc11E42680Ed817dC3Ca984f51&chain=%7B%22name%22%3A%22Staava+Fuji%22%2C%22chain%22%3A%22%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Ftestnet-node.staava.network%2F%22%5D%2C%22nativeCurrency%22%3A%7B%22symbol%22%3A%22tSTAAV%22%2C%22name%22%3A%22tSTAAV%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22staava-fuji%22%2C%22chainId%22%3A603995%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22staava-fuji%22%7D&clientId=9f6b2b09815eb82cab8b697ddc4998ad&theme=light&primaryColor=purple"
                  width="600px"
                  height="600px"
                  style="max-width:100%;"
                  frameborder="0"
                 ></iframe>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
