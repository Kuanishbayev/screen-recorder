import { useEffect } from "react";
import { useReactMediaRecorder } from "react-media-recorder";

export const RecordView = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });

  useEffect(() => {
    if (status === "stopped") {
      var tempLink = document.createElement('a');
      tempLink.href = mediaBlobUrl;
      tempLink.setAttribute('download', mediaBlobUrl);
      tempLink.click();
      document.body.removeChild(tempLink);
    }
  }, [status])
      
  return (
    <div>
      <p>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <video src={mediaBlobUrl} controls />
    </div>
  );
};