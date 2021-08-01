import "./App.css";
import React from "react";
import UnSplash from "./api/UnSplash";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import ButtonIcon from "./DarkMode/DarkMode/ButtonIcon";
class App extends React.Component {
  state = { images: [] };

  componentDidMount() {
    this.onSearchSubmit(" lamborghini");
  }
  onSearchSubmit = async (term) => {
    const response = await UnSplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="App ui container" style={{ marginTop: "10px" }}>
        <ButtonIcon></ButtonIcon>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
