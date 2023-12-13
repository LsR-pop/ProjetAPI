import "./App.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center" }}>
      <p
        style={{
          color: "#071F31",
          fontFamily: "Outfit",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "normal",
          display: "flex",
          marginLeft: "100px"
        }}
      >
        Filter
      </p>
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
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
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
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
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
              width: 54,
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
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
              width: 54,
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
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
              width: 54,
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              marginBottom: "20px"
            }}
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
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
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
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
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
              width: 54,
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
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
              width: 54,
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
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
              width: 54,
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              marginBottom: "20px"
            }}
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
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
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
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
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
              width: 54,
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
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
              width: 54,
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
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
              width: 54,
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              marginBottom: "20px"
            }}
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
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
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
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
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
              width: 54,
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
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
              width: 54,
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
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
              width: 54,
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
              marginBottom: "20px"
            }}
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
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
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
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
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
              width: 54,
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
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
              width: 54,
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
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
              width: 54,
              color: "#354ACE",
              fontSize: 16,
              fontFamily: "Outfit",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
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
