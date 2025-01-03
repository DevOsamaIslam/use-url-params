import useUrlParams from "../../src/useUrlParams"

interface PossibleParams {
  page: string
  filter: string
  search: string
}
const App = () => {
  const { urlParams, updateUrlParams, removeUrlParam } =
    useUrlParams<PossibleParams>({
      defaults: { page: "1" },
    })

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ color: "#333" }}>useUrlParams Demo</h1>

      <div style={{ marginBottom: "20px" }}>
        <h2>Current URL Parameters:</h2>
        <pre
          style={{
            background: "#f4f4f4",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ddd",
          }}>
          {JSON.stringify(urlParams, null, 2)}
        </pre>
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button
          onClick={() => updateUrlParams({ page: "2" })}
          style={buttonStyle}>
          Set Page to 2
        </button>
        <button
          onClick={() => updateUrlParams({ filter: "new" })}
          style={buttonStyle}>
          Set Filter to "new"
        </button>
        <button
          onClick={() => updateUrlParams({ search: "hoodie" })}
          style={buttonStyle}>
          Add "search"
        </button>
        <button
          onClick={() => removeUrlParam("filter")}
          style={{ ...buttonStyle, backgroundColor: "#ffb6b9" }}>
          Remove Filter
        </button>
        <button
          onClick={() => removeUrlParam("search")}
          style={{ ...buttonStyle, backgroundColor: "#ffb6b9" }}>
          Remove Search
        </button>
        <button
          onClick={() => removeUrlParam()}
          style={{ ...buttonStyle, backgroundColor: "#f88" }}>
          Clear All Params
        </button>
      </div>

      <p style={{ marginTop: "20px", fontStyle: "italic", color: "#555" }}>
        Note: Observe the query parameters in your browser's address bar as you
        interact with the buttons.
      </p>
    </div>
  )
}

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  backgroundColor: "#4CAF50",
  color: "white",
}

export default App
