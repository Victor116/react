import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const { id } = useParams()
const apiUrl = "https://rickandmortyapi.com/api/character/?id=" + id

class CharacterId extends Component {

  state = {
    data: []
  }

  GetCharacters = () => {
    axios.get(apiUrl).then(
      response => {
        console.log(response.data)
        this.setState({ data: response.data.results })
      }
    )
  }

  componentDidMount () {
    this.GetCharacters()
  }

  render(){
    return (
      <div className="CharacterId">
        <section className="container">
          <div className="row justify-content-md-center">
            { this.state.data.map( character => {
              return (
                { character }
              )
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default CharacterId;
