import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat'

function Sidebar() {
    return (
            <div className="sidebar">
                <div className="sidebar__header">
                    <Avatar />
                    <div className="sidebar__headerRight">  
                        {/* <IconButton> */}
                            <DonutLargeIcon />
                        {/* </IconButton>  */}
                        <IconButton>
                            <ChatIcon />
                        </IconButton>                                       
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="sidebar__search__container">
                    <div className="sidebar__search">
                        <SearchOutlined />
                        <input type="text" placeholder='Search the chat' />
                        </div>
                    <div>
                        <SidebarChat />
                        <SidebarChat />
                    </div>     
                </div>
         
            </div>
)
}

export default Sidebar
