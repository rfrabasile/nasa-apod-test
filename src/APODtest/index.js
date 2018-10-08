import React from "react";

import axios from "axios";

export default class APODtest extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo`
      )
      .then(res => {
        const data = res.data;
        this.setState({ data });
      });
  }

  render() {
    return (
      <div>
        <b>API URL:</b>
        <pre id="reqObject">{this.state.data.url}</pre>
        {this.state.data.media_type === "video" && (
          <iframe
            id="apod_vid_id"
            type="text/html"
            width="640"
            height="385"
            frameborder="0"
            title="video"
          />
        )}
        {this.state.data.media_type === "image" && (
          <img
            id="apod_img_id"
            width="250px"
            src={this.state.data.url}
            alt="imagen"
          />
        )}
        <p id="copyright">{this.state.data.copyright}</p>
        <h3 id="apod_title">{this.state.data.title}</h3>
        <p id="apod_explaination">{this.state.data.explanation}</p>
        <br />
        <b>Other data: </b>
        <br />
        Service Version: {this.state.data.service_version}
        <br />
        Date: {this.state.data.date}
      </div>
    );
  }
}
