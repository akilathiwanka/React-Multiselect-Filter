import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import './index-auto.css';

export default class MultiSelector extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText : '',
			selected : []
		}
	}

	_onSelect(id) {
		let selected = this.state.selected
		if(selected.indexOf(id) == -1){
			selected.push(id)
			this.setState({ selected : selected})
		}else{
			var i = selected.indexOf(id);
			if(i != -1) {
				selected.splice(i, 1);
				this.setState({ selected : selected})
			}
		}
	}

	_isSelected = (id) => {
		const selected = this.state.selected
		if(selected.indexOf(id) == -1){
			return false
		}
			return true
	}

	_onSearch = (text) => {
		this.setState({
			searchText : text.length > 0 ? text.toLowerCase() : ''
		})
	}

	filterByText(list, searchText) {
		return list.filter( (item) => item.first_name.toLowerCase().search(searchText.toLowerCase()) === 0 );
	}

	render() {
		const { list } = this.props;
		const filteredList = this.state.searchText ? this.filterByText(list, this.state.searchText) : list;

		return(
			<div>
				<h3>Add New Members</h3>
				<div style={{ position : 'relative'}} >
					<FontAwesome name="search" className="search-icon" />
					<input type="text" onChange = {(e) => { this._onSearch(e.target.value) }} placeholder = "Search Members" />
				</div>
				<ul className="user-list">
					{filteredList.map( (item, index) => (
							<li key = {index} style = {{position: 'relative'}} >
								<div className="user-image"><img src={item.image} alt=""/></div>
								<div className="user-data">
									<h4>{item.first_name}</h4>
									<span>{item.email}</span>
								</div>
								<label className="round-checkbox">
									<input type="checkbox" onChange = {this._onSelect.bind(this, item.id)} checked = { this._isSelected(item.id) ? true : false} />
									<span className="checkmark" ></span>
								</label>								
							</li>
						)
					)}
				</ul>
			</div>
		)
	}
}