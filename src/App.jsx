import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [korsat, korsatpasswordSozlash] = useState(false);
  const [pass, setPassword] = useState("");
  const [rang, changeColor] = useState("Red");
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <div>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && <p>Bu yashirin matn!</p>}
      </div>

      <hr style={{ margin: "20px 0" }} />

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ism kiriting..."
        />
        <p>Kiritilgan ism: {name}</p>
      </div>

      <hr style={{ margin: "20px 0" }} />

      <div>
        <button
          onClick={() => setIsLiked(!isLiked)}
          style={{ color: isLiked ? "red" : "black", fontSize: "18px" }}
        >
          {isLiked ? "Liked" : "Like"}
        </button>
      </div>

      <hr style={{ margin: "20px 0" }} />

      <div>
        <input
          type={korsat ? "text" : "password"}
          value={pass}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="parol"
        />
        <button onClick={() => korsatpasswordSozlash(!korsat)}>
          {korsat ? "Yashirish" : "Korsatish"}
        </button>
      </div>

      <hr style={{ margin: "20px 0" }} />

      <div>
        <button onClick={() => changeColor("Red")}>Red</button>
        <button onClick={() => changeColor("Green")}>Green</button>
        <button onClick={() => changeColor("Blue")}>Blue</button>

        <p style={{ color: rang.toLowerCase() }}>Hozirgi rang {rang}</p>
      </div>
    </div>
  );
}

export default App;
