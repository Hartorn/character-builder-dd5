import React from 'react';

const Card = ({title, media, children, actions}) => {
    return (
        <div className="mdl-card">
            {title && <div className="mdl-card__title">
                {title}
            </div>}
            {media && <div className="mdl-card__media">
                {media}
            </div>}
            {children && <div className="mdl-card__supporting-text">
                {children}
            </div>}
            {actions && <div className="mdl-card__actions">
                {actions}
            </div>}
        </div>
    );
};
Card.displayName = 'Card';
Card.propsTypes = {

};
Card.defaultProps = {

};

export default Card;
