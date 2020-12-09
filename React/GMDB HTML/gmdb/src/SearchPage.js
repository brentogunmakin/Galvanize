import React, { Component } from "react";
import styled from "styled-components";

const Back2Results = styled.button`
  background-color: #6d757d;
  width: 100vw;
  margin-top: 10px;
  margin: 10px;
  margin-left: 10px;
  font-weight: 1000;
  text-decoration: none;
  color: #ffc108;
`;

const SearchResults = styled.section`
  display: ${(props) => props.display};
  width: 96.4vw;
  margin-top: 10px;
  margin-left: 0.8vw;
  margin-right: 0.8vw;
  grid-template-columns: 23.5vw 23.5vw 23.5vw 23.5vw;
  grid-gap: 0.8vw;
`;

const SearchSelection = styled.section`
  display: ${(props) => props.display};
`;

const SearchItem = styled.img`
  width: 23.5vw;
  height: 500px;
`;

const MovieSelection = styled.section`
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  width: 97vw;
  grid-template-columns: 350px 1fr;
  grid-gap: 1vw;
  grid-template-areas: "image info";
`;

const MovieImage = styled.img`
  grid-area: "image";
  width: 350px;
`;

const MovieInfo = styled.section`
  grid-area: "info";
`;

const CommentSection = styled.section`
  flex-direction: column;
  width: 30vw;
  margin-left: 50px;
  text-align: left;
  align-items: flex-start;
`;

class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      myThing: "what",
      style: {
        searchResults: "grid",
        searchSelection: "none",
      },
      selectedMovie: {
        title: "",
        releaseDate: "",
        categories: "",
        description: "",
      },
    };
  }

  toggleView = () => {
    if (this.state.style.searchResults === "grid") {
      console.log(this.state.style);
      this.setState({
        ...this.state,
        style: { searchResults: "none", searchSelection: "grid" },
      });
    } else {
      console.log(this.state.style);
      this.setState({
        ...this.state,
        style: { searchResults: "grid", searchSelection: "none" },
      });
    }
  };

  selectMovie = (evt) => {
    console.log(evt.target.name);
  };

  render() {
    return (
      <>
        <Back2Results onClick={this.toggleView}>Back to results</Back2Results>

        <SearchResults display={this.state.style.searchResults}>
          <SearchItem
            src="./Movies/1.png"
            onClick={this.selectMovie}
            name="1"
          />
          <SearchItem
            src="./Movies/2.png"
            onClick={this.selectMovie}
            name="2"
          />
          <SearchItem
            src="./Movies/3.png"
            onClick={this.selectMovie}
            name="3"
          />
          <SearchItem
            src="./Movies/4.png"
            onClick={this.selectMovie}
            name="4"
          />
          <SearchItem
            src="./Movies/5.png"
            onClick={this.selectMovie}
            name="5"
          />
          <SearchItem
            src="./Movies/6.png"
            onClick={this.selectMovie}
            name="6"
          />
          <SearchItem
            src="./Movies/7.png"
            onClick={this.selectMovie}
            name="7"
          />
        </SearchResults>

        <SearchSelection display={this.state.style.searchSelection}>
          RandomText
          <MovieSelection>
            <img id="MovieImage" src="Movies/placeholder.jpg" />
            <MovieInfo>
              <p id="MovieTitle">{this.state.selectedMovie.title}</p>
              <p id="MovieReleaseDate">
                {this.state.selectedMovie.releaseDate}
              </p>
              <p id="MovieCategoryActors">
                {this.state.selectedMovie.categories} |{" "}
                {this.state.selectedMovie.actors}
              </p>
              <p id="MovieDescription">
                {this.state.selectedMovie.description}
              </p>
            </MovieInfo>
          </MovieSelection>
          <CommentSection>
            <br />
            <div>Leave a comment:</div>
            <input type="text" />
            <br />
            <br />

            <button class="submitButton">Submit</button>
          </CommentSection>
        </SearchSelection>
      </>
    );
  }
}
export default SearchPage;
