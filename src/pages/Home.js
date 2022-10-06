import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Stock from '../components/Stock';

const Home = () => (
  <>
    <header>
      <Header />
    </header>
    <main>
      <Container>
        <Stock />
      </Container>
    </main>
    <Footer />
  </>
);

export default Home;
