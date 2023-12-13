import React, {useState} from "react";
import "./App.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  const [isDanseClicked, setIsDanseClicked] = useState(false);
  const [isTheatreClicked, setIsTheatreClicked] = useState(false);
  const [isLoisirClicked, setIsLoisirClicked] = useState(false);
  const [isPhotosClicked, setIsPhotosClicked] = useState(false);
  const [isSportClicked, setIsSportClicked] = useState (false);

  return (
    <div className="App">
      <p
        style={{
          fontFamily: "Outfit",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "normal",
          display: "flex",
          marginLeft: "100px"
        }}
      >
        Filters
      <br />
      </p>
      <div
        style={{
          fontSize: 16,
          fontFamily: "Outfit",
          fontWeight: "600",
          wordWrap: "break-word",
          display: "flex",
          marginLeft: "100px"
        }}
      >
        Mots clés
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          padding: 10,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 16,
          display: "inline-flex",
          marginLeft: "90px"
        }}
      >
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              background: "#354ACE",
            }}
          ></div>
          <div
            style={{
             width: 58,
              color: isDanseClicked ? "black" : "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              cursor: "pointer"
            }}
            onClick={() => setIsDanseClicked(!isDanseClicked)}
          >
            Danse
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 20, height: 20, background: "#354ACE" }}></div>
          <div
            style={{
              width: 58,
              color: isTheatreClicked ? "black" : "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              cursor: "pointer"
            }}
            onClick={() => setIsTheatreClicked(!isTheatreClicked)}
          >
            Théâtre
          </div>
        </div> 
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              background: "#354ACE",
            }}
          ></div>
          <div
            style={{
              width: 58,
              color: isLoisirClicked ? "black" : "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              cursor: "pointer"
            }}
            onClick={() => setIsLoisirClicked(!isLoisirClicked)}
          >
            Loisirs
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 20, height: 20, background: "#354ACE" }}></div>
          <div
            style={{
              width: 58,
              color: isPhotosClicked? "black" : "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              cursor: "pointer"
            }}
            onClick={() => setIsPhotosClicked(!isPhotosClicked)}
          >
            Photos
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 20, height: 20, background: "#354ACE" }}></div>
          <div
            style={{
              width: 58,
              color: isSportClicked ? "black" : "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              cursor: "pointer"
            }}
            onClick={() => setIsSportClicked(!isSportClicked)}
          >
            Sport
          </div>
        </div>
      </div>
      <div
        style={{
          color: "#071F31",
          fontSize: 16,
          fontFamily: "Outfit",
          fontWeight: "600",
          wordWrap: "break-word",
          display: "flex",
          marginLeft: "100px"
        }}
      >
        Audience
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          padding: 10,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 16,
          display: "inline-flex",
          marginLeft: "90px"
        }}
      >
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              background: "#354ACE",
            }}
          ></div>
          <div
            style={{
              width: 58,
               color: isDanseClicked ? "black" : "#354ACE",
               fontSize: 16,
               fontFamily: "Outfit",
               fontWeight: "500",
               wordWrap: "break-word",
               cursor: "pointer"
             }}
             onClick={() => setIsDanseClicked(!isDanseClicked)}
          >
            Danse
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 20, height: 20, background: "#354ACE" }}></div>
          <div
            style={{
              width: 58,
              color: isTheatreClicked ? "black" : "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              cursor: "pointer"
            }}
            onClick={() => setIsTheatreClicked(!isTheatreClicked)}
          >
            Théâtre
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              background: "#354ACE",
            }}
          ></div>
          <div
            style={{
              width: 58,
              color: isLoisirClicked ? "black" : "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              cursor: "pointer"
            }}
            onClick={() => setIsLoisirClicked(!isLoisirClicked)}
          >
            Loisirs
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
            cursor: "pointer"
          }}
        >
          <div style={{ width: 20, height: 20, background: "#354ACE" }}></div>
          <div
            style={{
              width: 58,
              color: isPhotosClicked ? "black" : "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              cursor: "pointer"
            }}
            onClick={() => setIsPhotosClicked(!isPhotosClicked)}
          >
            Photos
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 20, height: 20, background: "#354ACE" }}></div>
          <div
            style={{
              width: 58,
              color: isSportClicked ? "black" : "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              cursor: "pointer"
            }}
            onClick={() => setIsSportClicked(!isSportClicked)}
          >
            Sport
          </div>
        </div>
      </div>
      <div
        style={{
          color: "#071F31",
          fontSize: 16,
          fontFamily: "Outfit",
          fontWeight: "600",
          wordWrap: "break-word",
          display: "flex",
          marginLeft: "100px"
        }}
      >
        Tarifs
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          padding: 10,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 16,
          display: "inline-flex",
          marginLeft: "90px"
        }}
      >
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              background: "#354ACE",
            }}
          ></div>
          <div
            style={{
              width: 58,
               color: isDanseClicked ? "black" : "#354ACE",
               fontSize: 16,
               fontFamily: "Outfit",
               fontWeight: "500",
               wordWrap: "break-word",
               cursor: "pointer"
             }}
             onClick={() => setIsDanseClicked(!isDanseClicked)}
          >
            Danse
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 20, height: 20, background: "#354ACE" }}></div>
          <div
            style={{
              width: 58,
              color: isTheatreClicked ? "black" : "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              cursor: "pointer"
            }}
            onClick={() => setIsTheatreClicked(!isTheatreClicked)}
          >
            Théâtre
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              background: "#354ACE",
            }}
          ></div>
          <div
            style={{
              width: 58,
              color: isLoisirClicked ? "black" : "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              cursor: "pointer"
            }}
            onClick={() => setIsLoisirClicked(!isLoisirClicked)}
          >
            Loisirs
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 20, height: 20, background: "#354ACE" }}></div>
          <div
            style={{
              width: 58,
              color: isPhotosClicked ? "black" : "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              cursor: "pointer"
            }}
            onClick={() => setIsPhotosClicked(!isPhotosClicked)}
          >
            Photos
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 20, height: 20, background: "#354ACE" }}></div>
          <div
            style={{
              width: 58,
              color: isSportClicked ? "black" : "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              cursor: "pointer"
            }}
            onClick={() => setIsSportClicked(!isSportClicked)}
          >
            Sport
          </div>
        </div>
      </div>
      <div
        style={{
          color: "#071F31",
          fontSize: 16,
          fontFamily: "Outfit",
          fontWeight: "600",
          wordWrap: "break-word",
          display: "flex",
          marginLeft: "100px"
        }}
      >
        Dates
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          padding: 10,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 16,
          display: "inline-flex",
          marginLeft: "90px"
        }}
      >
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              background: "#354ACE",
            }}
          ></div>
          <div
            style={{
              width: 58,
               color: isDanseClicked ? "black" : "#354ACE",
               fontSize: 16,
               fontFamily: "Outfit",
               fontWeight: "500",
               wordWrap: "break-word",
               cursor: "pointer"
             }}
             onClick={() => setIsDanseClicked(!isDanseClicked)}
          >
            Danse
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 20, height: 20, background: "#354ACE" }}></div>
          <div
            style={{
              width: 58,
              color: isTheatreClicked ? "black" : "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              cursor: "pointer"
            }}
            onClick={() => setIsTheatreClicked(!isTheatreClicked)}
          >
            Théâtre
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              background: "#354ACE",
            }}
          ></div>
          <div
            style={{
              width: 58,
              color: isLoisirClicked ? "black" : "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              cursor: "pointer"
            }}
            onClick={() => setIsLoisirClicked(!isLoisirClicked)}
          >
            Loisirs
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 20, height: 20, background: "#354ACE" }}></div>
          <div
            style={{
              width: 58,
              color: isPhotosClicked ? "black" : "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              cursor: "pointer"
            }}
            onClick={() => setIsPhotosClicked(!isPhotosClicked)}
          >
            Photos
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 20, height: 20, background: "#354ACE" }}></div>
          <div
            style={{
              width: 58,
              color: isSportClicked ? "black" : "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              cursor: "pointer"
            }}
            onClick={() => setIsSportClicked(!isSportClicked)}
          >
            Sport
          </div>
        </div>
      </div>
      <div
        style={{
          color: "#071F31",
          fontSize: 16,
          fontFamily: "Outfit",
          fontWeight: "600",
          wordWrap: "break-word",
          display: "flex",
          marginLeft: "100px"
        }}
      >
        Accessibilité
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          padding: 10,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 16,
          display: "inline-flex",
          marginLeft: "90px"
        }}
      >
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              background: "#354ACE",
            }}
          ></div>
          <div
            style={{
              width: 58,
               color: isDanseClicked ? "black" : "#354ACE",
               fontSize: 16,
               fontFamily: "Outfit",
               fontWeight: "500",
               wordWrap: "break-word",
               cursor: "pointer"
             }}
             onClick={() => setIsDanseClicked(!isDanseClicked)}
          >
            Danse
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 20, height: 20, background: "#354ACE" }}></div>
          <div
            style={{
              width: 58,
              color: isTheatreClicked ? "black" : "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              cursor: "pointer"
            }}
            onClick={() => setIsTheatreClicked(!isTheatreClicked)}
          >
            Théâtre
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              background: "#354ACE",
            }}
          ></div>
          <div
            style={{
              width: 58,
              color: isLoisirClicked ? "black" : "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              cursor: "pointer"
            }}
            onClick={() => setIsLoisirClicked(!isLoisirClicked)}
          >
            Loisirs
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 20, height: 20, background: "#354ACE" }}></div>
          <div
            style={{
              width: 58,
              color: isPhotosClicked ? "black" : "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              cursor: "pointer"
            }}
            onClick={() => setIsPhotosClicked(!isPhotosClicked)}
          >
            Photos
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 20, height: 20, background: "#354ACE" }}></div>
          <div
            style={{
              width: 58,
              color: isSportClicked ? "black" : "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              cursor: "pointer"
            }}
            onClick={() => setIsSportClicked(!isSportClicked)}
          >
            Sport
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <MapContainer
          style={{
            height: "515px",
            width: "1044px",
            borderRadius: "25px",
          }}
          center={[48.866667, 2.333333]}
          zoom={12}
        >
          {/* add google map tile url  */}
          <TileLayer
            attribution="Google Maps"
            url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
          />
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
