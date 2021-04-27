import axios from "axios";
import dotenv from "dotenv";

require("dotenv").config();

const UploadBox = () => {
  const uploadHandler = (e) => {
    let formData = new FormData();
    formData.append("file", e.target.files[0], "placeholder name");

    axios.post(process.env.DB_URL, formData, {
      headers: {
        "content-type": "multipart/form-data", // do not forget this
      },
    });
  };

  return (
    <form>
      <input type="file" onChange={uploadHandler} />
    </form>
  );
};

export default UploadBox;
