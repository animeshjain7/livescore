import React, { useEffect, useState } from "react";

import "./css/Livescore.css";
import { Link } from "react-router-dom";
import { ArrowDropDown, Search } from "@material-ui/icons";

function Livescore({ limit, key }) {
    const [match, setMatch] = useState([]);
    useEffect(() => {
      setMatch(limit);
    }, [limit]);
    return (
        <div className="Livescore">
          <div className="Livescore__header">
            <div className="Livescore__headerImage">
              <img src="https://www.Livescore.com/images/cbz-logo.png" alt="" />
            </div>
            <div className="Livescore__headerOptions">
              <div className="Livescore__headerOption">
                <Link to="/">
                  <h4>Live Scores</h4>
                </Link>
              </div>
              <div className="Livescore__headerOption">
                <h4>Schedule</h4>
              </div>
              <div className="Livescore__headerOption">
                <Link to="playersearch">
                  <h4>Player Search</h4>
                </Link>
              </div>
              <div className="Livescore__headerOption">
                <Link to="sportsnews">
                  <h4>News</h4>
                  <ArrowDropDown/>
                </Link>
              </div>
              <div className="Livescore__headerOption">
                <h4>Series</h4>
                <ArrowDropDown/>
              </div>
              <div className="Livescore__headerOption">
                <h4>Teams</h4>
                <ArrowDropDown/>
              </div>
              <div className="Livescore__headerOption">
                <h4>Videos</h4>
                <ArrowDropDown/>
              </div>
              <div className="Livescore__headerOption">
                <h4>Rankings</h4>
                <ArrowDropDown/>
              </div>
              <div className="Livescore__headerOption">
                <h4>More</h4>
                <ArrowDropDown/>
              </div>
            </div>
            <div className="Livescore__headerSearch">
              <div className="Livescore__headerSearchIcon">
                <Search
                  style={{
                    color: "white",
                  }}
                />
                <input placeholder="Search" />
              </div>
            </div>
          </div>
          <div className="Livescore__matchStrip">
            <div className="Livescore__matchStripLeft">
              <div className="Livescore__matchStripLeftMatch">
                <p>MATCHES</p>
              </div>
              <div className="Livescore__matchStrip-LeftMatchOptions">
                {match?.map((doc) => (
                  <div className="Livescore__matchStrip-LeftMatchOption">
                    <p>{doc["team-1"]}</p>
                    <small>vs</small>
                    <p>{doc["team-2"]}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="Livescore__all">
              <p>ALL</p>
              <ArrowDropDown/>
            </div>
          </div>
        </div>
      );
}

export default Livescore
