import React,{ Component } from "react";
import PropTypes from 'prop-types';

import searchIcon from '../../images/search-icon.svg';

import { Wrapper, Content } from "./SearchBar.styles";

export class SearchBar extends Component {
  state = {value: ''};
  timeout = null;

  componentDidUpdate(_prevProps, prevState) {
    if (this.state.value !== prevState.value)  {
      const {setSearchTerm} = this.props;

      clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        const {value} = this.state;
        setSearchTerm(value);
      },500);
    }
  }
   
  render() {
    return(
      <Wrapper>
        <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(e) => this.setState({value: e.currentTarget.value})}
          value={this.state.value}
          />
        </Content>
      </Wrapper>
    );
  }
};

SearchBar.propTypes = {
  callback: PropTypes.func
};