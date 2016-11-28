import React, {Component, PropTypes} from 'react';
import {Link} from '../router'

const defaultProps = {
    dataList: [],
    isWrapping: false
};

const propTypes = {
    dataList: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.shape({
                className: PropTypes.string,
                iconText: PropTypes.string
            }),
            LineContent: PropTypes.any.isRequired,
            actions: PropTypes.arrayOf( 
                PropTypes.shape({
                    action: PropTypes.func.isRequired,
                    iconText: PropTypes.string.isRequired
                })
            )
        })
    ).isRequired,
    isWrapping: PropTypes.bool.isRequired,
    nbItems: PropTypes.number
}; 

class List extends Component {

    render() {
        return (
            <ul 
                className='mdl-list' 
                data-dd={(this.props.isWrapping ? 'empilable' : '') + ' ' + (this.props.nbItems ? 'nb-items-' + this.props.nbItems : '')}
            >
            {
                /*this.props.dataList.map(({avatar, name, LineContent, actions, onClick}, index) => {
                    return (
                    <li className="mdl-chip mdl-chip--contact mdl-chip--deletable">
                        <i className={`${avatar.className || 'material-icons'} .mdl-chip__contact`}>{avatar.iconText}</i>
                        <span className="mdl-chip__text">{LineContent}</span>
                        {actions && actions.map(({iconText, action}, idxAction) => (
                                <button key={idxAction} className='mdl-chip__action mdl-button mdl-js-button mdl-button--icon mdl-button--colored' onClick={action}>
                                    <i className='material-icons'>{iconText}</i>
                                </button>
                       ))}
                    </li>
                    )
                })*/
                this.props.dataList.map(({avatar, name, LineContent, actions, onClick, selected}, index) => {
                    return (
                          <li key={index} className='mdl-list__item'>
                            <span className='mdl-list__item-primary-content mdl-button--raised' data-dd={`list-grey-elt ${selected ? 'selected' : ''}`} onClick={() => onClick()}>
                                {avatar && 
                                    <i className={`${avatar.className || 'material-icons'} mdl-list__item-avatar`}>{avatar.iconText}</i>
                                }
                                <span>
                                    {LineContent}
                                </span>
                            </span>
                            <span className='mdl-list__item-secondary-content'>
                            {actions && actions.map(({iconText, action}, idxAction) => (

                                <button key={idxAction} className='mdl-list__item-secondary-action mdl-button mdl-js-button mdl-button--icon mdl-button--colored' onClick={action}>
                                    <i className='material-icons'>{iconText}</i>
                                </button>
                            ))}
                            </span>
                        </li>
                    );
                })
            }
            </ul>
        );
    }
}

List.displayName = 'List';
List.defaultProps = defaultProps;
List.propTypes = propTypes;

export default List;
