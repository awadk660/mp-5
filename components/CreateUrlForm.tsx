"use client";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function CreateUrlForm({
  createNewPost,
}: {
  createNewPost: (url: string, alias: string) => Promise<{success: boolean; error: string}>;
}) {
  const [alias, setAlias] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await createNewPost(url, alias);

    if (response.success) {
        setAlias("");
        setUrl("");
        setError("");
        router.refresh();
    } else {
        setError(response.error);
    }
  };

  return (
    <div>
        <form
          onSubmit={handleSubmit}
          style={{
            width: "80vw",
            padding: "16px",
            backgroundColor: "#b3e5fc",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            label="alias"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            fullWidth
            style={{
              backgroundColor: "white",
            }}
            error={error==="Alias already exists"}
            helperText={error ? "Alias exists already!" : ""}
          />
          <TextField
            label="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            fullWidth
            style={{
              backgroundColor: "white",
            }}
            error={error==="invalid URL"}
            helperText={error ? "Invalid URL" : ""}
          />
          <Button
            type="submit"
            style={{
              backgroundColor: "#81d4fa",
              color: "black",
            }}
            fullWidth
            disabled={alias.length === 0 || url.length === 0}
          >
            Submit
          </Button>
        </form>
    </div>
  );
}
