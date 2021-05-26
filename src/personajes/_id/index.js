import React from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const { id } = useParams()
const apiUrl = "https://rickandmortyapi.com/api/character/?id=" + id

const CharacterId = () => {

  const GetCharacters = () => {
    axios.get(apiUrl).then(
      response => {
        console.log(response.data)
        this.setState({ data: response.data.results })
      }
    )
  }

  return (
    <div className="CharacterId">
      <section className="container">
        <div className="row justify-content-md-center">
          hola
        </div>
      </section>
    </div>
  );
}

export default CharacterId;
