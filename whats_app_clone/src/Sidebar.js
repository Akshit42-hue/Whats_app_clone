import React from 'react';
import './sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className = "sidebar">
            <div className = 'sidebar_header'>
                <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"/>
                <div className = 'sidebar_headerRight'>
                    <IconButton>
                    <DonutLargeIcon />
                    </IconButton>

                 <IconButton>
                 <ChatIcon />
                 </IconButton>

                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>

                </div>
            </div>
            <div className = 'sidebar_search'>
                <div className = 'sidebar_searchContainer'>
                    <SearchOutlined />
                    <input placeholder = 'Search or start new chat ' type = 'text' />
                </div>
            </div>
            <div className = 'sidebar_chats'>
               <SidebarChat />
               <SidebarChat />
               <SidebarChat />
            </div>
        </div>
    );

}

export default Sidebar
