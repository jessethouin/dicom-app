import React, {ChangeEvent, useState} from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import "./App.css";
import {Box, Button, styled, Typography} from "@mui/material";
import TagAutocomplete from "./components/TagAutoComplete";

const VisuallyHiddenInput = styled("input")({
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

function App() {
    const [fileName, setFileName] = useState("");
    const [uploadStatus, setUploadStatus] = useState("");
    const [progress, setProgress] = useState(0);
    const [tagValue, setTagValue] = useState("Select a tag to see its value");

    const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
        const fileList = event.currentTarget.files;
        if (!fileList || !fileList.length) {
            return;
        }

        const selectedFile = fileList[0];
        setFileName(selectedFile.name);

        const chunkSize = 5 * 1024 * 1024; // 5MB (adjust based on your requirements)
        const totalChunks = Math.ceil(selectedFile.size / chunkSize);
        const chunkProgress = 100 / totalChunks;
        let chunkNumber = 0;
        let start = 0;
        let end = Math.min(selectedFile.size, chunkSize);

        const uploadNextChunk = async () => {
            if (end <= selectedFile.size && start !== end) {
                const chunk = selectedFile.slice(start, end);
                const formData = new FormData();
                formData.append("file", chunk);
                formData.append("chunkNumber", chunkNumber.toString());
                formData.append("totalChunks", totalChunks.toString());
                formData.append("originalName", selectedFile.name);

                fetch(`${process.env.REACT_APP_API_SERVER_PROTOCOL}://${process.env.REACT_APP_API_SERVER_NAME}:${process.env.REACT_APP_API_SERVER_PORT}/upload`, {
                    method: "POST",
                    body: formData,
                })
                    .then((response) => response.json())
                    .then(() => {
                        const tempStatus = `Chunk ${chunkNumber + 1}/${totalChunks} uploaded successfully`;
                        setUploadStatus(tempStatus);
                        setProgress(Number((chunkNumber + 1) * chunkProgress));
                        chunkNumber++;
                        start = end;
                        end = Math.min(selectedFile.size, start + chunkSize);
                        uploadNextChunk();
                    })
                    .catch((error) => {
                        console.error("Error uploading chunk:", error);
                    });
            } else {
                setProgress(100);
                setUploadStatus("File upload completed");
            }
        };

        uploadNextChunk()
            .catch((error) => {
                console.error("Error uploading chunk:", error);
            });

        event.target.value = "";
    };

    const handleReset = () => {
        setUploadStatus("");
        setProgress(0);
        setTagValue("Select a tag to see its value");
    }

    return (
        <Box className={"main"} >
            <Box className={"content"}>
                {progress > 0 && progress < 100 ? (
                    <>
                        <Box sx={{ width: `${progress}%` }} className={"progress-bar"}>
                            <Typography variant={"body1"} className={"progress-percent"}>Progress {progress}%</Typography>
                        </Box>
                        <Typography variant={"h6"}>{uploadStatus}</Typography>
                    </>
                ) : progress === 100 ? (
                    <>
                        <TagAutocomplete setTagValue={setTagValue} fileName={fileName}/>
                        <Typography variant={"body1"} className={"tag-value"}>{tagValue}</Typography>
                        <img src={`${process.env.REACT_APP_API_SERVER_PROTOCOL}://${process.env.REACT_APP_API_SERVER_NAME}:${process.env.REACT_APP_API_SERVER_PORT}/image/fileName/${fileName}?${new Date().getTime()}`} alt={`${fileName}`} width={"500px"} />
                        <Button onClick={handleReset}>Upload another</Button>
                    </>
                ) : (
                    <Button
                        component="label"
                        role={undefined}
                        tabIndex={-1}
                        className={"upload-button"}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload DICOM File
                        <VisuallyHiddenInput
                            type="file"
                            id={"dicom-file-upload"}
                            onChange={handleFile}
                            accept={"*"}
                        />
                    </Button>
                )}
            </Box>
        </Box>
    );
}

export default App;
