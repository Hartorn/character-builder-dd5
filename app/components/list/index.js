import React, {Component, PropTypes} from 'react';
import {Link} from '../router'

const defaultProps = {
    dataList: []
};

const propTypes = {
    dataList: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.shape({
                className: PropTypes.string,
                iconText: PropTypes.string
            }),
            name: PropTypes.string.isRequired,
            LineContent: PropTypes.any.isRequired,
            actions: PropTypes.arrayOf(
                PropTypes.shape({
                    action: PropTypes.func.isRequired,
                    iconText: PropTypes.string.isRequired
                })
            )
        })
    ).isRequired
};

class List extends Component {

    render() {
        return (
            <ul className='mdl-list'>
            {
                this.props.dataList.map(({avatar, name, LineContent, actions}, index) => {
                    return (
                          <li key={index} className='mdl-list__item mdl-list__item--three-line'>
                            <span className='mdl-list__item-primary-content'>
                                {avatar && 
                                    <i className={`${avatar.className || 'material-icons'} mdl-list__item-avatar`}>{avatar.iconText}</i>
                                }
                                <span>{name}</span>
                                <span className='mdl-list__item-text-body'>
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
