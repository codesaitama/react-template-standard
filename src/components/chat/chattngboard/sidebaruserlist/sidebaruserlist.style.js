import styled from 'styled-components';

const ChattingBoardWrapper = styled.div`
.chat-user-sidebar{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 260px;
    display: block;
    z-index: 1;
    color: #fff;
    font-weight: 200;
    background-size: cover;
    overflow: hidden;
    background-position: center center;
    transition: all 0.5s;
    box-shadow: 0 0.46875rem 2.1875rem rgba(0,0,0,0.03), 0 0.9375rem 1.40625rem rgba(0,0,0,0.03), 0 0.25rem 0.53125rem rgba(0,0,0,0.05), 0 0.125rem 0.1875rem rgba(0,0,0,0.03);

    .user-list-block {
        transform: ${props => props.mini ?  'translateX(-500px)' :  'translatex(0px)'};
        transition: all 0.5s;
    }

    .chat-sidebar-header {
        color: black;
        font-weight: 600;
        text-align: center;
        padding-top: 15px;
        padding-bottom: 15px;
        transform: ${props => props.mini ?  'translateX(-500px)' :  'translatex(0px)'};
        transition: transform 0.5s;
    }

    .chat-user-sidebar-wrapper{
        position: relative;
        overflow: hidden;
        width: 100%;
        z-index: 3;
        background: white;
    }

    .chat-close-drawer-icon {
        position: absolute;
        right: 15px;
        top: 13px;
        font-size: 20px;
        z-index: 5
        cursor: pointer;
        color: black
    }
}

.chat-user-sidebar,
body > .navbar-collapse{
    &:after,
    &:before{
        display: block;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 2;
    }
}


.chat-user-sidebar, .chat-user-sidebar-wrapper{
    -webkit-transition-property: top,bottom,width;
    -o-transition-property: top,bottom,width;
    transition-property: top,bottom,width;
    -webkit-transition-duration: .0.5s,.0.5s,.35s;
    -o-transition-duration: .0.5s,.0.5s,.35s;
    transition-duration: .0.5s,.0.5s,.35s;
    -webkit-transition-timing-function: linear,linear,ease;
    -o-transition-timing-function: linear,linear,ease;
    transition-timing-function: linear,linear,ease;
    -webkit-overflow-scrolling: touch;
}
`;

export default ChattingBoardWrapper