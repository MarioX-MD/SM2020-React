import React from "react";
import PropTypes from 'prop-types'          //L08

class SearchForm extends React.Component {    //L10
    constructor(props) {
    super(props);
    this.state = {
      searchText: ""  //zachowanie wartości wejściowych
    };
  }

  updateSearchInput(e) {          //zmiana wartości danych na kliencie
    const val = e.target.value;   //wartość jest przechowywana w obiekcie zdarzenia jako e.target.value
    this.setState({
      searchText: val
    });
  }

  submitForm(event) {             //wywołanie funkcji, która śledzi szukany tekst w stanie
    event.preventDefault();
    this.props.onSubmit(this.state.searchText);
  }

  render() {
    const { searchVisible } = this.props;
    let searchClasses = ["searchInput"];
    if (searchVisible) {
      searchClasses.push("active");
    }
                    // VV przesłanie formularza za pomocą wniosku onSumbit VV
    return (
      <form onSubmit={this.submitForm.bind(this)}>
        <input
          type="search"
          className={searchClasses.join(" ")}
          onChange={this.updateSearchInput.bind(this)} //gdy użytkownik wpisze w polu wyszukiwania, zostanie przechwycona wartość
          placeholder="Search ..."
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,  //definicja upewniająca że onSumbit jest zdefiniowany
  searchVisible: PropTypes.bool         //definicja wartości prop do wyświetlenia lub ukrycia paska wyszukiwania
};

SearchForm.defaultProps = {
  onSubmit: () => {},
  searchVisible: false    //domyślnie ukryta definicja searchVisible - fałszywa
};


class Header extends React.Component {

  constructor(props) {                  //L10
    super(props);
                                
    this.state = {                      //L10
      searchVisible: false
    }
  }

  showSearch() {                        //L10
    this.setState({
      searchVisible: !this.state.searchVisible    //użytkownik może pokazać/ukryć pole
    })
  }

  render() {
    let searchInputClasses = ["searchInput"]; //L10

    if (this.state.searchVisible) {           //L10
      searchInputClasses.push("active");      //dodanie komunikatu gdy jest pole wyszukiwania aktywne    
    }

    return (
      <div className="header">
        <div className="menuIcon">
          <div className="dashTop"></div>
          <div className="dashBottom"></div>
          <div className="circle"></div> 
        </div>                                                        
        <span className="title">{this.props.title}</span>

        <SearchForm searchVisible={this.state.searchVisible} /*przekazanie wartości search Visible z header do SearchForm*/ 
        onSubmit={this.props.onSearch} /*przekazanie wartości onSumbit z SearchForm do header*/ />   
                                                                                            
        <input
          type="text"
          className={searchInputClasses.join(' ')}                //L10
          placeholder="Search ..." />

        <div
          onClick={this.showSearch.bind(this)}                    //L10 - po kliknięciu pokazuje showSearchBara
          className="fa fa-search searchIcon"></div>
      </div>
    );
  }
}

Header.propTypes = {            //L10
  onSearch: PropTypes.func
}

Header.propTypes = {          //L08
  title: PropTypes.string
}

Header.defaultProps = {       //L08
  title: 'Github activity'
}



export default Header;
