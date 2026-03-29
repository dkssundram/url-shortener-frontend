import { useState } from "react";
import { shortenUrl } from "../services/urlService";
import "../styles/UrlForm.css";
import { FaCopy } from "react-icons/fa";

function UrlForm(){
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");
    
        try {
            const data = await shortenUrl({
                originalUrl : url,
                customAlias: alias,
            });
            setShortUrl(data.shortUrl);

        } catch (err){
            setError("Unable to Generate Short URL");
        }

    }

    const handleCopy = async(e) => {
        e.preventDefault();
        try{
            await navigator.clipboard.writeText(shortUrl);
            setShowToast(true);
            setCopied(true);
            setTimeout(()=> 
                setShowToast(false)
            , 2000);
            setTimeout(()=> 
                setCopied(false)
            , 2000);
            
        }
        catch (err) {
            console.error("Failed to Copy");
        }
    }
    return (
        <div className="container">
            <div className={`toast ${showToast ? "show": ""}`}>
                Copied!
            </div>
            <div className="card">

            <h2>🔗 URL Shortener</h2>

            <form onSubmit={handleSubmit}>
                <input
                className="input"
                type="text"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                />

                <input
                className="input"
                type="text"
                placeholder="Custom alias (optional)"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
                />

                <button className="button" type="submit">
                Shorten
                </button>
            </form>

            {shortUrl && (
                <div className="result">
                <p>Short URL:</p>
                <a href={shortUrl} target="_blank">{shortUrl} </a>

                <button className="copy-btn" onClick={handleCopy}>
                    <FaCopy style={{ marginRight: "6px" }} />
                    {copied ? "Copied!" : "Copy"}
                </button>
                </div>
            )}

            {error && <p style={{ color: "red" }}>{error}</p>}

            </div>
        </div>
);
}



export default UrlForm;
