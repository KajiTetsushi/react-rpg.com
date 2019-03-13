import React, { Component } from 'react';
import { connect }          from 'react-redux';

import Button          from '../../components/button';
import toggleInventory from '../dialog-manager/actions/toggle-inventory';

import './styles.scss';

class Inventory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItemIndicator: false
    };
  }

  componentDidMount() {
    // Attach this to listen for the inventory visibility toggle key.
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // Clean up the event listener when this component unmounts.
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    const { inventory } = this.props.dialog;
    const { itemReceived, itemDropped } = this.props.snackbar;
    const lastItemReceived = prevProps.snackbar.itemReceived;
    const lastItemDropped = prevProps.snackbar.itemDropped;

    if(lastItemDropped !== itemDropped && itemDropped &&
      typeof itemDropped !== "undefined" && !inventory) {
      // see if any items were dropped
      this.setState({ newItemIndicator: true });
    }
    else if(lastItemReceived !== itemReceived && itemReceived &&
      typeof itemReceived !== "undefined" && !inventory) {
      // see if any items were received
      this.setState({ newItemIndicator: true });
    }
  }

  handleKeyDown(event) {
    event.preventDefault();
    switch(event.keyCode) {
      case 13:
      case 32:
        // Don't toggle the inventory visibility with any of these keys
        // because right now, they're being used for the attack order.
        break;
      case 73:
        // Don't trigger the inventory when the button is hidden.
        if (this.props.disabled) return; // Inventory hasn't been unmounted yet!
        // Don't trigger any of the other active keydown listeners.
        event.stopPropagation();
        // Toggle inventory with the "I" key.
        this._toggleInventory();
        break;
      default:
    }
  }

  _toggleInventory() {
    // We can turn off the indicator if the inventory is opened
    // If we are closing the inventory, it is okay to turn off
    // indicator since it should be false already
    this.setState({ newItemIndicator: false });
    this.props.toggleInventory();
  }

  render() {
    const { newItemIndicator } = this.state;
    const { disabled, dialog, sideMenu } = this.props;

    const open = dialog.inventory;

    return (
      <div className='flex-row inventory__container'>
        {
          !disabled &&
            <Button
              small={sideMenu}
              indicator={newItemIndicator}
              onClick={this._toggleInventory.bind(this)}
              onKeyDown={this.handleKeyDown.bind(this)}
              icon={open ?
                'times' : 'briefcase'}
              iconStyle={open ?
                {fontSize: 22} : {fontSize: sideMenu ? 20 : 23}}
              title={open ?
                'Close' : 'Inventory'}
              style={{
                width: open ? 135 : 195,
                transition: 'width .25s ease-out',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                backgroundColor: 'var(--dark-gray)'
              }} />
        }
      </div>
    );
  }
}

const mapStateToProps = ({ snackbar, dialog }) => ({ snackbar, dialog });

const actions = { toggleInventory };

export default connect(mapStateToProps, actions)(Inventory);
