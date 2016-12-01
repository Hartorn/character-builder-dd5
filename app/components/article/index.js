import React, { Component } from 'react';
import { translate } from 'focus-core/translation';

class Article extends Component {
    state = {
        isVisible: false
    }

    render() {
        const {title, children} = this.props;
        return (
            <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                <div className="mdl-card mdl-cell mdl-cell--12-col">
                    <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
                        <h4 className="mdl-cell mdl-cell--12-col">{translate(title)}</h4>
                        {children}
                    </div>
                </div>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" onClick={() => this.setState({ isVisible: true })}>
                    <i className="material-icons">more_vert</i>
                </button>
            </section >
        );
    }
}

Article.displayName = 'Article';
Article.propTypes = {

};
Article.defaultProps = {

};

export default Article;
