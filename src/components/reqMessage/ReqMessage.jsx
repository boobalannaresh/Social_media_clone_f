import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./reqMessage.css";
import Topbar from "../topbar/Topbar";
import { API } from "../../gobal";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function ReqMessage() {

  const { user, conversationId, setConversationId } = useContext(AuthContext);

  const navigate = useNavigate();

  const [text, setText] = useState(null);

  const newConversation = {
    conversationId: conversationId._id,
    sender: user._id,
    text: text,
  };

  const connect = ()=> {
    newMessage()
  }

  const newMessage = async () => {
    try {
      const res = await axios.post(`${API}/api/messages`, newConversation);
      console.log(res.data);

      navigate("/messenger");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Topbar />
      <div className="chat-container">
        <h2 className="chat-heading">Connecting to user ....</h2>
        <div className="chat-img-button">
          <img src="/assets/chat.gif" alt="" className="chat-gif" />
          <div className="chat-button">
            <Button variant="contained" color="warning" onClick={()=> connect()}>
              Connect
            </Button>
            <Button variant="contained" onClick={() => navigate(-1)}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
