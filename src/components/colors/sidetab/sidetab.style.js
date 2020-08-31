import styled from 'styled-components';

const SideTabWrapper = styled.div`
    .color-sidebar {
        background-color: white;
        box-shadow: 0 6px 10px -4px rgba(0,0,0,.15);

        .tab-name {
            padding: 10px;
            box-shadow: 0 6px 10px -4px rgba(0,0,0,.15);
            &:hover {
                background-color: #f5f5f5;
                cursor: pointer;
            }

            .color {
                background: red;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                margin: 0 auto;            
            }

            .color-name {

            }
        }
    }
`;

export default SideTabWrapper;