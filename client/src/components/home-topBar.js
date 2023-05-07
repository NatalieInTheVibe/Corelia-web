import Logo from "./Logo";
import HomeTopBarSearchBar from "./home-topBar-searchBar";
import styled from "styled-components";
import {useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

const TopBar = () => {
    const ref = useRef(null);
    let username="";
    let today = new Date();
    sessionStorage.getItem("email")?username=sessionStorage.getItem("email"):username="";
    function getSession(){
        if (sessionStorage.getItem("email")!==null){
            let username = "Welcome back, "+sessionStorage.getItem("email")+", today is "+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+".";

        }
    }
    const interval = setInterval(() => {
        getSession();
    }, 1000);

  return (
    <StyledTopBar>
      {/*<Logo className='bar-logo' width='2rem' />*/}
      {/*<span>*/}
      {/*  <a href='#'>Login</a>*/}
      {/*</span>*/}
      {/*<span className='search'>*/}
      {/*  <HomeTopBarSearchBar />*/}
      {/*</span>*/}

        <div>
            <input className='bar-icon profile' type="button" value={username}/>
        </div>

        {/*<Link*/}
        {/*    to={{pathname:'/about'}}*/}
        {/*><p>Stories</p></Link>*/}
      {/*<span className='top-links'>*/}
      {/*  <a href='#'>Become a composer</a>*/}
      {/*</span>*/}
      {/*<span className='top-links'>*/}
      {/*  <a href='#'>My listening list</a>*/}
      {/*</span>*/}
      {/*<span className='bar-icon'>*/}
      {/*  <a href='#'>*/}
      {/*    <i class='far fa-heart'></i>*/}
      {/*  </a>*/}
      {/*</span>*/}
     
      {/*<span className='bar-icon'>*/}
      {/*  <a href='#'>*/}
      {/*    <i class='far fa-bell'></i>*/}
      {/*  </a>*/}
      {/*</span>*/}
      {/*<span className='bar-icon profile'>*/}
      {/*  <a href='#'id="usernamePlaceholder" ref={ref}>SS</a>*/}
      {/*</span>*/}
        {/*<div id="usernamePlaceholder"></div>*/}
    </StyledTopBar>
  );
};

const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 1%;
  margin-bottom: 1%;
  height: 30px;
  width: 100%;
  border-bottom: 1px solid #ddd;

  div {
    position: absolute;
    margin:auto;
    width:100%;
    height: auto;
    margin-left: 30px;
  }
  span {
    flex: 3;
    color: #666;
    text-align: center;
  }

  .bar-icon {
    flex: 1;

    i {
      font-size: 1.2rem;
    }
  }
  .search {
    flex: 21;
  }

  .profile {
    font-weight: bold;
    margin-right: 1rem;
    a {
      background: #666;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      color: #fff;
      text-align: center;

      padding: 0.5rem;
    }
  }

  @media (max-width: 1650px) {
    span a {
      font-size: 0.8rem;
    }

    .search {
      flex: 16;
      width: 100%;
    }
  }
  @media (max-width: 1150px) {
    span a {
      font-size: 0.8rem;
    }

    .search {
      flex: 10;
      width: 100%;
    }
  }

  @media (max-width: 900px) {
    span a {
      font-size: 0.6rem;
    }

    .search {
      flex: 8;
    }

    span {
      flex: 3;
    }

    .bar-icon {
      flex: 2;

      i {
        font-size: 0.9rem;
      }
    }

    .profile {
      flex: 2;
      margin-right: 1rem;
    }
  }

  @media (max-width: 630px) {
    .search {
      flex: 0;
    }
  }

  @media (max-width: 490px) {
    .top-links {
      flex: 0;
      display: none;
    }
  }
`;

export default TopBar;
