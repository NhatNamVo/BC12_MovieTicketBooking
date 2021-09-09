import React, { Component } from "react";

class MovieFilter extends Component {
    state = {
        sort: false,
        show: false,
        filter: {
            sort: 0,
            sortVal: 'Tất cả',
            show: 12,
        }
    }
    componentDidMount() {
        const filterBox = document.querySelector('.filter-tool');
        filterBox.addEventListener('click',this.handleClick);
    }
    handleClick = (event) => {
        event.preventDefault();
        const sortBox = event.target.closest('.item-sort');
        const showBox = event.target.closest('.item-show');
        const arrowBtnSort = event.target.closest('.filter-sort .fa-angle-down');
        const arrowBtnShow = event.target.closest('.filter-show .fa-angle-down')
        const itemBox = event.target.closest('.dropbox-item');
        if(!!sortBox||!!arrowBtnSort){
            this.setState({sort:!this.state.sort,show:false});
        }
        if(!!showBox||!!arrowBtnShow){
            this.setState({sort:false,show:!this.state.show});
        }
        if(itemBox){
            let filterValue = {...this.state.filter};
            const name = event.target.attributes[0].value;
            const value = parseInt(event.target.attributes[1].value);
            let sortValue = '';
            if(name == 'sort'){
                switch(value){
                    case 0:
                        sortValue = 'Tất cả';
                        break;
                    case 1:
                        sortValue = 'Phim đang chiếu';
                        break;
                    case 2:
                        sortValue = 'Phim hot';
                        break;
                    case 3:
                        sortValue = 'Phim sắp chiếu';
                        break;
                    default:
                        sortValue = 'Tất cả';
                        break;
                }
            }
            if(sortValue === ''){
                filterValue = {...filterValue, [name]:value};
            }
            else{
                filterValue = {...filterValue, [name]:value, sortVal: sortValue};
            }
            
            this.setState({
                sort:false,
                show: false,
                filter: filterValue,
            })
        }
    }
  render() {
    return (
      <>
        <div className="Movie-filter">
          <h4>FIND YOUR TICKETS NOW</h4>
          <div className="filter-tool">
            <div className={"filter-item filter-sort " + (this.state.sort?"active":"")}>
              <p>Sort By:</p>
              <span className="item-sort">{this.state.filter.sortVal}</span> 
              <i class="fa fa-angle-down"></i>
              <div className="item-dropbox">
                <ul className="dropbox-list">
                  <li name='sort' value={0} className={"dropbox-item " + ((this.state.filter.sort===0)?"active":"")}>Tất cả</li>
                  <li name='sort' value={1} className={"dropbox-item " + ((this.state.filter.sort===1)?"active":"")}>Phim đang chiếu</li>
                  <li name='sort' value={2} className={"dropbox-item " + ((this.state.filter.sort===2)?"active":"")}>Phim hot</li>
                  <li name='sort' value={3} className={"dropbox-item " + ((this.state.filter.sort===3)?"active":"")}>Phim sắp chiếu</li>
                </ul>
              </div>
            </div>
            <div className={"filter-item filter-show " + (this.state.show?"active":"")}>
              <p>Show:</p>
              <span className="item-show">{this.state.filter.show}</span>
              <i class="fa fa-angle-down"></i>
              <div className="item-dropbox">
                <ul className="dropbox-list">
                  <li name='show' value={12} className={"dropbox-item " + ((this.state.filter.show===12)?"active":"")}>12</li>
                  <li name='show' value={16} className={"dropbox-item " + ((this.state.filter.show===16)?"active":"")}>16</li>
                  <li name='show' value={20} className={"dropbox-item " + ((this.state.filter.show===20)?"active":"")}>20</li>
                  <li name='show' value={24} className={"dropbox-item " + ((this.state.filter.show===24)?"active":"")}>24</li>
                </ul>
              </div>
            </div>
            <div className="filter-item">
              <div className="find-item">
                <input type="text" name="find" placeholder="Nhập tên phim"/>
                <i class="fa fa-search"></i>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MovieFilter;
