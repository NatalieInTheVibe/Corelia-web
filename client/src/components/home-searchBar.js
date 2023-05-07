
import Logo from "./Logo";
import HomeTopBarSearchBar from "./home-topBar-searchBar";
import styled from "styled-components";

const TopBar = () => {
  return (
    <div>
        <HomeTopBarSearchBar />
    </div>

  );
};

const StyledTopBar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

  height: 30rem;
//   width: 100%;
//   border-bottom: 1px solid #ddd;

//   span {
//     flex: 3;
//     color: #666;
//     text-align: center;
//   }

//   .bar-icon {
//     flex: 1;

//     i {
//       font-size: 1.2rem;
//     }
//   }
//   .search {
//     flex: 21;
//   }

//   .profile {
//     font-weight: bold;
//     margin-right: 1rem;
//     a {
//       background: #666;
//       border-radius: 50%;
//       width: 2rem;
//       height: 2rem;
//       color: #fff;
//       text-align: center;

//       padding: 0.5rem;
//     }
//   }

//   @media (max-width: 1650px) {
//     span a {
//       font-size: 0.8rem;
//     }

//     .search {
//       flex: 16;
//       width: 100%;
//     }
//   }
//   @media (max-width: 1150px) {
//     span a {
//       font-size: 0.8rem;
//     }

//     .search {
//       flex: 10;
//       width: 100%;
//     }
//   }

//   @media (max-width: 900px) {
//     span a {
//       font-size: 0.6rem;
//     }

//     .search {
//       flex: 8;
//     }

//     span {
//       flex: 3;
//     }

//     .bar-icon {
//       flex: 2;

//       i {
//         font-size: 0.9rem;
//       }
//     }

//     .profile {
//       flex: 2;
//       margin-right: 1rem;
//     }
//   }

//   @media (max-width: 630px) {
//     .search {
//       flex: 0;
//     }
//   }

//   @media (max-width: 490px) {
//     .top-links {
//       flex: 0;
//       display: none;
//     }
//   }
`;

export default TopBar;
