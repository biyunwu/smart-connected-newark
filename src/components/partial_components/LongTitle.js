import React from "react";

const [breakpointExtraSmall, breakpointSmall, breakpointMiddle] = [320, 420, 768]

const getFontSize = (width) =>
    width > breakpointMiddle
        ? "4em"
        : width > breakpointSmall
        ? "3em"
        : width > breakpointExtraSmall
            ? "2em"
            : "1.5em"

class LongTitle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isBrowserReady: false,
            viewportWidth: 0,
        };
    }

    updateState = () => {
        this.setState(
            { isBrowserReady: typeof window !== 'undefined',
                viewportWidth: typeof window !== 'undefined' ? window.innerWidth : 0
            }
        )
    }

    componentDidMount() {
        this.updateState();
        window.addEventListener('resize', this.updateState);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateState);
    }

    render() {
        const { title, className }= this.props
        const {isBrowserReady, viewportWidth} = this.state
        return ( isBrowserReady &&
            <h1 className={className}
                style={{ fontSize: getFontSize(viewportWidth) }}
            >
                {title}
            </h1>
        )
    }
}

export default LongTitle;