import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import InfoIcon from '@mui/icons-material/Info';
import InstagramIcon from '@mui/icons-material/Instagram';
import Header from '../Components/Header/Header';
import CardBall from '../Components/CardBall/CardBall';
import './App.css';

// Detalles del personaje
const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
        if (!response.ok) {
          throw new Error('No se pudo obtener los datos del personaje');
        }
        const data = await response.json();
        setCharacter(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <div className="loading-message">Cargando...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;
  if (!character) return <div className="error-message">No se encontró el personaje</div>;

  // Handle del ki 
  const displayKi = character.ki !== undefined ? character.ki : "N/A";
  const displayMaxKi = character.maxKi !== undefined ? character.maxKi : "N/A";

  // Affiliation
  const displayAffiliation = character.affiliation || "Unknown";

  return (
    <div className="character-details">
      <h2>{character.name}</h2>

      <div className="character-detail-container">
        <div className="character-image-container">
          <img
            src={character.image}
            alt={character.name}
            style={{ maxWidth: '250px', height: 'auto', borderRadius: '10px' }}
          />
        </div>

        <div className="character-info-container">
          <p><strong>ID:</strong> {character.id}</p>
          <p><strong>Nombre:</strong> {character.name}</p>
          <p><strong>Base KI:</strong> {displayKi}</p>
          <p><strong>Total KI:</strong> {displayMaxKi}</p>
          <p><strong>Raza:</strong> {character.race}</p>
          <p><strong>Género:</strong> {character.gender}</p>
          <p><strong>Estado:</strong> Base - Normal</p>
          <p><strong>Afiliación:</strong> {displayAffiliation}</p>

          {character.description && (
            <div className="character-description">
              <h3>Descripción:</h3>
              <p>{character.description}</p>
            </div>
          )}
        </div>
      </div>

      <Link to="/">
        <button className="back-button">Volver</button>
      </Link>
    </div>
  );
};

// página Acerca de
const About = () => {
  return (
    <div className="about-page">
      <h2 className="about-title">Acerca de esta API</h2>
      <p className="about-description">
        Esta aplicación muestra personajes de Dragon Ball usando una API pública y está creada por
      </p>

      <div className="developers-container">
        <div className="developer-card">
          <div className="developer-image-container">
            <img
              src="https://scontent.fnva1-1.fna.fbcdn.net/v/t39.30808-6/493266574_2128715087647440_6231293403127156196_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHIuw1HHdRb76hrrs6YEQZFv5SaIiHtKAO_lJoiIe0oA368RijinURZZnIIEuFh9zWzwFwZszxsusJsJbkNJC4g&_nc_ohc=Sdz3gTc3AK8Q7kNvwG5_CyO&_nc_oc=AdkKb7OaFUyIAuaZfzX2djX9-ngy7kztAXO4iozDrCZ6fOm2v7iAQQf3AAVvUR4U4EM&_nc_zt=23&_nc_ht=scontent.fnva1-1.fna&_nc_gid=yzoDQ0KIeY_PDaW5vpdHvg&oh=00_AfFqL5YfzS1fd6pes_roHZHEWsqGn_HlJ1W-ZMcDNtGtaA&oe=680F6B2A"
              alt="Johan Sebastian Escobedo Calderón"
              className="developer-image"
            />
          </div>
          <h3 className="developer-name">Johan Sebastian Escobedo Calderón</h3>
          <p className="developer-role">Estudiante de Ingeniería de Sistemas de la Universidad Amazonica</p>
          <div className="social-buttons">
            <a
              href="https://www.instagram.com/sebas.ecl?igsh=ZmxlN2p5emlhNGdk"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button instagram-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
              Instagram
            </a>
            <a
              href="https://github.com/Johan-Calderon/DragonBall_Api"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button github-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <div className="developer-card">
          <div className="developer-image-container">
            <img
              src="https://scontent.fnva1-1.fna.fbcdn.net/v/t39.30808-6/471671305_1574944220574132_3026041859388606816_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEdrERE32MxXvlH_VME0R62N4-A2M1tSqU3j4DYzW1KpZwtvZOtbbHIERbV8sWF0Mg2ZhgBjC_dUhhWkFwB1ysF&_nc_ohc=pQrD7lHYr8UQ7kNvwEjrJqP&_nc_oc=AdkG1j3hXGQmz2QBK_0ae-nl6TQSAisG7U1gHOSP7-RMNHCKV09r6ke73T7eZdoDq4U&_nc_zt=23&_nc_ht=scontent.fnva1-1.fna&_nc_gid=9mwbWZ4lk8570hx-gWP-fA&oh=00_AfHPhKkdQkVEPtk9upM2gMQRH7OE-YbesbboGg3Tze4p4Q&oe=680F5ECB"
              alt="Juan David Gasca Cuellar"
              className="developer-image"
            />
          </div>
          <h3 className="developer-name">Juan David Gasca Cuellar</h3>
          <p className="developer-role">Estudiante de Ingeniería de Sistemas de la Universidad Amazonica</p>
          <div className="social-buttons">
            <a
              href="https://www.instagram.com/jgascauwu/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button instagram-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
              Instagram
            </a>
            <a
              href="https://github.com/Gasca7u7"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button github-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="course-info">
        <p>Curso: Programación Web G1 - Ingeniería de Sistemas 2025-I</p>
      </div>
    </div>
  );
};

// Personajes por género
const CharactersList = ({ filterGender = null }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        setLoading(true);
        let allCharacters = [];
        let currentPage = 1;
        let hasMoreData = true;

        while (hasMoreData) {
          const response = await fetch(`https://dragonball-api.com/api/characters?page=${currentPage}&limit=60`);

          if (!response.ok) {
            throw new Error('No se pudo obtener los datos');
          }

          const data = await response.json();
          const items = data.items || [];

          allCharacters = [...allCharacters, ...items];

          hasMoreData = items.length > 0 && (data.meta?.hasNextPage || false);
          currentPage++;

          if (currentPage > 50) break;
        }

        setCharacters(allCharacters);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAllCharacters();
  }, []);

  if (loading) return <div className="loading-message">Cargando personajes...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  const filteredCharacters = filterGender
    ? characters.filter(character => character.gender === filterGender)
    : characters;

  return (
    <>
      <Typography variant="h6" sx={{ color: 'white', textAlign: 'center', mb: 2 }}>
        {filteredCharacters.length} personajes encontrados
      </Typography>
      <div className="cards-container">
        {filteredCharacters.map(character => (
          <CardBall
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            race={character.race}
            gender={character.gender}
            ki={character.ki}
            maxKi={character.maxKi}
            affiliation={character.affiliation}
          />
        ))}
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="nav-menu">
          <Link to="/">
            <button>
              <HomeIcon fontSize="small" style={{ marginRight: '5px' }} />

            </button>
          </Link>
          <Link to="/male">
            <button>
              <MaleIcon fontSize="small" style={{ marginRight: '5px' }} />

            </button>
          </Link>
          <Link to="/female">
            <button>
              <FemaleIcon fontSize="small" style={{ marginRight: '5px' }} />

            </button>
          </Link>
          <Link to="/about">
            <button>
              <InfoIcon fontSize="small" style={{ marginRight: '5px' }} />

            </button>
          </Link>
        </div>

        <main>
          <Routes>
            <Route path="/" element={<CharactersList />} />
            <Route path="/male" element={<CharactersList filterGender="Male" />} />
            <Route path="/female" element={<CharactersList filterGender="Female" />} />
            <Route path="/personaje/:id" element={<CharacterDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
