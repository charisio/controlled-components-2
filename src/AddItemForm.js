import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddItemForm extends Component {
    state = {
      value: '',
    };

    handleChange = event => {
      this.setState({ value: event.target.value });
    };

	inputIsEmpty = () => {
    	return this.state.value === '';
  	};
	
	render() {
        const {addItem} = this.props;
		const {value} = this.state;
    	return(
        	<form onSubmit={(e) => addItem(e, value)}>
              <input
                type="text"
                placeholder="Enter New Item"
                value={value}
                onChange={this.handleChange}
              />
              <button disabled={this.inputIsEmpty()}>Add</button>
        	</form>
        );
    }
}

AddItemForm.propTypes = {
	addItem: PropTypes.func.isRequired,
};

export default AddItemForm;