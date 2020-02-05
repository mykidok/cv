import React from "react";
import Line from "./Line";
import Form from "./Form";
import {addLine, clearState} from "../actions/linesActions"
import { connect } from "react-redux";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { input:'', lines: [] };
    }

    render() {
        return (
            <div className="mb-5">
                { this.props.lines.map( line => <Line key={line.id} value={line.value} /> ) }
                <Form addLine={this.props.addLine} />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        input: state.input,
        lines: state.lines
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addLine: (line) => { dispatch(addLine(line))},
        clearState: () => { dispatch(clearState())}
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (App)