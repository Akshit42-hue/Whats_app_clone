import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert} from '@material-ui/icons';
import { SearchOutlined } from '@material-ui/icons';
import React from 'react'
import "./Chat.css";
import  { InsertEmoticon }  from '@material-ui/icons';
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
    return (
        <div className="chat">
            <div className = 'chat_header'>
                <Avatar />
                <div className  = 'chat_headerInfo'>
                    <h3>Room name</h3>
                    <p>Last seen at....</p>
                </div>

                <div className = 'chat_headerRight'>
                    <IconButton>
                    <SearchOutlined />
                    </IconButton>

                    

                    <IconButton>
                    <MoreVert />
                    </IconButton>


                    
                    
                        
                            
                </div>  
            </div>

            <div className = 'chat_body'>
                <p className = 'chat_message'>
                    <span className = 'chat_name'>Akshit</span>
                    This is a message
                    <spam className = 'chat_timestamp'>{
                        new Date().toUTCString()}
                    </spam>
                </p>

                <p className = 'chat_message chat_reciever'>
                    <span className = 'chat_name'>Akshit</span>
                    This is a message
                    <spam className = 'chat_timestamp'>{
                        new Date().toUTCString()}
                    </spam>
                </p>

                
            </div>
            <div className = 'chat_footer'>
                <IconButton>
                <InsertEmoticon />
                </IconButton>

                <IconButton>
                        <AttachFile />
                    </IconButton>
                <form>
                    <input 
                        placeholder = "Type a message" 
                        type = "text" />     
                    <button  type = 'submit'>Send a message
                    </button>  
                </form>
                <IconButton>
                     <MicIcon />
                </IconButton>
                
                </div>
        </div>
    )
}

export default Chat
