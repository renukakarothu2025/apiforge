import { useState } from "react";
import {
  Send,
  Plus,
  Trash2,
  Clock,
  CheckCircle2,
  AlertCircle,
  Code2,
} from "lucide-react";

function ApiTesting() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("http://localhost:8084/api/health");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [requestBody, setRequestBody] = useState('{\n  "name": "APIForge"\n}');
  const [activeTab, setActiveTab] = useState("Body");

  const sendRequest = async () => {
    if (!url.trim()) {
      alert("Please enter an API URL.");
      return;
    }

    setLoading(true);
    setResponse(null);

    const startTime = performance.now();

    try {
      const options = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (["POST", "PUT", "PATCH"].includes(method)) {
        options.body = requestBody;
      }

      const result = await fetch(url, options);
      const responseTime = Math.round(performance.now() - startTime);

      const text = await result.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch {
        data = text;
      }

      setResponse({
        status: result.status,
        statusText: result.statusText,
        time: responseTime,
        data,
        success: result.ok,
      });
    } catch (error) {
      setResponse({
        error: error.message,
        success: false,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="api-testing-page">
      <div className="api-page-heading">
        <div>
          <p className="welcome-label">API WORKSPACE</p>
          <h1>API Testing</h1>
          <p>Send requests and inspect API responses in real time.</p>
        </div>
      </div>

      <section className="dashboard-panel request-panel">
        <h2>Request Builder</h2>
        <p className="api-muted">Configure your API request below.</p>

        <div className="request-url-row">
          <select
            value={method}
            onChange={(event) => setMethod(event.target.value)}
            className={`method-select ${method.toLowerCase()}`}
          >
            {["GET", "POST", "PUT", "PATCH", "DELETE"].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <input
            className="url-input"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="Enter API endpoint URL"
          />

          <button
            className="primary-button send-button"
            onClick={sendRequest}
            disabled={loading}
          >
            <Send size={17} />
            {loading ? "Sending..." : "Send"}
          </button>
        </div>

        <div className="request-tabs">
          {["Params", "Headers", "Body"].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "request-tab active-tab" : "request-tab"}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Body" && (
          <div className="body-editor">
            <div className="editor-heading">
              <span><Code2 size={15} /> JSON Request Body</span>
              <span>application/json</span>
            </div>
            <textarea
              value={requestBody}
              onChange={(event) => setRequestBody(event.target.value)}
              spellCheck="false"
            />
          </div>
        )}

        {activeTab === "Params" && (
          <p className="api-muted tab-placeholder">
            Query parameter editing will be added in the next iteration.
          </p>
        )}

        {activeTab === "Headers" && (
          <p className="api-muted tab-placeholder">
            Custom header editing will be added in the next iteration.
          </p>
        )}
      </section>

      <section className="dashboard-panel response-panel">
        <div className="panel-header">
          <div>
            <h2>Response</h2>
            <p>API server response details</p>
          </div>
          {response && !response.error && (
            <div className={response.success ? "response-status success" : "response-status failure"}>
              {response.success ? <CheckCircle2 size={15} /> : <AlertCircle size={15} />}
              {response.status} {response.statusText}
            </div>
          )}
        </div>

        {!response && !loading && (
          <div className="empty-response">
            <Code2 size={35} />
            <h3>No response yet</h3>
            <p>Enter an API URL and click Send to see the response.</p>
          </div>
        )}

        {loading && <div className="empty-response">Sending request...</div>}

        {response && (
          <div className="response-result">
            {response.error ? (
              <div className="error-message">
                <AlertCircle size={18} />
                {response.error}
                <p>Check that the API server is running and allows browser requests.</p>
              </div>
            ) : (
              <>
                <div className="response-metadata">
                  <span><Clock size={15} /> {response.time} ms</span>
                  <span>{response.success ? "Request successful" : "Request failed"}</span>
                </div>
                <pre>{JSON.stringify(response.data, null, 2)}</pre>
              </>
            )}
          </div>
        )}
      </section>
    </div>
  );
}

export default ApiTesting;